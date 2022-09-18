document.addEventListener('DOMContentLoaded', function (e) {
  const meta = document.head.querySelector('meta[name="enabled-features"]');
  meta.content += ',PJAX_ENABLED';
});
