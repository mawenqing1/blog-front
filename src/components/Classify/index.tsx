import React, { FC, Fragment, useEffect, useState } from "react";
import { GET_TAG_LIST } from "@/api/api";
import { returnTagName } from "@/utils/utils";
import styles from "./index.module.less";

interface Props {
    selectTag: (tag?:string) => void
}

const ClassifyCard: FC<Props> = ({selectTag}: Props) => {
    const [list, setList] = useState<{ tag: string, cnt: number }[]>([]);

    useEffect(() => {
        queryTagList()
    }, [])

    const queryTagList = async () => {
        const { code, data } = await GET_TAG_LIST({});
        if (code === 1) {
            setList(data)
        }
    };

    const renderList = () => {
        console.log(list);
        
        return (
            <Fragment>
                {list.map(el => (
                    <div className={styles.classify_list} key={el.tag} onClick={() => selectTag(el.tag as string)}>
                        <span className={styles.classify_type}>{returnTagName(el.tag!)}</span>
                        <span className={styles.classify_num}>{el.cnt}</span>
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