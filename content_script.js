let disabled = false;

function disablePjax() {
  if (!disabled) {
    const meta = document.head.querySelector('meta[name="enabled-features"]');
    meta.content += ',PJAX_ENABLED';
    disabled = true;
  }
}

function onReady(cb) {
  if (document.readyState !== 'loading') {
    cb();
  } else {
    document.addEventListener('readystatechange', () => {
      if (document.readyState !== 'loading') {
        cb();
      }
    });
    window.addEventListener('DOMContentLoaded', cb, { once: true, capture: true });
  }
}

onReady(disablePjax);

window.addEventListener('click', disablePjax, { once: true, capture: true });
