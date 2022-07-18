import React from 'react';
import { Modal, Form, Button, Input, DatePicker } from 'antd';
import moment from 'moment'
import { IUsersEditModalProps } from './types';

export const EditUserModal = ({ user, saving, submit, handleCloseModal }: IUsersEditModalProps) => {
  const form = Form.useFormInstance();
  return (
    <Modal destroyOnClose visible onCancel={handleCloseModal} bodyStyle={{ padding: '40px' }} footer={false}>
      <Form form={form} onFinish={submit}>
        <Form.Item
          label="Обращение"
          name="nameTitle"
          initialValue={user.name && user.name.title}
        >
          <Input placeholder="Обращение к пользователю" />
        </Form.Item>
        <Form.Item
          label="Имя"
          name="firstName"
          initialValue={user.name && user.name.first}
          rules={[
            {
              required: true,
              message: 'Введите имя пользователя'
            }
          ]}
        >
          <Input placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          name="lastName"
          initialValue={user.name && user.name.last}
          rules={[
            {
              required: true,
              message: 'Введите фамилию пользователя'
            }
          ]}
        >
          <Input placeholder="Фамилия пользователя" />
        </Form.Item>
        <Form.Item
          label="Электронная почта"
          name="email"
          initialValue={user.email}
          rules={[
            {
              required: true,
              message: 'Введите электронную почту пользователя'
            }
          ]}
        >
          <Input placeholder="Электронная почта пользователя" />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name="phone"
          initialValue={user.phone}
          rules={[
            {
              required: true,
              message: 'Введите телефон пользователя'
            }
          ]}
        >
          <Input placeholder="Телефон пользователя" />
        </Form.Item>
        <Form.Item
          label="cell"
          name="cell"
          initialValue={user.cell}
          rules={[
            {
              required: true,
              message: 'Введите cell пользователя'
            }
          ]}
        >
          <Input placeholder="cell пользователя" />
        </Form.Item>
        <Form.Item
          label="Дата рождения"
          name="birthday"
          initialValue={moment(user.dob.date)}
          rules={[
            {
              required: true,
              message: 'Введите дату рождения пользователя'
            }
          ]}
        >
          <DatePicker placeholder="Дата рождения пользователя" />
        </Form.Item>
        <Button htmlType="submit" loading={saving}>Сохранить изменения</Button>
      </Form>
    </Modal>
  )
}