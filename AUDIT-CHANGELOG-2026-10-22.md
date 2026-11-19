# UXK SITE — BACK-END ORGANIZATION + FLAW-FIX PASS — 2026-10-22

Scope: `~/workspace/uxk-mockup/live/` source only (index.html, share pages, sitemap.xml).
STAGED ONLY — rides the pending batch deploy. Nothing deployed. v3/ untouched.
Trav's standing permission (2026-10-22): organize back end, fix flaws/captions/ordering.
Final div balance: **944 open / 944 close** (was 941/941; +3 balanced pairs added below). Dead anchors: 0.

## CHANGES MADE (17 edits)

### index.html
1. **Brand law ×11** — follow-block link text `👍 FACEBOOK — URBAN EXCLUSIVES` → `👍 FACEBOOK — URBANXKLUSIVES` (per Trav's 2026-10-19 ruling: UrbanXklusives everywhere, incl. Facebook link text). Hrefs unchanged (see Held #1).
2. **Raw Hype post, embed comment** — `+ Short Gg-syqtRZc4` note replaced: the 60s Short was removed by the uploader (found Oct 22); comment now records that and "do not re-add without Trav's word."
3. **Raw Hype post, body copy** — "The full freestyle and the 60-second feature are live on the UrbanXklusives YouTube right now." → "The full freestyle is live on the UrbanXklusives YouTube right now." (The 60s Short is gone; the claim was false.)
4. **Sense post, body copy (line ~1955)** — "and the newest drop "HALLELUJAH #FMEforever"" → "and the latest upload …" (Trav's correction: the track is ~2 years old; it is the latest upload found, not a new song.)
5. **Sense post, follow link label** — `"HALLELUJAH #FMEFOREVER" — NEWEST` → `— LATEST UPLOAD`.
6. **Sense post, follow block** — added verified Facebook link `facebook.com/senseakanewkid` ("👍 FACEBOOK — SENSE AKA NEWKID") after the Instagram link. Block was missing his FB entirely.
7. **Sense post, banner** — added `<div class="xklusive-banner">★ UXK XKLUSIVE ARTIST ★</div>` at post top, mirroring the Strength and Raw Hype posts (standing rule, 2026-10-20; Sense is a confirmed XKLUSIVE ARTIST and his post was the only exclusive's post without it).
8. **Covers row ("THE TAPES — EVERY COVER, ONE WALL")** — added the missing 4th tile: **KONNECT Vol. 3** (text-based "VOL. 3 / SUBMISSIONS OPEN" tile mirroring the existing Vol. 3 tile in the lineup section — no Vol. 3 cover art exists; links to #submit). Row is now Vol. 1 / Vol. 2 (Tampa) / Peach Drop / Vol. 3.

### posts/post-raw-hype-onda-stoop/index.html (share page — og paste-over, the big one)
9. `<title>` was **GUCCI MANE — "AGAINST ALL ODDS" — THE TRAP ORIGINATOR IS BACK** → `RAW HYPE DA MAJOR — "ONDA STOOP FREESTYLE" — WORLD PREMIERE — UrbanXklusives`.
10. `og:title` + `twitter:title` — same Gucci text → Raw Hype title.
11. `og:description` + `twitter:description` — Gucci's description ("Gucci Mane's Against All Odds sits at the top… audit the brand yourself.") → copy built from the actual post (world premiere, Vol. 2 feature, XKLUSIVE ARTIST). og:image/canonical/redirect were already correct (Raw Hype's own image + anchor) and are unchanged.

### posts/post-reconciliation-day-2026/index.html (share stub)
12. Dead redirect fixed ×3 (meta refresh, JS, fallback): `/#post-reconciliation-day-2026` → `/#post-reconciliation-recap` — the day post was merged into the recap post on Oct 12; its stub pointed at an anchor that no longer exists.

### sitemap.xml
13. Added the 6 staged share pages missing from the sitemap (alphabetical position, lastmod 2026-10-22): post-lito-then-now, post-milly-mcjaggurr-road-trip, post-raw-hype-onda-stoop, post-sense-aka-newkid-then-now, post-tony-moxberg-then-now, post-xklusive-strength. 112 → 118 URLs. Homepage lastmod bumped 2026-10-19 → 2026-10-22. XML validated.

## VERIFIED CLEAN (checked, no fix needed)
- All 114 post ids have share pages; all share-page og:image files exist on disk; all 181 local asset refs in index.html resolve (the 8 `assets/drops/` audio files flagged by a naive check exist — URL-encoded names).
- No dead in-page anchors; ticker items current with valid targets; LATEST POSTS order = newest first (Oct 21 wave — Milly, Sense, Tony, Lito — on top).
- No mojibake, no `&amp;amp;`, no literal `\u25b6`, no doubled words, no mixed-case "Ur Xklusive Konnect", no "XKLUSIVE CONNECT" errors anywhere.
- Staged posts all carry embedded video + follow blocks with verified handles only (Milly: IG correctly omitted — unverified; Lito: X @Its_Litos_World archive-verified).

## HELD — not guess-fixed (Trav's call / identity-level)
1. **facebook.com/UrbanExclusives hrefs (×12)** — the spaced form survives only inside the actual Facebook page URL; changing the URL would break the links. Visible text is now UrbanXklusives everywhere.
2. **Ace Hotel share stub** (`posts/post-ace-hotel-free-nights/`) redirects to `/#post-ace-hotel-free-nights`, an anchor with no post in index.html (post absent; stub + sitemap entry remain). Remove stub + sitemap entry, or restore the post — Trav's call.
3. **"Cakehead Clothing"** (Raw Hype post copy) vs **"Cakeheading Clothing"** (title of Trav's own YouTube video qRwpYfRlHUc) vs "Cakehead Clothing" in the Oct 21 upload tags — Trav's own sources split both ways. Left untouched.
4. **Raw Hype dates** — post dated OCT 20, 2026; videos recorded live Oct 21; markup comment said "live Oct 20." Conflicting records — left as-is.
5. **Sense post duplicate Hallelujah images** — `post-sense-hallelujah.jpg` and `post-sense-cover-hallelujah.jpg` sit back-to-back with near-identical alt text. Both files exist and differ (photo vs cover); visual duplication is Trav's call.
6. **Tony Moxberg follow block** — links his two official videos only; no profile socials (channel/IG handles unverifiable from the open web per his record — nothing guessed). Add when a verified handle lands.
7. **Master title-card images** — only the Sense post references master-card images in the site tree (post-sense-card-01…06). Milly / Tony / Lito / Strength / Raw Hype heroes are photos/title art (all exist). Retrofitting master cards as heroes is a design call for Trav.
8. **Xklusive "Strength" post** still embeds the "Bad Youth" video — the Strength track link is still owed by Trav (known open item).
9. **Trap Jackson featured post** — not yet present in source at audit time (build in flight); needs this same item-4 check (video, follow block, card image, share page) when it lands.
10. Covers-row DJ casing variants ("DJ Allmostrare" / "DJ All Most Rare") match era billings — noted, untouched.

---

## ADDENDUM — 2026-10-23 — HOUSE AD: OEM CENTER CAPS (STAGED, NOT DEPLOYED)

Scope: `~/workspace/uxk-mockup/live/index.html` + one new asset. Rides the same pending batch deploy — **awaits Trav's deploy word with the rest of the batch. Nothing deployed. v3/ untouched.**

1. **House-ad slot added** — a labelled ad unit for **OEM Center Caps** (Trav's sister site), placed immediately after the `#sponsorship` section and before The Network section, in the site's existing `.ad-slot-top` banner language.
   - Label: `FROM OUR NETWORK` ad tag (gold `.ad-tag` chip, same as SPONSOR/SAMPLE AD tags).
   - Creative: OEM burgundy medallion + headline "OEM CENTER CAPS — LOST A CAP? FIND THE EXACT FIT." + copy promoting the Cap Finder tool and the "We Find Your Cap" concierge, CTA button "FIND YOUR CAP →".
   - Link: `https://oemcentercaps.com` (target _blank, rel noopener).
   - Branding discipline: OEM identity (burgundy tint, medallion) lives **inside the ad unit only** (inline styles on the unit); no OEM branding added to UXK headers, sections, or copy anywhere else.
   - Asset: `assets/img/house-ad-oem-logo.png` (256×256 web copy of the OEM medallion, from `~/workspace/oemcentercaps/assets/logo-oem.png`).
2. **Div balance: 950/950 → 953/953** (+3 balanced pairs: wrap / ad-slot-top / ad-copy). Verified after edit; block present exactly once, positioned sponsorship → house ad → network.
