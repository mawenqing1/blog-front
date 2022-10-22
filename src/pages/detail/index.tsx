import React, { FC, Fragment, useEffect, useState } from "react";
import { GET_ARTICLE_DETAIL } from "@/api/api";
import { useLocation } from 'react-router-dom';
import { DetailData } from "@/types/detail";
import { Viewer } from "@bytemd/react";
import BgA from "@/components/BgAnimatiion";
import "./index.less";
import 'bytemd/dist/index.min.css';
import "highlight.js/styles/vs.css";
import 'juejin-markdown-themes/dist/juejin.min.css';

const ArticleDetail: FC = () => {
    const { state } = useLocation();
    const [articleData, setArticle] = useState<DetailData>()

    useEffect(() => {
        queryArticleDetail()
    }, [])

    const queryArticleDetail = async () => {
        const { code, data } = await GET_ARTICLE_DETAIL({
            id: state.id
        })
        if (code === 1) {
            setArticle(data);
        }
    }

    return (
        <Fragment>
            <BgA />
            <main className="detail_main">
                <div className="article_main">
                    <h1 className="article_title">{articleData?.title}</h1>
                    <Viewer value={articleData?.content as string} />
                </div>
                <div className="side_box"></div>
            </main>
        </Fragment>
    )
}

export default ArticleDetail