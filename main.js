import './style.css'

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  const codeInput = document.getElementById('code');
  const formGroup = document.querySelector('.form-group');
  const hint = document.querySelector('.hint');

  if (!codeInput || !formGroup || !hint)
    return;

  if (codeInput.value === '' || codeInput.value.toString().length < 9 || codeInput.value.toString().length > 9) {
    formGroup.classList.add('has-error');
    hint.classList.add('active');

    return;
  }

  const snackbar = document.getElementById("snackbar");

  if (!snackbar)
    return;

  formGroup.classList.remove('has-error');
  hint.classList.remove('active');

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
});
