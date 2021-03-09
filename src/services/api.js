import React from "react";

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.brasil.io/dataset/covid19",
});

async function getCases() {
  try {
    const fetchData = await api.get("/caso/data");
    return {
      success: true,
      data: fetchData.data,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export { api, getCases };
