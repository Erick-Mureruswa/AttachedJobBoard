import { Nav }            from '@/components/Nav';
import { Hero }           from '@/components/Hero';
import { Services }       from '@/components/Services';
import { Process }        from '@/components/Process';
import { TechStack }      from '@/components/TechStack';
import { Contact }        from '@/components/Contact';
import { Footer }         from '@/components/Footer';
import { GSAPAnimations } from '@/components/GSAPAnimations';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
      <GSAPAnimations />
    </>
  );
}
