---
name: Horus
slug: horus
colorway: horus
status: in-development
statusLabel: in development · early access
tagline: See lookalike domains of your brand the moment their certificate is issued, before they go live.
problem:
  title: Phishing starts with a certificate.
  paragraphs:
    - A lookalike domain needs a TLS certificate before it can host a convincing login page. Every public certificate is written to Certificate Transparency logs, often hours or days before the site goes live.
    - Horus reads those logs as they are written, so you see the domain while it is still being set up, not after your customers have been sent to it.
steps:
  - code: 01 · CERT_ISSUED
    title: Certificate seen
    text: A new certificate matching one of your brands appears in a CT log and is scored as a candidate.
  - code: 02 · DNS_LIVE
    title: Domain resolves
    text: Horus keeps checking until the domain starts resolving in DNS.
  - code: 03 · HTTP_LIVE
    title: Site answers
    text: The domain starts serving a web page.
  - code: 04 · CONTENT_MATCH
    title: Impersonation confirmed
    text: The page content matches your brand. You get an alert with the evidence.
features:
  - label: sources
    title: Five CT log operators
    text: Google, Cloudflare, Sectigo, DigiCert and Let's Encrypt.
  - label: detection
    title: Typosquats, homoglyphs, combosquats
    text: Swapped letters, look-alike characters and brand names glued to other words.
  - label: alert
    title: Telegram, email, webhook
    text: Send alerts where your team already works.
accessSubject: Horus early access
earlyAccess:
  includes:
    - "Monitoring across the five CT log operators: Google, Cloudflare, Sectigo, DigiCert and Let's Encrypt."
    - "Typosquat, homoglyph and combosquat scoring of every new domain against your brands."
    - "Tracking through four states: CERT_ISSUED → DNS_LIVE → HTTP_LIVE → CONTENT_MATCH."
    - "Alerts by Telegram, email or webhook."
  audience: "Security, IT and brand-protection teams protecting a company's brand."
  opens: "Access opens in waves on a fixed schedule. Each wave takes a small set of brands, so every deployment gets attention."
  whatToSend: "In the email, say which brands or domains to protect and the alert channel you prefer: Telegram, email or webhook."
---

Horus is in development. Tell us which brands you want to protect and we will reach out when your spot opens.
