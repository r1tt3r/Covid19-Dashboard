import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.brasil.io/dataset/covid19',
  headers: {
    Authorization: 'Token b7d5138fb365c0396850d0238ac3daf3157cedf1',
  },
});

export { api };
