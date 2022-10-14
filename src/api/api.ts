import http from "./http";
import { ResType } from "@/types/http";

/******************************* blog ****************************/
export const GET_BLOG_LIST = (params: object) => {
    return http("/api/blog/list", "get", params);
};