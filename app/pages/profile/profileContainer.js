import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import { updateWorker, selectWorker } from '../../actions/workers';

const mapStateToProps = state => {
  const { workers } = state;
  return {
    worker: workers.item || {},
  }
};

const dispatchProps = {
  updateWorker,
  selectWorker,
};

const mergeProps = (stateProps, dispatchProps, props) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...props,
  };
};

export default withRouter(connect(mapStateToProps, dispatchProps, mergeProps)(Profile));
