import React from 'react';
import PropTypes from 'prop-types';

import './formField.scss'

export default class FormField extends React.Component {
  render() {
    const {
      input,
      label,
      name,
      type,
      render,
      meta: { touched, error, warning, dirty },
      fromFieldClassName,
      ...custom
    } = this.props;
    return <div className={`${fromFieldClassName} field`}>
      <label className="field_label">{render ? render() : label}
        <input
          className="field_input"
          name={name}
          type={type}
          {...(touched || dirty ? { valid: !error, invalid: !!error } : {})}
          {...input}
          {...custom}

        />
        {type && (type === 'checkbox' || type === 'radio') && <span className="checkmark"></span>}
      </label>
      {error && (touched || dirty) && <span>{error}</span>}
      {!error && warning && <span>{warning}</span>}
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
