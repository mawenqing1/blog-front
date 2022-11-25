import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { ADD_COMMENT, GET_COMMENT_LIST } from "@/api/api";
import { convertDate } from "@/utils/utils";
import { Input, Button, message as msg, Form, FormInstance, Pagination, PaginationProps } from 'antd';
import styles from './index.module.less';

interface FinishProps {
    name: string
    words: string
}

interface CommentList {
    content: string
    createTime: Date
    id: number
    ip: string
    name: string
    toContent: string | null
    toId: number | null
    toName: string | null
}

const { TextArea } = Input;

const LeaveWords: FC = () => {
    const formRef = useRef<FormInstance<any>>(null);
    const [pageSize, setPageSize] = useState<number>(10);
    const [current, setCurrent] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [list, setList] = useState<CommentList[]>([]);
    const [rName, setRName] = useState<string>('');
    const [rContent, setRContent] = useState<string>('');
    const [toId, setToId] = useState<number | null>(null)

    useEffect(() => {
        queryList()
    }, [current, pageSize])

    const queryList = async () => {
        const { data, code } = await GET_COMMENT_LIST({
            current: current,
            pageSize: pageSize
        });
        if (code === 1) {
            setTotal(data.total);
            setList(data.list);
        }
    }

    /**
     * render reference box
     * @returns reference box HTML
     */
    const renderReferenceBox = (name: string, content: string) => {
        return (
            <div className={styles.comment_reference}>
                <p className={styles.reference_user}>引用{name}的发言:</p>
                <span>{content}</span>
            </div>
        )
    }

    /**
     * render comment list
     * @returns comment list HTML
     */
    const renderCommentList = () => {
        return (
            <Fragment>
                {list.map(el => (
                    <div className={styles.comment_list} key={el.id}>
                        <p className={styles.comment_user}>{el.name}：</p>
                        {el?.toId && renderReferenceBox(el.toName!, el.toContent!)}
                        <p className={styles.comment_body}>{el.content}</p>
                        <div className={styles.comment_footer}>
                            <span className={styles.comment_time}>{convertDate(el.createTime)}</span>
                            <span className={styles.comment_city}>{el.ip}</span>
                            <span className={styles.comment_reference_btn} onClick={() => handleReference(el)}>引用</span>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    };

    /**
     * handle click submit btn event
     * @param value form data
     */
    const onFinish = async (value: FinishProps) => {
        const { code } = await ADD_COMMENT({
            content: value.words,
            name: value.name,
            toId: toId
        })
        if (code === 1) {
            msg.success("发表成功");
            // queryList();
            window.location.reload()
        }
    };

    /**
     * handle submit failed event
     */
    const onFinishFailed = () => {
        msg.error("请输入完整信息！")
    };

    /**
     * handle click reference event
     * @param el current reference comment
     */
    const handleReference = (el: CommentList) => {
        setRName(el.name);
        setRContent(el.content);
        setToId(el.id);
    }

    /**
     * render words reference box
     * @returns input reference html
     */
    const renderWordsReference = () => {
        return (
            <div className={styles.words_reference}>
                <p className={styles.words_user}>引用{rName}的发言:</p>
                <span>{rContent}</span>
                <div className={styles.cancel_reference}>
                    <span onClick={handleCancelReference} >取消引用</span>
                </div>
            </div>
        )
    };

    /**
     * handle cancel reference event
     */
    const handleCancelReference = () => {
        setRName('');
        setRContent('');
        setToId(null);
    }

    /**
     * render words input form
     * @returns words html
     */
    const renderCommentBox = () => {
        return (
            <div className={styles.words_input}>
                {rContent && rName && renderWordsReference()}
                <Form
                    name="comment"
                    ref={formRef}
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="您的留言"
                        name='words'
                        rules={[{ required: true, message: '请输入留言!' }]}
                    >
                        <TextArea placeholder="请输入留言" style={{ width: '100%', resize: 'none' }} rows={4} maxLength={200} />
                    </Form.Item>
                    <Form.Item
                        label="您的名字"
                        name='name'
                        rules={[{ required: true, message: '请输入您的大名!' }]}
                    >
                        <Input placeholder="请输入名字" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            发表
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    };

    /**
     * handle change page
     * @param current current page
     * @param pageSize page size
     */
    const onPageChange: PaginationProps['onChange'] = async (current, pageSize) => {
        setPageSize(pageSize);
        setCurrent(current);
    };

    return (
        <Fragment>
            <div className={styles.words_main}>
                <div className={styles.words_body}>
                    <div className={styles.words_title}>
                        <h1>留言板</h1>
                    </div>
                    {renderCommentList()}
                    <div className={styles.words_pagination}>
                        <Pagination defaultCurrent={1} hideOnSinglePage={true} total={total} current={current} pageSize={pageSize} showSizeChanger onChange={onPageChange} />
                    </div>
                    {renderCommentBox()}
                </div>
            </div>
        </Fragment>
    )
}

export default LeaveWords