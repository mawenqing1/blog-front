import http from "./http";
import { ResType } from "@/types/http";
import { LoginRes, LoginReq } from "@/types/api";

/******************************* blog ****************************/
export const GET_BLOG_LIST = (params: any) => {
    return http("/api/blog/list", "get", params);
};

export const LOGIN = (params: any) => {
    return http<LoginRes>("/api/user/login", "post", params);
};

export const ADD_ARTICLE = (params: any) => {
    return http("/api/blog/new", "post", params);
};