/* ==========================================================================
   纸间 · Offline Reading App
   Single-file UI logic: shared icons, screen templates, board + prototype
   ========================================================================== */

const Zhijian = (() => {
  "use strict";

  /* ------------------------------------------------------------------------
     Icons
     ---------------------------------------------------------------------- */

  const ICONS = {
    search: '<circle cx="10.8" cy="10.8" r="6.6"/><path d="m15.7 15.7 4.1 4.1"/>',
    more: '<circle cx="5" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.15" fill="currentColor" stroke="none"/>',
    shelf: '<path d="M4 19.5V5.4A1.4 1.4 0 0 1 5.4 4H8v15.5"/><path d="M8 19.5V7.1a1.6 1.6 0 0 1 1.6-1.6h2.2v14"/><path d="m14.8 6.2 3-.8a1.4 1.4 0 0 1 1.7 1l2.1 11.2a1.4 1.4 0 0 1-1 1.6l-2.5.7"/><path d="M3.5 19.5h16.8"/>',
    highlight: '<path d="m4.5 15.2 6.9-6.9 4.3 4.3-6.9 6.9H4.5v-4.3Z"/><path d="m13 6.7 2.8-2.8 4.3 4.3-2.8 2.8"/><path d="M5 21h14"/>',
    user: '<circle cx="12" cy="8.1" r="3.6"/><path d="M5.2 20.2c.5-4.1 3.2-6.2 6.8-6.2s6.3 2.1 6.8 6.2"/>',
    arrowRight: '<path d="M4.5 12h15"/><path d="m13.5 6 6 6-6 6"/>',
    arrowUpRight: '<path d="M6.5 17.5 17.5 6.5"/><path d="M8 6.5h9.5V16"/>',
    chevronRight: '<path d="m9 5 7 7-7 7"/>',
    chevronLeft: '<path d="m15 5-7 7 7 7"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    folder: '<path d="M3.6 7.4a2.1 2.1 0 0 1 2.1-2.1h4l2 2.2h6.6a2.1 2.1 0 0 1 2.1 2.1v7.8a2.1 2.1 0 0 1-2.1 2.1H5.7a2.1 2.1 0 0 1-2.1-2.1V7.4Z"/><path d="M3.8 10h16.4"/>',
    fileText: '<path d="M6.6 3.4h6.8l4.4 4.4v12.8H6.6z"/><path d="M13.4 3.4v4.4h4.4M9.5 12.5h5.6M9.5 16h4.2"/>',
    sort: '<path d="M8 4.2v15.6M8 19.8 4.8 16.6M8 19.8l3.2-3.2M16 19.8V4.2M16 4.2l-3.2 3.2M16 4.2l3.2 3.2"/>',
    tag: '<path d="M4.2 5.2h6.9l8.7 8.7-5.9 5.9-8.7-8.7V5.2Z"/><circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none"/>',
    rotateCcw: '<path d="M4.2 4.3v5.5h5.5"/><path d="M5.2 9.7a7.6 7.6 0 1 1 1.1 7.4"/>',
    shieldCheck: '<path d="M12 3.4 19.4 6v5.3c0 4.5-3.1 7.7-7.4 9.2-4.3-1.5-7.4-4.7-7.4-9.2V6L12 3.4Z"/><path d="m8.8 11.7 2.2 2.2 4.4-4.5"/>',
    sliders: '<path d="M4 7.2h8.6M17.2 7.2H20M4 16.8h2.6M11.4 16.8H20"/><circle cx="15" cy="7.2" r="2.1"/><circle cx="9" cy="16.8" r="2.1"/>',
    database: '<ellipse cx="12" cy="6" rx="7.4" ry="2.9"/><path d="M4.6 6v5.8c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9V6M4.6 11.8v5.8c0 1.6 3.3 2.9 7.4 2.9s7.4-1.3 7.4-2.9v-5.8"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.9"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
    bookFile: '<path d="M4.4 5.2A2.2 2.2 0 0 1 6.6 3h11.8v16H6.6a2.2 2.2 0 0 1-2.2-2.2V5.2Z"/><path d="M4.4 17a2.2 2.2 0 0 1 2.2-2.2h11.8M8.5 7.5h5.5M8.5 10.5h3.5"/>',
    download: '<path d="M12 4v11"/><path d="m7.5 10.7 4.5 4.5 4.5-4.5"/><path d="M4.5 19.5h15"/>',
    hardDrive: '<path d="M4.2 13.2 6.4 5.7A2 2 0 0 1 8.3 4.3h7.4a2 2 0 0 1 1.9 1.4l2.2 7.5"/><rect x="3.2" y="12.6" width="17.6" height="7.2" rx="2"/><path d="M6.8 16.4h.1M10 16.4h.1"/>',
    lock: '<rect x="5.2" y="10.2" width="13.6" height="9.7" rx="2.2"/><path d="M8.4 10.2V7.7a3.6 3.6 0 0 1 7.2 0v2.5"/>',
    flame: '<path d="M12.2 21c4 0 6.7-2.6 6.7-6.4 0-4.4-3.5-6.7-4.6-10.4-2.5 1.8-3.2 4.3-2.8 6.6-1.4-.5-2.2-1.6-2.5-2.8-1.8 1.6-3.4 4.2-3.4 6.7C5.6 18.6 8.3 21 12.2 21Z"/>',
    type: '<path d="M4 6.2V4.5h10.8v1.7M9.4 4.7v14.8M6.5 19.5h5.8"/><path d="M15 11.2v-1.1h5.5v1.1M17.75 10.4v9.1M16.2 19.5h3.1"/>',
    clock: '<circle cx="12" cy="12" r="8.2"/><path d="M12 7.6v4.9l3.2 1.9"/>',
    sun: '<circle cx="12" cy="12" r="3.7"/><path d="M12 2.8v2M12 19.2v2M4.5 4.5 6 6M18 18l1.5 1.5M2.8 12h2M19.2 12h2M4.5 19.5 6 18M18 6l1.5-1.5"/>',
    moon: '<path d="M20.2 14.1A8.3 8.3 0 0 1 9.9 3.8 8.6 8.6 0 1 0 20.2 14.1Z"/>',
    list: '<path d="M9 6.4h11M9 12h11M9 17.6h11"/><circle cx="4.5" cy="6.4" r=".9" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r=".9" fill="currentColor" stroke="none"/><circle cx="4.5" cy="17.6" r=".9" fill="currentColor" stroke="none"/>',
    quote: '<path d="M10.2 6.2H5.8A1.8 1.8 0 0 0 4 8v3.7a1.8 1.8 0 0 0 1.8 1.8h3.3v1.3c0 1.8-1.2 3-3.2 3.4"/><path d="M20 6.2h-4.4A1.8 1.8 0 0 0 13.8 8v3.7a1.8 1.8 0 0 0 1.8 1.8H19v1.3c0 1.8-1.2 3-3.2 3.4"/>',
    bookmark: '<path d="M6.5 4.2h11a1.5 1.5 0 0 1 1.5 1.5v15.1l-7-4.1-7 4.1V5.7a1.5 1.5 0 0 1 1.5-1.5Z"/>',
    edit: '<path d="M13.6 5.3 18.7 10.4M4.5 19.5l1-5L15.8 4.2a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L9.5 18.5l-5 1Z"/>',
    settings: '<circle cx="12" cy="12" r="3.1"/><path d="M19 12c0-.5 0-1-.1-1.5l2-1.5-2-3.4-2.4 1a7.8 7.8 0 0 0-2.5-1.5L13.7 2H9.9L9.4 5a7.8 7.8 0 0 0-2.5 1.5l-2.4-1-2 3.4 2 1.5a8.6 8.6 0 0 0 0 3l-2 1.5 2 3.4 2.4-1a7.8 7.8 0 0 0 2.5 1.5l.5 3.1h3.8l.5-3.1a7.8 7.8 0 0 0 2.5-1.5l2.4 1 2-3.4-2-1.5c.1-.5.1-1 .1-1.5Z"/>',
    archive: '<rect x="3.5" y="4.2" width="17" height="4.3" rx="1.2"/><path d="M5.2 8.5v9.8a1.7 1.7 0 0 0 1.7 1.7h10.2a1.7 1.7 0 0 0 1.7-1.7V8.5"/><path d="M9.3 12.7h5.4"/>',
    upload: '<path d="M12 16.5v-11"/><path d="m7.5 9.7 4.5-4.5 4.5 4.5"/><path d="M4.5 19.5h15"/>',
    info: '<circle cx="12" cy="12" r="8.3"/><path d="M12 11v5.3M12 7.8h.01"/>',
    check: '<path d="m5 12.5 4.4 4.4L19 7.4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    headphones: '<path d="M4.5 14.5v-2a7.5 7.5 0 0 1 15 0v2"/><rect x="3.2" y="13.5" width="3.8" height="6.2" rx="1.8"/><rect x="17" y="13.5" width="3.8" height="6.2" rx="1.8"/>',
    wifiOff: '<path d="m3 3 18 18"/><path d="M8.8 8.8A10.8 10.8 0 0 1 21 9.7M3 9.7A11 11 0 0 1 6 8.1M6.5 13.1a7.5 7.5 0 0 1 6.3-1.4M10.3 16.5a3.2 3.2 0 0 1 4.2.5M12 20h.01"/>',
    eye: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>',
    batteries: '<rect x="3" y="8.2" width="16" height="7.6" rx="2"/><path d="M21 10.6v2.8"/><rect x="5" y="10.2" width="10.5" height="3.6" rx="1" fill="currentColor" stroke="none"/>',
    signal: '<path d="M4 18.5v-2M8.6 18.5v-5M13.2 18.5v-8M17.8 18.5V6.2" stroke-width="1.9"/>',
    wifi: '<path d="M3 9.2A14 14 0 0 1 21 9.2M6.5 12.8a9.3 9.3 0 0 1 11 0M9.8 16.2a4.8 4.8 0 0 1 4.4 0M12 19.6h.01"/>',
    editNote: '<path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h10a2.5 2.5 0 0 1 2.5 2.5v8"/><path d="M4.5 5.5V19a2 2 0 0 0 2 2H11"/><path d="m13.5 19.5.7-3.4 5.2-5.2a1.9 1.9 0 0 1 2.7 2.7l-5.2 5.2-3.4.7Z"/>',
    bookOpen: '<path d="M12 6.7C10.4 5.1 8.2 4.3 4.5 4.3v13.2c3.7 0 5.9.8 7.5 2.4 1.6-1.6 3.8-2.4 7.5-2.4V4.3c-3.7 0-5.9.8-7.5 2.4Z"/><path d="M12 6.7v13.2"/>',
    sparkle: '<path d="M12 3.5c.5 4.4 2.1 6 6.5 6.5-4.4.5-6 2.1-6.5 6.5-.5-4.4-2.1-6-6.5-6.5 4.4-.5 6-2.1 6.5-6.5Z"/><path d="M19 15.3c.2 1.8.9 2.5 2.7 2.7-1.8.2-2.5.9-2.7 2.7-.2-1.8-.9-2.5-2.7-2.7 1.8-.2 2.5-.9 2.7-2.7Z"/>'
  };

  function icon(name, size = 20, stroke = 1.55) {
    return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  }

  function brandMark() {
    return `<svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="23" height="23" rx="6.5" fill="currentColor"/>
      <path d="M9 5.4v7.5l3.1-2 3.1 2V5.4" fill="var(--brand-cut, #f5f1e8)"/>
      <path d="M8.8 17.2h10.4M8.8 20.4h7.2" stroke="var(--brand-cut, #f5f1e8)" stroke-width="1.25" stroke-linecap="round"/>
    </svg>`;
  }

  function statusIcons() {
    return `<div class="status-icons" aria-hidden="true">
      <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
        <rect x="0" y="7.1" width="2.3" height="2.9" rx=".6"/>
        <rect x="4.1" y="5" width="2.3" height="5" rx=".6"/>
        <rect x="8.2" y="2.7" width="2.3" height="7.3" rx=".6"/>
        <rect x="12.3" y=".4" width="2.3" height="9.6" rx=".6"/>
      </svg>
      <svg width="14" height="10" viewBox="0 0 24 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <path d="M1.8 6.4a14.6 14.6 0 0 1 20.4 0"/>
        <path d="M5.6 10.2a9.2 9.2 0 0 1 12.8 0"/>
        <path d="M9.4 13.8a4.3 4.3 0 0 1 5.2 0"/>
        <circle cx="12" cy="16.5" r=".9" fill="currentColor" stroke="none"/>
      </svg>
      <svg width="21" height="10" viewBox="0 0 23 11" fill="none" stroke="currentColor">
        <rect x=".55" y=".55" width="19" height="9.9" rx="2.6" stroke-width="1.1"/>
        <path d="M21.4 3.7v3.6" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="2.4" y="2.4" width="12.2" height="6.2" rx="1.3" fill="currentColor" stroke="none"/>
      </svg>
    </div>`;
  }

  function statusBar() {
    return `<div class="statusbar">
      <span class="status-time">9:41</span>
      ${statusIcons()}
    </div>`;
  }

  function islandAndHome() {
    return `<div class="dynamic-island" aria-hidden="true"><span></span></div><div class="home-indicator" aria-hidden="true"></div>`;
  }

  function brandLockup() {
    return `<a class="app-brand" href="#" aria-label="纸间">
      <span class="brand-mark brand-mark--app">${brandMark()}</span>
      <span class="app-brand-name">纸间</span>
    </a>`;
  }

  /* ------------------------------------------------------------------------
     Books & cover artwork
     ---------------------------------------------------------------------- */

  const BOOKS = {
    train: { id: "train", title: "夜行列车", author: "顾川", genre: "长篇小说", cover: "train", status: "reading", progress: 46 },
    island: { id: "island", title: "岛屿来信", author: "沈青禾", genre: "书信随笔", cover: "island", status: "reading", progress: 18 },
    slow: { id: "slow", title: "慢速生活", author: "周野", genre: "生活方式", cover: "slow", status: "reading", progress: 72 },
    light: { id: "light", title: "光的背面", author: "程一", genre: "摄影随笔", cover: "light", status: "want", progress: 0 },
    sea: { id: "sea", title: "把海带回家", author: "苏木", genre: "短篇集", cover: "sea", status: "want", progress: 0 },
    plant: { id: "plant", title: "房间里的植物", author: "林见", genre: "生活随笔", cover: "plant", status: "want", progress: 0 },
    moss: { id: "moss", title: "山中四季", author: "林见", genre: "自然文学", cover: "moss", status: "done", progress: 100 },
    alone: { id: "alone", title: "独处练习", author: "沈青禾", genre: "随笔", cover: "alone", status: "done", progress: 100 },
    boat: { id: "boat", title: "向晚的船", author: "顾川", genre: "小说", cover: "boat", status: "done", progress: 100 }
  };

  const SHELF_ORDER = {
    reading: ["island", "slow", "train"],
    want: ["light", "sea", "plant"],
    done: ["moss", "alone", "boat"]
  };

  const NOTES = [
    { id: "n1", bookId: "moss", page: 112, date: "10月24日", kind: "highlight", text: "山不说话，但它记得每一场雨。", tag: "自然" },
    { id: "n2", bookId: "island", page: 46, date: "10月22日", kind: "highlight", text: "海把信送到岸边，却从不问谁收。", tag: "海" },
    { id: "n3", bookId: "train", page: 203, date: "10月20日", kind: "thought", text: "我们总以为隧道很长，其实只是灯太少了。", thought: "想起去年坐夜车去厦门，车厢里只剩呼吸声。", tag: "夜行" },
    { id: "n4", bookId: "moss", page: 78, date: "10月18日", kind: "highlight", text: "风穿过松林，像翻动一本没有字的书。", tag: "自然" },
    { id: "n5", bookId: "slow", page: 32, date: "10月12日", kind: "highlight", text: "把一天过慢一点，时间就会多出一小块空白。", tag: "时间" },
    { id: "n6", bookId: "alone", page: 165, date: "10月06日", kind: "thought", text: "独处不是没有人，是不必解释自己。", thought: "在阳台上坐到天黑，什么也没做。", tag: "独处" },
    { id: "n7", bookId: "sea", page: 61, date: "09月28日", kind: "highlight", text: "潮水退去后，沙滩上留下了一整个下午的光。", tag: "海" },
    { id: "n8", bookId: "light", page: 24, date: "09月20日", kind: "highlight", text: "光消失的地方，影子才开始有了形状。", tag: "光" }
  ];

  const NOTE_GROUPS = [
    { bookId: "moss", count: 24, last: "10.24" },
    { bookId: "island", count: 17, last: "10.22" },
    { bookId: "train", count: 15, last: "10.20" },
    { bookId: "slow", count: 12, last: "10.12" },
    { bookId: "alone", count: 10, last: "10.06" },
    { bookId: "boat", count: 9, last: "09.30" }
  ];

  const NOTE_TAGS = [
    { name: "自然", count: 18 },
    { name: "独处", count: 12 },
    { name: "时间", count: 10 },
    { name: "海", count: 9 },
    { name: "夜行", count: 8 },
    { name: "光", count: 7 }
  ];

  const LIBRARY_IDS = ["island", "slow", "train", "light", "sea", "plant", "moss", "alone", "boat"];

  const UI_STATE = {
    prefs: { font: "serif", size: 17, leading: "normal", theme: "paper", turn: "horizontal" },
    backup: { auto: true, last: "3 天前", size: "18.6 MB" },
    exportFormat: "markdown",
    recentSearches: {
      books: ["夜行", "沈青禾", "自然"],
      notes: ["山", "独处", "夜"]
    }
  };

  const TAG_LABELS = { serif: "宋体", sans: "黑体" };
  const THEME_LABELS = { paper: "纸白", sand: "暖沙", night: "夜读" };
  const LEADING_LABELS = { compact: "紧凑", normal: "适中", loose: "宽松" };
  const TURN_LABELS = { horizontal: "左右翻", vertical: "上下滚" };

  const COVER_ART = {
    train: `
      <path d="M0 83h100" stroke="#87948E" opacity=".5"/>
      <circle cx="64" cy="37" r="17" fill="none" stroke="#D48656" stroke-width="1" opacity=".75"/>
      <rect x="39" y="51" width="28" height="33" rx="2" fill="#10191D"/>
      <path d="M44 59h7M54 59h7M44 66h7M54 66h7" stroke="#D48656" stroke-width="2.4" opacity=".9"/>
      <path d="M33 84h44" stroke="#E9DFCD" stroke-width="1.8" opacity=".85"/>
      <path d="M28 89h34" stroke="#D48656" stroke-width="1" opacity=".7"/>
      <circle cx="78" cy="93" r="1.4" fill="#D48656"/>
    `,
    island: `
      <circle cx="35" cy="40" r="22" fill="#C55D41"/>
      <path d="M0 88c18-9 32 5 50-1s31-9 50-1v58H0Z" fill="#35564E"/>
      <path d="M0 96c18-6 34 6 52 0s31-6 48-1" stroke="#E8DDC7" stroke-width="1.15" fill="none" opacity=".75"/>
      <path d="M0 105c18-6 34 6 52 0s31-6 48-1" stroke="#E8DDC7" stroke-width="1" fill="none" opacity=".38"/>
      <path d="M0 114c18-6 34 6 52 0s31-6 48-1" stroke="#E8DDC7" stroke-width="1" fill="none" opacity=".2"/>
    `,
    slow: `
      <circle cx="71" cy="40" r="24" fill="#2C4F89"/>
      <path d="M7 113V75c0-17 13-30 30-30h19" stroke="#C25A3C" stroke-width="1.4" fill="none"/>
      <rect x="13" y="96" width="11" height="11" fill="#D7AA54"/>
      <path d="M82 88h10M82 94h6" stroke="#2C4F89" opacity=".55"/>
      <circle cx="84" cy="65" r="2" fill="#C25A3C"/>
    `,
    light: `
      <circle cx="58" cy="48" r="31" fill="#E4D6BE"/>
      <circle cx="45" cy="38" r="31" fill="#202524"/>
      <path d="M0 118h100" stroke="#E4D6BE" opacity=".35"/>
      <circle cx="78" cy="91" r="1.8" fill="#E4D6BE" opacity=".8"/>
      <circle cx="60" cy="102" r="1" fill="#E4D6BE" opacity=".5"/>
    `,
    sea: `
      <circle cx="70" cy="30" r="10" fill="#E6D5B4" opacity=".9"/>
      <path d="M0 87c15-8 26 7 42 0s26-7 58-2" stroke="#E8DBC2" fill="none" stroke-width="1.2" opacity=".8"/>
      <path d="M0 98c15-8 26 7 42 0s26-7 58-2" stroke="#E8DBC2" fill="none" stroke-width="1" opacity=".45"/>
      <path d="M0 109c15-8 26 7 42 0s26-7 58-2" stroke="#E8DBC2" fill="none" stroke-width="1" opacity=".25"/>
      <path d="M14 55h1M24 51h1M34 48h1" stroke="#E8DBC2" stroke-linecap="round" opacity=".55"/>
    `,
    plant: `
      <path d="M67 119V52" stroke="#3C5B46" stroke-width="1.15"/>
      <path d="M67 87c-17-3-24-14-25-27 14 0 24 10 25 27Z" fill="#486A51" opacity=".92"/>
      <path d="M67 70c4-15 14-22 27-22-1 14-11 23-27 22Z" fill="#82947B" opacity=".88"/>
      <path d="M67 101c12-2 19-9 22-19-11 0-19 7-22 19Z" fill="#5D7962" opacity=".75"/>
      <circle cx="35" cy="38" r="9" fill="#BE5B3E" opacity=".9"/>
    `,
    moss: `
      <circle cx="31" cy="38" r="13" fill="#D7A65F" opacity=".9"/>
      <path d="M65 120V53M65 88 51 74M65 73l13-17M65 102l18-16" stroke="#E7DCC6" stroke-width="1" opacity=".72"/>
      <ellipse cx="51" cy="72" rx="7" ry="2.8" fill="#E7DCC6" transform="rotate(41 51 72)" opacity=".65"/>
      <ellipse cx="77" cy="56" rx="6" ry="2.5" fill="#E7DCC6" transform="rotate(-52 77 56)" opacity=".5"/>
      <ellipse cx="82" cy="86" rx="6" ry="2.5" fill="#E7DCC6" transform="rotate(39 82 86)" opacity=".42"/>
    `,
    alone: `
      <path d="M28 118V77a25 25 0 0 1 50 0v41" fill="none" stroke="#E9DDC6" stroke-width="1.1" opacity=".8"/>
      <circle cx="53" cy="75" r="4.5" fill="#E9DDC6" opacity=".9"/>
      <path d="M15 118h72" stroke="#E9DDC6" opacity=".45"/>
      <path d="M78 25v14M86 25v8" stroke="#E9DDC6" stroke-width=".8" opacity=".55"/>
      <path d="M11 58h22" stroke="#E9DDC6" opacity=".25"/>
    `,
    boat: `
      <circle cx="34" cy="43" r="18" fill="#E4D5BA" opacity=".9"/>
      <path d="M0 103c16-6 27 6 44 0s26-6 56-1" stroke="#E4D5BA" stroke-width="1.15" fill="none" opacity=".7"/>
      <path d="M0 113c16-6 27 6 44 0s26-6 56-1" stroke="#E4D5BA" stroke-width="1" fill="none" opacity=".35"/>
      <path d="M23 119h48l-8 9H31Z" fill="#E4D5BA" opacity=".66"/>
      <path d="M41 98h20" stroke="#E4D5BA" opacity=".3"/>
    `
  };

  function bookCover(book, size = "row") {
    return `<div class="book-cover book-cover--${size} cover--${book.cover}" aria-hidden="true">
      <svg class="cover-art" viewBox="0 0 100 144" preserveAspectRatio="xMidYMid slice">${COVER_ART[book.cover]}</svg>
      <span class="cover-title">${book.title}</span>
      <span class="cover-author">${book.author}</span>
    </div>`;
  }

  /* ------------------------------------------------------------------------
     Shared app pieces
     ---------------------------------------------------------------------- */

  function tabbar(active, interactive = false) {
    const tabs = [
      { id: "shelf", label: "书架", icon: "shelf" },
      { id: "notes", label: "摘录", icon: "highlight" },
      { id: "profile", label: "我的", icon: "user" }
    ];
    const activeIndex = Math.max(0, tabs.findIndex((tab) => tab.id === active));
    const inner = tabs.map((tab) => {
      const content = `<span class="tab-icon">${icon(tab.icon, 20, 1.5)}</span><span class="tab-label">${tab.label}</span>`;
      if (interactive) {
        return `<button class="tab${active === tab.id ? " is-active" : ""}" type="button" data-tab="${tab.id}" aria-label="${tab.label}" aria-selected="${active === tab.id}">${content}</button>`;
      }
      return `<div class="tab${active === tab.id ? " is-active" : ""}" aria-hidden="true">${content}</div>`;
    }).join("");
    return `<nav class="tabbar" aria-label="主导航">
      <span class="tabbar-light" aria-hidden="true"></span>
      <div class="tab-track">
        <span class="tab-glider" style="--tab-index:${activeIndex}" aria-hidden="true"></span>
        ${inner}
      </div>
    </nav>`;
  }

  function topbar(kind, interactive = false) {
    let actions = "";
    if (kind === "shelf") {
      actions = `<span class="offline-pill"><span class="status-dot"></span><span class="offline-label">离线可读</span></span>
        ${interactive
          ? `<button class="round-button" type="button" data-subpage="search-books" aria-label="搜索书架">${icon("search", 17)}</button>
             <button class="round-button round-button--add" type="button" data-file-import aria-label="导入本地书籍">${icon("plus", 17)}</button>`
          : `<span class="round-button round-button--static">${icon("search", 17)}</span>
             <span class="round-button round-button--static round-button--add">${icon("plus", 17)}</span>`}`;
    } else if (kind === "notes") {
      actions = `${interactive
        ? `<button class="round-button" type="button" data-subpage="search-notes" aria-label="搜索摘录">${icon("search", 17)}</button>`
        : `<span class="round-button round-button--static">${icon("search", 17)}</span>`}
        ${interactive
          ? `<button class="round-button" type="button" data-subpage="organize-notes" aria-label="整理摘录">${icon("more", 17)}</button>`
          : `<span class="round-button round-button--static">${icon("more", 17)}</span>`}`;
    } else {
      actions = `${interactive
        ? `<button class="round-button" type="button" data-subpage="settings" aria-label="设置">${icon("settings", 17)}</button>`
        : `<span class="round-button round-button--static">${icon("settings", 17)}</span>`}`;
    }
    return `<header class="topbar">${brandLockup()}<div class="topbar-actions">${actions}</div></header>`;
  }

  function sectionHeading(title, count, action, interactive = false) {
    const actionMarkup = interactive
      ? `<button class="text-link" type="button" data-toast="${action}">${action} ${icon("chevronRight", 13, 1.7)}</button>`
      : `<span class="text-link">${action} ${icon("chevronRight", 13, 1.7)}</span>`;
    return `<div class="section-heading">
      <div class="section-title"><h2>${title}</h2><span class="section-count">${count}</span></div>
      ${actionMarkup}
    </div>`;
  }

  /* ------------------------------------------------------------------------
     Screen 01 · Shelf
     ---------------------------------------------------------------------- */

  function shelfBookCard(book, interactive) {
    const progressLabel = book.status === "done" ? "已读完" : book.status === "want" ? "未读" : `${book.progress}%`;
    const meta = `<div class="book-meta">
      <div class="book-title-line"><span class="book-title">${book.title}</span><span class="book-progress book-progress--${book.status}">${progressLabel}</span></div>
      <p class="book-author">${book.author} · ${book.genre}</p>
    </div>`;
    const inner = `${bookCover(book, "row")}${meta}`;
    if (interactive) {
      return `<button class="book-card" type="button" data-book-id="${book.id}" aria-label="${book.title}，${book.author}">${inner}</button>`;
    }
    return `<div class="book-card">${inner}</div>`;
  }

  function shelfBookRow(filter, interactive) {
    return SHELF_ORDER[filter].map((id) => shelfBookCard(BOOKS[id], interactive)).join("");
  }

  function screenShelf(interactive = false) {
    const cards = shelfBookRow("reading", interactive);
    return `<section class="screen screen--shelf is-active" data-screen="shelf" aria-label="书架">
      ${statusBar()}
      ${topbar("shelf", interactive)}
      <div class="screen-body shelf-body">
        <header class="page-heading">
          <div class="page-heading-main">
            <span class="eyebrow">10月26日 · 周一</span>
            <h1>书架</h1>
          </div>
          <div class="heading-stat"><b>09</b><span>本藏书<br/>全离线</span></div>
        </header>

        <div class="status-tabs" role="tablist" aria-label="阅读状态">
          <button class="status-tab is-active" type="button" data-shelf-filter="reading" role="tab" aria-selected="true"><span>在读</span><b>3</b></button>
          <button class="status-tab" type="button" data-shelf-filter="want" role="tab" aria-selected="false"><span>想读</span><b>3</b></button>
          <button class="status-tab" type="button" data-shelf-filter="done" role="tab" aria-selected="false"><span>读完</span><b>3</b></button>
        </div>

        <button class="continue-card" type="button" data-open-reader aria-label="继续阅读夜行列车">
          <span class="continue-glow" aria-hidden="true"></span>
          <span class="continue-cover">${bookCover(BOOKS.train, "card")}</span>
          <span class="continue-copy">
            <span class="card-kicker"><span class="status-dot status-dot--warm"></span>继续阅读</span>
            <strong class="continue-title">夜行列车</strong>
            <span class="continue-chapter">第 8 章 · 隧道里的灯</span>
            <span class="progress-track"><span style="width:46%"></span></span>
            <span class="continue-meta"><span>46%</span><span>约 3 小时 12 分</span></span>
          </span>
          <span class="continue-arrow" aria-hidden="true">${icon("arrowRight", 18, 1.6)}</span>
        </button>

        ${sectionHeading("我的书架", "09", "管理", interactive)}
        <div class="book-row" data-shelf-row>${cards}</div>

        <div class="storage-line">
          <div class="storage-line-main">
            <span class="status-dot"></span>
            <div><b>9 本图书可离线阅读</b><span>占用 1.6 GB / 8 GB</span></div>
          </div>
          ${interactive
            ? `<button class="text-link text-link--quiet" type="button" data-toast="离线空间 · 已使用 1.6 GB">${icon("hardDrive", 14)} 空间</button>`
            : `<span class="text-link text-link--quiet">${icon("hardDrive", 14)} 空间</span>`}
        </div>

        ${interactive
          ? `<button class="shelf-quote" type="button" data-goto-notes aria-label="查看上次摘录">
              <span class="shelf-quote-mark" aria-hidden="true">“</span>
              <span class="shelf-quote-content">
                <span class="shelf-quote-top"><span>上次摘录</span><span>10.24</span></span>
                <span class="shelf-quote-text">山不说话，<br/>但它记得每一场雨。</span>
                <span class="shelf-quote-foot"><span>《山中四季》· 林见</span><span>P.112 · 摘录</span></span>
              </span>
            </button>`
          : `<aside class="shelf-quote">
              <span class="shelf-quote-mark" aria-hidden="true">“</span>
              <div class="shelf-quote-content">
                <div class="shelf-quote-top"><span>上次摘录</span><span>10.24</span></div>
                <p class="shelf-quote-text">山不说话，<br/>但它记得每一场雨。</p>
                <div class="shelf-quote-foot"><span>《山中四季》· 林见</span><span>P.112 · 摘录</span></div>
              </div>
            </aside>`}
      </div>
    </section>`;
  }

  /* ------------------------------------------------------------------------
     Screen 02 · Notes
     ---------------------------------------------------------------------- */

  function screenNotes(interactive = false) {
    const feature = `<article class="quote-feature" data-note-kind="highlight">
      <div class="quote-feature-top">
        <span>《山中四季》</span>
        <span class="quote-page">P.112</span>
      </div>
      <blockquote>山不说话，<br/>但它记得每一场雨。</blockquote>
      <div class="quote-feature-bottom">
        <span class="content-tag"># 自然</span>
        <span>10月24日 · 划线</span>
      </div>
    </article>`;

    const highlightNote = `<article class="note-item" data-note-kind="highlight">
      <div class="note-source">
        <span class="note-mini-cover">${bookCover(BOOKS.island, "mini")}</span>
        <div class="note-source-copy"><b>岛屿来信</b><span>沈青禾 · 3 条摘录</span></div>
        <span class="note-page">P.46</span>
      </div>
      <blockquote>海把信送到岸边，<br/>却从不问谁收。</blockquote>
      <div class="note-footer">
        <span class="note-kind">${icon("highlight", 13)} 划线</span>
        <span class="note-time">10月22日</span>
        <span class="content-tag content-tag--light"># 海</span>
      </div>
    </article>`;

    const thoughtNote = `<article class="note-item note-item--thought" data-note-kind="thought">
      <div class="note-source">
        <span class="note-mini-cover">${bookCover(BOOKS.train, "mini")}</span>
        <div class="note-source-copy"><b>夜行列车</b><span>顾川 · 2 条想法</span></div>
        <span class="note-page">P.203</span>
      </div>
      <blockquote>我们总以为隧道很长，<br/>其实只是灯太少了。</blockquote>
      <div class="thought-note">
        <span class="thought-label">${icon("editNote", 13)} 我的想法</span>
        <p>想起去年坐夜车去厦门，车厢里只剩呼吸声。</p>
      </div>
      <div class="note-footer">
        <span class="note-kind">${icon("editNote", 13)} 想法</span>
        <span class="note-time">10月20日</span>
        <span class="content-tag content-tag--light"># 夜行</span>
      </div>
    </article>`;

    return `<section class="screen screen--notes" data-screen="notes" aria-label="摘录">
      ${statusBar()}
      ${topbar("notes", interactive)}
      <div class="screen-body notes-body">
        <header class="page-heading page-heading--compact">
          <div class="page-heading-main">
            <span class="eyebrow">HIGHLIGHTS &amp; NOTES</span>
            <h1>摘录</h1>
          </div>
          <div class="heading-stat"><b>87</b><span>条摘录<br/>来自 6 本</span></div>
        </header>
        <p class="notes-intro">被留下的句子，会再活一次。</p>

        <div class="filter-row" role="tablist" aria-label="摘录类型">
          <button class="filter-chip is-active" type="button" data-note-filter="all" role="tab" aria-selected="true">全部 <span>87</span></button>
          <button class="filter-chip" type="button" data-note-filter="highlight" role="tab" aria-selected="false">划线 <span>61</span></button>
          <button class="filter-chip" type="button" data-note-filter="thought" role="tab" aria-selected="false">想法 <span>26</span></button>
        </div>

        <div class="notes-list" data-notes-list>
          ${feature}
          <div class="note-date-line"><span>最近</span><i></i><span>10.22</span></div>
          ${highlightNote}
          ${thoughtNote}
        </div>
      </div>
    </section>`;
  }

  /* ------------------------------------------------------------------------
     Screen 03 · Profile
     ---------------------------------------------------------------------- */

  function chartBars() {
    const values = [32, 54, 28, 66, 44, 82, 58];
    const labels = ["一", "二", "三", "四", "五", "六", "日"];
    return values.map((value, index) => `<div class="chart-day${index === 5 ? " is-highlight" : ""}">
      <span class="chart-bar" style="--bar:${value}%"></span>
      <span class="chart-label">${labels[index]}</span>
    </div>`).join("");
  }

  function settingRow(iconName, title, value, toast, interactive, subpage = "", settingKey = "") {
    const action = interactive
      ? (subpage ? ` data-subpage="${subpage}"` : ` data-toast="${toast}"`)
      : " tabindex=\"-1\"";
    return `<button class="setting-row" type="button"${action}>
      <span class="setting-icon">${icon(iconName, 17)}</span>
      <span class="setting-copy"><b>${title}</b><small${settingKey ? ` data-setting-value="${settingKey}"` : ""}>${value}</small></span>
      <span class="setting-chevron">${icon("chevronRight", 14)}</span>
    </button>`;
  }

  function screenProfile(interactive = false) {
    return `<section class="screen screen--profile" data-screen="profile" aria-label="我的">
      ${statusBar()}
      ${topbar("profile", interactive)}
      <div class="screen-body profile-body">
        <header class="profile-heading">
          <div class="avatar" aria-hidden="true"><span>林</span></div>
          <div class="profile-copy">
            <span class="eyebrow">READING LIFE · DAY 386</span>
            <h1>林深</h1>
            <p>不急着读完，慢慢读。</p>
          </div>
          <span class="local-chip">${icon("lock", 11)} 本机</span>
        </header>

        <section class="reading-card">
          <div class="reading-card-top">
            <div>
              <span class="card-kicker">本周阅读</span>
              <strong class="reading-total">3<small>时</small>42<small>分</small></strong>
            </div>
            <span class="reading-trend">+18% <small>较上周</small></span>
          </div>
          <div class="week-chart" aria-label="本周阅读时长柱状图">${chartBars()}</div>
          <div class="reading-facts">
            <div><b>12</b><span>连续天数</span></div>
            <div><b>24</b><span>今年读完</span></div>
            <div><b>87</b><span>摘录条数</span></div>
          </div>
        </section>

        <section class="goal-card">
          <div class="goal-copy">
            <span class="card-kicker">2026 阅读目标</span>
            <h2>今年，读满 <b>36</b> 本。</h2>
            <div class="goal-progress"><span style="width:67%"></span></div>
            <div class="goal-meta"><span>已读 <b>24</b> 本</span><span>还差 12 本</span></div>
          </div>
          <div class="goal-ring" style="--progress:67%" aria-label="年度阅读目标完成 67%">
            <span><b>67</b><i>%</i></span>
          </div>
        </section>

        <section class="space-card">
          <div class="space-head">
            <span class="card-kicker">${icon("hardDrive", 13)} 离线空间</span>
            ${interactive
              ? `<button class="text-link text-link--quiet" type="button" data-toast="离线空间 · 已使用 1.6 GB">管理 ${icon("chevronRight", 12)}</button>`
              : `<span class="text-link text-link--quiet">管理 ${icon("chevronRight", 12)}</span>`}
          </div>
          <div class="space-track"><span style="width:22%"></span></div>
          <div class="space-meta"><b>1.8 GB</b><span>共 8 GB · 9 本书 · 87 条摘录</span></div>
        </section>

        <div class="settings-list">
          ${settingRow("type", "阅读偏好", `${TAG_LABELS[UI_STATE.prefs.font]} · ${UI_STATE.prefs.size}pt · ${THEME_LABELS[UI_STATE.prefs.theme]}`, "阅读偏好会记住你的每一次选择", interactive, "reading-prefs", "prefs")}
          ${settingRow("archive", "本地备份", `${UI_STATE.backup.last} · ${UI_STATE.backup.auto ? "自动备份" : "手动备份"}`, "下一次自动备份：本机时间 凌晨 3:00", interactive, "local-backup", "backup")}
          ${settingRow("upload", "导入与导出", "EPUB · TXT · PDF", "支持从本地文件导入，或导出全部摘录", interactive, "import-export")}
        </div>

        <div class="local-note">
          ${icon("lock", 13)}
          <span>无需账号，数据只保存在这台设备。</span>
        </div>
      </div>
    </section>`;
  }

  /* ------------------------------------------------------------------------
     Secondary pages: shared shell + search
     ---------------------------------------------------------------------- */

  function subpageFrame(key, navLabel, content, action = "") {
    return `<section class="subpage" data-subpage-key="${key}" aria-label="${navLabel}">
      ${statusBar()}
      <header class="subpage-nav">
        <button class="round-button subpage-back" type="button" data-subpage-back aria-label="返回">${icon("chevronLeft", 18)}</button>
        <span class="subpage-nav-label">${navLabel}</span>
        ${action || `<span class="subpage-nav-spacer" aria-hidden="true"></span>`}
      </header>
      <div class="subpage-body">${content}</div>
    </section>`;
  }

  function subpageHeading(eyebrow, title, description = "") {
    return `<header class="subpage-heading">
      <span class="eyebrow">${eyebrow}</span>
      <h1>${title}</h1>
      ${description ? `<p>${description}</p>` : ""}
    </header>`;
  }

  function searchFieldMarkup(scope, placeholder, label) {
    return `<div class="search-field">
      ${icon("search", 18)}
      <input type="text" inputmode="search" autocomplete="off" spellcheck="false" placeholder="${placeholder}" aria-label="${label}" data-${scope}-search />
      <button class="search-clear" type="button" data-search-clear aria-label="清除搜索" hidden>${icon("close", 14)}</button>
    </div>`;
  }

  function bookProgressLabel(book) {
    return book.status === "done" ? "已读完" : book.status === "want" ? "未读" : `${book.progress}%`;
  }

  function searchBookRow(book) {
    return `<button class="search-book-row" type="button" data-search-book="${book.id}" aria-label="打开《${book.title}》">
      <span class="search-book-cover">${bookCover(book, "mini")}</span>
      <span class="search-book-copy">
        <b>${book.title}</b>
        <small>${book.author} · ${book.genre}</small>
      </span>
      <span class="search-book-tail">
        <em>${bookProgressLabel(book)}</em>
        ${icon("chevronRight", 13)}
      </span>
    </button>`;
  }

  function initialBookSearchMarkup() {
    return `<section class="subpage-section">
      <div class="subpage-section-head">
        <span class="section-label">最近搜索</span>
        <span class="section-note">本机记录</span>
      </div>
      <div class="search-chip-row">
        ${UI_STATE.recentSearches.books.map((term) => `<button class="search-chip" type="button" data-search-preset="${term}" data-search-scope="books">${term}</button>`).join("")}
      </div>
    </section>

    <section class="subpage-section">
      <div class="subpage-section-head">
        <h2>全部藏书</h2>
        <span class="section-note">9 本 · 全部离线</span>
      </div>
      <div class="search-book-list">
        ${["island", "slow", "train", "light", "sea", "plant"].map((id) => searchBookRow(BOOKS[id])).join("")}
      </div>
      <p class="subpage-footnote">${icon("lock", 12)} 所有检索都在本机完成，不会上传关键词。</p>
    </section>`;
  }

  function bookSearchResultsMarkup(query) {
    const q = query.trim().toLowerCase();
    if (!q) return initialBookSearchMarkup();
    const matches = LIBRARY_IDS
      .map((id) => BOOKS[id])
      .filter((book) => `${book.title} ${book.author} ${book.genre}`.toLowerCase().includes(q));

    return `<section class="subpage-section">
      <div class="search-result-summary">
        <span>搜索结果</span>
        <span><b>${matches.length}</b> 本</span>
      </div>
      ${matches.length
        ? `<div class="search-book-list">${matches.map(searchBookRow).join("")}</div>`
        : `<div class="search-empty">
            <span class="search-empty-icon">${icon("search", 23)}</span>
            <b>没有找到这本书</b>
            <p>试试书名、作者，或「自然」「书信」这样的分类。</p>
          </div>`}
      <p class="subpage-footnote">${icon("lock", 12)} 所有检索都在本机完成，不会上传关键词。</p>
    </section>`;
  }

  function searchBooksPage() {
    return subpageFrame("search-books", "SEARCH · LIBRARY", `
      ${subpageHeading("LOCAL LIBRARY · 9 BOOKS", "找一本书", "在已经离线的藏书中，找到此刻想读的那一本。")}
      ${searchFieldMarkup("book", "搜索书名、作者或分类", "搜索书架")}
      <div data-book-search-results>${initialBookSearchMarkup()}</div>
    `);
  }

  function noteSearchCard(note) {
    const book = BOOKS[note.bookId];
    const kind = note.kind === "thought" ? "想法" : "划线";
    return `<article class="search-note-card">
      <div class="search-note-top">
        <span>《${book.title}》</span>
        <span>P.${note.page} · ${kind}</span>
      </div>
      <blockquote>${note.text}</blockquote>
      ${note.kind === "thought" ? `<p class="search-thought">${note.thought}</p>` : ""}
      <div class="search-note-foot">
        <span># ${note.tag}</span>
        <span>${note.date}</span>
      </div>
    </article>`;
  }

  function initialNoteSearchMarkup() {
    return `<section class="subpage-section">
      <div class="subpage-section-head">
        <span class="section-label">从一句话开始</span>
        <span class="section-note">试试</span>
      </div>
      <div class="search-chip-row">
        ${["山", "海", "独处", "夜行", "时间", "光"].map((term) => `<button class="search-chip" type="button" data-search-preset="${term}" data-search-scope="notes">${term}</button>`).join("")}
      </div>
    </section>

    <section class="subpage-section">
      <div class="subpage-section-head">
        <h2>最近留下</h2>
        <span class="section-note">4 条</span>
      </div>
      <div class="search-note-list">
        ${NOTES.slice(0, 4).map(noteSearchCard).join("")}
      </div>
      <p class="subpage-footnote">${icon("lock", 12)} 所有搜索都在本机完成，不会上传关键词。</p>
    </section>`;
  }

  function noteSearchResultsMarkup(query) {
    const q = query.trim().toLowerCase();
    if (!q) return initialNoteSearchMarkup();
    const matches = NOTES.filter((note) => {
      const book = BOOKS[note.bookId];
      return `${note.text} ${note.thought || ""} ${note.tag} ${book.title} ${book.author}`
        .toLowerCase()
        .includes(q);
    });

    return `<section class="subpage-section">
      <div class="search-result-summary">
        <span>搜索结果</span>
        <span><b>${matches.length}</b> 条</span>
      </div>
      ${matches.length
        ? `<div class="search-note-list">${matches.map(noteSearchCard).join("")}</div>`
        : `<div class="search-empty">
            <span class="search-empty-icon">${icon("quote", 23)}</span>
            <b>没有找到这句话</b>
            <p>试试摘录里的词、书名、作者，或标签。</p>
          </div>`}
      <p class="subpage-footnote">${icon("lock", 12)} 所有搜索都在本机完成，不会上传关键词。</p>
    </section>`;
  }

  function searchNotesPage() {
    return subpageFrame("search-notes", "SEARCH · NOTES", `
      ${subpageHeading("87 HIGHLIGHTS · 6 BOOKS", "找一句话", "在摘录、想法和书名里，找回曾经喜欢的句子。")}
      ${searchFieldMarkup("note", "搜索句子、书名或标签", "搜索摘录")}
      <div data-note-search-results>${initialNoteSearchMarkup()}</div>
    `);
  }

  /* ------------------------------------------------------------------------
     Secondary pages: organize, settings, preferences, backup, files
     ---------------------------------------------------------------------- */

  function organizeNotesPage() {
    const action = `<button class="subpage-nav-action" type="button" data-toast="进入多选模式">选择</button>`;
    const groups = NOTE_GROUPS.map((group) => {
      const book = BOOKS[group.bookId];
      return `<button class="organize-book-row" type="button" data-toast="按《${book.title}》查看 ${group.count} 条摘录">
        <span class="organize-book-cover">${bookCover(book, "mini")}</span>
        <span class="organize-book-copy">
          <b>${book.title}</b>
          <small>${book.author} · 最近 ${group.last}</small>
        </span>
        <span class="organize-book-count">${group.count}</span>
        ${icon("chevronRight", 13)}
      </button>`;
    }).join("");

    const tags = NOTE_TAGS.map((tag) => `<button class="tag-chip" type="button" data-toast="标签 #${tag.name} · ${tag.count} 条"># ${tag.name}<small>${tag.count}</small></button>`).join("");

    return subpageFrame("organize-notes", "ORGANIZE · NOTES", `
      ${subpageHeading("LOCAL ARCHIVE · 87 NOTES", "整理摘录", "按书归档，或从标签重新找到一句话。")}
      <div class="organize-summary">
        <div><b>87</b><span>条摘录</span></div>
        <div><b>06</b><span>本书</span></div>
        <div><b>12</b><span>个标签</span></div>
      </div>

      <div class="organize-sort-row">
        <button class="filter-chip is-active" type="button" data-organize-sort="time">最近</button>
        <button class="filter-chip" type="button" data-organize-sort="book">按书</button>
        <button class="filter-chip" type="button" data-organize-sort="tag">按标签</button>
        <span class="organize-local">${icon("lock", 11)} 仅存储于本机</span>
      </div>

      <section class="subpage-section">
        <div class="subpage-section-head">
          <h2>按书查看</h2>
          <span class="section-note">6 本</span>
        </div>
        <div class="organize-book-list">${groups}</div>
      </section>

      <section class="subpage-section">
        <div class="subpage-section-head">
          <h2>标签</h2>
          <span class="section-note">12 个</span>
        </div>
        <div class="tag-cloud">${tags}</div>
      </section>

      <p class="subpage-footnote">选择模式可以批量移动、删除或导出摘录。</p>
    `, action);
  }

  function settingsPageRow(iconName, title, value, target, toast = "") {
    const action = target ? `data-subpage="${target}"` : `data-toast="${toast}"`;
    return `<button class="settings-page-row" type="button" ${action}>
      <span class="settings-page-icon">${icon(iconName, 17)}</span>
      <span class="settings-page-copy"><b>${title}</b><small>${value}</small></span>
      <span class="settings-page-chevron">${icon("chevronRight", 14)}</span>
    </button>`;
  }

  function settingsPage() {
    const prefs = UI_STATE.prefs;
    const prefsSummary = `${TAG_LABELS[prefs.font]} · ${prefs.size}pt · ${THEME_LABELS[prefs.theme]}`;
    const backupSummary = `${UI_STATE.backup.last} · ${UI_STATE.backup.auto ? "自动备份" : "手动备份"}`;

    const readingGroup = `
      <div class="settings-group">
        <span class="settings-group-label">READING / 阅读</span>
        <div class="settings-page-card">
          ${settingsPageRow("type", "阅读偏好", prefsSummary, "reading-prefs")}
          ${settingsPageRow("target", "年度阅读目标", "36 本 · 已完成 67%", null, "年度目标：36 本 · 已读 24 本")}
        </div>
      </div>`;

    const dataGroup = `
      <div class="settings-group">
        <span class="settings-group-label">DATA / 数据</span>
        <div class="settings-page-card">
          ${settingsPageRow("archive", "本地备份", backupSummary, "local-backup")}
          ${settingsPageRow("upload", "导入与导出", "EPUB · TXT · PDF · 摘录", "import-export")}
          ${settingsPageRow("hardDrive", "离线空间", "1.8 GB / 8 GB · 9 本书", null, "离线空间 · 已使用 1.8 GB / 8 GB")}
        </div>
      </div>`;

    const aboutGroup = `
      <div class="settings-group">
        <span class="settings-group-label">ABOUT / 关于</span>
        <div class="settings-page-card">
          ${settingsPageRow("info", "关于纸间", "v1.4.0 · 本地优先阅读器", null, "纸间 v1.4.0 · 为离线阅读而做")}
          ${settingsPageRow("headphones", "帮助与反馈", "常见问题 · 本地使用指南", null, "帮助与反馈 · 所有内容都在本机")}
        </div>
      </div>`;

    return subpageFrame("settings", "PREFERENCES · SETTINGS", `
      ${subpageHeading("ON DEVICE · NO ACCOUNT", "设置", "阅读、数据与这台设备，都收在这里。")}
      <div class="privacy-card">
        <span class="privacy-icon">${icon("shieldCheck", 22)}</span>
        <div class="privacy-copy">
          <b>数据只存在于这台设备</b>
          <p>无需账号 · 不上传 · 随时可以把全部摘录导出。</p>
        </div>
        <span class="status-dot"></span>
      </div>
      ${readingGroup}
      ${dataGroup}
      ${aboutGroup}
      <p class="subpage-footnote">${icon("lock", 12)} 纸间没有云端同步。换设备时，请使用「导入与导出」迁移数据。</p>
    `, `<span class="subpage-nav-status">${icon("lock", 11)} 本机</span>`);
  }

  const LEADING_CSS = { compact: "1.74", normal: "2.02", loose: "2.2" };

  function prefsPreviewMarkup() {
    const prefs = UI_STATE.prefs;
    return `<div class="reading-preview" data-reading-preview data-theme="${prefs.theme}" data-font="${prefs.font}" data-leading="${prefs.leading}" style="--preview-size:${prefs.size}px;--preview-leading:${LEADING_CSS[prefs.leading]}">
      <div class="preview-top">
        <span>阅读预览</span>
        <span data-preview-theme>${THEME_LABELS[prefs.theme]}</span>
      </div>
      <h2>山中四季</h2>
      <p>山不说话，但它记得每一场雨。风从松林深处来，带着潮湿的木头气味。</p>
      <div class="preview-foot">
        <span>林见 · 第 112 页</span>
        <span>46%</span>
      </div>
    </div>`;
  }

  function prefChoice(group, value, label, extra = "") {
    const isActive = UI_STATE.prefs[group] === value;
    return `<button class="pref-choice${isActive ? " is-active" : ""}" type="button" data-pref-group="${group}" data-pref-value="${value}">
      ${extra}
      <span>${label}</span>
    </button>`;
  }

  function readingPrefsPage() {
    const prefs = UI_STATE.prefs;
    const sizePercent = ((prefs.size - 14) / (23 - 14)) * 100;
    return subpageFrame("reading-prefs", "READING · PREFERENCES", `
      ${subpageHeading("READING EXPERIENCE", "阅读偏好", "调成适合自己的阅读节奏，修改会自动保存，并应用到阅读器。")}
      ${prefsPreviewMarkup()}

      <div class="pref-block">
        <div class="pref-block-head"><span>字体</span><small>FONT</small></div>
        <div class="pref-choice-row pref-choice-row--2">
          ${prefChoice("font", "serif", "宋体", `<span class="font-sample font-sample--serif">永</span>`)}
          ${prefChoice("font", "sans", "黑体", `<span class="font-sample font-sample--sans">永</span>`)}
        </div>
      </div>

      <div class="pref-block">
        <div class="pref-block-head"><span>字号</span><small data-pref-size-label>${prefs.size} pt</small></div>
        <div class="pref-size-control">
          <span class="size-letter size-letter--small">A</span>
          <input type="range" min="14" max="23" step="1" value="${prefs.size}" data-pref-size aria-label="正文字号" style="background:linear-gradient(90deg, var(--accent) 0 ${sizePercent}%, rgba(32, 34, 29, 0.1) ${sizePercent}% 100%)" />
          <span class="size-letter size-letter--large">A</span>
        </div>
      </div>

      <div class="pref-block">
        <div class="pref-block-head"><span>行距</span><small>LINE HEIGHT</small></div>
        <div class="pref-choice-row">
          ${prefChoice("leading", "compact", "紧凑")}
          ${prefChoice("leading", "normal", "适中")}
          ${prefChoice("leading", "loose", "宽松")}
        </div>
      </div>

      <div class="pref-block pref-block--split">
        <div>
          <div class="pref-block-head"><span>翻页</span><small>MODE</small></div>
          <div class="pref-choice-row">
            ${prefChoice("turn", "horizontal", "左右")}
            ${prefChoice("turn", "vertical", "上下")}
          </div>
        </div>
        <div>
          <div class="pref-block-head"><span>纸色</span><small>PAPER</small></div>
          <div class="theme-choice-row">
            ${["paper", "sand", "night"].map((theme) => `<button class="theme-choice${prefs.theme === theme ? " is-active" : ""}" type="button" data-pref-group="theme" data-pref-value="${theme}" aria-label="${THEME_LABELS[theme]}纸"><i class="theme-swatch theme-swatch--${theme}"></i><span>${THEME_LABELS[theme]}</span></button>`).join("")}
          </div>
        </div>
      </div>

      <div class="pref-note">
        ${icon("type", 14)}
        <p>阅读器会同步这里的字体、字号、行距与纸色。翻页方式在下次打开书时生效。</p>
      </div>
    `, `<span class="subpage-nav-status" data-pref-save>自动保存</span>`);
  }

  function localBackupPage() {
    const backup = UI_STATE.backup;
    return subpageFrame("local-backup", "DATA · LOCAL BACKUP", `
      ${subpageHeading("DATA · ON DEVICE", "本地备份", "备份阅读进度、摘录和偏好。没有任何数据会离开这台设备。")}
      <section class="backup-hero">
        <span class="backup-orbit">${icon("archive", 23)}<i></i></span>
        <div class="backup-copy">
          <span class="card-kicker">最近一次备份</span>
          <strong data-backup-last>${backup.last}</strong>
          <p><span data-backup-size>${backup.size}</span> · 9 本书 · 87 条摘录</p>
        </div>
        <span class="backup-badge">已就绪</span>
      </section>

      <button class="primary-button backup-now" type="button" data-backup-now>
        ${icon("archive", 16)}
        <span data-backup-button-label>立即备份</span>
        ${icon("arrowRight", 15)}
      </button>

      <div class="backup-auto-row">
        <span class="backup-auto-icon">${icon("rotateCcw", 17)}</span>
        <span class="backup-auto-copy"><b>自动备份</b><small>每天 03:00 · 仅备份到本机</small></span>
        <button class="switch${backup.auto ? " is-on" : ""}" type="button" role="switch" aria-checked="${backup.auto}" aria-label="自动备份" data-backup-auto><span></span></button>
      </div>

      <section class="subpage-section">
        <div class="subpage-section-head">
          <h2>备份内容</h2>
          <span class="section-note">已全部选择</span>
        </div>
        <div class="backup-includes">
          <div><span class="check-dot">${icon("check", 10)}</span><b>阅读进度</b><span>9 本 · 46%</span></div>
          <div><span class="check-dot">${icon("check", 10)}</span><b>摘录与想法</b><span>87 条</span></div>
          <div><span class="check-dot">${icon("check", 10)}</span><b>阅读偏好</b><span>12 项</span></div>
        </div>
      </section>

      <section class="subpage-section">
        <div class="subpage-section-head">
          <h2>备份记录</h2>
          <span class="section-note">仅保留最近 3 份</span>
        </div>
        <div class="backup-records">
          <div class="backup-record">
            <div><b>10月24日 · 18.6 MB</b><span>自动备份 · 本机</span></div>
            <button class="record-action" type="button" data-toast="已从 10月24日 的备份恢复">恢复</button>
          </div>
          <div class="backup-record">
            <div><b>10月17日 · 18.2 MB</b><span>自动备份 · 本机</span></div>
            <button class="record-action" type="button" data-toast="已从 10月17日 的备份恢复">恢复</button>
          </div>
        </div>
      </section>

      <p class="subpage-footnote">${icon("lock", 12)} 备份文件保存在本机；可通过「导入与导出」手动保存到文件 App。</p>
    `);
  }

  function importExportPage() {
    const format = UI_STATE.exportFormat;
    return subpageFrame("import-export", "FILES · IMPORT & EXPORT", `
      ${subpageHeading("FILES · OFFLINE FIRST", "导入与导出", "把书带进来，把留下过的句子带走。")}

      <button class="import-drop" type="button" data-file-import>
        <span class="import-drop-icon">${icon("folder", 23)}</span>
        <span class="import-drop-copy">
          <b>从系统文件中选择</b>
          <small>支持 EPUB · TXT · PDF · MOBI</small>
        </span>
        <span class="import-drop-arrow">${icon("arrowUpRight", 16)}</span>
      </button>
      <p class="import-help">${icon("fileText", 12)} 会打开系统的「文件」选择器，选中后会复制到本机书库。</p>

      <section class="subpage-section">
        <div class="subpage-section-head">
          <h2>导出摘录</h2>
          <span class="section-note">87 条 · 仅本机</span>
        </div>
        <div class="format-row">
          ${["markdown", "txt", "json"].map((item) => `<button class="format-chip${format === item ? " is-active" : ""}" type="button" data-export-format="${item}">${item === "markdown" ? "Markdown" : item.toUpperCase()}</button>`).join("")}
        </div>
        <button class="file-action-row" type="button" data-export-notes>
          <span class="file-action-icon">${icon("download", 18)}</span>
          <span class="file-action-copy"><b>导出全部摘录</b><small>按书归档，包含页码、标签与想法</small></span>
          ${icon("chevronRight", 14)}
        </button>
        <button class="file-action-row" type="button" data-export-data>
          <span class="file-action-icon">${icon("database", 18)}</span>
          <span class="file-action-copy"><b>导出阅读数据</b><small>书架、进度与偏好 · JSON</small></span>
          ${icon("chevronRight", 14)}
        </button>
      </section>

      <section class="subpage-section">
        <div class="subpage-section-head">
          <h2>最近导入</h2>
          <span class="section-note">2 个文件</span>
        </div>
        <div class="recent-files">
          <div class="recent-file">
            <span class="file-badge">EPUB</span>
            <div><b>夜行列车.epub</b><span>2 天前 · 1.4 MB</span></div>
            <span class="file-ready">已离线</span>
          </div>
          <div class="recent-file">
            <span class="file-badge file-badge--pdf">PDF</span>
            <div><b>山中四季.pdf</b><span>10月18日 · 8.2 MB</span></div>
            <span class="file-ready">已离线</span>
          </div>
        </div>
      </section>

      <p class="subpage-footnote">${icon("lock", 12)} 文件由系统选择器提供；纸间只读取你主动选择的文件。</p>
    `);
  }

  /* ------------------------------------------------------------------------
     Reader overlay
     ---------------------------------------------------------------------- */

  function readerMarkup() {
    return `<section class="reader" data-reader aria-hidden="true" aria-label="阅读器">
      ${statusBar()}
      <header class="reader-topbar">
        <button class="reader-top-button" type="button" data-reader-close aria-label="退出阅读">${icon("chevronDown", 20)}</button>
        <div class="reader-book">
          <b>夜行列车</b>
          <span>第 8 章 · 隧道里的灯</span>
        </div>
        <button class="reader-top-button" type="button" data-toast="更多阅读选项" aria-label="更多">${icon("more", 19)}</button>
      </header>
      <div class="reader-progress"><span style="width:46%"></span></div>

      <div class="reader-page" data-reader-page tabindex="0" aria-label="阅读正文，轻点可隐藏工具栏">
        <div class="reader-page-meta"><span>08</span><span>夜行列车 / 顾川</span></div>
        <h2>隧道里的灯</h2>
        <p>列车钻进隧道的时候，窗外的雨忽然安静了。</p>
        <p>灯一盏一盏过去，像有人从很远的地方，替他把夜翻了一页。他靠在窗边，玻璃上有一层薄薄的雾。外面看不见田野，也看不见村庄，只有偶尔闪过的橙色灯，在黑里留下一道很短的尾巴。</p>
        <p>对面的女人合上手里的书，问他：“你要去哪里？”</p>
        <p>他说：“不知道。<mark>先坐过这阵雨再说。</mark>”</p>
        <p>雨声又回来了。隔着玻璃，像很远的地方有人在翻书。</p>
        <div class="reader-page-footer"><span>132</span><i></i><span>288</span></div>
      </div>

      <div class="reader-footer">
        <div class="reader-pagination"><span>第 132 页</span><span>46%</span><span>剩 3 小时 12 分</span></div>
        <div class="reader-tools">
          <button class="reader-tool" type="button" data-toast="目录 · 共 18 章">
            <span>${icon("list", 19)}</span><small>目录</small>
          </button>
          <button class="reader-tool" type="button" data-font-sheet-toggle>
            <span>${icon("type", 19)}</span><small>字号</small>
          </button>
          <button class="reader-tool" type="button" data-reader-theme>
            <span>${icon("sun", 19)}</span><small>主题</small>
          </button>
          <button class="reader-tool" type="button" data-toast="已摘录这一页 · 可在「摘录」查看">
            <span>${icon("highlight", 19)}</span><small>摘录</small>
          </button>
        </div>
      </div>

      <div class="reader-font-sheet" data-font-sheet>
        <div class="sheet-handle"></div>
        <div class="reader-font-row">
          <span>正文字号</span>
          <div class="font-stepper">
            <button type="button" data-font-down aria-label="减小字号">A−</button>
            <b data-font-value>17</b>
            <button type="button" data-font-up aria-label="增大字号">A＋</button>
          </div>
        </div>
        <div class="reader-theme-row">
          <span>纸张</span>
          <div class="paper-options">
            <button class="paper-dot paper-dot--paper is-active" type="button" data-paper="paper" aria-label="纸白"></button>
            <button class="paper-dot paper-dot--sand" type="button" data-paper="sand" aria-label="暖沙"></button>
            <button class="paper-dot paper-dot--night" type="button" data-paper="night" aria-label="夜间"></button>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ------------------------------------------------------------------------
     Board rendering
     ---------------------------------------------------------------------- */

  const BOARD_SCREENS = [
    {
      id: "shelf",
      index: "01",
      title: "书架",
      en: "LIBRARY",
      notes: ["三种阅读状态，一屏切换", "本地馆藏与离线空间同时可见"],
      screen: () => screenShelf(false)
    },
    {
      id: "notes",
      index: "02",
      title: "摘录",
      en: "HIGHLIGHTS",
      notes: ["按书归档，划线 / 想法自动分层", "引文优先，内容标签轻轻出现"],
      screen: () => screenNotes(false)
    },
    {
      id: "profile",
      index: "03",
      title: "我的",
      en: "READING LIFE",
      notes: ["无需登录，只用一台设备也能完整使用", "存储、备份与阅读偏好集中管理"],
      screen: () => screenProfile(false)
    }
  ];

  function renderBoard(stage) {
    stage.innerHTML = BOARD_SCREENS.map((item) => `<figure class="phone-figure phone-figure--${item.id}">
      <figcaption class="phone-caption">
        <div class="phone-caption-title">
          <span class="phone-index">${item.index}</span>
          <h3>${item.title}</h3>
        </div>
        <span class="phone-caption-en">${item.en}</span>
      </figcaption>
      <div class="device">
        <div class="device-button device-button--volume"></div>
        <div class="device-button device-button--power"></div>
        <div class="device-screen">
          <div class="app app--static">
            ${item.screen()}
            ${tabbar(item.id, false)}
            ${islandAndHome()}
          </div>
        </div>
      </div>
      <ul class="phone-note-list">
        ${item.notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </figure>`).join("");
  }

  /* ------------------------------------------------------------------------
     Secondary page design board
     ---------------------------------------------------------------------- */

  const SECONDARY_SCREENS = [
    { key: "search-books", index: "01", title: "搜索书架", en: "SEARCH / LIBRARY", note: "书名、作者与分类的实时过滤。", build: searchBooksPage },
    { key: "search-notes", index: "02", title: "搜索摘录", en: "SEARCH / NOTES", note: "句子、书名、标签和想法，一起搜。", build: searchNotesPage },
    { key: "organize-notes", index: "03", title: "整理摘录", en: "ORGANIZE / NOTES", note: "按书归档，再到标签里重新遇见。", build: organizeNotesPage },
    { key: "settings", index: "04", title: "设置", en: "SETTINGS", note: "阅读、数据与关于，都收在这一页。", build: settingsPage },
    { key: "reading-prefs", index: "05", title: "阅读偏好", en: "READING / PREFS", note: "字体、字号、行距、翻页与纸色。", build: readingPrefsPage },
    { key: "local-backup", index: "06", title: "本地备份", en: "DATA / BACKUP", note: "自动备份、立即备份与从记录恢复。", build: localBackupPage },
    { key: "import-export", index: "07", title: "导入与导出", en: "FILES / LOCAL", note: "系统文件导入；摘录与数据导出。", build: importExportPage }
  ];

  function renderSecondaryBoard(stage) {
    stage.innerHTML = SECONDARY_SCREENS.map((item) => `<figure class="secondary-figure">
      <figcaption class="secondary-caption">
        <div class="secondary-caption-title">
          <span class="secondary-index">${item.index}</span>
          <h3>${item.title}</h3>
        </div>
        <span class="secondary-en">${item.en}</span>
      </figcaption>
      <div class="secondary-phone">
        <div class="device">
          <div class="device-button device-button--volume"></div>
          <div class="device-button device-button--power"></div>
          <div class="device-screen">
            <div class="app app--static app--secondary">
              ${item.build()}
              ${islandAndHome()}
            </div>
          </div>
        </div>
      </div>
      <p class="secondary-note">${item.note}</p>
    </figure>`).join("") + `<aside class="secondary-native">
      <span class="secondary-native-icon">${icon("folder", 22)}</span>
      <span class="eyebrow">NATIVE / SYSTEM</span>
      <h3>文件选择器<br/>由系统接管</h3>
      <p>点击书架右上角的「＋」，或导入页里的「从系统文件中选择」，会直接打开 iOS / Android / 桌面系统的文件选择器。纸间不重绘这一步。</p>
      <div class="secondary-native-steps">
        <div><span>01</span><p>点击书架右上角的「＋」，或导入页的入口。</p></div>
        <div><span>02</span><p>在系统的文件 App 里选中一本本地书籍。</p></div>
        <div><span>03</span><p>纸间把文件复制进本机书库，立即离线可读。</p></div>
      </div>
      <div class="secondary-native-badges">
        <span>EPUB</span><span>TXT</span><span>PDF</span><span>MOBI</span>
      </div>
      <div class="secondary-native-code">import &gt; system file picker<br/>then copy into local library</div>
    </aside>`;
  }

  /* ------------------------------------------------------------------------
     Prototype behaviour
     ---------------------------------------------------------------------- */

  function initPrototype(root) {
    const app = root.querySelector("[data-app]");
    if (!app) return;
    let toastTimer = null;
    let readerState = { book: BOOKS.train, fontSize: 17, paper: "paper" };

    const hideToast = () => {
      const toast = app.querySelector(".toast");
      clearTimeout(toastTimer);
      if (toast) toast.classList.remove("is-visible");
    };

    const showToast = (message) => {
      const toast = app.querySelector(".toast");
      if (!toast) return;
      clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add("is-visible");
      toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
    };

    const setActiveTab = (tabId) => {
      hideToast();
      app.querySelectorAll("[data-screen]").forEach((screen) => {
        screen.classList.toggle("is-active", screen.dataset.screen === tabId);
      });
      app.querySelectorAll("[data-tab]").forEach((tab) => {
        const isActive = tab.dataset.tab === tabId;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
      const activeIndex = { shelf: 0, notes: 1, profile: 2 }[tabId] ?? 0;
      app.querySelectorAll(".tab-glider").forEach((glider) => {
        glider.style.setProperty("--tab-index", activeIndex);
      });
    };

    app.querySelectorAll("[data-tab]").forEach((tab) => {
      tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
    });

    app.querySelectorAll("[data-goto-notes]").forEach((link) => {
      link.addEventListener("click", () => {
        setActiveTab("notes");
        showToast("已跳到摘录 · 上次留下的一句");
      });
    });

    app.querySelectorAll("[data-shelf-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.shelfFilter;
        app.querySelectorAll("[data-shelf-filter]").forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
        });
        const row = app.querySelector("[data-shelf-row]");
        row.classList.add("is-switching");
        setTimeout(() => {
          row.innerHTML = shelfBookRow(filter, true);
          bindBookCards();
          row.classList.remove("is-switching");
        }, 120);
        showToast(`已切换到「${button.querySelector("span").textContent}」`);
      });
    });

    app.querySelectorAll("[data-note-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.noteFilter;
        app.querySelectorAll("[data-note-filter]").forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
        });
        app.querySelectorAll("[data-note-kind]").forEach((note) => {
          note.hidden = filter !== "all" && note.dataset.noteKind !== filter;
        });
        const list = app.querySelector("[data-notes-list]");
        const anyVisible = list.querySelector("[data-note-kind]:not([hidden])");
        let empty = list.querySelector(".notes-empty");
        if (!anyVisible) {
          if (!empty) {
            empty = document.createElement("div");
            empty.className = "notes-empty";
            empty.innerHTML = `<span>${icon("quote", 22)}</span><p>这一类摘录还空着。<br>读到喜欢的句子，就留下来。</p>`;
            list.appendChild(empty);
          }
        } else if (empty) {
          empty.remove();
        }
      });
    });

    const toaster = (event) => {
      const target = event.target.closest("[data-toast]");
      if (target) showToast(target.dataset.toast);
    };
    app.addEventListener("click", toaster);

    function bindBookCards() {
      app.querySelectorAll("[data-book-id]").forEach((card) => {
        card.addEventListener("click", () => {
          const book = BOOKS[card.dataset.bookId];
          if (book.id !== BOOKS.train.id) {
            showToast(`《${book.title}》已离线 · 当前原型仅演示《夜行列车》的阅读页`);
            return;
          }
          openReader(book);
        });
      });
    }

    const reader = app.querySelector("[data-reader]");
    const readerPage = reader.querySelector("[data-reader-page]");
    const fontSheet = reader.querySelector("[data-font-sheet]");
    const fontValue = reader.querySelector("[data-font-value]");

    function updateReaderBook(book) {
      reader.querySelector(".reader-book b").textContent = book.title;
      reader.querySelector(".reader-book span").textContent = book.status === "reading" ? `第 8 章 · 隧道里的灯` : "从第一页开始";
      reader.querySelector(".reader-page h2").textContent = book.title === "夜行列车" ? "隧道里的灯" : "第 一 页";
      const content = reader.querySelector(".reader-page");
      content.querySelector(".reader-page-meta span:last-child").textContent = `${book.title} / ${book.author}`;
      const progress = book.status === "done" ? 100 : book.progress || 0;
      reader.querySelector(".reader-progress span").style.width = `${progress}%`;
      reader.querySelector(".reader-pagination").innerHTML = `<span>第 ${book.status === "want" ? "1" : Math.round((progress / 100) * 288) || 1} 页</span><span>${progress}%</span><span>${book.status === "reading" ? "剩 3 小时 12 分" : book.status === "done" ? "已读完" : "未开始"}</span>`;
    }

    function applyPreferencesToReader() {
      const prefs = UI_STATE.prefs;
      readerState.fontSize = prefs.size;
      readerState.paper = prefs.theme;
      readerPage.style.setProperty("--reader-font-size", `${prefs.size}px`);
      readerPage.style.setProperty("--reader-leading", LEADING_CSS[prefs.leading]);
      readerPage.classList.toggle("is-sans", prefs.font === "sans");
      reader.dataset.paper = prefs.theme;
      fontValue.textContent = prefs.size;
      reader.querySelectorAll("[data-paper]").forEach((dot) => {
        dot.classList.toggle("is-active", dot.dataset.paper === prefs.theme);
      });
      app.classList.toggle("is-reader-night", prefs.theme === "night");
    }

    function openReader(book = BOOKS.train) {
      hideToast();
      readerState.book = book;
      updateReaderBook(book);
      applyPreferencesToReader();
      reader.classList.add("is-open");
      reader.setAttribute("aria-hidden", "false");
      app.classList.add("has-reader");
      app.classList.toggle("is-reader-night", UI_STATE.prefs.theme === "night");
    }

    function closeReader() {
      reader.classList.remove("is-open", "is-font-open", "is-immersive");
      reader.setAttribute("aria-hidden", "true");
      fontSheet.classList.remove("is-open");
      app.classList.remove("has-reader", "is-reader-night");
    }

    app.querySelector("[data-open-reader]").addEventListener("click", () => openReader(BOOKS.train));
    reader.querySelector("[data-reader-close]").addEventListener("click", closeReader);

    readerPage.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      if (reader.classList.contains("is-font-open")) {
        reader.classList.remove("is-font-open");
        fontSheet.classList.remove("is-open");
        return;
      }
      reader.classList.toggle("is-immersive");
    });

    reader.querySelector("[data-font-sheet-toggle]").addEventListener("click", (event) => {
      event.stopPropagation();
      reader.classList.toggle("is-font-open");
      fontSheet.classList.toggle("is-open");
      reader.classList.remove("is-immersive");
    });

    const applyFontSize = (size) => {
      readerState.fontSize = Math.min(23, Math.max(14, size));
      readerPage.style.setProperty("--reader-font-size", `${readerState.fontSize}px`);
      fontValue.textContent = readerState.fontSize;
    };
    reader.querySelector("[data-font-down]").addEventListener("click", () => applyFontSize(readerState.fontSize - 1));
    reader.querySelector("[data-font-up]").addEventListener("click", () => applyFontSize(readerState.fontSize + 1));

    reader.querySelectorAll("[data-paper]").forEach((dot) => {
      dot.addEventListener("click", () => {
        reader.querySelectorAll("[data-paper]").forEach((item) => item.classList.remove("is-active"));
        dot.classList.add("is-active");
        reader.dataset.paper = dot.dataset.paper;
        readerState.paper = dot.dataset.paper;
        app.classList.toggle("is-reader-night", dot.dataset.paper === "night");
      });
    });

    reader.querySelector("[data-reader-theme]").addEventListener("click", () => {
      const themes = ["paper", "sand", "night"];
      const next = themes[(themes.indexOf(reader.dataset.paper || "paper") + 1) % themes.length];
      reader.dataset.paper = next;
      reader.querySelectorAll("[data-paper]").forEach((dot) => dot.classList.toggle("is-active", dot.dataset.paper === next));
      app.classList.toggle("is-reader-night", next === "night");
      showToast(next === "night" ? "夜间纸色" : next === "sand" ? "暖沙纸色" : "纸白");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && reader.classList.contains("is-open")) closeReader();
    });

    /* Secondary pages ------------------------------------------------------ */

    const subpageHost = app.querySelector("[data-subpage-host]");
    const fileInput = app.querySelector("[data-file-input]");
    const subpageBuilders = {
      "search-books": searchBooksPage,
      "search-notes": searchNotesPage,
      "organize-notes": organizeNotesPage,
      "settings": settingsPage,
      "reading-prefs": readingPrefsPage,
      "local-backup": localBackupPage,
      "import-export": importExportPage
    };
    let subpageStack = [];

    const setBaseInert = (inert) => {
      app.querySelectorAll(".screen, .tabbar").forEach((el) => {
        if (inert) el.setAttribute("inert", "");
        else el.removeAttribute("inert");
      });
    };

    const renderSubpage = (direction = "forward") => {
      const entry = subpageStack[subpageStack.length - 1];
      if (!entry) {
        subpageHost.classList.remove("is-open");
        subpageHost.innerHTML = "";
        subpageHost.setAttribute("aria-hidden", "true");
        setBaseInert(false);
        return;
      }
      const builder = subpageBuilders[entry.key];
      if (!builder) return;
      subpageHost.innerHTML = builder();
      subpageHost.classList.add("is-open");
      subpageHost.setAttribute("aria-hidden", "false");
      setBaseInert(true);
      const page = subpageHost.firstElementChild;
      if (page) {
        page.classList.add(direction === "back" ? "is-entering-back" : "is-entering-forward");
        const title = page.querySelector(".subpage-heading h1");
        subpageHost.setAttribute("aria-label", title ? title.textContent.trim() : "详情");
      }
      hideToast();
    };

    const openSubpage = (key) => {
      if (!subpageBuilders[key]) return;
      subpageStack.push({ key });
      renderSubpage("forward");
    };

    const closeSubpage = () => {
      subpageStack.pop();
      if (!subpageStack.length) {
        subpageHost.classList.remove("is-open");
        subpageHost.innerHTML = "";
        subpageHost.setAttribute("aria-hidden", "true");
        setBaseInert(false);
        return;
      }
      renderSubpage("back");
    };

    const closeAllSubpages = () => {
      subpageStack = [];
      subpageHost.classList.remove("is-open");
      subpageHost.innerHTML = "";
      subpageHost.setAttribute("aria-hidden", "true");
      setBaseInert(false);
    };

    /* Search ---------------------------------------------------------------- */

    const syncSearchClear = (input) => {
      const clear = input.closest(".search-field")?.querySelector("[data-search-clear]");
      if (clear) clear.hidden = input.value.length === 0;
    };

    const runBookSearch = (input) => {
      const page = input.closest(".subpage");
      const results = page?.querySelector("[data-book-search-results]");
      if (!results) return;
      results.innerHTML = bookSearchResultsMarkup(input.value);
      syncSearchClear(input);
    };

    const runNoteSearch = (input) => {
      const page = input.closest(".subpage");
      const results = page?.querySelector("[data-note-search-results]");
      if (!results) return;
      results.innerHTML = noteSearchResultsMarkup(input.value);
      syncSearchClear(input);
    };

    /* Reading preferences -------------------------------------------------- */

    const updateProfileSummaries = () => {
      const prefsValue = app.querySelector('[data-setting-value="prefs"]');
      if (prefsValue) {
        const prefs = UI_STATE.prefs;
        prefsValue.textContent = `${TAG_LABELS[prefs.font]} · ${prefs.size}pt · ${THEME_LABELS[prefs.theme]}`;
      }
      const backupValue = app.querySelector('[data-setting-value="backup"]');
      if (backupValue) {
        backupValue.textContent = `${UI_STATE.backup.last} · ${UI_STATE.backup.auto ? "自动备份" : "手动备份"}`;
      }
    };

    const markSaved = (page) => {
      updateProfileSummaries();
      const save = page?.querySelector("[data-pref-save]");
      if (!save) return;
      save.textContent = "已保存";
      save.classList.add("is-saved");
    };

    const applyPrefToPreview = (page, group, value) => {
      const preview = page?.querySelector("[data-reading-preview]");
      if (!preview) return;
      if (group === "font" || group === "theme" || group === "leading") {
        preview.dataset[group] = value;
      }
      if (group === "theme") {
        const themeLabel = page.querySelector("[data-preview-theme]");
        if (themeLabel) themeLabel.textContent = THEME_LABELS[value];
      }
      markSaved(page);
    };

    /* Download helpers ----------------------------------------------------- */

    const downloadText = (filename, content, mime) => {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1200);
    };

    const exportNotes = () => {
      const format = UI_STATE.exportFormat;
      const records = NOTES.map((note) => {
        const book = BOOKS[note.bookId];
        return {
          text: note.text,
          thought: note.thought || "",
          book: book.title,
          author: book.author,
          page: note.page,
          tag: note.tag,
          date: note.date
        };
      });
      if (format === "json") {
        downloadText("纸间-摘录.json", JSON.stringify(records, null, 2), "application/json");
      } else {
        const heading = format === "markdown" ? "# 纸间 · 摘录\n\n" : "纸间 · 摘录\n\n";
        const body = records.map((note) => {
          if (format === "markdown") {
            return `> ${note.text}\n>\n> — 《${note.book}》 ${note.author} · P.${note.page} · #${note.tag}\n${note.thought ? `\n想法：${note.thought}\n` : ""}`;
          }
          return `${note.text}\n《${note.book}》 ${note.author} · P.${note.page} · #${note.tag} · ${note.date}\n${note.thought ? `想法：${note.thought}\n` : ""}`;
        }).join("\n");
        const ext = format === "markdown" ? "md" : "txt";
        const mime = format === "markdown" ? "text/markdown" : "text/plain";
        downloadText(`纸间-摘录.${ext}`, heading + body, mime);
      }
      showToast("已导出全部摘录 · 文件由你保存");
    };

    const exportReadingData = () => {
      const data = {
        app: "纸间",
        exportedAt: new Date().toISOString(),
        books: LIBRARY_IDS.map((id) => BOOKS[id]),
        notes: NOTES,
        preferences: UI_STATE.prefs,
        backup: UI_STATE.backup
      };
      downloadText("纸间-阅读数据.json", JSON.stringify(data, null, 2), "application/json");
      showToast("已导出阅读数据 · JSON");
    };

    /* Secondary page controls ---------------------------------------------- */

    app.addEventListener("click", (event) => {
      const fileTrigger = event.target.closest("[data-file-import]");
      if (fileTrigger) {
        event.preventDefault();
        fileInput.value = "";
        fileInput.click();
        return;
      }

      const back = event.target.closest("[data-subpage-back]");
      if (back) {
        event.preventDefault();
        closeSubpage();
        return;
      }

      const opener = event.target.closest("[data-subpage]");
      if (opener) {
        event.preventDefault();
        openSubpage(opener.dataset.subpage);
        return;
      }

      const clear = event.target.closest("[data-search-clear]");
      if (clear) {
        event.preventDefault();
        const input = clear.closest(".search-field")?.querySelector("input");
        if (input) {
          input.value = "";
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.focus();
        }
        return;
      }

      const preset = event.target.closest("[data-search-preset]");
      if (preset) {
        event.preventDefault();
        const page = preset.closest(".subpage");
        const scope = preset.dataset.searchScope;
        const input = page?.querySelector(scope === "notes" ? "[data-note-search]" : "[data-book-search]");
        if (input) {
          input.value = preset.dataset.searchPreset;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.focus();
        }
        return;
      }

      const searchBook = event.target.closest("[data-search-book]");
      if (searchBook) {
        const book = BOOKS[searchBook.dataset.searchBook];
        if (book.id === BOOKS.train.id) {
          closeAllSubpages();
          setTimeout(() => openReader(book), 140);
        } else {
          showToast(`《${book.title}》已离线 · 当前原型仅开放《夜行列车》阅读页`);
        }
        return;
      }

      const sort = event.target.closest("[data-organize-sort]");
      if (sort) {
        const page = sort.closest(".subpage");
        page.querySelectorAll("[data-organize-sort]").forEach((item) => item.classList.toggle("is-active", item === sort));
        showToast(`整理方式：${sort.textContent.trim()}`);
        return;
      }

      const pref = event.target.closest("[data-pref-group]");
      if (pref) {
        const group = pref.dataset.prefGroup;
        const value = pref.dataset.prefValue;
        if (group in UI_STATE.prefs) {
          UI_STATE.prefs[group] = value;
          const page = pref.closest(".subpage");
          page.querySelectorAll(`[data-pref-group="${group}"]`).forEach((item) => item.classList.toggle("is-active", item === pref));
          applyPrefToPreview(page, group, value);
        }
        return;
      }

      const autoBackup = event.target.closest("[data-backup-auto]");
      if (autoBackup) {
        UI_STATE.backup.auto = !UI_STATE.backup.auto;
        autoBackup.classList.toggle("is-on", UI_STATE.backup.auto);
        autoBackup.setAttribute("aria-checked", String(UI_STATE.backup.auto));
        updateProfileSummaries();
        showToast(UI_STATE.backup.auto ? "已开启自动备份 · 每天 03:00" : "已关闭自动备份");
        return;
      }

      const backupNow = event.target.closest("[data-backup-now]");
      if (backupNow) {
        if (backupNow.disabled) return;
        const label = backupNow.querySelector("[data-backup-button-label]");
        const page = backupNow.closest(".subpage");
        backupNow.disabled = true;
        backupNow.classList.add("is-busy");
        if (label) label.textContent = "正在备份…";
        setTimeout(() => {
          UI_STATE.backup.last = "刚刚";
          UI_STATE.backup.size = "18.7 MB";
          const last = page?.querySelector("[data-backup-last]");
          const size = page?.querySelector("[data-backup-size]");
          if (last) last.textContent = "刚刚";
          if (size) size.textContent = "18.7 MB";
          if (label) label.textContent = "备份完成";
          updateProfileSummaries();
          showToast("备份完成 · 数据只保存在本机");
          setTimeout(() => {
            backupNow.classList.remove("is-busy");
            backupNow.disabled = false;
            if (label) label.textContent = "立即备份";
          }, 1100);
        }, 780);
        return;
      }

      const format = event.target.closest("[data-export-format]");
      if (format) {
        UI_STATE.exportFormat = format.dataset.exportFormat;
        const row = format.closest(".format-row");
        row?.querySelectorAll("[data-export-format]").forEach((item) => item.classList.toggle("is-active", item === format));
        return;
      }

      if (event.target.closest("[data-export-notes]")) {
        exportNotes();
        return;
      }

      if (event.target.closest("[data-export-data]")) {
        exportReadingData();
        return;
      }
    });

    app.addEventListener("input", (event) => {
      const target = event.target;
      if (target.matches("[data-book-search]")) {
        runBookSearch(target);
      } else if (target.matches("[data-note-search]")) {
        runNoteSearch(target);
      } else if (target.matches("[data-pref-size]")) {
        const page = target.closest(".subpage");
        const value = Number(target.value);
        UI_STATE.prefs.size = value;
        const preview = page?.querySelector("[data-reading-preview]");
        if (preview) preview.style.setProperty("--preview-size", `${value}px`);
        const label = page?.querySelector("[data-pref-size-label]");
        if (label) label.textContent = `${value} pt`;
        const percent = ((value - 14) / (23 - 14)) * 100;
        target.style.background = `linear-gradient(90deg, var(--accent) 0 ${percent}%, rgba(32, 34, 29, 0.1) ${percent}% 100%)`;
        markSaved(page);
      }
    });

    fileInput.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      const size = file.size > 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(file.size / 1024))} KB`;
      showToast(`已选择「${file.name}」· ${size}，正在复制到本机书库`);
      fileInput.value = "";
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !reader.classList.contains("is-open") && subpageStack.length) {
        closeSubpage();
      }
    });

    bindBookCards();
    applyFontSize(readerState.fontSize);
    reader.dataset.paper = "paper";
  }

  function renderPrototype(root) {
    root.innerHTML = `<div class="device device--prototype">
      <div class="device-button device-button--volume"></div>
      <div class="device-button device-button--power"></div>
      <div class="device-screen">
        <div class="app app--prototype" data-app>
          ${screenShelf(true)}
          ${screenNotes(true)}
          ${screenProfile(true)}
          ${tabbar("shelf", true)}
          <div class="subpage-host" data-subpage-host aria-hidden="true"></div>
          <input class="native-file-input" type="file" tabindex="-1" aria-hidden="true" accept=".epub,.txt,.pdf,.mobi,.azw3,application/epub+zip,text/plain,application/pdf" data-file-input />
          ${readerMarkup()}
          <div class="toast" role="status" aria-live="polite"></div>
          ${islandAndHome()}
        </div>
      </div>
    </div>`;
    initPrototype(root);
  }

  return {
    brandMark,
    icon,
    renderBoard,
    renderSecondaryBoard,
    renderPrototype
  };
})();
