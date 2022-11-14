import React, { FC, Fragment, useEffect } from "react";
import { GET_TAG_LIST } from "@/api/api";
import styles from "./index.module.less";

const ClassifyCard: FC = () => {
    useEffect(() => {
        queryTagList()
    },[])

    const list = [
        {
            type: 'js',
            number: 0
        },
        {
            type: 'front',
            number: 0
        },
        {
            type: 'node',
            number: 0
        }
    ];

    const queryTagList = async () => {
        const {code, data} = await GET_TAG_LIST({});
        if(code === 1) {
            console.log(data);
        }
    }

    const renderList = () => {
        return (
            <Fragment>
                {list.map(el => (
                    <div className={styles.classify_list} key={el.type}>
                        <span className={styles.classify_type}>{el.type}</span>
                        <span className={styles.classify_num}>{el.number}</span>
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className={styles.classify_box}>
                <header className={styles.classify_title}>分类</header>
                {renderList()}
            </div>
        </Fragment>
    )
}

export default ClassifyCard;