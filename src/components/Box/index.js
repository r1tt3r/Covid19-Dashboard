import styled from 'styled-components';
import { propToStyle } from '../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flex')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('flexWrap')}
  ${propToStyle('alignSelf')}
  ${propToStyle('background')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('height')}
  ${propToStyle('width')}
  ${propToStyle('padding')}
  ${propToStyle('borderRadius')}
  ${propToStyle('position')}
  ${propToStyle('textAlign')}
`;
