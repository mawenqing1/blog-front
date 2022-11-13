import React, { FC, Fragment, useEffect, useState } from 'react'
import { GET_BLOG_LIST, DELETE_ARTICLE } from '@/api/api'
import { formatDate } from '@/utils/utils'
import { Article, List } from '@/types/home'
import { useNavigate } from 'react-router'
import { Modal, message } from 'antd'
import styles from './index.module.less'
import SelfCard from '@/components/SelfCard'
import BgA from '@/components/BgAnimatiion'
import ArticleCard from '@/components/ArticleList'
import ClassifyCard from '@/components/Classify'

const Home: FC = () => {
  const navigate = useNavigate()
  const [articles, setArticles] = useState<List[]>([])
  const isLogin = sessionStorage.getItem('BLOG_USER_NAME')

  useEffect(() => {
    queryBlogList()
  }, [])

  /**
     * query blog list
     */
  const queryBlogList = async () => {
    const { data, code } = await GET_BLOG_LIST({})
    if (code === 1) {
      setArticles(data)
    }
  }

  /**
     * handle delete article event
     * @param id article id
     */
  const handleDelete = (id: number) => {
    const modal = Modal.confirm({
      title: '提示',
      content: '确定要删除吗？',
      onOk: async () => await queryDelete(id)
    })
  }

  const queryDelete = async (id: number) => {
    const { code } = await DELETE_ARTICLE({
      id
    })
    if (code === 1) {
      message.success('删除成功')
      location.reload()
    } else {
      message.error('删除失败')
    }
  }

  /**
     * render blog article list
     * @param list article list
     * @returns HTML
     */
  const renderList = (list: Article[]) => {
    return (
            <Fragment>
                {list.map(el => (
                    <div className={styles.article_main} key={el.id}>
                        <header className={styles.article_title} onClick={() => navigate('/layout/detail', { state: { id: el.id } })}>{el.title}</header>
                        <div className={styles.article_information}>
                            <div className={styles.article_author}>
                                <i className="iconfont icon-zuozhe"></i>
                                <span>{el.author}</span>
                            </div>
                            <div className={styles.article_time}>
                                <i className="iconfont icon-riqi"></i>
                                <span>{formatDate(new Date(el.createtime))}</span>
                            </div>
                        </div>
                        <div className={styles.article_content}>{el.content}</div>
                        <div className={styles.article_ratings}>
                            <i className="iconfont icon-chakan"></i>
                            <span className={styles.ratings_text}>{el.ratings}</span>
                            {isLogin && <span className={styles.delete_btn} onClick={() => handleDelete(el.id)}>删除</span>}
                        </div>
                    </div>
                ))}
            </Fragment>
    )
  }

  return (
        <Fragment>
            <BgA />
            <div className={styles.home_main}>
                <div className={styles.home_left}>
                    <SelfCard />
                </div>
                <div className={styles.home_center}>
                    {renderList(articles)}
                </div>
                <div className={styles.home_right}>
                    <ArticleCard />
                    <ClassifyCard />
                </div>
            </div>
        </Fragment>
  )
}

export default Home
