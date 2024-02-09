document.getElementById("lading-presentation-button").addEventListener("click", scroll)

function scroll() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}