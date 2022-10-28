import React, { FC, useEffect, useState } from 'react'
import { Editor } from '@bytemd/react'
import { Modal, Input, Button, message } from 'antd'
import { ADD_ARTICLE, UPDATE_ARTICLE } from '@/api/api'
import { judgeStrNull } from '@/utils/utils'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import './index.less'
import zhHans from 'bytemd/locales/zh_Hans.json'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import frontmatter from '@bytemd/plugin-frontmatter'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

const plugins = [gfm(), gemoji(), highlight(), mediumZoom(), mermaid(), frontmatter()]

const Article: FC = () => {
  const [value, setValue] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    if (state?.id) {
      setValue(state.content)
      setTitle(state.title)
    }
  }, [])

  const handleIssue = () => {
    if (judgeStrNull(title)) {
      message.error('请填写标题')
      return
    }
    if (judgeStrNull(value)) {
      message.error('请填写内容')
      return
    }
    const modal = Modal.confirm({
      title: '提示',
      content: '确定要发布吗？',
      onOk: async () => await addNewArticle()
    })
  }

  const addNewArticle = async () => {
    const content = value.replace(/"/g, 'V1#_1')
    if (state?.id) {
      const { code } = await UPDATE_ARTICLE({
        id: state.id,
        content: content,
        title: title
      })
      if (code === 1) {
        message.success('更新成功')
        navigate('/layout/home')
      } else {
        message.error('更新失败')
      }
    } else {
      const { data, code } = await ADD_ARTICLE({
        title,
        content
      })
      if (code === 1) {
        message.success('发布成功')
        navigate('/layout/home')
      }
    }
  }

  return (
        <div className="editor_box">
            <header className="editor_header">
            <Input placeholder="请输入标题" size="large" value={title} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setTitle(e.target.value)} />
            <Button type="primary" onClick={() => handleIssue()}>发布</Button>
            </header>
            <Editor
                locale={zhHans}
                value={value}
                plugins={plugins}
                onChange={(v) => {
                  setValue(v)
                }}
            />
        </div>
  )
}

export default Article
