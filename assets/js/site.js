/* UrbanXklusives shared site JS — extracted Nov 19, 2026 from the inline scripts that were duplicated on all 8 paginated pages. Loaded with defer; runs before search.js, same order as before. */
;
/* ===== shop / cart / countdown / live banner / modal ===== */
;
document.querySelectorAll('.sizes').forEach(function(box){
  box.addEventListener('click', function(e){
    if(e.target.tagName==='SPAN'){
      box.querySelectorAll('span').forEach(function(s){ s.classList.remove('sel'); });
      e.target.classList.add('sel');
    }
  });
});
var cart = 0;
/* ============ STRIPE CHECKOUT — READY TO GO LIVE ============
   HOW TO ACTIVATE (2 minutes, no code changes):
   1. Trav uses his Stripe account (already live for the $50 gigs) — create one Payment Link per product below (Products → Payment Links).
   2. In the Stripe dashboard, create one Payment Link per product below (Products → Payment Links).
   3. Paste each link between the quotes below. Save. Redeploy. Checkout is live.
   Until a link is pasted, BUY NOW shows a "launch" toast and nothing breaks. */
var STRIPE_LINKS = {
  'legacy-longsleeve':   '',
  'original-longsleeve': '',
  'local-global-tee':    '',
  'embroidered-polo':    ''
};
document.querySelectorAll('.buy-now').forEach(function(btn){
  btn.addEventListener('click', function(){
    var link = STRIPE_LINKS[btn.getAttribute('data-product')] || '';
    if(link){ window.open(link, '_blank', 'noopener'); return; }
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = 'SECURE CHECKOUT OPENS AT LAUNCH — STAY READY';
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('show'); });
    setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); }, 400); }, 2000);
  });
});
document.querySelectorAll('.add-cart').forEach(function(btn){
  btn.addEventListener('click', function(){
    cart++;
    document.getElementById('cartCount').textContent = cart;
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = 'ADDED TO CART — WELCOME TO THE KONNECT';
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('show'); });
    setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); }, 400); }, 1800);
  });
});
var dropPlayer = document.getElementById('dropPlayer');
/* ============ DONATE BUTTON ============
   HOW TO ACTIVATE: paste the GoFundMe (or PayPal.Me) link between the quotes below.
   Save. Redeploy. Until a link is pasted, DONATE shows a "launch" toast and nothing breaks. */
