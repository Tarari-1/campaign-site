const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const feedbackForm = document.querySelector('[data-needs-google-form]');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    status.textContent = 'This form is ready to connect once the Google Form link is added.';
  });

  const anonymousCheckbox = feedbackForm.querySelector('#anonymous');
  const identityFields = [feedbackForm.querySelector('#name'), feedbackForm.querySelector('#email')];

  anonymousCheckbox.addEventListener('change', () => {
    identityFields.forEach((field) => {
      field.disabled = anonymousCheckbox.checked;
      if (anonymousCheckbox.checked) field.value = '';
    });
  });
}
