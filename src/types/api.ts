import { type } from "os";

export interface LoginRes {
    username: string;
    realname: string;
}

export interface LoginReq {
    username: string;
    password: string;
}

export interface ListRes {
    author: string;
    content: string;
    createtime: number;
    id: number;
    title: string;
    ratings: number
}