var DONATE_LINK = 'https://paypal.me/urbanxklusives';
document.getElementById('donateBtn').addEventListener('click', function(e){
  e.preventDefault();
  if(DONATE_LINK){ window.open(DONATE_LINK, '_blank', 'noopener'); return; }
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = 'DONATIONS OPEN AT LAUNCH — STAY READY';
  document.body.appendChild(t);
  requestAnimationFrame(function(){ t.classList.add('show'); });
  setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); }, 400); }, 2000);
});
document.querySelectorAll('.drop-list button').forEach(function(btn){
  btn.addEventListener('click', function(){
    dropPlayer.src = btn.getAttribute('data-src');
    dropPlayer.play();
    document.querySelectorAll('.drop-list button').forEach(function(b){ b.classList.remove('on'); });
    btn.classList.add('on');
  });
});
var JB_BASE = 'assets/previews/';
var JB_TRACKS = [
  { n:"01", t:"Lito ft. Baygo — Miklo", f:"01. Lito ft. Baygo - Miklo.mp3" },
  { n:"02", t:"Smoov ATL — Goin (Prod. by Murda Beatz)", f:"02. Smoov ATL - Goin (Prod. By Murda Beatz).mp3" },
  { n:"03", t:"Sean Paine — I Grew Up", f:"03. Sean Paine - I Grew Up.mp3" },
  { n:"04", t:"Sneak Beatz ft. Sean Paine — Took Off", f:"04. Sneak Beatz Ft Sean Paine - 'Took Off'.mp3" },
  { n:"05", t:"Tony Moxberg ft. Styles P — For The Papper", f:"05. Tony Moxberg Ft Styles P - For The Papper.mp3" },
  { n:"06", t:"Bucksz FG — Empire (ft. Raw Hype)", f:"06. Bucksz FG - Empire (Feat. Raw Hype).mp3" },
  { n:"07", t:"Trae Duece — They Dont Know (Freestyle)", f:"07. Trae Duece - They Dont Know (Freestyle) Prod. By Auxx.mp3" },
  { n:"08", t:"Yung Blu — Speak My Mind", f:"08. Yung Blu - Speak My Mind (2016).mp3" },
  { n:"09", t:"Sense aka Newkid — Still Living", f:"09. Sense Aka Newkid - Still Living (Prod. Lasik Beats).mp3" },
  { n:"10", t:"Milly McJaggurr — Bout That", f:"10. Milly McJaggurr - Bout That (prod by 1chedda).mp3" },
  { n:"11", t:"Supreme Swiss — Double Up", f:"11. Supreme Swiss - Double Up (prod.HeavyWeightBangers).mp3" },
  { n:"12", t:"Donnie, Puffy L'z, Smoke Dawg, SAFE, Jimmy Prime & Jay Whiss — Full Circle", f:"12. Donnie, Puffy L'z, Smoke Dawg, SAFE, Jimmy Prime & Jay Whiss - Full Circle.mp3" },
  { n:"13", t:"Lil Shawn — Designer Shit", f:"13. Lil Shawn - Designer Shit.mp3" },
  { n:"14", t:"Ponce Deleioun — The Man", f:"14. Ponce  Deleioun - The Man.mp3" },
  { n:"15", t:"Lex Guap — Andale", f:"15. Lex Guap- ANDALE.mp3" },
  { n:"16", t:"Young Duce — Money Man", f:"16. Young Duce - Money Man.mp3" },
  { n:"17", t:"Young Sleep — Rick Fox", f:"17. Young Sleep - Rick Fox.mp3" },
  { n:"18", t:"Fridai Nite — Free Da Guys", f:"18. Fridai Nite - Free Da Guys.mp3" },
  { n:"19", t:"Friyie — Come And Get It", f:"19. Friyie - Come And Get It (Prod.TwoTone).mp3" },
  { n:"20", t:"Forgiato Blow — Never Change", f:"20. Forgiato Blow - Never Change.mp3" },
  { n:"21", t:"Hotboy Major ft. Breadwinner Kane — The Source", f:"21. Hotboy Major ft. Breadwinner Kane - The Source.mp3" },
  { n:"22", t:"Bezz Believe ft. Kevin Gates & Mook Boy — Fade Away", f:"22. Bezz Believe feat Kevin Gates & Mook Boy - Fade Away.mp3" },
  { n:"23", t:"Bezz Believe ft. Kevin Gates & OG Boobie Black — Disappear", f:"23. Bezz Believe Ft. Kevin Gates and OG Boobie Black  - Disappear.mp3" }
];
var jbAudio = document.createElement('audio');
jbAudio.setAttribute('aria-label', 'KONNECT Vol. 2 preview player');
var jbList = document.getElementById('jbList');
var jbNow = document.getElementById('jbNow');
var jbToggle = document.getElementById('jbToggle');
var jbIdx = -1;
if (jbList) {
  document.querySelector('.jb-player').appendChild(jbAudio);
  JB_TRACKS.forEach(function(tr, i){
    var b = document.createElement('button');
    b.innerHTML = '<span class="n">' + tr.n + '</span>' + tr.t;
    b.setAttribute('aria-label', 'Play preview: ' + tr.t);
    b.addEventListener('click', function(){ playJb(i); });
    jbList.appendChild(b);
  });
}
function jbSrc(tr){ return JB_BASE + encodeURIComponent(tr.f.replace(/\.mp3$/, '-preview.mp3')); }
function playJb(i){
  jbIdx = i;
  var tr = JB_TRACKS[i];
  jbAudio.src = jbSrc(tr);
  jbAudio.play();
  jbNow.textContent = 'NOW SPINNING: ' + tr.t;
  jbToggle.textContent = '⏸';
  Array.prototype.forEach.call(jbList.children, function(c, j){ c.classList.toggle('on', j === i); });
}
if (jbToggle) {
  jbToggle.addEventListener('click', function(){
    if (jbIdx < 0) { playJb(0); return; }
    if (jbAudio.paused) { jbAudio.play(); jbToggle.textContent = '⏸'; }
    else { jbAudio.pause(); jbToggle.textContent = '▶'; }
  });
  jbAudio.addEventListener('ended', function(){
    if (jbIdx + 1 < JB_TRACKS.length) playJb(jbIdx + 1);
    else { jbToggle.textContent = '▶'; jbNow.textContent = 'Pick a track below to start spinning'; }
  });
}

