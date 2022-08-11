import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "875a9f89c9mshf13d33e1d2736fep1c5bcdjsn0c981426b180",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () =>
        createRequest(
          `/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day`
        ),
    }),
    get4LatestCryptoNews: builder.query({
      query: () =>
        createRequest(
          `/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=5`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery, useGet4LatestCryptoNewsQuery } =
  cryptoNewsApi;
