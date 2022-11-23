import http from './http'
import { ResType } from '@/types/http'
import * as h from '@/types/api'

/** ***************************** blog ****************************/
export const GET_BLOG_LIST = async (params: h.ListReq) => {
  return await http<h.ListRes[]>('/api/blog/list', 'get', params)
}

export const LOGIN = async (params: h.LoginReq) => {
  return await http<h.LoginRes>('/api/user/login', 'post', params)
}

export const ADD_ARTICLE = async (params: h.AddReq) => {
  return await http<h.AddRes>('/api/blog/new', 'post', params)
}

export const GET_BLOG_COUNT = async (params: {}) => {
  return await http<number>('/api/blog/getBlogCount', 'get', params)
}

export const GET_ARTICLE_DETAIL = async (params: h.DetailReq) => {
  return await http<h.DetailRes>('/api/blog/detail', 'get', params)
}

export const UPDATE_ARTICLE = async (params: h.UpdateReq) => {
  return await http('/api/blog/update', 'post', params)
}

export const DELETE_ARTICLE = async (params: h.DeleteReq) => {
  return await http('/api/blog/delete', 'post', params)
}

export const GET_TAG_LIST = async (params: {}) => {
  return await http<h.TagListReq[]>('/api/blog/tagList', 'get', params)
}

export const ADD_COMMENT = async (params: h.AddCommentReq) => {
  return await http<h.TagListReq[]>('/api/comment/add', 'post', params)
}