// video category filter
(function(){
  var pills = document.querySelectorAll('.cat-pill');
  var cards = document.querySelectorAll('#videoGrid .card[data-cat]');
  if(!pills.length) return;
  pills.forEach(function(p){
    p.addEventListener('click', function(){
      pills.forEach(function(x){ x.classList.remove('on'); x.setAttribute('aria-selected','false'); });
      p.classList.add('on'); p.setAttribute('aria-selected','true');
      var cat = p.getAttribute('data-filter');
      cards.forEach(function(c){
        c.style.display = (cat === 'all' || c.getAttribute('data-cat') === cat) ? '' : 'none';
      });
    });
  });
})();

// Netlify Forms — AJAX submit with inline thank-you (no page reload)
(function(){
  var msgs = {
    'submit': '<b>RECEIVED.</b> We got it — your $50 submission is in. Trav reads every single one personally and hits you back. While you wait: keep creating, and watch the KONNECT.',
    'storyform': '<b>RECEIVED.</b> Your story is in — thank you for trusting the KONNECT with it. Trav reads every word.',
    'adform': '<b>RECEIVED.</b> Your ad inquiry is in. Serious inquiries get a reply with the media kit and final rates.',
    'newsletter': '<b>YOU\'RE IN.</b> Welcome to the KONNECT — home of the $50 submissions. Expect drops, vlogs, mixtapes and exclusives. One email when it drops, no spam, ever.',
    'newsletter-strip': '<b>YOU\'RE IN.</b> Welcome to the KONNECT list. Watch your inbox.',
    'newsletter-modal': '<b>YOU\'RE IN.</b> Treats coming your way — watch your inbox.'
  };
  function thanks(form, html){
    var old = form.parentNode.querySelector('.form-thanks');
    if (old) old.remove();
    var n = document.createElement('div');
    n.className = 'form-thanks';
    n.setAttribute('role', 'status');
    n.innerHTML = html;
    form.parentNode.insertBefore(n, form);
    if (n.scrollIntoView) n.scrollIntoView({block:'nearest', behavior:'smooth'});
  }
  ['submit','storyform','adform','newsletter','newsletter-strip','newsletter-modal'].forEach(function(id){
    var f = document.getElementById(id);
    if (!f) return;
    var sb = f.querySelector('button[type="submit"]');
    if (sb) sb.setAttribute('data-label', sb.textContent);
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = f.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'SENDING…'; }
      var data = {};
      new FormData(f).forEach(function(v, k){
        if (k in data) { data[k] = data[k] + ', ' + v; } else { data[k] = v; }
      });
      fetch('https://formsubmit.co/ajax/urbanxklusives@gmail.com', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(data)
      }).then(function(r){
        if (!r.ok) throw new Error('bad response');
        return r.json();
      }).then(function(d){
        if (d.success !== 'true' && d.success !== true) throw new Error('formsubmit error');
        thanks(f, msgs[id] || '<b>RECEIVED.</b>');
        f.reset();
      }).catch(function(){
        thanks(f, '<b>Something didn\'t go through.</b> Try again in a minute — or email urbanxklusives@gmail.com directly.');
      }).then(function(){
        if (btn) { btn.disabled = false; btn.textContent = btn.getAttribute('data-label') || 'SEND'; }
      });
    });
  });
})();
(function(){
  var el = document.getElementById('bdayCount'), bar = document.getElementById('bdayBar');
  if(!el || !bar) return;
  var target = new Date(2026, 9, 17), now = new Date();
  var days = Math.ceil((target - now) / 864e5);
  if (days > 1) { el.textContent = days + ' DAYS — TRAV WILL BE THERE'; }
  else if (days === 1) { el.textContent = '1 DAY — TOMORROW'; }
  else if (days === 0) { bar.innerHTML = '🎹 IMSTA FESTA IS TODAY — <a href="/page-6.html#post-imsta-festa-toronto-2026" style="color:inherit;text-decoration:underline;">GET THE DETAILS</a> 🔥'; }
  else { bar.style.display = 'none'; }
})();
(function(){
  var badge = document.getElementById('liveStatus');
  if(!badge) return;
  function set(t, on){ badge.textContent = t; if(on) badge.classList.add('on'); }
  fetch('https://kick.com/api/v2/channels/uxk-ca', {cache:'no-store'})
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(d){
      var banner = document.getElementById('liveBanner');
      if(d && d.livestream){ set('● LIVE NOW ON KICK', true); if(banner) banner.classList.add('show'); }
      else { set('OFFLINE — FOLLOW TO CATCH THE NEXT STREAM', false); }
    })
    .catch(function(){ set('STATUS UNAVAILABLE — TAP IN ON KICK', false); });
})();
;
/* ===== post linkbacks ===== */
;
/* ============ POST LINKBACKS — every post gets a copy-link button ============
   Builds the artist's direct link from the post's anchor id (e.g. #post-mind-blown)
   so Trav can hand any artist their exact post URL. */
