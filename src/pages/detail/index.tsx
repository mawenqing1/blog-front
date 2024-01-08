import React, { FC, Fragment, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { GET_ARTICLE_DETAIL } from '@/api/api'
import { formatDate, returnTagName } from '@/utils/utils'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { DetailData } from '@/types/detail'
import { Viewer } from '@bytemd/react'
import { Affix } from 'antd'
import BgA from '@/components/BgAnimatiion'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import frontmatter from '@bytemd/plugin-frontmatter'
import './index.less'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

interface Item { level: number, text: string }

const plugins = [gfm(), gemoji(), highlight(), mediumZoom(), mermaid(), frontmatter()]

const ArticleDetail: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { state } = useLocation()
  const navigate = useNavigate()
  const isLogin = sessionStorage.getItem('BLOG_USER_NAME')
  const [articleData, setArticle] = useState<DetailData>()
  const [items, setItems] = useState<Item[]>([])
  const [minLevel, setMinLevel] = useState<number>(6)
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState<number>(0)

  useEffect(() => {
    queryArticleDetail()
  }, [])

  useLayoutEffect(() => {
    const root = (ref.current as HTMLElement).querySelector('.markdown-body') as HTMLElement
    const _items: Item[] = []
    let _minLevel = minLevel
    // root.children is HTMLCollection
    Array.prototype.filter.call(root.children, (v) => v && v.nodeType === 1).forEach((node: HTMLElement, index) => {
      if (node.tagName[0].toLowerCase() === 'h' && (node.hasChildNodes())) {
        const i = Number(node.tagName[1]) // h1 h2 h3 h4 h5 h6
        _minLevel = Math.min(_minLevel, i)
        _items.push({
          level: i,
          text: node.innerText // stringifyHeading(node),
        })
      }
    })
    setMinLevel(_minLevel)
    setItems(_items)
  }, [articleData])

  useLayoutEffect(() => {
    const root = (ref.current as HTMLElement).querySelector('.markdown-body') as HTMLElement
    const headings = root.querySelectorAll('h1,h2,h3,h4,h5,h6')

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const io: IntersectionObserverEntry = entries[0]
      if (io.isIntersecting) {
        const index = Array.prototype.indexOf.call(headings, io.target)
        setCurrentHeadingIndex(preState => index)
      }
    }, { threshold: [1] })

    // observe all head
    headings.forEach(node => observer.observe(node))

    return () => {
      headings.forEach(node => observer.unobserve(node))
    }
  }, [articleData])

  const skipContent = (index: number): void => {
    const root = (ref.current as HTMLElement).querySelector('.markdown-body') as HTMLElement
    const headings = root.querySelectorAll('h1,h2,h3,h4,h5,h6')
    setCurrentHeadingIndex(index)
    headings[index].scrollIntoView()
  }

  const queryArticleDetail = async (): Promise<void> => {
    const { code, data } = await GET_ARTICLE_DETAIL({
      id: state.id
    })
    if (code === 1) {
      setArticle(data)
    }
  }

  const handleEditor = (): void => {
    navigate('/layout/article', { state: { id: state.id, title: articleData?.title, content: articleData?.content } })
  }

  return (
    <Fragment>
      <BgA />
      <main className="detail_main" ref={ref}>
        <div className="article_main">
          <h1 className="article_title">{articleData?.title}</h1>
          <div className="article_information">
            <span>{articleData?.author}</span>
            <span className="article_time">{formatDate(new Date(articleData?.createtime as number))}</span>
            <span>  ·  阅读 {articleData?.ratings}</span>
            <span className='article_tag'>标签：{returnTagName(articleData?.tag!)}</span>
            {isLogin && <span className="article_editor_brn" onClick={handleEditor}>编辑</span>}
          </div>
          <Viewer value={articleData?.content as string} plugins={plugins} />
        </div>
        <div className="side_box">
          <span className='catalog'>目录</span>
          {
            items.length > 0 && (
              <div className="viewToc">
                {/* <Affix offsetTop={90}> */}
                <div className="tocBox">
                  <ul className="toc">
                    {
                      items.map((item, index) => (
                        <li
                          key={String(index)}
                          className={`toc-${item.level}${currentHeadingIndex === index ? ' active' : ''}`}
                          style={{ paddingLeft: (item.level - minLevel) * 6 + 8 }}
                          onClick={() => skipContent(index)}
                        >
                          {currentHeadingIndex === index && <div className='d-container'></div>}
                          {item.text}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                {/* </Affix> */}
              </div>
            )
          }
        </div>
      </main>
    </Fragment>
  )
}

export default ArticleDetail
