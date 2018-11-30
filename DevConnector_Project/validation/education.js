const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateExperienceInput = (data) => {
  let errors = {};

  data.school = !isEmpty(data.title) ? data.school : '';
  data.degree = !isEmpty(data.company) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.company) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateExperienceInput;