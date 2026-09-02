(function () {
  "use strict";

  /* ---------- placeholder translations ---------------------------------
     translations.js only rewrites element innerHTML via [data-i18n]; an
     <input placeholder> needs its own tiny pass, driven by the same
     translations table and the same language-change event. */
  function applyPlaceholders() {
    var lang = document.documentElement.lang === "zh-CN" ? "zh" : "en";
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var entry = window.SHUANG_LIU_TRANSLATIONS && window.SHUANG_LIU_TRANSLATIONS[el.dataset.i18nPlaceholder];
      if (entry) el.setAttribute("placeholder", lang === "zh" ? entry.zh : entry.en);
    });
  }
  applyPlaceholders();
  document.addEventListener("shuang-liu-language-changed", applyPlaceholders);

  /* ---------- theme (light / dark) ---------------------------------- */
  var THEME_KEY = "shuang-liu-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function initTheme() {
    var saved = null;
    try { saved = window.localStorage.getItem(THEME_KEY); } catch (e) {}
    applyTheme(saved);
  }
  initTheme();

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var effectiveDark = current === "dark" || (!current && prefersDark);
      var next = effectiveDark ? "light" : "dark";
      applyTheme(next);
      try { window.localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------- mobile nav --------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- header scroll shadow + back-to-top ---------------------- */
  var header = document.querySelector(".site-header");
  var toTop = document.querySelector(".to-top");
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 480);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- scrollspy ------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".main-nav a, .mobile-nav a"));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- publications: rank tagging, tabs, search, filters -------- */
  var pubLists = document.querySelectorAll(".pub-list");
  var rankOf = function (text) {
    if (/\(CCF-A\)|CCF\s*A\b/i.test(text)) return "A";
    if (/\(CCF-B\)/i.test(text)) return "B";
    if (/\(CCF-C\)/i.test(text)) return "C";
    if (/CCF\s*中文\s*T1|CCF-T1/i.test(text)) return "T1";
    return "";
  };
  pubLists.forEach(function (ul) {
    Array.prototype.forEach.call(ul.children, function (li) {
      var rank = rankOf(li.textContent);
      if (rank) li.setAttribute("data-rank", rank);
    });
  });

  var pubSection = document.getElementById("Publications");
  if (pubSection) {
    var tabs = pubSection.querySelectorAll(".pub-tabs button");
    var panels = { conference: document.querySelector('.pub-list[data-list="conference"]'), journal: document.querySelector('.pub-list[data-list="journal"]') };
    var countEl = pubSection.querySelector(".pub-count");
    var emptyEl = pubSection.querySelector(".pub-empty");
    var searchInput = pubSection.querySelector(".pub-search input");
    var filterBtns = pubSection.querySelectorAll(".pub-filters button");

    var activeTab = "conference";
    var activeFilter = "all";
    var query = "";

    function refresh() {
      var list = panels[activeTab];
      if (!list) return;
      Object.keys(panels).forEach(function (key) {
        if (panels[key]) panels[key].style.display = key === activeTab ? "" : "none";
      });

      var visible = 0, total = 0;
      Array.prototype.forEach.call(list.children, function (li) {
        total++;
        var rank = li.getAttribute("data-rank") || "";
        var matchesFilter = activeFilter === "all" || rank === activeFilter;
        var matchesQuery = !query || li.textContent.toLowerCase().indexOf(query) !== -1;
        var show = matchesFilter && matchesQuery;
        li.classList.toggle("is-hidden", !show);
        if (show) visible++;
      });

      if (countEl) {
        countEl.textContent = countEl.dataset.tplZh && document.documentElement.lang === "zh-CN"
          ? countEl.dataset.tplZh.replace("{n}", visible).replace("{m}", total)
          : countEl.dataset.tplEn.replace("{n}", visible).replace("{m}", total);
      }
      if (emptyEl) emptyEl.classList.toggle("is-visible", visible === 0);
    }

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTab = btn.dataset.tab;
        tabs.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
        refresh();
      });
    });
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeFilter = btn.dataset.rank;
        filterBtns.forEach(function (b) { b.classList.toggle("is-active", b === btn); });
        refresh();
      });
    });
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        query = searchInput.value.trim().toLowerCase();
        refresh();
      });
    }

    refresh();

    // Re-run when language toggles, since counts labels are language-aware
    document.addEventListener("shuang-liu-language-changed", refresh);
  }

  /* ---------- publication stats for hero stat tiles --------------------- */
  var confList = document.querySelector('.pub-list[data-list="conference"]');
  var journList = document.querySelector('.pub-list[data-list="journal"]');
  var totalPubs = (confList ? confList.children.length : 0) + (journList ? journList.children.length : 0);
  var ccfA = 0;
  [confList, journList].forEach(function (list) {
    if (!list) return;
    Array.prototype.forEach.call(list.children, function (li) {
      if (li.getAttribute("data-rank") === "A") ccfA++;
    });
  });
  var totalEl = document.querySelector("[data-stat='total-pubs']");
  var ccfEl = document.querySelector("[data-stat='ccf-a']");
  if (totalEl) totalEl.textContent = totalPubs + "+";
  if (ccfEl) ccfEl.textContent = ccfA + "+";
}());
