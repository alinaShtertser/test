import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
import PageLayout from '../../components/pageLayout/pageLayout';
import Modal from '../../components/modal/modal';
import WorkerForm from '../../components/workerForm/workerForm';
import { INITIAL_WORKERS, PROFILE_PATH } from '../../utils/constants';
import SectionLayout from '../../components/sectionLoyout/sectionLoyout';

export default class WorkerList extends React.Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
  }

  componentWillMount() {
    const { addWorkers, isInit, initToggle } = this.props;
    if (!isInit) {
      addWorkers(INITIAL_WORKERS);
      initToggle(true);
    }
  }

  handleAddWorkerSubmit = data => {
    const { workers, addWorkers } = this.props;
    data.id = workers.length + 1;
    addWorkers([data]);
    this.toggleAddWorkerModal();
  };

  toggleAddWorkerModal = () => this.modal.current.toggle();

  handleShowProfile = data => {
    const { selectWorker, history } = this.props;
    selectWorker(data);
    history.push(PROFILE_PATH);
  };

  render() {
    const { workers } = this.props;
    return <PageLayout layoutClass="worker_list">
      <SectionLayout
        layoutClass="profile_wrapper"
        title="Список сотрудников"
        text="Кликните на строку таблицы чтобы попасть на страницу с подробной информацией о работнике."
      >
        <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Должность</th>
          </tr>
          </thead>
          <tbody>
          {workers.length > 0 ? workers.map((item, index) => {
            return <tr key={index} onClick={() => this.handleShowProfile(item)}>
              <th scope="row">{index + 1}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.position}</td>
            </tr>
          }) : <tr><td>Работников пока еще нет</td></tr>}
          </tbody>
        </Table>
        <Button onClick={this.toggleAddWorkerModal}>Добавить</Button>
      </SectionLayout>
      <Modal
        centered
        header="Добавить работника"
        ref={this.modal}
      >
        <WorkerForm
          onSubmit={this.handleAddWorkerSubmit}
          modal={this.modal}
        />
      </Modal>
    </PageLayout>;
  }
}

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired,
  isInit: PropTypes.bool,
  addWorkers: PropTypes.func.isRequired,
  selectWorker: PropTypes.func.isRequired,
  initToggle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

WorkerList.defaultProps = {
  isInit: false,
};
