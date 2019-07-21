import React, { Component } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import SectionLayout from '../../components/sectionLoyout/sectionLoyout';
import { reduxForm, Field } from 'redux-form';
import FormField from '../../components/formField/formField';
import FormSlider from '../../components/formSlider/formSlider';
import TextareaAutosize from 'react-autosize-textarea';

import './profile.scss'

class Profile extends Component {
  profileFields = [
    {
      name: 'fullName',
      label: 'Полное ФИО',
    },
    {
      name: 'yearOfBirth',
      label: 'Год рождения',
    },
    {
      name: 'address',
      label: 'Место жительства',
    },
    {
      name: 'skype',
      label: 'Скайп',
    },
    {
      name: 'email',
      label: 'Почта',
    },
  ];
  profileCheckboxes = [
    {
      name: 'methodology',
      label: 'БЭМ/OOCSS',
    },
    {
      name: 'collector',
      label: 'Gulp/GRUNT',
    },
    {
      name: 'git',
      label: 'Использую Git',
    },
    {
      name: 'pug',
      label: 'Pug (Jade)',
    },
    {
      name: 'webpack',
      label: 'Webpack',
    },
    {
      name: 'accurateEye',
      label: 'С глазомером всё ок',
    },
    {
      name: 'preprocessor',
      label: 'Stylus/LESS/SASS',
    },
    {
      name: 'webGL',
      label: 'Дружу с WebGL',
    },
    {
      name: 'blog',
      render: () => <span>Читаю <a href="blog.csssr.ru" className="link">blog.csssr.ru</a></span>,
    },
    {
      name: 'svg',
      label: 'Работаю с SVG',
    },
    {
      name: 'jQuery',
      label: 'jQuery',
    },
    {
      name: 'lazy',
      label: 'Я ленивый(-ая)',
    },
    {
      name: 'semantics',
      label: 'Верстаю семантично',
    },
    {
      name: 'angular',
      label: 'Знаю/изучаю Angular',
    },
    {
      name: 'english',
      label: 'У меня хороший английский',
    },
    {
      name: 'aсcessibility',
      label: 'Aсcessibility (A11Y)',
    },
    {
      name: 'react',
      label: 'Знаю/изучаю React',
    },
    {
      name: 'specifications',
      label: 'ES2015/ES2016',
    },
    {
      name: 'NodeJS',
      label: 'Знаю/изучаю Node.js',
    },
  ];
  profileRadioButtons = [
    {
      label: 'Верстать',
      value: 'layout',
    },
    {
      label: 'Прокачиваться в JS',
      value: 'js',
    },
    {
      label: 'Менеджерство',
      value: 'manager',
    },
    {
      label: 'Другое',
      value: 'other',
    },
  ];

  render() {
    return <PageLayout layoutClass="profile">
      <div className="profile_title">
        <span className="icon icon_title"></span>
      </div>
      <main><a href=""></a>
        <form onSubmit={() => {}}>
          <div className="profile_base_info">
            {this.profileFields.map((field, index) => <Field
              key={index}
              component={FormField}
              {...field}
            />)}
          </div>
          <SectionLayout
            layoutClass="profile_checkboxes"
            title="Расскажите о себе чекбоксами"
            text="Отметьте чекбоксами пукты, которые соответствуют вашим скиллам. Кстати,
              отсутствие опыта не означает, что
              у вас меньше шансов стать одним из наших товарищей. Это означает, что вы будетет получать те задачи,
              с которыми гарантированно будетет справляться."
          >
            <div className="profile_checkboxes_wrapper">
              {this.profileCheckboxes.map((field, index) =>  <Field
                key={index}
                type="checkbox"
                fromFieldClassName="checkbox"
                component={FormField}
                {...field}
              />)}
            </div>
          </SectionLayout>
          <SectionLayout
            layoutClass="profile_slider"
            title="Уровень владения JavaScript"
          >
            <Field
              component={FormSlider}
              name="jsLevel"
              labels={[
                'Не владею',
                'Использую готовые решения',
                'Использую готовые решения и умею их переделывать',
                'Пишу сложный JS с нуля',
              ]}
            />
          </SectionLayout>
          <SectionLayout
            layoutClass="profile_textarea_wrapper"
            title="Расскажите о себе словами"
            text="Напишите пару предложений, чем вас привлекла наша вакансияи чего вы ожидаете от работы CSSSR.
              Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически."
          >
            <TextareaAutosize
              name="aboutYou"
              style={{ lineHeight: '58px' }}
              className="field-textarea"
              rows={3}
              defaultValue={`Ну-ууу-уу...\nЭэээ...`}
            />
          </SectionLayout>
          <SectionLayout
            layoutClass="profile_radio_buttons"
            title="Какие у вас планы на будущее"
            text="Этот ответ ни на что не влияет. Не беда, если в будущем ваши планы поменяются."
          >
            <div className="profile_radio_wrapper">
              {this.profileRadioButtons.map((field, index) =>  <Field
                key={index}
                type="radio"
                name="futurePlan"
                fromFieldClassName="radio"
                component={FormField}
                {...field}
              />)}
            </div>
          </SectionLayout>
        </form>
      </main>
    </PageLayout>;
  }
}

export default reduxForm({
  form: 'profileForm',
  //validate: getValidationRules([ 'bankRoutingNumber', 'bankAccountNumber', 'bankAccountNumberDuplicate' ]),
})(Profile);
