const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const feedbackForm = document.querySelector('#feedback-form');

if (feedbackForm) {
  const status = document.querySelector('#form-status');
  const confirmationFrame = document.querySelector('.submission-frame');
  let submissionInProgress = false;

  feedbackForm.addEventListener('submit', (event) => {
    const requiredGroups = feedbackForm.querySelectorAll('[data-required-group]');
    const incompleteGroup = [...requiredGroups].find(
      (group) => !group.querySelector('input[type="checkbox"]:checked')
    );

    requiredGroups.forEach((group) => group.classList.remove('has-error'));

    if (incompleteGroup) {
      event.preventDefault();
      incompleteGroup.classList.add('has-error');
      incompleteGroup.querySelector('input').focus();
      status.textContent = 'Please select at least one option for questions 1 and 2.';
      return;
    }

    submissionInProgress = true;
    status.textContent = 'Sending your feedback…';
  });

  feedbackForm.addEventListener('change', () => {
    feedbackForm.querySelectorAll('[data-required-group]').forEach((group) => {
      if (group.querySelector('input[type="checkbox"]:checked')) group.classList.remove('has-error');
    });
  });

  confirmationFrame.addEventListener('load', () => {
    if (!submissionInProgress) return;
    submissionInProgress = false;
    feedbackForm.reset();
    status.textContent = 'Thank you—your feedback has been received.';
  });
}
