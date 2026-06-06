'use client';

import { useEffect, useRef } from 'react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Parallax scroll handler
  useEffect(() => {
    const bg    = document.getElementById('parallaxBg');
    const rule  = document.getElementById('parallaxRule');
    const codeA = document.getElementById('parallaxCodeA');
    const codeB = document.getElementById('parallaxCodeB');
    const codeC = document.getElementById('parallaxCodeC');
    const hero  = document.getElementById('hero');

    let tick = false;

    const rafParallax = () => {
      const s = window.scrollY;
      const heroH = hero?.offsetHeight ?? window.innerHeight;
      if (s < heroH * 1.6) {
        if (bg)    bg.style.transform    = `translateY(${s * 0.18}px)`;
        if (rule)  rule.style.transform  = `translateY(${s * 0.08}px)`;
        if (codeA) codeA.style.transform = `translateY(${s * 0.38}px)`;
        if (codeB) codeB.style.transform = `translateY(${s * 0.28}px)`;
        if (codeC) codeC.style.transform = `translateY(${s * 0.46}px)`;
      }
    };

    const onScroll = () => {
      if (!tick) {
        requestAnimationFrame(() => { rafParallax(); tick = false; });
        tick = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafParallax();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Three.js hero background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;

    let animFrameId = 0;
    let disposed = false;

    const initThree = async () => {
      const THREE = await import('three');
      if (disposed) return;

      // Resolve accent colour from CSS token
      const probe = document.createElement('div');
      probe.style.cssText = 'color:oklch(60% 0.22 25);position:absolute;visibility:hidden';
      document.body.appendChild(probe);
      const computed = getComputedStyle(probe).color;
      document.body.removeChild(probe);
      const rgb = computed.match(/[\d.]+/g) ?? ['232', '90', '40'];
      const accentR = parseInt(rgb[0], 10) / 255;
      const accentG = parseInt(rgb[1], 10) / 255;
      const accentB = parseInt(rgb[2], 10) / 255;
      const ACCENT_HEX =
        (Math.round(accentR * 255) << 16) |
        (Math.round(accentG * 255) << 8)  |
        Math.round(accentB * 255);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
      camera.position.set(0, 0, 26);

      const N = 240;
      const BOUND_X = 26, BOUND_Y = 16, BOUND_Z = 18;
      const CONNECT_DIST = 6.2;
      const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

      const nodePos   = new Float32Array(N * 3);
      const nodeVel   = new Float32Array(N * 3);
      const nodePhase = new Float32Array(N);

      for (let i = 0; i < N; i++) {
        nodePos[i * 3]     = (Math.random() - 0.5) * BOUND_X * 2;
        nodePos[i * 3 + 1] = (Math.random() - 0.5) * BOUND_Y * 2;
        nodePos[i * 3 + 2] = (Math.random() - 0.5) * BOUND_Z * 2;
        nodeVel[i * 3]     = (Math.random() - 0.5) * 0.0045;
        nodeVel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
        nodeVel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
        nodePhase[i]        = Math.random() * Math.PI * 2;
      }

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(nodePos.slice(), 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.075, color: 0xf0f0ee,
        transparent: true, opacity: 0.42,
        sizeAttenuation: true, depthWrite: false,
      });
      const mainPoints = new THREE.Points(pGeo, pMat);
      scene.add(mainPoints);

      const accentIdx: number[] = [];
      for (let j = 0; j < N; j++) {
        if (Math.random() < 0.18) accentIdx.push(j);
      }
      const aLen    = accentIdx.length;
      const aPosBuf = new Float32Array(aLen * 3);
      for (let k = 0; k < aLen; k++) {
        const si = accentIdx[k];
        aPosBuf[k * 3]     = nodePos[si * 3];
        aPosBuf[k * 3 + 1] = nodePos[si * 3 + 1];
        aPosBuf[k * 3 + 2] = nodePos[si * 3 + 2];
      }
      const aGeo = new THREE.BufferGeometry();
      aGeo.setAttribute('position', new THREE.BufferAttribute(aPosBuf, 3));
      const aMat = new THREE.PointsMaterial({
        size: 0.16, color: ACCENT_HEX,
        transparent: true, opacity: 0.88,
        sizeAttenuation: true, depthWrite: false,
      });
      scene.add(new THREE.Points(aGeo, aMat));

      const MAX_SEGS  = 700;
      const linePosArr = new Float32Array(MAX_SEGS * 6);
      const lineColArr = new Float32Array(MAX_SEGS * 6);
      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute('position', new THREE.BufferAttribute(linePosArr, 3));
      lGeo.setAttribute('color',    new THREE.BufferAttribute(lineColArr, 3));
      lGeo.setDrawRange(0, 0);
      const lMat = new THREE.LineBasicMaterial({
        transparent: true, opacity: 0.22,
        vertexColors: true, depthWrite: false,
      });
      scene.add(new THREE.LineSegments(lGeo, lMat));

      let lFrame = 0;
      const rebuildLines = (p: Float32Array) => {
        if (++lFrame % 3 !== 0) return;
        let seg = 0;
        for (let a = 0; a < N && seg < MAX_SEGS; a++) {
          for (let b = a + 1; b < N && seg < MAX_SEGS; b++) {
            const dx = p[a*3] - p[b*3];
            const dy = p[a*3+1] - p[b*3+1];
            const dz = p[a*3+2] - p[b*3+2];
            const dSq = dx*dx + dy*dy + dz*dz;
            if (dSq < CONNECT_DIST_SQ) {
              const alpha  = (1 - dSq / CONNECT_DIST_SQ) * 0.85;
              const isAcc  = Math.random() < 0.1;
              const cr = isAcc ? accentR * alpha : 0.93 * alpha;
              const cg = isAcc ? accentG * alpha : 0.93 * alpha;
              const cb = isAcc ? accentB * alpha : 0.93 * alpha;
              const base = seg * 6;
              linePosArr[base]   = p[a*3];   linePosArr[base+1] = p[a*3+1]; linePosArr[base+2] = p[a*3+2];
              linePosArr[base+3] = p[b*3];   linePosArr[base+4] = p[b*3+1]; linePosArr[base+5] = p[b*3+2];
              lineColArr[base]   = cr; lineColArr[base+1] = cg; lineColArr[base+2] = cb;
              lineColArr[base+3] = cr; lineColArr[base+4] = cg; lineColArr[base+5] = cb;
              seg++;
            }
          }
        }
        lGeo.setDrawRange(0, seg * 2);
        lGeo.attributes.position.needsUpdate = true;
        lGeo.attributes.color.needsUpdate    = true;
      };

      let mouseTargetX = 0, mouseTargetY = 0, camTargetZ = 26;
      const heroEl = document.getElementById('hero');

      const onMouseMove = (e: MouseEvent) => {
        mouseTargetX = ((e.clientX / window.innerWidth)  - 0.5) * 6;
        mouseTargetY = ((e.clientY / window.innerHeight) - 0.5) * -3.5;
      };
      const onScrollCam = () => {
        const heroH = heroEl?.offsetHeight ?? window.innerHeight;
        const t = Math.min(window.scrollY / heroH, 1);
        camTargetZ = 26 - t * 12;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('scroll', onScrollCam, { passive: true });

      const onResize = () => {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      onResize();

      let lastTs = 0;
      const frame = (ts: number) => {
        animFrameId = requestAnimationFrame(frame);
        const dt = Math.min((ts - lastTs) / 1000, 0.05);
        lastTs = ts;
        void dt;

        const mainBuf = pGeo.attributes.position.array as Float32Array;
        const accBuf  = aGeo.attributes.position.array as Float32Array;

        for (let n = 0; n < N; n++) {
          const nx = n*3, ny = n*3+1, nz = n*3+2;
          mainBuf[nx] += nodeVel[nx];
          mainBuf[ny] += nodeVel[ny] + Math.sin(ts * 0.00028 + nodePhase[n]) * 0.0014;
          mainBuf[nz] += nodeVel[nz];
          if (mainBuf[nx] >  BOUND_X) mainBuf[nx] = -BOUND_X;
          if (mainBuf[nx] < -BOUND_X) mainBuf[nx] =  BOUND_X;
          if (mainBuf[ny] >  BOUND_Y) mainBuf[ny] = -BOUND_Y;
          if (mainBuf[ny] < -BOUND_Y) mainBuf[ny] =  BOUND_Y;
          if (mainBuf[nz] >  BOUND_Z) mainBuf[nz] = -BOUND_Z;
          if (mainBuf[nz] < -BOUND_Z) mainBuf[nz] =  BOUND_Z;
        }
        pGeo.attributes.position.needsUpdate = true;

        for (let ai = 0; ai < aLen; ai++) {
          const src = accentIdx[ai];
          accBuf[ai*3]   = mainBuf[src*3];
          accBuf[ai*3+1] = mainBuf[src*3+1];
          accBuf[ai*3+2] = mainBuf[src*3+2];
        }
        aGeo.attributes.position.needsUpdate = true;

        rebuildLines(mainBuf);

        camera.position.x += (mouseTargetX - camera.position.x) * 0.045;
        camera.position.y += (mouseTargetY - camera.position.y) * 0.045;
        camera.position.z += (camTargetZ   - camera.position.z) * 0.055;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animFrameId = requestAnimationFrame(frame);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => { canvas.classList.add('ready'); });
      });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScrollCam);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
      };
    };

    let cleanup: (() => void) | undefined;
    initThree().then((fn) => { cleanup = fn; });

    return () => {
      disposed = true;
      cancelAnimationFrame(animFrameId);
      cleanup?.();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} id="hero-3d" aria-hidden="true" />
      <div className="hero-grid" />
      <div className="hero-ghost" id="parallaxBg">BUILD</div>
      <div className="hero-rule"  id="parallaxRule" />
      <div className="hero-code hero-code-a" id="parallaxCodeA">{`const pipeline =
  await orchestrate([
    ingest, transform,
    validate, dispatch
  ]);`}</div>
      <div className="hero-code hero-code-b" id="parallaxCodeB">{`POST /api/v2/run
→ 200 OK  138ms
→ nodes: 14 triggered
→ status: complete`}</div>
      <div className="hero-code hero-code-c" id="parallaxCodeC">{`if (build.ready) {
  deploy(prod);
  // zero downtime
}`}</div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-layout">
            <div>
              <div className="hero-eyebrow">
                <span className="label">Zimbabwe-based, world-class</span>
              </div>
              <h1 className="hero-headline">
                We build<br />
                <em>systems</em><br />
                that run<br />
                themselves.
              </h1>
              <p className="hero-sub">
                Custom software. AI-native automations.<br />
                Engineered from first principles.<br />
                Delivered on schedule.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-fill">Start a Project →</a>
                <a href="#services" className="btn btn-ghost">See Our Work ↓</a>
              </div>
            </div>
            <div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-n">48<em>h</em></div>
                  <span className="label">avg. time to first deploy</span>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-n">3<em>×</em></div>
                  <span className="label">faster than in-house builds</span>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-n">100<em>%</em></div>
                  <span className="label">projects shipped on deadline</span>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-n">0<em>.</em></div>
                  <span className="label">vendor lock-in. ever.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-bar" />
        <span className="label" style={{ fontSize: '9px' }}>SCROLL</span>
      </div>
    </section>
  );
}
