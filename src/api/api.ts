import http from "./http";
import { ResType } from "@/types/http";

/******************************* blog ****************************/
export const GET_BLOG_LIST = (params: object) => {
    return http("/api/blog/list", "get", params);
};

export const LOGIN = (params: object) => {
    return http("/api/user/login", "post", params);
};