import http from "./http";
import { ResType } from "@/types/http";
import { LoginRes, LoginReq, ListRes } from "@/types/api";

/******************************* blog ****************************/
export const GET_BLOG_LIST = (params: {}) => {
    return http<Array<ListRes>>("/api/blog/list", "get", params);
};

export const LOGIN = (params: LoginReq) => {
    return http<LoginRes>("/api/user/login", "post", params);
};

export const ADD_ARTICLE = (params: any) => {
    return http("/api/blog/new", "post", params);
};

export const GET_BLOG_COUNT = (params: {}) => {
    return http<number>("/api/blog/getBlogCount", "get", params);
};