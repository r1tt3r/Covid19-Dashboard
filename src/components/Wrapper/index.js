import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';

export const Wrapper = styled.section`
  margin-top: 15px;
  ${breakpointsMedia({
    md: css`
      margin-top: 60px;
    `,
  })}
`;
