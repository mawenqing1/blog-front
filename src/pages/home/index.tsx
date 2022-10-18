import React, { FC, Fragment, useEffect } from "react";
import styles from "./index.module.less";
// import avatar from "@/assets/image/avatar.jpeg";
// import wx from "@/assets/image/wx.png";
import { GET_BLOG_LIST } from "@/api/api";
import { formatDate } from "@/utils/utils";
import { Article } from "@/types/home"
import TopNav from "@/components/topNav";
import SelfCard from "@/components/SelfCard";
import BgA from "@/components/BgAnimatiion";

const mockData = [
    {
        title: "模拟数据标题A",
        content: "坚持首善标准、精益求精，北京向党和人民交上了合格答卷。特别是新中国成立七十周年和中国共产党成立一百周年两场庆祝活动，盛大庄严、气势恢宏，完美展现了大党大国气魄，极大激发了全国各族人民爱党爱国爱社会主义的热情和民族自豪感坚持首善标准、精益求精，北京向党和人民交上了合格答卷。特别是新中国成立七十周年和中国共产党成立一百周年两场庆祝活动，盛大庄严、气势恢宏，完美展现了大党大国气魄，极大激发了全国各族人民爱党爱国爱社会主义的热情和民族自豪感坚持首善标准、精益求精，北京向党和人民交上了合格答卷。特别是新中国成立七十周年和中国共产党成立一百周年两场庆祝活动，盛大庄严、气势恢宏，完美展现了大党大国气魄，极大激发了全国各族人民爱党爱国爱社会主义的热情和民族自豪感坚持首善标准、精益求精，北京向党和人民交上了合格答卷。特别是新中国成立七十周年和中国共产党成立一百周年两场庆祝活动，盛大庄严、气势恢宏，完美展现了大党大国气魄，极大激发了全国各族人民爱党爱国爱社会主义的热情和民族自豪感坚持首善标准、精益求精，北京向党和人民交上了合格答卷。特别是新中国成立七十周年和中国共产党成立一百周年两场庆祝活动，盛大庄严、气势恢宏，完美展现了大党大国气魄，极大激发了全国各族人民爱党爱国爱社会主义的热情和民族自豪感坚持首善标准、精益求精，北京向党和人民交上了合格答卷。特别是新中国成立七十周年和中国共产党成立一百周年两场庆祝活动，盛大庄严、气势恢宏，完美展现了大党大国气魄，极大激发了全国各族人民爱党爱国爱社会主义的热情和民族自豪感",
        author: "马文卿",
        createTime: 1665739351029,
        id: 1
    },
    {
        title: "模拟数据标题B",
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
                                <span>{formatDate(new Date(el.createTime))}</span>
                            </div>
                        </div>
                        <div className={styles.article_content}>{el.content}</div>
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <Fragment>
            <BgA />
            <TopNav />
            <div className={styles.home_main}>
                <div className={styles.home_left}>
                    <SelfCard />
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