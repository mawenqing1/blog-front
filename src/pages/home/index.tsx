import React, { FC, Fragment } from "react";
import TopNav from "@/components/topNav";
import styles from "./index.module.less"
import Layout from "antd/lib/layout/layout";
import avatar from "@/assets/image/avatar.jpeg"
import wx from "@/assets/image/wx.png"

const Home: FC = () => {

    const openLink = (type) => {
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
    }

    return (
        <Fragment>
            <Layout>
                <TopNav />
                <div className={styles.home_main}>
                    <div className={styles.home_left}>
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
                    </div>
                    <div className={styles.home_center}>
                    </div>
                    <div className={styles.home_right}>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
};

export default Home