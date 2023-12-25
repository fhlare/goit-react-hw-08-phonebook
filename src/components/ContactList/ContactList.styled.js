import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 40px;
  padding: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #2e2f42;
  border-radius: 4px;
`;
