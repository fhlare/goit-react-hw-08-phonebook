import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserText = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

export const UserButton = styled.button`
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
`
