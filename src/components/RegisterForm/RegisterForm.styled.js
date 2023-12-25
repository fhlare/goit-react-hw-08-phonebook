import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

import { IoPersonSharp as Person } from 'react-icons/io5';
import { IoMdMail as Email } from 'react-icons/io';
import { RiLockPasswordFill as Lock } from 'react-icons/ri';

import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputContainer = styled.div`
  position: relative;
`;
export const IoPersonSharp = styled(Person)`
  position: absolute;
  top: 50%;
  left: -1%;
  transform: translateY(-50%) translateX(16px);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const IoMdMail = styled(Email)`
  position: absolute;
  top: 50%;
  left: -1%;
  transform: translateY(-50%) translateX(16px);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const RiLockPasswordFill = styled(Lock)`
  position: absolute;
  top: 50%;
  left: -1%;
  transform: translateY(-50%) translateX(16px);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const Field = styled(FormikField)`
  padding: 0px 32px;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(46, 47, 66, 0.4);
  border-radius: 4px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline-color: #4d5ae5;
  }

  &:focus + ${IoPersonSharp} {
    color: #4d5ae5;
  }

  &:focus + ${IoMdMail} {
    color: #4d5ae5;
  }

  &:focus + ${RiLockPasswordFill} {
    color: #4d5ae5;
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  color: red;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormButton = styled.button`
  display: block;
  height: 48px;
  min-width: 168px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 32px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #4d5ae5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #404bbf;
    cursor: pointer;
  }
`;
