import React, { FC, Fragment, useEffect } from "react";
import styles from "./index.module.less";
import avatar from "@/assets/image/avatar.jpeg";
import wx from "@/assets/image/wx.png";

const SelfCard: FC = () => {

    /**
     * open link base click icon
     * @param type current click icon
     */
     const openLink = (type: string) => {
        switch (type) {
            case 'github':
                window.open("https://github.com/mawenqing1")
                break;
            case 'weixin':
                window.open(wx)
                break;
            case 'juejin':
                window.open("https://juejin.cn/user/4380933217592120")
                break;
        }
    };

    return (
        <Fragment>
            <div className={styles.home_card}>
                <div className={styles.card_top}>
                    <img src={avatar} alt="" />
                    <span className={styles.top_name}>马文卿</span>
                    <span className={styles.top_profession}>前端开发工程师</span>
                    <span className={styles.top_address}>
                        <i className="iconfont icon-dingwei"></i>
                        <span>中国｜杭州</span>
                    </span>
                </div>
                <div className={styles.card_center}>
                    <span className={styles.card_article}>文章</span>
                    <span className={styles.card_num}>0</span>
                </div>
                <div className={styles.card_bottom}>
                    <div className="iconfont icon-github" onClick={() => openLink('github')}></div>
                    <div className="iconfont icon-weixin" onClick={() => openLink('weixin')}></div>
                    <div className="iconfont icon-juejin" onClick={() => openLink('juejin')}></div>
                </div>
            </div>
        </Fragment>
    )
};

export default SelfCard