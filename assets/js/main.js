document.addEventListener('DOMContentLoaded', () => {
  function renderPortfolio(projects) {
    const gallery = document.getElementById('portfolio-gallery');
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      const thumbnail = project.thumbnail || "assets/images/sample.jpg";
      let projectLinkButton = "";

      if (project.link) {
        projectLinkButton = `<a class="modal-project-link" href="${project.link}" target="_blank">${project.linkdetails}</a>`;
      }
      
      card.innerHTML = `
        <img src="${thumbnail}" alt="${project.title}">
        <div class="project-card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          ${projectLinkButton}
        </div>
      `;
      gallery.appendChild(card);
    });
  }
  fetch('data/portfolio.json')
    .then(response => response.json())
    .then(data => renderPortfolio(data))
    .catch(error => console.error("Ошибка загрузки данных: ", error));
});