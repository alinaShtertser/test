import React from 'react';
import PropTypes from 'prop-types';

export default class SectionLayout extends React.Component {
  render() {
    const {
      children,
      layoutClass,
      title,
      text,
    } = this.props;
    return <div className={layoutClass}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
        {children}
    </div>;
  }
}

SectionLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  layoutClass: PropTypes.string,
};