(function(){
  function showToast(msg){
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('show'); });
    setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); }, 400); }, 2200);
  }
  document.querySelectorAll('.brand-post[id]').forEach(function(p){
    var inner = p.querySelector(':scope > div');
    if(!inner || inner.querySelector('.linkback-btn')) return;
    var bar = document.createElement('div');
    bar.className = 'share-row';
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'linkback-btn';
    b.textContent = '🔗 COPY POST LINK';
    b.setAttribute('aria-label', 'Copy direct link to this post');
    b.addEventListener('click', function(){
      var url = location.origin + '/posts/' + p.id + '/';
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(url).then(
          function(){ showToast('LINK COPIED — SEND IT TO THE ARTIST'); },
          function(){ showToast('COPY BLOCKED — LONG-PRESS THE ADDRESS BAR INSTEAD'); }
        );
      } else {
        showToast('COPY NOT SUPPORTED ON THIS BROWSER');
      }
    });
    bar.appendChild(b);
    inner.appendChild(bar);
  });
})();
;
/* ===== service worker + load-more ===== */
;
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  });
}

// Load-more: show first 12 posts, reveal rest on demand
(function(){
  var posts = document.querySelectorAll('#posts .brand-post');
  var SHOW_INITIALLY = 12;
  if(posts.length <= SHOW_INITIALLY) return;
  for(var i = SHOW_INITIALLY; i < posts.length; i++){
    posts[i].classList.add('post-hidden');
  }
  var btn = document.createElement('button');
  btn.id = 'loadMoreBtn';
  btn.textContent = 'LOAD MORE POSTS (' + (posts.length - SHOW_INITIALLY) + ' MORE)';
  btn.addEventListener('click', function(){
    var hidden = document.querySelectorAll('#posts .brand-post.post-hidden');
    var batch = Math.min(12, hidden.length);
    for(var j = 0; j < batch; j++){
      hidden[j].classList.remove('post-hidden');
    }
    var remaining = document.querySelectorAll('#posts .brand-post.post-hidden').length;
    if(remaining === 0){
      btn.style.display = 'none';
    } else {
      btn.textContent = 'LOAD MORE POSTS (' + remaining + ' MORE)';
    }
  });
  var postsSec = document.getElementById('posts');
  postsSec.appendChild(btn);
})();
;
/* ===== reader mode ===== */
;
/* ============ READER MODE — every post gets its own dedicated page ============
   Opening urbanxklusives.com/#post-xxx shows ONLY that post, with a
   "MORE LIKE THIS" sidebar of posts from the same category. */
