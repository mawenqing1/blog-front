import React, { Fragment, FC, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./index.module.less";
import avatar from "@/assets/image/avatar.jpeg";
import LoginModel from "../LoginModel";
import { Button } from "antd";

const TopNav: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate = useNavigate();

    const routerBtn = [
        {
            text: "主页",
            router: "/layout/home"
        },
        {
            text: "列表",
            router: "/layout/article"
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
    };

    const handleLogin = () => {
        setIsLogin(true);
    }

    const renderNavBar = () => {
        return (
            <Fragment>
                {routerBtn.map((el, index) => {
                    return (
                        <div className={styles.nav_btn} key={index} onClick={() => navigate(el.router)}>{el.text}</div>
                    )
                })}
            </Fragment>
        )
    };

    const renderLogin = () => {
        const loginName = sessionStorage.getItem("BLOG_USER_NAME");
        if (!loginName) {
            return (
                <div className={styles.login_btn} onClick={() => setModalVisible(true)}>登陆</div>
            )
        } else {
            return (
                <div className={styles.login_user}>
                    <Button type="primary" shape="round" onClick={() => navigate("/layout/article")}>写文章</Button>
                    <span className={styles.user_name}>{loginName}</span>
                </div>
            )
        }
    };

    return (
        <div className={styles.top_menu}>
            <div className={styles.blog_logo}>
                <img src={avatar} alt="" />
            </div>
            <nav className={styles.router_btn}>
                {renderNavBar()}
            </nav>
            {renderLogin()}
            <LoginModel visible={modalVisible} handleCloseModal={handleCloseModal} handleLogin={handleLogin} />
        </div>
    )
};

export default TopNav