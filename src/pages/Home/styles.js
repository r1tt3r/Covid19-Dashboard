import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const BoxTable = styled.div`
  border-radius: 20px;
  background: #fff;
  min-height: 100px;
  padding: 5px;
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  margin-bottom: 20px;
  ${breakpointsMedia({
    sm: css`
      padding: 25px;
    `,
  })}
`;

export const InputBusca = styled.input`
  padding: 20px;
  border-radius: 30px;
  border: 1px solid #5d7a09;
  width: 100%;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 12px;
  &:hover {
    font-weight: 700;
  }
  ${breakpointsMedia({
    sm: css`
      font-size: initial;
    `,
  })}
`;

export const WrapperError = styled.div`
  padding: 20px;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  margin-bottom: 15px;
  border-radius: 10px;
`;
