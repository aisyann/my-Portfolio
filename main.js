// content.js の中身を画面に並べるだけのファイル（普段は触らなくてOK）
(function () {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = (url) => `href="${esc(url)}" target="_blank" rel="noopener"`;
  const btns = (links) => (links || []).map((l) => `<a class="btn" ${ext(l.url)}>${esc(l.label)} ↗</a>`).join("");
  const tags = (list) => `<ul class="tags">${(list || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  const areaBadge = (a) => (a ? `<span class="area">${esc(a)}</span>` : "");

  // ---------- profile / hero ----------
  const p = d.profile;
  document.title = `${p.name} | Portfolio`;
  $("logo-name").textContent = p.name;
  $("catch").textContent = p.catch;
  $("name").textContent = p.name;
  $("name-sub").textContent = p.nameSub;
  $("lead").textContent = p.lead;
  $("profile-links").innerHTML = btns(p.links);
  $("foot-links").innerHTML = btns(p.links);
  $("foot-name").textContent = p.name;
  $("year").textContent = new Date().getFullYear();
  if (p.avatar) $("avatar").style.backgroundImage = `url("${p.avatar}")`;
  else $("avatar").textContent = p.name.slice(0, 1);

  $("stats").innerHTML = (d.stats || [])
    .map((s) => `<li><span class="v">${esc(s.value)}</span><span class="l">${esc(s.label)}</span></li>`)
    .join("");

  // ---------- profile (about) ----------
  $("about-list").innerHTML = (d.about || [])
    .map((a) => `<div><dt>${esc(a.label)}</dt><dd>${esc(a.text)}</dd></div>`)
    .join("");

  // 写真・動画の枠。動画があれば動画（写真はその表紙）、なければ写真、どちらも無ければ枠を出さない
  const media = (pr) =>
    pr.video
      ? `<div class="img"><video src="${esc(pr.video)}#t=0.1" ${pr.image ? `poster="${esc(pr.image)}"` : ""} controls muted loop playsinline preload="metadata"></video></div>`
      : pr.image
      ? `<div class="img" style="background-image:url('${esc(pr.image)}')"></div>`
      : "";

  // ---------- works / research 共通のカード ----------
  const card = (pr) => `
    <article class="project${pr.image || pr.video ? "" : " noimg"}">
      ${media(pr)}
      <div class="body">
        <h3>${esc(pr.title)}</h3>
        <p class="period mono">${areaBadge(pr.area)}${esc(pr.period)}</p>
        ${tags(pr.tags)}
        <p>${esc(pr.summary)}</p>
        ${pr.points && pr.points.length ? `<ul class="points">${pr.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <div class="plinks">${(pr.links || []).map((l) => `<a ${ext(l.url)}>${esc(l.label)}</a>`).join("")}</div>
      </div>
    </article>`;

  // ---------- research（欄が無いページでは飛ばす） ----------
  if ($("research-body")) {
  $("research-list").innerHTML = (d.research || []).map(card).join("");
  const pubs = d.publications || [];
  $("pub-list").innerHTML = pubs
    .map(
      (b) => `<li>
        <span class="mono date">${esc(b.date)}</span>
        <span>${b.role ? `<span class="role">${esc(b.role)}</span>` : ""}<span class="t">${esc(b.title)}</span>
        <span class="w">${esc(b.authors).split(esc(p.name)).join(`<b>${esc(p.name)}</b>`)}　${esc(b.venue)}</span></span>
      </li>`
    )
    .join("");
  if (!pubs.length) $("pub-head").hidden = true;
  if (!(d.research || []).length && !pubs.length) $("research-body").innerHTML = "";
  }

  // ---------- works ----------
  const projects = d.projects || [];
  const renderProjects = (area) => {
    $("project-list").innerHTML = projects
      .filter((pr) => !area || pr.area === area)
      .map(card)
      .join("");
  };
  // 分類が2種類以上あるときだけ切り替えボタンを出す
  const areas = [...new Set(projects.map((pr) => pr.area).filter(Boolean))];
  if (areas.length > 1) {
    const f = $("project-filter");
    f.innerHTML = ["すべて", ...areas]
      .map((a, i) => `<button type="button" data-area="${i ? esc(a) : ""}" class="${i ? "" : "on"}">${esc(a)}</button>`)
      .join("");
    f.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      f.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
      renderProjects(b.dataset.area);
    });
  }
  renderProjects("");

  // ---------- shop ----------
  // 動画がある商品は、再生ボタンを押してもページが飛ばないように「BOOTHで見る」ボタンを別に付ける
  $("shop-list").innerHTML = (d.shop || [])
    .map((it) => {
      const body = `
      <div class="body">
        <h3>${esc(it.title)}</h3>
        ${it.price ? `<p class="price mono">${esc(it.price)}</p>` : ""}
        <p>${esc(it.summary)}</p>
        ${it.result ? `<p class="result">${esc(it.result)}</p>` : ""}
        ${it.video && it.url ? `<a class="btn shop-btn" ${ext(it.url)}>BOOTHで見る ↗</a>` : ""}
      </div>`;
      if (it.video)
        return `<div class="item">
      <div class="img"><video src="${esc(it.video)}#t=0.1" ${it.image ? `poster="${esc(it.image)}"` : ""} controls muted playsinline preload="metadata"></video></div>${body}
    </div>`;
      const img = it.image ? `<div class="img" style="background-image:url('${esc(it.image)}');background-size:cover"></div>` : "";
      // URLが無い（発売前）ものはリンクにしない
      return it.url ? `<a class="item" ${ext(it.url)}>${img}${body}</a>` : `<div class="item soon">${img}${body}</div>`;
    })
    .join("");

  // ---------- activities ----------
  $("activity-list").innerHTML = (d.activities || [])
    .map(
      (c) => `
    <article class="activity">
      <h3>${esc(c.title)}</h3>
      ${c.area || c.period ? `<p class="period mono">${areaBadge(c.area)}${esc(c.period)}</p>` : ""}
      <p>${esc(c.summary)}</p>
      ${
        c.items && c.items.length
          ? `<ul>${c.items.map((i) => `<li>${i.url ? `<a ${ext(i.url)}>${esc(i.text)}</a>` : esc(i.text)}</li>`).join("")}</ul>`
          : ""
      }
    </article>`
    )
    .join("");

  // ---------- talks ----------
  $("talk-list").innerHTML = (d.talks || [])
    .map((t) => {
      const inner = `<span class="kind">${esc(t.kind)}</span>
        <span><span class="t">${esc(t.title)}</span><span class="w">${esc(t.where)}</span></span>`;
      return `<li>${t.url ? `<a ${ext(t.url)}>${inner}</a>` : `<div class="card">${inner}</div>`}</li>`;
    })
    .join("");

  // ---------- timeline ----------
  $("timeline-list").innerHTML = (d.timeline || [])
    .map((t) => `<li><span class="mono date">${esc(t.date)}</span><span>${esc(t.text)}</span></li>`)
    .join("");

  // ---------- skills ----------
  $("skill-list").innerHTML = (d.skills || [])
    .map((g) => `<div class="skill"><h3>${esc(g.group)}</h3>${tags(g.items)}</div>`)
    .join("");

  // ---------- 空の欄を隠して、残った欄に番号と交互の背景色をつける ----------
  const bodies = {
    about: "about-list",
    research: "research-body",
    projects: "project-list",
    shop: "shop-list",
    activities: "activity-list",
    talks: "talk-list",
    timeline: "timeline-list",
    skills: "skill-list",
  };
  let n = 0;
  document.querySelectorAll("main .sec").forEach((sec) => {
    const empty = !$(bodies[sec.id]) || !$(bodies[sec.id]).children.length;
    const nav = document.querySelector(`nav a[href="#${sec.id}"]`);
    if (empty) {
      sec.hidden = true;
      if (nav) nav.hidden = true;
      return;
    }
    n++;
    sec.querySelector(".num").textContent = String(n).padStart(2, "0");
    sec.classList.toggle("alt", n % 2 === 0);
  });
})();
