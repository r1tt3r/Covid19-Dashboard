import React from 'react';
import { Text } from '../Text';

function Header() {
  return (
    <>
      <Text
        tag="h1"
        fontSize="42px"
        margin="20px 0 20px 0"
        textAlign="center"
        color="#3d3d3d">
        Covid19 no Brasil
      </Text>
      <Text
        tag="h2"
        fontSize="22px"
        margin="0 0 20px 0"
        textAlign="center"
        color="#3d3d3d">
        Dados atualizados a todo momento
      </Text>
    </>
  );
}

export { Header };
