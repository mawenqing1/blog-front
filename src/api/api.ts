import http from './http'
import { ResType } from '@/types/http'
import { LoginRes, LoginReq, ListRes, AddReq, AddRes, DetailReq, DetailRes, UpdateReq, DeleteReq } from '@/types/api'

/** ***************************** blog ****************************/
export const GET_BLOG_LIST = async (params: {}) => {
  return await http<ListRes[]>('/api/blog/list', 'get', params)
}

export const LOGIN = async (params: LoginReq) => {
  return await http<LoginRes>('/api/user/login', 'post', params)
}

export const ADD_ARTICLE = async (params: AddReq) => {
  return await http<AddRes>('/api/blog/new', 'post', params)
}

export const GET_BLOG_COUNT = async (params: {}) => {
  return await http<number>('/api/blog/getBlogCount', 'get', params)
}

export const GET_ARTICLE_DETAIL = async (params: DetailReq) => {
  return await http<DetailRes>('/api/blog/detail', 'get', params)
}

export const UPDATE_ARTICLE = async (params: UpdateReq) => {
  return await http('/api/blog/update', 'post', params)
}

export const DELETE_ARTICLE = async (params: DeleteReq) => {
  return await http('/api/blog/delete', 'post', params)
}
