import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  border-radius: 20px;
  background: #fff;
  min-height: 100px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  ${breakpointsMedia({
    sm: css`
      margin-bottom: initial;
    `,
  })}
`;
