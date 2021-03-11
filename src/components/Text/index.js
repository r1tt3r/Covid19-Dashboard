/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../theme/utils/propToStyle';

const TextBase = styled.span`
  ${propToStyle('textAlign')}
  ${propToStyle('fontSize')}
  ${propToStyle('margin')}
  ${propToStyle('color')}
  ${propToStyle('fontWeight')}
`;

function Text({ tag, children, ...props }) {
  return (
    <TextBase as={tag} {...props}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
};

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Text };
