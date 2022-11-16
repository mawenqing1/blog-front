export interface LoginRes {
  username: string
  realname: string
}

export interface LoginReq {
  username: string
  password: string
}

export interface ListReq {
  tag?: string
}

export interface ListRes {
  author: string
  content: string
  createtime: number
  id: number
  title: string
  ratings: number
  tag: string
}

export interface AddReq {
  content: string
  title: string
  tag: string
}

export interface AddRes {
  id: number
}

export interface DetailReq {
  id: number
}

export interface DetailRes extends ListRes {}

export interface UpdateReq {
  id: number
  title: string
  content: string
  tag: string
}

export interface DeleteReq {
  id: number
}

export interface TagListReq {
  tag: string,
  cnt: number
}
