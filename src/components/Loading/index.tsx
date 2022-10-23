import React, { FC, Fragment } from "react";
import styles from "./index.module.less"

const LoadingPage = () => {

    return (
        <Fragment>
            <main className={styles.loading_main}>
                <div className={styles.loading_box}>
                    <div className={styles.loading_animation}></div>
                    <span className={styles.loading_text}>精彩内容马上呈现</span>
                </div>
            </main>
        </Fragment>
    )
}

export default LoadingPage