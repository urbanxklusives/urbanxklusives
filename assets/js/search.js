// UrbanXklusives client-side site search — vanilla JS, no dependencies.
// Works on static hosting (GitHub Pages): the whole index is one JSON file,
// loaded once and filtered in the browser. No external requests.
//
// Expected markup (see search-box-snippet.html):
//   #uxk-search-input     — text input
//   #uxk-search-category  — <select> of categories ("all" = every category)
//   #uxk-search-results   — container the results are rendered into
//
// Result links point at the post share pages (/posts/<slug>/), which
// redirect to the right paginated page — no page numbers are hardcoded here.
(function () {
  'use strict';

  // The index lives at assets/js/search-index.json in the repo. Relative
  // path: the search box sits on the paginated index pages at the site root.
  var INDEX_URL = 'assets/js/search-index.json';
  var MAX_RESULTS = 10;
  var DEBOUNCE_MS = 150;
  var MIN_QUERY = 2;

  // Readable labels for the data-cat values used across the site.
  var LABELS = {
    music: 'Music',
    stories: 'Stories',
    events: 'Events',
    promo: 'Promo',
    vault: 'Vault',
    mixtapes: 'Mixtapes',
    brands: 'Brands',
    history: 'History',
    rights: 'Rights'
  };

  var index = null;          // loaded search-index.json array, or null
  var loadFailed = false;    // true once the fetch has failed
  var unavailableShown = false;
  var debounceTimer = null;

  var inputEl = document.getElementById('uxk-search-input');
  var categoryEl = document.getElementById('uxk-search-category');
  var resultsEl = document.getElementById('uxk-search-results');
  if (!inputEl || !categoryEl || !resultsEl) return; // snippet not on page

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function labelFor(category) {
    return LABELS[category] || category;
  }

  function render() {
    if (loadFailed) {
      // Show the failure note exactly once, then leave it alone.
      if (!unavailableShown) {
        unavailableShown = true;
        resultsEl.innerHTML = '<p class="uxk-search-note">Search unavailable.</p>';
      }
      return;
    }
    if (!index) return; // still loading — stay quiet

    var query = inputEl.value.trim().toLowerCase();
    var category = categoryEl.value;

    // Nothing typed and no category picked: keep the box clean.
    if (query.length < MIN_QUERY && category === 'all') {
      resultsEl.innerHTML = '';
      return;
    }

    var hits = [];
    for (var i = 0; i < index.length && hits.length < MAX_RESULTS; i++) {
      var post = index[i];
      if (category !== 'all' && post.category !== category) continue;
      if (query) {
        var haystack = (post.title + ' ' + post.excerpt + ' ' +
          post.category + ' ' + labelFor(post.category)).toLowerCase();
        if (haystack.indexOf(query) === -1) continue;
      }
      hits.push(post);
    }

    if (hits.length === 0) {
      resultsEl.innerHTML = '<p class="uxk-search-note">No results found.</p>';
      return;
    }

    var html = '<p class="uxk-search-count">' + hits.length +
      (hits.length === MAX_RESULTS ? '+' : '') + ' result' +
      (hits.length === 1 ? '' : 's') + '</p>';
    for (var j = 0; j < hits.length; j++) {
      var p = hits[j];
      html += '<a class="uxk-search-result" href="/posts/' +
        encodeURIComponent(p.slug) + '/">' +
        '<span class="uxk-search-result-title">' + escapeHtml(p.title) + '</span>' +
        '<span class="uxk-search-result-cat">' + escapeHtml(labelFor(p.category)) + '</span>' +
        '<span class="uxk-search-result-excerpt">' + escapeHtml(p.excerpt) + '</span>' +
        '</a>';
    }
    resultsEl.innerHTML = html;
  }

  function onInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(render, DEBOUNCE_MS);
  }

  inputEl.addEventListener('input', onInput);
  inputEl.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      inputEl.value = '';
      resultsEl.innerHTML = '';
      inputEl.blur();
    }
  });
  categoryEl.addEventListener('change', render);

  // Load the index once. Any failure (missing file, offline, bad JSON)
  // degrades to a single "Search unavailable." note — never an exception.
  fetch(INDEX_URL)
    .then(function (response) {
      if (!response.ok) throw new Error('search index HTTP ' + response.status);
      return response.json();
    })
    .then(function (data) {
      if (!Array.isArray(data)) throw new Error('search index is not an array');
      index = data;
      render(); // in case the user already typed or picked a category
    })
    .catch(function () {
      loadFailed = true;
      render();
    });
})();
