import * as R from 'ramda';

const REQUIRED_ERROR = '  - обязательное поле';
const getDefaultRules = (prop, title) => [
  {
    name: 'required',
    message: `${title} ${REQUIRED_ERROR}`,
  },
];

const validationRules = {
  firstName: getDefaultRules('firstName', 'Имя'),
  lastName: getDefaultRules('lastName', 'Фамилия'),
  position: getDefaultRules('legalName', 'Должность'),
};

export const getValidationRules = (fields, isArray) => values => {
  const errors = isArray ? [] : {};
  fields.forEach(field => {
    const rules = validationRules[field];
    if (!rules) {
      return;
    }
    const getError = values => {
      const error = R.find(({ name, func }) => values[field] ? func && !func(values) : name === 'required')(rules);
      return error ? error.message : '';
    };

    if (isArray) {
      values.forEach((item, index) => {
        errors[index] = { [field]: getError(item[field]) };
      });
    } else {
      errors[field] = getError(values);
    }
  });
  return errors;
};
