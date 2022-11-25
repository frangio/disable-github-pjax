let disabled = false;

function disablePjax(e) {
  if (!disabled) {
    const meta = document.head.querySelector('meta[name="enabled-features"]');
    meta.content += ',PJAX_ENABLED';
    disabled = true;
  }
}

window.addEventListener('DOMContentLoaded', disablePjax, { once: true, capture: true });
window.addEventListener('click', disablePjax, { once: true, capture: true });
