(() => {
  const grid = document.getElementById("page-grid");
  const count = document.getElementById("page-count");
  const search = document.getElementById("hub-search");
  const filters = [...document.querySelectorAll(".hub-filter")];
  const pages = window.PROJECT_PAGES || [];
  let active = "all";

  const render = () => {
    const query = (search.value || "").trim().toLowerCase();
    const visible = pages.filter((page) => {
      const byType = active === "all" || page.type === active;
      const text = `${page.title} ${page.summary} ${page.keywords}`.toLowerCase();
      return byType && (!query || text.includes(query));
    });
    grid.innerHTML = visible.map((page) => `
      <article class="page-card type-${page.type}">
        <div class="page-card-top"><span class="badge">${page.badge}</span><span class="page-type">${page.type === "result" ? "成果" : page.type === "method" ? "方法" : "文档"}</span></div>
        <h3>${page.title}</h3><p>${page.summary}</p>
        <a class="open-page" href="${page.href}">${page.href.endsWith(".md") ? "打开文档" : "打开网页"} <span>↗</span></a>
      </article>`).join("");
    count.textContent = `显示 ${visible.length} / ${pages.length} 个模块`;
  };
  filters.forEach((button) => button.addEventListener("click", () => {
    active = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    render();
  }));
  search.addEventListener("input", render);
  render();
})();
