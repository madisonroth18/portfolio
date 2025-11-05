// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-to-top button
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const toggleDark = document.getElementById('toggleDark');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
  toggleDark.textContent = '☀️ Light Mode';
}

// Toggle mode and save preference
toggleDark.addEventListener('click', () => {
  body.classList.toggle('dark');
  const darkModeEnabled = body.classList.contains('dark');
  toggleDark.textContent = darkModeEnabled ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('darkMode', darkModeEnabled);
});
