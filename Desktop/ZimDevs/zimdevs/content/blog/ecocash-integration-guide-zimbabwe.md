---
title: "EcoCash Integration: A Technical Guide for Zimbabwe Web Developers"
slug: ecocash-integration-guide-zimbabwe
description: "How to integrate EcoCash payments into a web application in Zimbabwe. API overview, merchant setup, USSD push flow, webhooks, and common pitfalls to avoid."
date: "2026-06-02"
category: "Technical"
readTime: "10 min read"
featured: false
---

EcoCash is Zimbabwe's dominant mobile payment network with over 8 million active users. If your web application handles money in Zimbabwe and does not support EcoCash, you are excluding a significant fraction of your potential customer base. This guide covers how to integrate EcoCash correctly.

## Prerequisites and merchant setup

Before you write a line of code, you need a merchant account. EcoCash merchant accounts are issued by Econet Wireless Zimbabwe. The process:

1. Register a business with ZIMRA and obtain a Business Partner Number (BPN)
2. Apply for an EcoCash merchant account through your nearest Econet business centre
3. Complete KYC documentation (certificate of incorporation, directors' IDs, proof of address)
4. Receive your merchant credentials: Merchant ID, PIN, and API access details

Turnaround on merchant applications is typically 3–10 business days. Plan for this in your project timeline.

## How EcoCash payments work technically

EcoCash payments on the web use a USSD push flow, not a card-style redirect. The sequence is:

1. Customer enters their EcoCash number on your website
2. Your backend calls the EcoCash Merchant API to initiate a payment request
3. EcoCash sends a USSD prompt to the customer's phone asking them to confirm the payment
4. Customer enters their PIN on their phone to confirm
5. EcoCash sends a webhook callback to your server confirming the transaction
6. Your backend updates the order status and confirms to the customer

This is fundamentally different from a card payment flow where the customer is redirected to a payment page. The customer stays on your website throughout; the confirmation happens on their phone.

## The API integration

EcoCash provides a REST API for merchant integrations. The core endpoints you will use:

**Initiate payment:**
```
POST /merchant/payments
Content-Type: application/json
Authorization: Basic <base64(merchantId:pin)>

{
  "amount": "25.00",
  "currency": "USD",
  "reference": "ORDER-2026-001",
  "customerPhone": "0771234567",
  "description": "Payment for Order #2026-001"
}
```

The response includes a `transactionId` that you use to track the payment. Store this alongside your order record immediately — before the webhook arrives.

**Check payment status:**
```
GET /merchant/payments/{transactionId}
Authorization: Basic <base64(merchantId:pin)>
```

Use this to poll for status if your webhook is delayed, or to verify a payment before fulfilling an order.

## Handling webhooks correctly

Webhooks are where most EcoCash integrations go wrong. Common mistakes:

**Always verify the payment via API before fulfilling.** Do not trust the webhook payload alone. When you receive a webhook claiming a payment succeeded, call the payment status endpoint to confirm before releasing goods or services. Webhook payloads can be spoofed; the status endpoint cannot.

**Return 200 immediately, process asynchronously.** EcoCash expects a 200 response from your webhook endpoint within a few seconds. If your order fulfilment logic (sending emails, updating inventory, etc.) takes longer than that, the webhook will time out and EcoCash may retry. Handle this with a job queue: acknowledge the webhook immediately, enqueue the fulfilment work, process it in the background.

**Handle duplicate webhook deliveries.** EcoCash retries webhooks if they do not receive a timely acknowledgment. Design your webhook handler to be idempotent — processing the same `transactionId` twice should not result in two orders being fulfilled.

**Log everything.** Store the raw webhook payload, the timestamp, and the result of your verification call. When a payment dispute arises — and it will — you need a complete audit trail.

```typescript
// Express webhook handler example
app.post('/webhooks/ecocash', async (req, res) => {
  // Acknowledge immediately
  res.status(200).json({ received: true });

  const { transactionId, status } = req.body;

  // Idempotency check
  const existing = await db.payment.findUnique({ where: { transactionId } });
  if (existing?.processed) return;

  // Verify via API before processing
  const verified = await ecocash.getPayment(transactionId);
  if (verified.status !== 'SUCCESSFUL') return;

  // Enqueue fulfilment
  await queue.add('fulfil-order', { transactionId, orderId: verified.reference });
});
```

## Currency and amount handling

EcoCash supports both USD and ZiG transactions. Key points:

**Always store amounts as integers in the smallest unit.** Store $25.00 as `2500` cents. Floating point arithmetic on monetary values causes rounding errors that compound over time. Use a library like `decimal.js` or PostgreSQL's `NUMERIC` type for monetary columns.

**Display currency clearly.** Zimbabwe has dual-currency context — make it unambiguous whether an amount is USD or ZiG at every step of the checkout flow.

**EcoCash minimum transaction amount** is typically $0.01 USD. Maximum per-transaction limits apply and vary by merchant tier — check your merchant agreement.

## Testing without a merchant account

EcoCash provides a sandbox environment for development. You can request sandbox credentials through your Econet business relationship manager or use a third-party aggregator (Paynow Zimbabwe provides a sandbox that includes EcoCash simulation) for early development.

For local development without sandbox access, mock the EcoCash API behind an interface:

```typescript
interface PaymentGateway {
  initiatePayment(params: PaymentParams): Promise<PaymentResult>;
  getPaymentStatus(transactionId: string): Promise<PaymentStatus>;
}

// Swap between real and mock implementations via environment variable
const gateway: PaymentGateway =
  process.env.PAYMENT_ENV === 'production'
    ? new EcoCashGateway(config)
    : new MockPaymentGateway();
```

This pattern lets your team develop the full checkout flow without real EcoCash credentials and makes switching to production a configuration change, not a code change.

## Using Paynow as an aggregator

Paynow Zimbabwe is a payment aggregator that provides a unified API for EcoCash, OneMoney, Zimswitch (ZIPIT), and Visa/Mastercard. If you need to support multiple payment methods — which most e-commerce sites in Zimbabwe should — integrating Paynow instead of EcoCash directly gives you all of them through a single integration.

The trade-off: Paynow charges a transaction fee on top of the EcoCash merchant fee, which adds cost per transaction. For high-volume applications, integrating EcoCash directly may be more cost-effective. For most web applications, the simplicity of a single integration is worth the margin.

## Common pitfalls

**Phone number formatting.** EcoCash numbers must be in the format `07XXXXXXXX` or `+2637XXXXXXXX`. Normalise all phone input before sending to the API — strip spaces, dashes, and international prefixes before reformatting.

**Timeout handling.** The USSD prompt expires after a set period (typically 2–3 minutes). If the customer does not confirm in time, the payment fails. Show a countdown in your UI and handle the timeout case gracefully — do not leave the customer on a loading screen indefinitely.

**Network reliability.** Zimbabwe's mobile network has intermittent coverage in some areas. Design your payment flow to recover from interrupted sessions — store the `transactionId` in the user's session and allow them to check payment status on return.

**Reconciliation.** EcoCash provides settlement reports. Build a reconciliation process that compares your order database against EcoCash settlement data at least daily. Discrepancies surface early when you check regularly; they become painful when you find them at month end.

If you are building a payment integration and hitting issues, [reach out to us](/#contact). This is work we do regularly for Zimbabwean clients.
