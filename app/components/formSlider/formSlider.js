import React from 'react';
import PropTypes from 'prop-types';

import './formSlider.scss';

export default class FormSlider extends React.Component {
  handleLabelClick = () => console.log('label click');

  render() {
    const {
      input,
      labels,
      meta: { touched, error, dirty },
      fromFieldClassName,
      ...custom
    } = this.props;
    const tickMarksId = `${input.name}_tickmarks`;
    const rangeInputId = `${input.name}_input_id`;
    return <div className={`${fromFieldClassName} range`}>
      <input
        id={rangeInputId}
        className="range_input"
        list={tickMarksId}
        type="range"
        min="0"
        max={labels.length - 1}
        steps="1"
        value="1"
        {...(touched || dirty ? { valid: !error, invalid: !!error } : {})}
        {...input}
        {...custom}
      />
      <label htmlFor={rangeInputId}>
        <div className="range_labels">
          {labels.map((label, index) => <span
            style={{'--i': {index}}}
            key={index}
          >{label}</span>) }
        </div>
      </label>
      <datalist id={tickMarksId}>
        {labels.map((label, index) => <option
          value={index}
          key={index}
          label={label}
       />) }
      </datalist>
    </div>;
  }
}

FormSlider.propTypes = {
  input: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  fromFieldClassName: PropTypes.string,
};

FormSlider.defaultProps = {
  name: '',
  fromFieldClassName: '',
};
