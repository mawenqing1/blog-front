import http from "./http";
import { ResType } from "@/types/http";
import { LoginRes, LoginReq, ListRes, AddReq, AddRes, DetailReq, DetailRes } from "@/types/api";

/******************************* blog ****************************/
export const GET_BLOG_LIST = (params: {}) => {
    return http<Array<ListRes>>("/api/blog/list", "get", params);
};

export const LOGIN = (params: LoginReq) => {
    return http<LoginRes>("/api/user/login", "post", params);
};

export const ADD_ARTICLE = (params: AddReq) => {
    return http<AddRes>("/api/blog/new", "post", params);
};

export const GET_BLOG_COUNT = (params: {}) => {
    return http<number>("/api/blog/getBlogCount", "get", params);
};

export const GET_ARTICLE_DETAIL = (params: DetailReq) => {
    return http<DetailRes>("/api/blog/detail", "get", params);
};