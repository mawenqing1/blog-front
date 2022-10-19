import React, { Fragment, FC, useState } from "react";
import styles from "./index.module.less";
import avatar from "@/assets/image/avatar.jpeg";
import LoginModel from "../LoginModel";

const TopNav: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

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
    ];

    const handleCloseModal = () => {
        setModalVisible(false)
    }

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
                <img src={avatar} alt="" />
            </div>
            <nav className={styles.router_btn}>
                {renderNavBar()}
            </nav>
            <div className={styles.login_btn} onClick={() => setModalVisible(true)}>登陆</div>
            <LoginModel visible={modalVisible} handleCloseModal={handleCloseModal} />
        </div>
    )
};

export default TopNav