import React, { FC, Suspense } from "react";
import { Layout } from "antd";
import { Outlet } from 'react-router'
import TopNav from "@/components/topNav";
import styles from "./index.module.less"

const { Header, Content } = Layout;

const LayoutPage: FC = () => {


    return (
        <div className={styles.layout_main}>
            <TopNav />
            <Outlet />
        </div>
    )
}

export default LayoutPage