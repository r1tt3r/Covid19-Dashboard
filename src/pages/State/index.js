/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import * as React from 'react';
import PropTypes from 'prop-types';
import { CardStatics, Grid, Header, Text } from '../../components';
import { Loading } from '../../components/CardStatics/animations';
import { api } from '../../services/api';
import { BoxTable, InputBusca } from '../Home/styles';
import { GoBack, WrapperError } from './styles';

function State({ match, history }) {
  const [errorMsg, setErrorMsg] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [citySearch, setCitySearch] = React.useState('');
  const [cityMoreDeaths, setCityMoreDeaths] = React.useState('Carregando ...');
  const [backupAllCity, setBackupAllCity] = React.useState([]);
  const [allCity, setAllCity] = React.useState();
  const [cardData, setCardData] = React.useState([
    {
      totalCases: 0,
      totalDeaths: 0,
      deathRate: 0,
      death_rate: 0,
      estimated_population: 0,
      confirmed_per_100k_inhabitants: 0,
      deaths_total_2019: 0,
      deaths_total_2020: 0,
    },
  ]);

  React.useEffect(() => {
    async function getData() {
      try {
        await api
          .get('/caso/data', {
            params: {
              place_type: 'state',
              is_last: 'True',
            },
          })
          .then((resp) => {
            if (resp.status === 200) {
              const dataFiltred = [];
              resp.data.results.forEach((uf) => {
                if (uf.state === match.params.estado) {
                  dataFiltred.push(uf);
                }
              });

              setCardData({
                ...cardData,
                totalCases: dataFiltred[0].confirmed,
                totalDeaths: dataFiltred[0].deaths,
                deathRate: dataFiltred[0].death_rate,
                estimated_population: dataFiltred[0].estimated_population,
                confirmed_per_100k_inhabitants:
                  dataFiltred[0].confirmed_per_100k_inhabitants,
              });
            }
          });
      } catch (error) {
        setErrorMsg(
          'Erro ao carregar dados da API. Por favor, tente novamente.'
        );
      }
    }
    getData();
  }, []);

  React.useEffect(() => {
    async function getData() {
      try {
        await api
          .get('/caso/data', {
            params: {
              state: match.params.estado,
              is_last: 'True',
              place_type: 'city',
            },
          })
          .then((resp) => {
            const dataFiltred = [];
            resp.data.results.forEach((city) => {
              dataFiltred.push(city);
            });
            setAllCity(dataFiltred.sort());
            setBackupAllCity(dataFiltred.sort());

            setCityMoreDeaths(
              dataFiltred.reduce((prev, current) =>
                prev.deaths > current.deaths ? prev : current
              )
            );
          })
          .finally(() => setLoading(false));
      } catch (error) {
        setErrorMsg(
          'Erro ao carregar dados da API. Por favor, tente novamente.'
        );
      }
    }
    getData();
  }, []);

  React.useEffect(() => {
    if (backupAllCity) {
      const oldData = [...backupAllCity];
      const filteredData = oldData.filter((city) =>
        city.city.toLowerCase().includes(citySearch.toLowerCase())
      );
      setAllCity(filteredData);
    }
  }, [citySearch]);

  return (
    <>
      <Grid.Container>
        <Header />
        <div>
          <GoBack type="button" onClick={history.goBack}>
            Voltar
          </GoBack>
        </div>
        {errorMsg && <WrapperError>{errorMsg}</WrapperError>}
        <CardStatics
          totalCases={cardData.totalCases}
          totalDeaths={cardData.totalDeaths}
          deathRate={cardData.deathRate}
        />
        <BoxTable>
          <Text tag="h2">Dados do estado: {match.params.estado}</Text>
          <Text tag="p">Número de cidades: {allCity && allCity.length}</Text>
          <Text tag="p">
            População estimada:{' '}
            {cardData.estimated_population &&
              cardData.estimated_population.toLocaleString('pt-br')}
          </Text>
          <Text tag="p">
            Casos confirmados por 100.000 habitantes:{' '}
            {cardData.confirmed_per_100k_inhabitants &&
              Math.round(cardData.confirmed_per_100k_inhabitants)}
          </Text>
          <Text tag="p">
            Cidade com mais mortes: {cityMoreDeaths && cityMoreDeaths.city}
          </Text>
        </BoxTable>

        <BoxTable background="white">
          <InputBusca
            placeholder="Digite uma cidade para filtrar"
            value={citySearch}
            onChange={(evt) => setCitySearch(evt.target.value)}
          />
          <Grid.Row>
            <Grid.Col value={{ xs: 3, md: 3 }}>
              <Text fontSize={{ xs: '12px', md: '24px' }}>Cidade</Text>
            </Grid.Col>
            <Grid.Col value={{ xs: 3, md: 3 }}>
              <Text fontSize={{ xs: '12px', md: '24px' }}>Casos</Text>
            </Grid.Col>
            <Grid.Col value={{ xs: 3, md: 3 }}>
              <Text fontSize={{ xs: '12px', md: '24px' }}>Mortes</Text>
            </Grid.Col>
            <Grid.Col value={{ xs: 3, md: 3 }}>
              <Text fontSize={{ xs: '12px', md: '24px' }}>População</Text>
            </Grid.Col>
          </Grid.Row>
          {loading ? (
            <Grid.Row>
              <Grid.Col value={{ xs: 3, md: 3 }}>{Loading}</Grid.Col>
              <Grid.Col value={{ xs: 3, md: 3 }}>{Loading}</Grid.Col>
              <Grid.Col value={{ xs: 3, md: 3 }}>{Loading}</Grid.Col>
              <Grid.Col value={{ xs: 3, md: 3 }}>{Loading}</Grid.Col>
            </Grid.Row>
          ) : (
            allCity.map((city) => (
              <Grid.Row
                key={city.city}
                margin="20px 0"
                fontSize={{ xs: '12px', sm: 'initial' }}>
                <Grid.Col value={{ xs: 3, md: 3 }}>{city.city}</Grid.Col>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  {city.confirmed && city.confirmed.toLocaleString('pt-br')}
                </Grid.Col>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  {city.deaths && city.deaths.toLocaleString('pt-br')}
                </Grid.Col>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  {city.estimated_population &&
                    city.estimated_population.toLocaleString('pt-br')}
                </Grid.Col>
              </Grid.Row>
            ))
          )}
        </BoxTable>
      </Grid.Container>
    </>
  );
}

State.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      estado: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.string.isRequired,
  }).isRequired,
};

export { State };
