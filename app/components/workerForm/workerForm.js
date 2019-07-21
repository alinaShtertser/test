import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import FormField from '../formField/formField';
import { getValidationRules } from '../../utils/validationRules';

class WorkerForm extends React.Component {
  render() {
    const {
      handleSubmit,
      modal,
      invalid,
    } = this.props;

    return <form onSubmit={handleSubmit}>
      <Field
        type="text"
        component={FormField}
        name="firstName"
        label="Имя"
      />
      <Field
        type="text"
        component={FormField}
        name="lastName"
        label="Фамилия"
      />
      <label className="field_label">
        Должность
        <Field
          type="textarea"
          name="position"
          component={FormField}
        />
      </label>
      <div className="buttons_wrapper">
        <Button color="danger" onClick={() => modal.current.toggle()}>Cancel</Button>
        <Button
          type="submit"
          color="secondary"
          disabled={invalid}
        >Submit</Button>
      </div>
    </form>;
  }
}

WorkerForm.propTypes = {
  error: PropTypes.string,
  submitSucceeded: PropTypes.bool,
  modal: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  invalid: PropTypes.bool,
};

WorkerForm.defaultProps = {
  initialValues: {}
};


export default reduxForm({
  form: 'workerForm',
  validate: getValidationRules(['firstName', 'lastName', 'position']),
})(WorkerForm);
