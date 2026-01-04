const projectsGrid = document.getElementById('projectsGrid');

setTimeout(() => {
  projectsGrid.innerHTML = `
    <article class="project-card">
      <h4>Portfolio Website</h4>
      <p>Responsive portfolio with dark mode.</p>
    </article>
    <article class="project-card">
      <h4>Dashboard UI</h4>
      <p>Admin dashboard with scalable layout.</p>
    </article>
    <article class="project-card">
      <h4>CMS Tool</h4>
      <p>Content management frontend.</p>
    </article>
  `;
}, 1200);
