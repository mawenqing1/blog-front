import React, { Fragment, FC } from "react";
import styles from "./index.module.less";

const TopNav: FC = () => {
    const routerBtn = [
        {
            text: "主页",
            router: "/"
        },
        {
            text: "列表",
            router: "/"
        },
        {
            text: "归档",
            router: "/"
        },
        {
            text: "开源项目",
            router: "/"
        },
    ]

    const renderNavBar = () => {
        return (
            <Fragment>
                {routerBtn.map((el, index) => {
                    return (
                        <div className={styles.nav_btn} key={index}>{el.text}</div>
                    )
                })}
            </Fragment>
        )
    }

    return (
        <div className={styles.top_menu}>
            <div className={styles.blog_logo}>
                <img src="../../assets/image/avatar.jpeg" alt="" />
            </div>
            <nav className={styles.router_btn}>
                {renderNavBar()}
            </nav>
        </div>
    )
};

export default TopNav