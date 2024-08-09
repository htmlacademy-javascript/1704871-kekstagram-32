import {scalePicture, resetScale} from './scale-added-picture.js';
import {isEscape} from '../utils/utils.js';
import {initSlider} from './add-effects.js';
import {addValidators, pristineReset, pristineValidate} from './validate-form.js';
import {uploadFormData} from './submit-form.js';

const form = document.querySelector('#upload-select-image');
const formUploadInput = document.querySelector('.img-upload__input');
const formEdit = document.querySelector('.img-upload__overlay');
const formCancelUploadButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');

const setSubmitButtonState = (state) => {
  submitButton.disabled = state;
};

const onUploadCancelClick = () => {
  closeModal();
};

const onDocumentKeydown = (evt) => {
  if (isEscape(evt)) {
    closeModal();
  }
};

function closeModal() {
  formEdit.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  pristineReset();
  resetScale();
  form.reset();
}

function openModal() {
  formEdit.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCancelUploadButton.addEventListener('click', onUploadCancelClick);
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristineValidate();
  if (isValid) {
    setSubmitButtonState(true);
    const formData = new FormData(evt.target);
    uploadFormData(formData);
  }
};

const onUploadImage = () => {
  openModal();
};


const initForm = () => {
  formUploadInput.addEventListener('change', onUploadImage);
  form.addEventListener('submit', onFormSubmit);
  addValidators();
  scalePicture();
  initSlider();
};

export { initForm, closeModal, setSubmitButtonState };
