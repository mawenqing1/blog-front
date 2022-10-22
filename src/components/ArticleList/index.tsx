import React, { FC, useEffect, useState } from "react";
import { GET_BLOG_LIST } from "@/api/api";
import { formatDate } from "@/utils/utils";
import { List } from "@/types/home";
import styles from "./index.module.less";

const ArticleCard: FC = () => {
    const [newList, setNewList] = useState<Array<List>>([]);

    useEffect(() => {
        queryBlogList()
    }, [])

    /**
     * query blog list
     */
     const queryBlogList = async () => {
        const { data, code } = await GET_BLOG_LIST({})
        if (code === 1) {
            setNewList(data.slice(0, 4))
        }
    }

    const renderList = (list: Array<List>) => {
        return (
            <ul className={styles.card_list}>
                {list.map(el => (
                    <li className={styles.card_item} key={el.id}>
                        <p className={styles.item_title}>{el.title}</p>
                        <p className={styles.item_time}>{formatDate(new Date(el.createtime))}</p>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <main className={styles.article_card}>
            <header className={styles.card_title}>最新文章</header>
            {renderList(newList)}
        </main>
    )
};

export default ArticleCard