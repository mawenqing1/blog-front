import React, { FC, Fragment, useEffect, useState } from "react";
import styles from "./index.module.less";
import { GET_BLOG_LIST } from "@/api/api";
import { formatDate } from "@/utils/utils";
import { Article, List } from "@/types/home";
import SelfCard from "@/components/SelfCard";
import BgA from "@/components/BgAnimatiion";
import ArticleCard from "@/components/ArticleList";

const Home: FC = () => {
    const [articles, setArticles] = useState<Array<List>>([]);

    useEffect(() => {
        queryBlogList()
    }, []);

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
     * render blog article list
     * @param list article list
     * @returns HTML
     */
    const renderList = (list: Array<Article>) => {
        return (
            <Fragment>
                {list.map(el => (
                    <div className={styles.article_main} key={el.id}>
                        <header className={styles.article_title}>{el.title}</header>
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
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    };

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
                </div>
            </div>
        </Fragment>
    )
};

export default Home