const form = document.getElementById('rsvp-form');
const spinner = document.getElementById('spinner');
const submitButton = form.querySelector('button');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Show spinner
  spinner.style.display = 'block';

  // Disable the button and change text
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  const formData = new FormData(form);
  const url = "https://script.google.com/macros/s/AKfycbyTRjUkG2OtfwVqsdakLlYJIzGUGupgpiUG8c9xgBBDkPDUjGmntGErriCcRL_oHMVwFQ/exec";

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    spinner.style.display = 'none';

    if (response.ok) {
      form.reset();
      submitButton.textContent = 'Thank you for your RSVP';
      submitButton.classList.add('fade-in');
    } else {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit RSVP';
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    spinner.style.display = 'none';
    submitButton.disabled = false;
    submitButton.textContent = 'Submit RSVP';
    alert('There was a network error.');
    console.error(error);
  });
});
