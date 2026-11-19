# FormSubmit `_webhook` Lines — PENDING (Worker not deployed yet)

**Status (2026-11-18 ~22:15 EST): intentionally omitted per coordinator
override.** The Cloudflare Worker that receives FormSubmit webhooks and sends
the auto-replies (forms-spec §6/§7) is NOT deployed yet — the parent deploys
it as follow-up work (needs Resend + Cloudflare accounts). No real Worker URL
exists, and the spec forbids shipping the literal placeholder `WORKER-URL`.

**What shipped instead:** all 5 UXK forms point at FormSubmit (`§5.1–§5.5`
+ `§5.10` applied verbatim, minus only the 4 `_webhook` lines). Notifications
to `urbanxklusives@gmail.com` work. No auto-reply is sent — which is
**exactly today's behaviour** (the forms worker verified `RESEND_API_KEY` was
never set on Netlify, so the 4 auto-replies are currently no-ops). No
regression. The `§5.11` fallback snippet was also NOT applied (it is only for
use if the §9.2 webhook-on-AJAX gate fails during staging tests).

## What to add once the Worker URL exists

Insert ONE line per form, immediately AFTER that form's
`<input type="hidden" name="_captcha" value="false">` line, replacing
`WORKER-URL` with the real URL
(`https://<name>.<subdomain>.workers.dev/?key=<shared-secret>`):

```html
    <input type="hidden" name="_webhook" value="WORKER-URL">
```

The 4 forms (indentation matches each form's other hidden inputs):

1. `uxk-50-submission` (`#submit`) — 4-space indent, after `_captcha`,
   before `_next` (`https://urbanxklusives.com/#submit`).
2. `uxk-story` (`#storyform`) — 4-space indent, after `_captcha`, before
   `_next` (`https://urbanxklusives.com/#storyform`).
3. `uxk-ad-inquiry` (`#adform`) — 6-space indent, after `_captcha`, before
   `_next` (`https://urbanxklusives.com/#adform`).
4. `uxk-newsletter` (`#newsletter`) — 6-space indent, after `_captcha`,
   before `_next` (`https://urbanxklusives.com/#newsletter`).

**Do NOT add a `_webhook` to `uxk-newsletter-strip`** — it has no auto-reply
template by design (forms-spec §6.5).

## After applying

1. Re-verify div balance (still 1307/1307 — hidden inputs add no divs).
2. Run the forms-spec §9 test battery on staging (notifications + auto-replies
   in the test inbox) before the DNS flip.
3. Delete this file in the same commit (working note, not site content).
