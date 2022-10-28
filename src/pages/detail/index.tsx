import React, { FC, Fragment, useEffect, useState } from 'react'
import { GET_ARTICLE_DETAIL } from '@/api/api'
import { formatDate } from '@/utils/utils'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { DetailData } from '@/types/detail'
import { Viewer } from '@bytemd/react'
import BgA from '@/components/BgAnimatiion'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import frontmatter from '@bytemd/plugin-frontmatter'
import './index.less'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

const plugins = [gfm(), gemoji(), highlight(), mediumZoom(), mermaid(), frontmatter()]

const ArticleDetail: FC = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const isLogin = sessionStorage.getItem('BLOG_USER_NAME')
  const [articleData, setArticle] = useState<DetailData>()

  useEffect(() => {
    queryArticleDetail()
  }, [])

  const queryArticleDetail = async () => {
    const { code, data } = await GET_ARTICLE_DETAIL({
      id: state.id
    })
    if (code === 1) {
      setArticle(data)
    }
  }

  const handleEditor = () => {
    navigate('/layout/article', { state: { id: state.id, title: articleData?.title, content: articleData?.content } })
  }

  return (
        <Fragment>
            <BgA />
            <main className="detail_main">
                <div className="article_main">
                    <h1 className="article_title">{articleData?.title}</h1>
                    <div className="article_information">
                        <span>{articleData?.author}</span>
                        <span className="article_time">{formatDate(new Date(articleData?.createtime as number))}</span>
                        <span>  ·  阅读 {articleData?.ratings}</span>
                        {isLogin && <span className="article_editor_brn" onClick={handleEditor}>编辑</span>}
                    </div>
                    <Viewer value={articleData?.content as string} plugins={plugins} />
                </div>
                <div className="side_box">
                </div>
            </main>
        </Fragment>
  )
}

export default ArticleDetail
