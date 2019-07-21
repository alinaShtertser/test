import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { HOME_PATH } from '../../utils/constants';
import PageLayout from '../../components/pageLayout/pageLayout';
import SectionLayout from '../../components/sectionLoyout/sectionLoyout';

import Modal from '../../components/modal/modal';
import WorkerForm from '../../components/workerForm/workerForm';

import './profile.scss'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
  }

  handleUpdateWorkerSubmit = data => {
    const { worker: { id }, updateWorker, selectWorker } = this.props;
    selectWorker({...data, id });
    updateWorker({...data, id });
    this.toggleUpdateWorkerModal();
  };

  toggleUpdateWorkerModal = () => this.modal.current.toggle();

  render() {
    const { worker: { firstName, lastName, position } } = this.props;

    return <PageLayout layoutClass="profile">
      <div className="profile_title">
        <span className="icon icon_title" />
      </div>
      <main>
        <SectionLayout
          layoutClass="profile_wrapper"
          title="Информация о сотруднике"
          text="Вы можете изменить данные. Для этого нажмите кнопку 'Изменить'."
        >
          <p>Имя: {firstName}</p>
          <p>Фамилия: {lastName}</p>
          <p>Должность: {position}</p>
        </SectionLayout>
        <div className="buttons_wrapper">
          <Link className="btn btn-secondary" to={HOME_PATH}>К списку</Link>
          <Button onClick={this.toggleUpdateWorkerModal}>Редактировать</Button>
        </div>
        <Modal
          centered
          header="Добавить работника"
          ref={this.modal}
        >
          <WorkerForm
            onSubmit={this.handleUpdateWorkerSubmit}
            initialValues={{ firstName, lastName, position }}
            modal={this.modal}
          />
        </Modal>
      </main>
    </PageLayout>;
  }
}

Profile.propTypes = {
  worker: PropTypes.object.isRequired,
  updateWorker: PropTypes.func.isRequired,
  selectWorker: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
