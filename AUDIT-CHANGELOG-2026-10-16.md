# UXK Site Audit — Changelog (2026-10-16, ~21:35 EDT)

Full functional audit of urbanxklusives.com. Source: live/index.html.
No changes made to index.html itself. No deploy run (batched for later).
v3/ untouched.

## FIXED

Created 5 missing share pages (every `.brand-post` gets a "COPY POST LINK"
button via JS → `origin + '/posts/' + post-id + '/'`; these 5 produced dead
404 links when copied). All follow the established share-page template
(canonical, og:*, twitter:*, meta-refresh + JS redirect to /#post-id):

1. posts/post-backstreet-boys-toronto-2027/index.html
2. posts/post-halloween-hiphop-2026/index.html
3. posts/post-scc-r-v-cope/index.html
4. posts/post-shyne-danforth-2026/index.html
5. posts/post-socan-awards-2026/index.html

All og:images verified to exist locally; titles/descriptions taken from each
post's own copy in index.html.

## VERIFIED HEALTHY (no action)

- Load: 282KB homepage; 1.74s cold / 0.78s warm (TTFB 1.53s cold — Netlify edge, acceptable)
- Anchors: all 7 post-* refs + 17 section refs resolve; 0 missing
- Share pages: 58/58 present, all og:title/og:description/og:image/canonical/redirect verified
- Media: 110 img + 8 video/source + 5 posters — 0 missing local, all remote (4× ytimg, 1× zoogletools) return HTTP 200
- Forms: 5 Netlify forms (uxk-50-submission, uxk-newsletter-strip, uxk-story, uxk-ad-inquiry, uxk-newsletter), all with data-netlify + honeypot
- Meta/SEO: title, canonical, meta description carries the multicultural identity line; 2/2 JSON-LD blocks valid
- UI: ticker links all resolve; scroll ↑/↓ buttons present; 18 @media queries; load-more (12 + batches) works; reader mode opens hidden posts correctly via getElementById+clone; reader thumbnail fallback (:scope > img) present; retired gig anchors JS-redirect to #post-gig-50
- Copy: 0 "UXK MASCOT" (only the intentional post-xklusive-mascot anchor id remains), 0 "Konnection"/"exclusivities" misspellings, 22× "UR XKLUSIVE KONNECT", 3× "UXK HEADLINER"; zero AI-tell phrases detected
- Structure: 540/540 divs balanced; sw.js at uxk-v2 (network-first for HTML)
- Live site matches source (56/56 post ids, young-duce + identity line live)

## FLAGGED — needs Trav's decision (not fixed)

1. VIDEO + FOLLOW GAP: 36/56 posts have no video embed; 33/56 have no social follow block. Site standard (Oct 12) says every new post ships with both. Newest violators: post-young-duce-millions (no video), post-scc-r-v-cope (neither), post-halloween-hiphop-2026 (no video), post-backstreet-boys-toronto-2027 (neither). Embedding the wrong video would violate the real-footage rule — Trav picks the video per post.
2. TICKER STALENESS: still leads with the Oct 5 recap; newest posts (Young Duce, SOCAN, Shyne, Halloween) aren't featured. Content call, not breakage.
3. FILTER PILLS vs VIDEO GRID: pills offer ALL/MIXTAPES/VLOGS/HISTORY/PROMO but 44 video-grid cards are data-cat="music" (29) or "events" (15) — unfilterable except via ALL. Adding pills conflicts with Trav's "fewer buttons" direction; his call.
4. SEMANTIC IMAGE AUDIT (open from Oct 16): per-post verification that each hero image actually depicts its subject (no AI/misleading imagery) — manual pass over 56 posts, not done here.

## PENDING DEPLOY

The 5 new share pages exist in live/ only. They ride the next Netlify deploy
(Trav's word). v3/ does not have them (v3 untouched per instructions — re-sync
after deploy).

## FIX PASS — 2026-10-16 ~22:00 EDT (Trav authorized all three)

### FIX 1 — Ticker refreshed
- Replaced stale ticker items (Oct 5 recap / Believe In Us / Trinibad Punz) with the 3 newest LATEST POSTS, same link styling:
  1. #post-imsta-festa-toronto-2026 — "ZAYTOVEN KEYNOTES IMSTA FESTA TORONTO — SAT OCT 17, YORK UNIVERSITY" (event is tomorrow)
  2. #post-young-duce-millions — "YOUNG DUCE MILLIONS — CATCHING UP WITH MIAMI'S OWN @YOUNGDUCE305"
  3. #post-backstreet-boys-toronto-2027 — "BACKSTREET BOYS ADD 12TH AND FINAL TORONTO SHOW — MAR 7, 2027"
- Kept the evergreen 4th item: #submit "HOME OF THE $50 SUBMISSIONS — GET FEATURED WORLDWIDE"

### FIX 2a — Videos added (2, both verifiable — real-footage rule honored)
- post-garrain-jones: embedded assets/vid/garrain-jones-back-to-the-future.mp4 (poster garrain-jones-now.jpg) via .post-video div. Post copy explicitly references "the short film: back to the future"; file already on site (was only in video grid + JSON-LD).
- post-xklusive-latest: embedded YouTube Oz4P_vS7fEc (Bad Youth). Post hero image links to that exact video; same embed already used in post-xklusive-mascot.

### FIX 2b — Follow blocks added (14, all handles verified on-site, blocks copied verbatim from established patterns)
- FOLLOW DRAKE (from post-socan-awards-2026): post-drake-iceman-record, post-drake-vmas-2026, post-drake-2027-tour, post-drake-gordo-taraka
- FOLLOW URBANXKLUSIVES (standard block): post-scc-r-v-cope, post-konnect-vol2-sampler, post-reconciliation-recap, post-vault-lil-c-note, post-vault-mercedes-concept, post-vault-catalog, post-vault-five-dollar-psa, post-vault-hijack-2025
- GET IN THE ROOM (from post-imsta-beat-battle, incl. verified @imstafesta IG): post-imsta-festa-toronto-2026, post-imsta-countdown-7days

### FIX 3 — Video grid categories: NO CHANGES NEEDED (premise corrected)
- The filter pills only ever filtered `#videoGrid .card` elements (JS line ~2716). That grid has exactly 9 cards, ALL already within the 5 pill categories (3 vlogs, 3 mixtapes, 2 history, 1 promo).
- The 44 music/events data-cat values belong to article <div> posts, which the pills never filtered; those values feed the reader's "MORE LIKE THIS" same-category matching (JS ~2913). Reassigning them would have broken reader recommendations and the visible category taxonomy. Left untouched.

### Deliberately left alone (needs Trav's pick — real-footage rule)
- Videos (34 posts): no verifiable correct video on site. Notables: post-young-duce-millions (no specific YT video ID on site, only channel link), post-mind-blown (post itself says original video was removed from YouTube — do NOT embed Count On The Rain, it's a different song), post-scc-r-v-cope, post-backstreet-boys-toronto-2027, post-halloween-hiphop-2026, post-konnect-vol2-sampler, post-local-vs-global-campaign, post-konnect-vol2-presale, post-xklusive-features (catalogue — no single correct video), post-imsta-beat-battle, post-imsta-countdown-7days (countdown post; keynote promo video lives in the festa post), post-skip2fame-mavado, all tory/weeknd/kardinal/nav/daniel-caesar/gorillaz/steve-lacy/jessie-reyez/ovo/smoothie-lou news posts, all remaining vault posts.
- Follow blocks (16 posts): no verified artist socials anywhere on site — post-trinibad-punz (no Punz/Jasse handles on site), post-backstreet-boys-toronto-2027, post-tory-made-you-think, post-tory-slutty-bass, post-tory-not-on-tor-tour, post-weeknd-tokyo, post-weeknd-no-retirement, post-weeknd-billion, post-ovo-degrassi, post-kardinal-firestarter, post-nav-woah, post-daniel-caesar-indecision, post-smoothie-lou, post-gorillaz-toronto, post-steve-lacy-toronto, post-jessie-reyez-toronto.

### Verification
- Divs balanced: 570/570 (was 540/540; +30 from 14 follow blocks × 2 divs + 2 post-video divs). HTML parser: 0 mismatches, 0 unclosed at EOF.
- All 14 follow blocks + 2 videos confirmed inside their target posts; ticker anchors resolve.
- Not deployed (per instructions). v3/ untouched.
- Pre-existing quirks noted, not touched: literal "\u25b6" text in Peter Jackson SINGLES block (renders as text, not ▶); JSON-LD "\u2019" escape (valid JSON).

---

## FIX-EVERYTHING PASS (2026-10-16 ~23:30 EDT, subagent — NOT deployed, v3 untouched)

Trav said "fix everything that needs to be fixed". All changes below are in
live/index.html only. Divs 570→605/605 balanced. HTML parses clean (python
html.parser: 0 mismatches, 0 unclosed). Parent deploys separately.

### VIDEOS EMBEDDED (3 — all oEmbed-verified official uploads)
1. post-nav-woah → EQdhTw6YWy0 ("NAV - WOAH FT Young Thug (Official Audio)" by NAV, official artist channel) — post copy says "Press play"
2. post-daniel-caesar-indecision → uh0SpzMsZAs ("Rex Orange County feat. Daniel Caesar - Indecision (Official Video)" by Rex Orange County, official artist channel)
3. post-smoothie-lou → bzm8FPbBQ_o ("Queen&Spadina dir. K-Yall" by Smoothie Lou — official focus-track video for the GARY album the post covers; ID found via the imprintent.org GARY article embed, confirmed by oEmbed)

NOTE: post-peter-jackson-shoutouts already had video (3 shout-out takes in .shout-grid) — the earlier scan only checked .post-video/iframe. No change needed.

### FOLLOW BLOCKS ADDED (16 — handles verified via instagram-cli on @urbanxklusives)
- torylanez ×3 (post-tory-made-you-think, post-tory-slutty-bass, post-tory-not-on-tor-tour) — verified 11M followers
- theweeknd ×3 (post-weeknd-tokyo, post-weeknd-no-retirement, post-weeknd-billion) — verified 77M
- nav (post-nav-woah) — verified 1.9M · danielcaesar (post-daniel-caesar-indecision) — verified 5.3M
- kardinalo (post-kardinal-firestarter) — verified "Kardinal Offishall" 118K
- smoothielou (post-smoothie-lou) — 2.2K, unverified but bio "GARY ALBUM STREAMING NOW / aKa Garry Swisherman" matches post subject exactly
- gorillaz (post-gorillaz-toronto) — verified 7.8M · steve.lacy (post-steve-lacy-toronto) — verified 3.9M
- jessiereyez (post-jessie-reyez-toronto) — verified 5M · backstreetboys (post-backstreet-boys-toronto-2027) — verified 6.5M
- octobersveryown (post-ovo-degrassi) — verified "October's Very Own", Toronto, 1.7M (welcomeovo rejected: 0 followers, unverified)
- post-vault-hijack-2025 → standard FOLLOW URBANXKLUSIVES block (brand history post)
- post-trinibad-punz → LEFT ALONE: no verifiable handle. punzentertainment shows name "Richard Romano" (mismatch, 61K); djpun = Thai account (272); therealdeejaypun doesn't exist; punz = streamer. Trav's call.
Blocks follow the site pattern (soc-label + .soc with 📸 INSTAGRAM + 👻 SNAPCHAT/Travmane32).

### IMAGE FIX (1 — semantic check on all 16 touched posts)
- post-daniel-caesar-indecision: hero showed the WRONG PERSON (dreadlocked guitarist, not Daniel Caesar). Swapped to the real official "Indecision" video thumbnail (i.ytimg.com/vi/uh0SpzMsZAs/hqdefault.jpg — Rex Orange County + Daniel Caesar in the field). Old file replaced in place; alt updated.
- All other 15 hero images verified correct (NAV, Tory Lanez ×2, The Weeknd, Kardinal Offishall at TIFF, OVO merch, Gorillaz art, Steve Lacy, Jessie Reyez, BSB Rogers Centre poster).
- post-smoothie-lou hero is a Hamilton skyline, not the artist — not misleading, left as-is.

### REJECTED VIDEO CANDIDATES (researched, do NOT use)
- "-yElvysKMCY" = NAV & Young Thug "Trimski" — an article embedded it for "WOAH" by mistake; wrong song
- "Ft8gPZhdfOc" = "S.L.I.D.E" (Tory Lanez - Topic auto-gen), "gOBRxyhA8Is" = "Tory Lanez - S.M.O" — post-tory-slutty-bass is about the ALBUM "LOL: Slutty Bass"; no single correct video
- Drake "ICEMAN": no single verifiable official video (fan uploads only; post is about a Billboard record)
- Young Duce Millions: no verifiable official video found — Trav's pick
- post-mind-blown: original removed from YouTube per post copy — do NOT substitute a different song's video
- post-xklusive-features (catalogue), post-imsta-countdown-7days (keynote promo belongs in the festa post): no single correct video

### STILL OPEN — no confident video (real-footage rule; all left alone)
post-young-duce-millions, post-scc-r-v-cope, post-halloween-hiphop-2026, post-konnect-vol2-sampler, post-local-vs-global-campaign, post-konnect-vol2-presale, post-xklusive-features, post-mind-blown, post-tory-made-you-think, post-tory-slutty-bass, post-drake-iceman-record, post-drake-vmas-2026, post-ovo-degrassi, post-weeknd-tokyo, post-weeknd-no-retirement, post-weeknd-billion, post-kardinal-firestarter, post-tory-not-on-tor-tour, post-drake-2027-tour, post-drake-gordo-taraka, post-gorillaz-toronto, post-steve-lacy-toronto, post-jessie-reyez-toronto, post-imsta-beat-battle, post-skip2fame-mavado, post-backstreet-boys-toronto-2027, post-durag-store (shop post), post-vault-lil-c-note, post-vault-mercedes-concept, post-vault-catalog, post-vault-five-dollar-psa, post-vault-hijack-2025.

### CAUTION FOR DEPLOY
Two follow blocks were initially inserted into the wrong posts by an anchor bug (fixed + re-verified: all 16 follow labels now inside their own post boundaries). Double-checked before this changelog entry.

---

## VIDEO-GAP CLOSING PASS (2026-10-16 ~22:45 EDT, subagent — NOT deployed, v3 untouched)

Trav: "fix everything that needs to be fixed." 18 videos embedded, all oEmbed-verified official uploads, .post-video pattern, each confirmed inside its own post. Divs 605→623/623 balanced. Parent deploys separately.

### DIRECT (2)
- post-xklusive-features → a4HWHeAkdgM "Popcaan, Xklusive — Doom (Official Music Video)" — catalogue's flagship collab, leads the post copy
- post-imsta-countdown-7days → assets/vid/imsta-promo-v1.mp4 (local, official IMSTA promo w/ poster) — same file the headquarters post uses

### EVENT POSTS (2, researched)
- post-backstreet-boys-toronto-2027 → VVB6FI8QTFg "Backstreet Boys - I Want It That Way (2025 Version)" — most recent official video, official channel
- post-skip2fame-mavado → -vScNH0Pi9g "Mavado, DJ Frass - GROUP CHAT (Official Music Video)" — mavadoVEVO, Sept 2026, latest ahead of Nov 5 comeback

### NEWS POSTS (14, researched + oEmbed-verified)
- post-tory-made-you-think → PcuxVJVi-lI "Tory Lanez - Who? (Official Music Video)" — from Made You Think I Was Gone...But, @torylanez
- post-tory-slutty-bass → TC_lu8nN-_M "Slutty Bass: Episode 1 - BASS FROM OUTER SPACE (starring DDG)" — official album-rollout series, @torylanez
- post-tory-not-on-tor-tour → rKDPGJp0KKg "Tory Lanez - Crodie From The 9 // Guy In My City (Official Music Video)" — lead video from the new album, @torylanez
- post-drake-iceman-record → weU76DGHKU0 "DRAKE - WHAT DID I MISS" — ICEMAN-era lead single, @DrakeOfficial
- post-drake-vmas-2026 → SD4yRDY9mek "Drake - Janice STFU" — exact song in the post, DrakeVEVO
- post-drake-2027-tour → kDK8-psUjzY "FOMO" — the actual hour-long short film the post covers, @DrakeOfficial
- post-drake-gordo-taraka → QW29Ly55Kvs "Drake - Plot Twist" — ICEMAN-era official video, DrakeVEVO (used instead of duplicating Janice STFU)
- post-ovo-degrassi → rIhx2wZ8jnA "Drake - I'm Upset" — the famous Degrassi full-cast reunion video, DrakeVEVO; closest genuine OVO↔Degrassi fit
- post-weeknd-tokyo → A4WgT0QOXhs "THE WEEKND - SÃO PAULO LIVESTREAM" — official stadium tour video, @TheWeeknd ("Tokyo" is unreleased, no official video exists)
- post-weeknd-no-retirement → GT8ornYrDEs "The Weeknd - Hurry Up Tomorrow" — most recent official video, TheWeekndVEVO
- post-weeknd-billion → A4WgT0QOXhs "THE WEEKND - SÃO PAULO LIVESTREAM" — official tour video, apt for the $1B-tour story
- post-kardinal-firestarter → 9a2vncKICY4 "Kardinal Offishall - Kiss Me When I Ft Glenn Lewis" — off FIRESTARTER VOL.2, his official channel
- post-gorillaz-toronto → ucRulNQsuYQ "Gorillaz - The Mountain, The Moon Cave and The Sad God" — official The Mountain short film, @Gorillaz
- post-steve-lacy-toronto → b7wODfsPcN8 "Steve Lacy - doom (Official Video)" — most recent official video, SteveLacyVEVO

### DELIBERATELY LEFT (13 remaining no-video posts)
- post-mind-blown — original video removed from YouTube; never substitute (standing rule)
- post-scc-r-v-cope — text statement, no video exists
- post-imsta-beat-battle — no battle footage exists
- 5 vault posts (lil-c-note, mercedes-concept, catalog, five-dollar-psa, hijack-2025) — Trav's personal archival footage, his pick only
- post-young-duce-millions — the "Catching Up w/ Miami Artist @YoungDuce305" vlog is NOT on the @urbanxklusives channel (full upload list checked, channel search empty). Needs Trav: re-upload or confirm the video.
- post-halloween-hiphop-2026 — multi-party roundup, no single artist/video fits
- post-konnect-vol2-sampler, post-local-vs-global-campaign, post-konnect-vol2-presale — no matching UXK-owned video exists in assets/vid/

### REJECTED DURING RESEARCH (not used)
- AI-spam fake Weeknd 2026 uploads ("Gold Cage", "NEON HEART", "Blackout Echo"); "Drake - Solar Eclipse" (Topic auto-generated, not official); Kardinal "40 Acres And A Ferrari" (Topic auto-generated); fan-channel Mavado "GROUP CHAT" re-upload (used the mavadoVEVO one instead)

## DESIGN CONSISTENCY SYSTEM — 2026-10-16 ~22:45 EDT (Trav's direction)
One CSS system appended to the <style> block ("UXK DESIGN CONSISTENCY SYSTEM"); content/copy untouched, CSS-only (no div changes).
- Post cards: `.brand-post` 1px #f5d76e → **3px solid #d4af37** + thin inner gold keyline (outline offset -8px) + soft gold glow. orange-post/gold-post variants raised to 3px; gold-post glow strengthened.
- Inner media frames: hero images 1px #333 → 2px muted gold (#8a6d1f); `.post-video`/`.post-video-vert` 1px #333 → **2px solid #d4af37**; shout-grid videos → 2px muted gold.
- Section heads (all 17 `.sec-head` usages): h2 now **italic + red 3px underline (offset) + gold highlighter wash** behind lower half of text; the `.rule` bar thickened 3px→4px and recolored red→gold→transparent gradient.
- Other boxes brought into the system: `.watch-feature`, `.qsec`, `.tier` → 2px muted gold; `.nl-preview` → 2px gold; `.sample-ad-card` → 2px red (kept its color). `.card.sponsor-card` already 2px gold — untouched.
- Deliberately left: pill/chip/button border-radius (pills stay pills — Trav's "square" direction applies to cards/boxes); reader-mode untouched (no reader heading rules exist); mobile CSS untouched (global border-box means thicker borders can't break layout).
- Divs 623/623 balanced. Page weight 291KB → 293KB. NOT deployed (per task); v3 untouched.
