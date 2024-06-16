'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
  ProConfigProvider,
} from '@ant-design/pro-components';
import { Constants } from '../../Constants/page';

const Login = ({handleSubmit}) => {
    return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          subTitle={Constants.LOGIN_FORM_TEXT.SUB_TITLE}
          submitter={{
            searchConfig: {
              submitText: Constants.LOGIN_FORM_TEXT.SUBMIT_TEXT,
            },
          }}
          onFinish={handleSubmit}
        >
          <>
            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={Constants.LOGIN_FORM_TEXT.EMAIL_PLACEHOLDER}
              rules={[
                {
                  required: true,
                  message: Constants.LOGIN_FORM_TEXT.EMAIL_REQUIRE_MESSAGE,
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={Constants.LOGIN_FORM_TEXT.PASSWORD_PLACEHOLDER}
              rules={[
                {
                  required: true,
                  message: Constants.LOGIN_FORM_TEXT.PASSWORD_REQUIRE_MESSAGE,
                },
              ]}
            />
          </>
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              {Constants.LOGIN_FORM_TEXT.REMEMBER_ME}
            </ProFormCheckbox>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default Login;
