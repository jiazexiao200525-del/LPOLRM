(() => {
  const cards = [...document.querySelectorAll('[data-topic]')];
  const filters = [...document.querySelectorAll('.filter')];
  const search = document.getElementById('search');
  let activeFilter = 'all';

  const applyFilter = () => {
    const query = (search.value || '').trim().toLowerCase();
    cards.forEach((card) => {
      const topic = card.dataset.topic || '';
      const words = (card.dataset.keywords || card.textContent).toLowerCase();
      const matchesFilter = activeFilter === 'all' || topic === activeFilter || (activeFilter === 'document' && card.classList.contains('document'));
      const matchesSearch = !query || words.includes(query);
      card.classList.toggle('hidden', !(matchesFilter && matchesSearch));
    });
  };
  filters.forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('active', item === button));
    applyFilter();
  }));
  search.addEventListener('input', applyFilter);

  const imageModal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  document.querySelectorAll('[data-image]').forEach((button) => button.addEventListener('click', () => {
    modalImage.src = button.dataset.image;
    modalImage.alt = button.dataset.caption || '';
    modalCaption.textContent = button.dataset.caption || '';
    imageModal.classList.add('open'); imageModal.setAttribute('aria-hidden', 'false');
  }));

  const docModal = document.getElementById('doc-modal');
  const docTitle = document.getElementById('doc-title');
  const docContent = document.getElementById('doc-content');
  document.querySelectorAll('.preview-doc').forEach((button) => button.addEventListener('click', async () => {
    docTitle.textContent = button.dataset.title || '文档预览';
    docContent.textContent = '正在读取文档……';
    docModal.classList.add('open'); docModal.setAttribute('aria-hidden', 'false');
    try { const response = await fetch(button.dataset.doc); if (!response.ok) throw new Error(`HTTP ${response.status}`); docContent.textContent = await response.text(); }
    catch (error) { docContent.textContent = `无法预览该文档。请使用“打开”链接查看。\n\n${error.message}`; }
  }));

  const closeModal = (modal) => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); if (modal === imageModal) modalImage.removeAttribute('src'); };
  document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => closeModal(document.getElementById(button.dataset.close))));
  [imageModal, docModal].forEach((modal) => modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(modal); }));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') [imageModal, docModal].forEach((modal) => closeModal(modal)); });
})();
