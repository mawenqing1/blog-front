import http from "./http";
import { ResType } from "@/types/http";
import { LoginRes, LoginReq } from "@/types/api";

/******************************* blog ****************************/
export const GET_BLOG_LIST = (params: unknown) => {
    return http("/api/blog/list", "get", params);
};

export const LOGIN = (params: any) => {
    return http<LoginRes>("/api/user/login", "post", params);
};