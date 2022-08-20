import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.REACT_APP_BING_NEWS_SEARCH_API,
  "X-RapidAPI-Host": process.env.REACT_APP_BING_NEWS_SEARCH_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BING_NEWS_SEARCH_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) =>
        createRequest(
          `/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
