import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { routes } from '../../constants';

export default function LoginEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
              maxLength: 20,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <Error>* 이메일을 입력해주세요</Error>
          )}
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === 'required' && (
            <Error>* 비밀번호를 입력해주세요</Error>
          )}
          {/* 이메일 또는 비밀번호를 입력하세요 */}
          {/* {(errors.email || errors.password) &&
            (errors.email.type === 'required' ||
              errors.password.type === 'required') && <Error>gg</Error>} */}
          {/* 이메일 또는 비밀번호가 일치하지 않습니다. */}
        </InputWrapper>
        <LoginBtn type="submit" disabled={!isValid}>
          로그인
        </LoginBtn>
      </Form>
      <RegisterLink>
        <Link to={routes.join}>이메일로 회원가입</Link>
      </RegisterLink>
    </Container>
  );
}

const Container = styled.div`
  > h1 {
    margin-top: 54px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 34px 0;
`;

const InputWrapper = styled.div`
  position: relative;
  :first-child {
    margin-bottom: 16px;
  }
`;
const Label = styled.label`
  color: #767676;
  font-size: 12px;
  position: absolute;
  top: 0px;
`;
const Input = styled.input`
  position: relative;
  border: none;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #dbdbdb;

  :focus {
    border-bottom: 1px solid ${(props) => props.theme.accent};
  }
`;

const LoginBtn = styled.button`
  width: calc(100% - 64px);
  height: 44px;
  margin-left: 32px;
  margin-top: 30px;
  padding: 0;
  background-color: ${(props) => props.theme.accent};
  border: none;
  border-radius: 44px;
  color: #fff;
  :disabled {
    background: #ffc7a7;
  }
`;

const RegisterLink = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

const Error = styled.p`
  margin: 6px 0 16px;
  font-size: 12px;
  color: #eb5757;
`;
