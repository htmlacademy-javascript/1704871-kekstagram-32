
import {isEscape} from '../util.js';
import {addValidators, pristineReset, pristineValidate} from './validate-form.js';
import { scalePicture, resetScale } from './scale-picture.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const uploadCancelButton = document.querySelector('#upload-cancel');
const uploadSubmitButton = document.querySelector('#upload-submit');
const form = document.querySelector('#upload-select-image');

const body = document.body;

const setSubmitButtonState = (state) => {
  uploadSubmitButton.disabled = state;
};

const onDocumentKeydown = (evt) => {
  if (isEscape(evt)) {
    closeModal();
  }
};

const onCloseUploadForm = () => {
  closeModal();
};

const onShowUploadForm = () => {
  openModal();
  uploadCancelButton.addEventListener('click', onCloseUploadForm);
};

function closeModal() {
  body.classList.remove('modal-open');
  uploadForm.classList.add('hidden');
  uploadCancelButton.removeEventListener('click', onCloseUploadForm);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInput.addEventListener('change', onShowUploadForm);
  pristineReset();
  resetScale();
}

function openModal() {
  body.classList.add('modal-open');
  uploadForm.classList.remove('hidden');
  uploadInput.removeEventListener('change', onShowUploadForm);
  document.addEventListener('keydown', onDocumentKeydown);
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristineValidate();
  if (isValid) {
    setSubmitButtonState(true);
  } else {
    setSubmitButtonState(false);
  }
};

const initForm = () => {
  uploadInput.addEventListener('change', onShowUploadForm);
  form.addEventListener('submit', onFormSubmit);
  scalePicture();
  addValidators();
};

export {initForm};