(function(){
  /* retired gig anchors (Oct 10 2026 consolidation) -> the single $50 gigs post */
  var GIGMAP = {'post-gig-artist-spotlight':'post-gig-50','post-gig-video-premiere':'post-gig-50','post-gig-event-blast':'post-gig-50','post-gig-social-pack':'post-gig-50','post-gig-bio-writeup':'post-gig-50'};
  if(GIGMAP[location.hash.slice(1)]){ history.replaceState(null,'','#'+GIGMAP[location.hash.slice(1)]); }
  var reader = document.getElementById('reader');
  var CATL = {music:'MUSIC', events:'EVENTS', videos:'VIDEOS', vault:'FROM THE VAULT', brands:'BRANDS', stories:'STORIES'};
  function isPost(id){
    var el = document.getElementById(id);
    return el && el.classList && el.classList.contains('brand-post') ? el : null;
  }
  function openPost(id){
    var p = isPost(id);
    if(!p) return false;
    var cat = p.getAttribute('data-cat') || 'music';
    document.getElementById('readerCat').innerHTML = '<span class="lb-tag">' + (CATL[cat] || cat.toUpperCase()) + '</span>';
    var h = p.querySelector('h3');
    document.getElementById('readerTitle').textContent = h ? h.textContent : '';
    var d = p.querySelector('.post-date');
    document.getElementById('readerDate').textContent = d ? d.textContent : '';
    var body = document.getElementById('readerBody');
    body.innerHTML = '';
    var hero = p.querySelector(':scope > a') || p.querySelector(':scope > img');
    if(hero){ var hc = hero.cloneNode(true); hc.removeAttribute('loading'); body.appendChild(hc); }
    var inner = p.querySelector(':scope > div');
    if(inner){
      var clone = inner.cloneNode(true);
      ['h3','.post-date','.lb-tag','.cat-chip','.share-row'].forEach(function(sel){
        Array.prototype.forEach.call(clone.querySelectorAll(sel), function(n){ n.remove(); });
      });
      body.appendChild(clone);
    }
    var rel = document.getElementById('readerRelated');
    rel.innerHTML = '';
    var all = Array.prototype.slice.call(document.querySelectorAll('.brand-post[id]'));
    var same = all.filter(function(q){ return q.id !== id && q.getAttribute('data-cat') === cat; });
    var list = same.length ? same : all.filter(function(q){ return q.id !== id; });
    list.slice(0, 4).forEach(function(q){
      var t = q.querySelector('h3');
      var a = document.createElement('a');
      a.href = '#' + q.id;
      a.className = 'reader-rel';
      var qc = q.getAttribute('data-cat') || 'music';
      var qi = q.querySelector(':scope > a img') || q.querySelector(':scope > img') || q.querySelector('img');
      var thumb = qi && qi.getAttribute('src') ? '<img loading="lazy" decoding="async" src="' + qi.getAttribute('src') + '" alt="">' : '';
      a.innerHTML = thumb + '<span class="rr-text"><span class="rr-title"></span><small>' + (CATL[qc] || qc.toUpperCase()) + '</small></span>';
      a.querySelector('.rr-title').textContent = t ? t.textContent : q.id;
      rel.appendChild(a);
    });
    reader.hidden = false;
    document.body.style.overflow = 'hidden';
    reader.scrollTop = 0;
    return true;
  }
  function closeReader(){
    reader.hidden = true;
    document.body.style.overflow = '';
  }
  document.getElementById('readerBack').addEventListener('click', function(){
    closeReader();
    try { history.pushState(null, '', location.pathname + location.search); } catch(e){}
  });
  function route(){
    var id = (location.hash || '').slice(1);
    if(id && isPost(id)){ openPost(id); } else { closeReader(); }
  }
  window.addEventListener('hashchange', route);
  route();
})();
;
/* ===== scroll-to-top / scroll-to-bottom buttons ===== */
;
(function(){
  var toTop=document.getElementById('toTop'),toBottom=document.getElementById('toBottom');
  function onScroll(){
    var y=window.scrollY||window.pageYOffset;
    var max=document.documentElement.scrollHeight-window.innerHeight;
    toTop.classList.toggle('show',y>600);
    toBottom.classList.toggle('show',max-y>600);
  }
  toTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  toBottom.addEventListener('click',function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'});});
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  onScroll();
})();
/* UXK site search — keyword filter over .brand-post cards (staged 2026-10-12) */
(function(){
  var box=document.querySelector('.search.search-bottom');
  if(!box) return;
  var input=box.querySelector('input'), btn=box.querySelector('button');
  var posts=Array.prototype.slice.call(document.querySelectorAll('.brand-post'));
  var notice=document.createElement('div');
  notice.id='searchNotice';
  notice.style.cssText='display:none;text-align:center;padding:10px 8px;font-family:Anton,Arial,sans-serif;letter-spacing:1px;color:#d4af37;background:#0a0a0a;border-top:1px solid #d4af37;border-bottom:1px solid #d4af37;';
  var sec=document.getElementById('posts');
  if(sec&&sec.parentNode) sec.parentNode.insertBefore(notice,sec);
  function clearSearch(){
    input.value='';
    for(var i=0;i<posts.length;i++) posts[i].style.display='';
    notice.style.display='none';
  }
  function runSearch(){
    var q=input.value.trim().toLowerCase();
    if(!q){ clearSearch(); return; }
    var hits=0, first=null;
    for(var i=0;i<posts.length;i++){
      var t=((posts[i].innerText||posts[i].textContent)||'').toLowerCase();
      var match=t.indexOf(q)!==-1;
      posts[i].style.display=match?'':'none';
      if(match){ hits++; if(!first) first=posts[i]; }
    }
    notice.style.display='block';
    var safe=q.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    notice.innerHTML=hits+' RESULT'+(hits===1?'':'S')+' FOR &ldquo;'+safe+'&rdquo; &nbsp;<button id="searchClear" type="button" style="background:#e01b1b;color:#fff;border:none;padding:6px 14px;font-family:Anton,Arial,sans-serif;letter-spacing:1px;cursor:pointer;">CLEAR</button>';
    var c=document.getElementById('searchClear');
    if(c) c.addEventListener('click',clearSearch);
    if(first){ try{ first.scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){ first.scrollIntoView(); } }
  }
  btn.addEventListener('click',runSearch);
  input.addEventListener('keydown',function(e){ if(e.key==='Enter'){ e.preventDefault(); runSearch(); } });
})();
;
/* ============ YOUTUBE FACADE — click-to-play thumbnails ============
   Every YouTube embed is a lightweight poster button (.yt-facade) until
   tapped; the real iframe is created only on click. Delegated handler so
   it also works on posts cloned by Reader Mode. */
document.addEventListener('click', function (e) {
  var t = e.target, btn = null;
  while (t && t !== document) {
    if (t.classList && t.classList.contains('yt-facade')) { btn = t; break; }
    t = t.parentNode;
  }
  if (!btn || !btn.getAttribute('data-yt-src')) return;
  var src = btn.getAttribute('data-yt-src');
  src += (src.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1';
  var frame = document.createElement('iframe');
  frame.setAttribute('src', src);
  frame.setAttribute('title', btn.getAttribute('data-yt-title') || 'YouTube video');
  frame.setAttribute('allow', btn.getAttribute('data-yt-allow') ||
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  frame.setAttribute('allowfullscreen', '');
  frame.setAttribute('loading', 'eager');
  btn.parentNode.replaceChild(frame, btn);
});
