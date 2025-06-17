export function createCard({ title, text, imageUrl, link }) {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  col.innerHTML = `
    <div class="card h-100 shadow-sm text-center">
      <div class="icon-wrapper">
        <img src="${imageUrl}" alt="${title} Icon" class="icon-img" />
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
      </div>
    </div>
  `;

  return col;
}
