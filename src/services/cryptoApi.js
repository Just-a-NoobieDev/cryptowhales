import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_COINRANKING_API,
  "X-RapidAPI-Host": process.env.REACT_APP_COINRANKING_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_COINRANKING_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getGlobalStats: builder.query({
      query: () => createRequest("/stats"),
    }),
    getCoin: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetGlobalStatsQuery, useGetCoinQuery } =
  cryptoApi;
