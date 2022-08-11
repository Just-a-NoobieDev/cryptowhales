import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "875a9f89c9mshf13d33e1d2736fep1c5bcdjsn0c981426b180",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTop10Cryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=10`),
    }),
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
    getGlobalStats: builder.query({
      query: () => createRequest("/stats"),
    }),
    getCoin: builder.query({
      query: (id) => createRequest(`/coin/${id}}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetTop10CryptosQuery,
  useGetGlobalStatsQuery,
  useGetCoinQuery,
} = cryptoApi;
