import styled from 'styled-components';
import { IoSearchSharp as Find} from "react-icons/io5";

export const InputContainer = styled.div`
  position: relative;
`;

export const IoSearchSharp = styled(Find)`
  position: absolute;
  top: 50%;
  left: -1%;
  transform: translateY(-50%) translateX(16px);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const Search = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 32px;
  border: 1px solid rgba(46, 47, 66, 0.4);
  border-radius: 4px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
    outline-color: #4d5ae5;
  }

  &:focus + ${IoSearchSharp} {
    color: #4d5ae5;
  }
`;

export const Text = styled.p`
  width: 100%;
  margin: 0;
  font-size: 16px;
  font-weight: 500;

`;


