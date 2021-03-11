import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from '../Text';
import { CardWrapper } from './styles';

function Card({ title, children }) {
  return (
    <CardWrapper>
      <Box textAlign="center" margin="20px">
        <Text fontSize="32px" color="#5D7A09" fontWeight="700">
          {children}
        </Text>
      </Box>
      <Box textAlign="center">{title}</Box>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Card };
