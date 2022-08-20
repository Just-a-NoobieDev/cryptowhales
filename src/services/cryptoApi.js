import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.COINRANKING_API,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
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
