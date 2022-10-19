import React, { Fragment, FC } from "react";
import { formatDate } from "@/utils/utils";
import styles from "./index.module.less";

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
    },
    {
        title: "模拟数据标题B",
        content: "这是一篇博客",
        author: "马文卿",
        createTime: 1665739352000,
        id: 3
    },
    {
        title: "模拟数据标题B",
        content: "这是一篇博客",
        author: "马文卿",
        createTime: 1665739352000,
        id: 4
    },
    {
        title: "模拟数据标题B",
        content: "这是一篇博客",
        author: "马文卿",
        createTime: 1665739352000,
        id: 5
    },
    {
        title: "模拟数据标题B",
        content: "这是一篇博客",
        author: "马文卿",
        createTime: 1665739352000,
        id: 6
    },
]

const ArticleCard: FC = () => {

    const renderList = () => {
        return (
            <ul className={styles.card_list}>
                {mockData.map(el => (
                    <li className={styles.card_item} key={el.id}>
                        <p className={styles.item_title}>{el.title}</p>
                        <p className={styles.item_time}>{formatDate(new Date(el.createTime))}</p>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <main className={styles.article_card}>
            <header className={styles.card_title}>最新文章</header>
            {renderList()}
        </main>
    )
};

export default ArticleCard