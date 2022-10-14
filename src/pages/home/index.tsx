import React, { FC, Fragment, useEffect } from "react";
import TopNav from "@/components/topNav";
import styles from "./index.module.less"
import avatar from "@/assets/image/avatar.jpeg";
import wx from "@/assets/image/wx.png";
import { GET_BLOG_LIST } from "@/api/api";
import { Article } from "@/types/home"

const mockData = [
    {
        title: "模拟数据",
        content: "这是一篇博客",
        author: "马文卿",
        createTime: 1665739351029,
        id: 1
    },
    {
        title: "模拟数据",
        content: "这是一篇博客",
        author: "马文卿",
        createTime: 1665739352000,
        id: 2
    }
]

const Home: FC = () => {
    useEffect(() => {
        queryBlogList()
    }, []);

    /**
     * query blog list
     */
    const queryBlogList = async () => {
        const { data, code } = await GET_BLOG_LIST({})
        if (code === 1) {
            console.log(data);
        }
    }

    /**
     * open link base click icon
     * @param type current click icon
     */
    const openLink = (type: string) => {
        switch (type) {
            case 'github':
                window.open("https://github.com/mawenqing1")
                break;
            case 'weixin':
                window.open(wx)
                break;
            case 'juejin':
                window.open("https://juejin.cn/user/4380933217592120")
                break;
        }
    };

    const renderList = (list: Array<Article>) => {
        return (
            <Fragment>
                {list.map(el => (
                    <div className={styles.article_main} key={el.id}>
                        <header>{el.title}</header>
                        <span>{el.author}</span>
                        <span>{el.createTime}</span>
                        <div>{el.content}</div>
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <Fragment>
            <TopNav />
            <div className={styles.home_main}>
                <div className={styles.home_left}>
                    <div className={styles.home_card}>
                        <div className={styles.card_top}>
                            <img src={avatar} alt="" />
                            <span className={styles.top_name}>马文卿</span>
                            <span className={styles.top_profession}>前端开发工程师</span>
                            <span className={styles.top_address}>
                                <i className="iconfont icon-dingwei"></i>
                                <span>中国｜杭州</span>
                            </span>
                        </div>
                        <div className={styles.card_center}>
                            <span className={styles.card_article}>文章</span>
                            <span className={styles.card_num}>0</span>
                        </div>
                        <div className={styles.card_bottom}>
                            <div className="iconfont icon-github" onClick={() => openLink('github')}></div>
                            <div className="iconfont icon-weixin" onClick={() => openLink('weixin')}></div>
                            <div className="iconfont icon-juejin" onClick={() => openLink('juejin')}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.home_center}>
                    {renderList(mockData)}
                </div>
                <div className={styles.home_right}>
                </div>
            </div>
        </Fragment>
    )
};

export default Home