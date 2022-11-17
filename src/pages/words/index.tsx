import React, { FC, Fragment } from "react";
import styles from './index.module.less';

const LeaveWords: FC = () => {

    return (
        <Fragment>
            <div className={styles.words_main}>
                <div className={styles.words_body}>
                    <div className={styles.words_title}>
                        <h1>留言板</h1>
                    </div>
                    <div className={styles.comment_list}>
                        <p className={styles.comment_user}>马文卿：</p>
                        <p className={styles.comment_body}>实现方法：在本地数据库建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传</p>
                        <div className={styles.comment_footer}>
                            <span>2022年11月 4日 08:30</span>
                            <span>浙江</span>
                        </div>
                    </div>
                    <div className={styles.words_input}></div>
                </div>
            </div>
        </Fragment>
    )
}

export default LeaveWords