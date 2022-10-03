import React, { FC, Fragment } from "react";
import TopNav from "@/components/topNav";
import styles from "./index.module.less"

const Home: FC = () => {


    return (
        <Fragment>
            <TopNav />
            <div className={styles.home_main}>Home</div>
        </Fragment>
    )
};

export default Home