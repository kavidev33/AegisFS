(() => {
  const button = document.querySelector('.mobile-nav-button');
  const nav = document.querySelector('.mobile-nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.hidden = open;
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

(() => {
  const btn = document.getElementById('copy-project-email');
  const status = document.getElementById('copy-status');
  if (!btn || !status) return;
  btn.addEventListener('click', async () => {
    const address = document.getElementById('project-email').textContent.trim();
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(address);
      status.textContent = 'Email address copied. Paste it into your preferred email service.';
      btn.textContent = 'Copied!';
    } catch (_) {
      status.textContent = 'Automatic copy was blocked by this browser. Select the visible email address above and copy it manually.';
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('project-email'));
      const sel = window.getSelection();
      sel.removeAllRanges(); sel.addRange(range);
    }
  });
})();


// Topic selection and optional Web3Forms submission. No key means no network submission.
(() => {
  const form = document.getElementById('aegis-contact-form');
  if (!form) return;
  const key = form.querySelector('[name="access_key"]');
  const submit = form.querySelector('[type="submit"]');
  const note = document.getElementById('form-setup-note');
  const feedback = document.getElementById('form-feedback');
  const topicField = document.getElementById('form-inquiry-type');
  document.querySelectorAll('[name="inquiry-topic"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) topicField.value = radio.value;
    });
  });
  const configured = key && key.value.trim() !== '' && !key.value.includes('REPLACE_WITH_');
  if (!configured) return;
  submit.disabled = false;
  note.hidden = true;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    feedback.textContent = '';
    delete feedback.dataset.kind;
    if (!form.reportValidity()) return;
    submit.disabled = true;
    submit.textContent = 'Sending…';
    try {
      const body = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {method:'POST',body});
      const json = await response.json();
      if (!response.ok || !json.success) throw new Error('Submission was not accepted');
      feedback.dataset.kind = 'success';
      feedback.textContent = 'Thank you! Your message was submitted. We will get back to you via email.';
      form.reset();
      const selected = document.querySelector('[name="inquiry-topic"]:checked');
      topicField.value = selected ? selected.value : 'Security research and review';
    } catch (error) {
      feedback.dataset.kind = 'error';
      feedback.textContent = 'Message could not be sent. Please copy the email address and contact us directly.';
    } finally {
      submit.disabled = false;
      submit.innerHTML = 'Send your message <span aria-hidden="true">↗</span>';
    }
  });
})();
