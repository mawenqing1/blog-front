import React, { FC, useState } from "react";
import { Editor, Viewer } from "@bytemd/react";
import "./index.less";
import zhHans from "bytemd/locales/zh_Hans.json";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight-ssr";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import frontmatter from "@bytemd/plugin-frontmatter";
import 'bytemd/dist/index.min.css';
import "highlight.js/styles/vs.css";
import 'juejin-markdown-themes/dist/juejin.min.css';

const plugins = [gfm(), gemoji(), highlight(), mediumZoom(), mermaid(), frontmatter()]; 

const Article: FC = () => {
    const [value, setValue] = useState<string>("");

    return (
        <div className="editor_box">
            <Editor
                locale={zhHans}
                value={value}
                plugins={plugins}
                onChange={(v) => {
                    setValue(v);
                }}
            />
        </div>
    )
}

export default Article