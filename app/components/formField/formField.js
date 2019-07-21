import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

import './formField.scss'

export default class FormField extends React.Component {
  render() {
    const {
      input,
      label,
      name,
      render,
      meta: { touched, error, warning, dirty },
      fromFieldClassName,
      ...custom
    } = this.props;
    return <div className={`${fromFieldClassName} field`}>
      <label className="field_label">{render ? render() : label}
        <Input
          className="field_input"
          name={name}
          {...(touched || dirty ? { valid: !error, invalid: !!error } : {})}
          {...input}
          {...custom}
        />
      </label>
      {error && (touched || dirty) && <FormFeedback>{error}</FormFeedback>}
      {!error && warning && <FormText>{warning}</FormText>}
    </div>;
  }
}

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  render: PropTypes.func,
  name: PropTypes.string,
  meta: PropTypes.object.isRequired,
  fromFieldClassName: PropTypes.string,
};

FormField.defaultProps = {
  name: '',
  fromFieldClassName: '',
  label: '',
};
