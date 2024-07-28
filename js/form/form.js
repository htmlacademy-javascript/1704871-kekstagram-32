
import {isEscape} from '../util.js';
import {addValidators, pristineReset, pristineValidate} from './validate-form.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const uploadCancelButton = document.querySelector('#upload-cancel');
const uploadSubmitButton = document.querySelector('#upload-submit');

const body = document.body;


const onDocumentKeydown = (evt) => {
  if (isEscape(evt)) {
    closeModal();
  }
};

const onShowUploadForm = () => {
  openModal();
  uploadCancelButton.addEventListener('click', onCloseUploadForm)
}

const onCloseUploadForm = () => {
  closeModal();
}

const openModal = () => {
  body.classList.add('modal-open');
  uploadForm.classList.remove('hidden');
  uploadInput.removeEventListener('change', onShowUploadForm);
  document.addEventListener('keydown', onDocumentKeydown);
}

const closeModal = () => {
  body.classList.remove('modal-open');
  uploadForm.classList.add('hidden');
  uploadCancelButton.removeEventListener('click', onCloseUploadForm)
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInput.addEventListener('change', onShowUploadForm)
}

const initForm = () => {
  uploadInput.addEventListener('change', onShowUploadForm);
  addValidators();
}

export {initForm};

