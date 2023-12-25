import styled from 'styled-components';

export const Text = styled.span`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: black;
  display: flex;
  gap: 8px;
`;

export const NumberText = styled.span`
  font-size: 18px;
  color: black;
  display: block;
`;

export const DeleteButton = styled.button`
  height: 32px;
  min-width: 68px;
  padding: 2px 6px;
  display: block;
  background-color: #4d5ae5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #404bbf;
    cursor: pointer;
  }
`;
