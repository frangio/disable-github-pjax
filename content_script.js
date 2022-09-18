let disabled = false;

function disablePjax(e) {
  if (!disabled) {
    const meta = document.head.querySelector('meta[name="enabled-features"]');
    meta.content += ',PJAX_ENABLED';
    disabled = true;
  }
}

document.addEventListener('DOMContentLoaded', disablePjax, { once: true });
document.addEventListener('click', disablePjax, { once: true, capture: true });
