/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import * as React from 'react';
import { Grid, Text, CardStatics, Header } from '../../components';
import { api } from '../../services/api';
import { InputBusca, BoxTable, Link, WrapperError } from './styles';

function Home() {
  const [errorMsg, setErrorMsg] = React.useState();
  const [estado, setEstado] = React.useState('');
  const [allDataApi, setAllDataApi] = React.useState([
    { state: 'Nenhum dado carregado :(', confirmed: '', deaths: '' },
  ]);
  const [allDataBackup, setAllDataBackup] = React.useState([]);
  const [cardData, setCardData] = React.useState([
    {
      totalCases: 0,
      totalDeaths: 0,
      deathRate: 0,
      death_rate: 0,
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
            const allData = [];
            resp.data.results.forEach((uf) => {
              allData.push(uf);
            });
            setAllDataApi(allData.sort());
            setAllDataBackup(allData.sort());

            const totalCases = resp.data.results.reduce(
              (i, uf) => (i += uf.confirmed),
              0
            );
            const totalDeaths = resp.data.results.reduce(
              (i, uf) => (i += uf.deaths),
              0
            );
            const deathRate = resp.data.results.reduce(
              (i, uf) => (i += uf.death_rate),
              0
            );
            setCardData({
              ...cardData,
              totalCases,
              totalDeaths,
              deathRate,
            });
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
    if (allDataBackup) {
      const oldData = [...allDataBackup];
      const filteredData = oldData.filter((uf) => uf.state.includes(estado));
      setAllDataApi(filteredData);
    }
  }, [estado, allDataBackup]);

  return (
    <>
      <Grid.Container>
        <Header />
        {errorMsg && <WrapperError>{errorMsg}</WrapperError>}
        <CardStatics
          totalCases={cardData.totalCases}
          totalDeaths={cardData.totalDeaths}
          deathRate={cardData.deathRate}
        />

        <BoxTable>
          <Text tag="p">
            Essa aplicação centraliza dados sobre boletins de número de casos
            das Secretarias Estaduais de Saúde (SES) sobre os casos de covid19
            no Brasil, sendo possível realizar o filtro por estado ou cidade.
            Além de outros dados relevantes para a análise, como óbitos
            registrados em cartório.
          </Text>
          <Text tag="p">
            Os dados aqui exibidos são desenvolvidos pelas secretarias
            municipais de saúde e fornecido via API pela{' '}
            <a href="https://brasil.io/" targe="_blank">
              Brasil.io
            </a>
            .
          </Text>
          <Text tag="p">
            A informação sobre o provedor das informações assim como a
            documentação da API, pode se encontrada nos seguintes links:
          </Text>
          <ul>
            <li>
              <a
                href="https://github.com/turicas/covid19-br"
                target="_blank"
                rel="noreferrer">
                https://github.com/turicas/covid19-br
              </a>
            </li>
            <li>
              <a href="https://brasil.io/" target="_blank" rel="noreferrer">
                https://brasil.io/
              </a>
            </li>
          </ul>
          <Text tag="p">
            Projeto desenvolvido para avaliação final do curso de React/React
            Native da Target Trust, ministrado por{' '}
            <a
              href="https://github.com/LeoRedin"
              target="_blank"
              rel="noreferrer">
              Leonardo Redin
            </a>
            .
          </Text>
        </BoxTable>

        <BoxTable background="white">
          <InputBusca
            placeholder="Digite um estado para filtrar"
            value={estado}
            onChange={(evt) => setEstado(evt.target.value)}
          />
          <Grid.Row>
            <Grid.Col value={{ xs: 3, md: 3 }}>
              <Text fontSize={{ xs: '12px', md: '24px' }}>Estado</Text>
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
          {allDataApi &&
            allDataApi.map((uf) => (
              <Grid.Row
                key={uf.state}
                margin="20px 0"
                fontSize={{ xs: '12px', sm: 'initial' }}>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  <Link exact to={`/estado/${uf.state}`}>
                    {uf.state}
                  </Link>
                </Grid.Col>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  {uf.confirmed && uf.confirmed.toLocaleString('pt-br')}
                </Grid.Col>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  {uf.deaths && uf.deaths.toLocaleString('pt-br')}
                </Grid.Col>
                <Grid.Col value={{ xs: 3, md: 3 }}>
                  {uf.estimated_population &&
                    uf.estimated_population.toLocaleString('pt-br')}
                </Grid.Col>
              </Grid.Row>
            ))}
        </BoxTable>
      </Grid.Container>
    </>
  );
}

export { Home };
