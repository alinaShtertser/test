import { connect } from 'react-redux';
import WorkerList from './workerList';
import { withRouter } from 'react-router-dom';
import { addWorkers, selectWorker, initToggle } from '../../actions/workers';

const mapStateToProps = state => {
  const { workers } = state;
  return {
    workers: workers.items || [],
    isInit: workers.isInit,
  }
};

const dispatchProps = {
  addWorkers,
  selectWorker,
  initToggle,
};

const mergeProps = (stateProps, dispatchProps, props) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...props,
  };
};

export default withRouter(connect(mapStateToProps, dispatchProps, mergeProps)(WorkerList));
