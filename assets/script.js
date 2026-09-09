document.getElementById('year').textContent = new Date().getFullYear();
const toast = document.querySelector('.toast');
document.querySelectorAll('[data-product]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    toast.textContent = `${link.dataset.product} — add your affiliate link here.`;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2600);
  });
});
