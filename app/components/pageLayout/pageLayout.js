import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';

import './pageLayout.scss'

export default class PageLayout extends React.Component {
  render() {
    const { children, layoutClass } = this.props;
    return <div className={`${layoutClass} wrapper`}>
      <Header />
      <div className={`${layoutClass}_wrapper`}>
        {children}
      </div>
    </div>;
  }
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutClass: PropTypes.string.isRequired,
};
