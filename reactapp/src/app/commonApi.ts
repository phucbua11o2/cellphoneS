import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseModel } from "../models/commonModel";
import { RootState } from "./store";

export const DOMAIN_PREFIX = "";

export const commonApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:
            process.env.NODE_ENV === "development"
                ? "https://localhost:7050/api/"
                : `${DOMAIN_PREFIX}/api/`,
        prepareHeaders: (headers, { getState }) => {
            const jwt = localStorage.getItem("jwt");
            const token = (getState() as RootState).auth.token;

            if (token && jwt) {
                headers.set("jwt", `${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // apiGet: builder.query<ResponseModel, { url: string; id: string }>({
        //   query: ({ url, id }) => {
        //     return {
        //       url: `${url.toLowerCase()}/${id}`,
        //       method: "GET",
        //     };
        //   },
        //   transformResponse: (response: ResponseModel, meta, arg) => response,
        // }),
        apiPost: builder.mutation<ResponseModel, { url: string; body: any }>({
            query: ({ url, body }) => {
                return {
                    url: `${url.toLowerCase()}`,
                    method: "POST",
                    body,
                };
            },
            transformResponse: (response: ResponseModel, meta, arg) => response,
        }),
    }),
});

export const { useApiPostMutation } = commonApi;
