import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Card } from '../Card';
import { Grid } from '../Grid';
import { Text } from '../Text';
import { Loading } from './animations';

function CardStatics({ totalCases, totalDeaths, deathRate }) {
  return (
    <>
      <Grid.Row>
        <Grid.Col value={{ xs: 12, md: 4 }}>
          <Card title="Casos Confirmados">
            {totalCases ? totalCases.toLocaleString('pt-br') : Loading}
          </Card>
        </Grid.Col>
        <Grid.Col value={{ xs: 12, md: 4 }}>
          <Card title="Mortes Confirmadas">
            {totalDeaths ? totalDeaths.toLocaleString('pt-br') : Loading}
          </Card>
        </Grid.Col>
        <Grid.Col value={{ xs: 12, md: 4 }}>
          <Card title="Taxa de Mortalidade">
            {deathRate ? parseFloat(deathRate.toFixed(4)) : Loading}
          </Card>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row textAlign={{ xs: 'center', md: 'right' }}>
        <Box width="100%" margin="20px">
          <Text tag="div" fontSize="12px">
            Dados atualizados em {new Date().toLocaleString()}
          </Text>
        </Box>
      </Grid.Row>
    </>
  );
}

CardStatics.defaultProps = {
  totalCases: 0,
  totalDeaths: 0,
  deathRate: 0,
};

CardStatics.propTypes = {
  totalCases: PropTypes.number,
  totalDeaths: PropTypes.number,
  deathRate: PropTypes.number,
};

export { CardStatics };
