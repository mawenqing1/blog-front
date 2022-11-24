import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { ADD_COMMENT, GET_COMMENT_LIST } from "@/api/api";
import { Input, Button, message as msg, Form, FormInstance, Pagination, PaginationProps } from 'antd';
import styles from './index.module.less';

interface FinishProps {
    name: string
    words: string
}

const { TextArea } = Input;

const LeaveWords: FC = () => {
    const formRef = useRef<FormInstance<any>>(null);
    const [pageSize, setPageSize] = useState<number>(10);
    const [current, setCurrent] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        queryList()
    }, [])

    const queryList = async () => {
        const {data, code} = await GET_COMMENT_LIST({
            current: current,
            pageSize: pageSize
        })
    }

    /**
     * render reference box
     * @returns reference box HTML
     */
    const renderReferenceBox = () => {
        return (
            <div className={styles.comment_reference}>
                <p className={styles.reference_user}>引用mwq的发言:</p>
                <span>实现方法：在本地数据库建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传</span>
            </div>
        )
    }

    /**
     * render comment list
     * @returns comment list HTML
     */
    const renderCommentList = () => {
        return (
            <div className={styles.comment_list}>
                <p className={styles.comment_user}>马文卿：</p>
                {renderReferenceBox()}
                <p className={styles.comment_body}>实现方法：在本地数据库建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传</p>
                <div className={styles.comment_footer}>
                    <span className={styles.comment_time}>2022年11月 4日 08:30</span>
                    <span className={styles.comment_city}>浙江</span>
                    <span className={styles.comment_reference_btn}>引用</span>
                </div>
            </div>
        )
    };

    /**
     * handle click submit btn event
     * @param value form data
     */
    const onFinish = async (value: FinishProps) => {
        console.log(value);
        const { code } = await ADD_COMMENT({
            content: value.words,
            name: value.name,
            toId: null
        })
        if( code === 1) {
            msg.success("发表成功")
        }
    };

    /**
     * 
     */
    const onFinishFailed = () => {
        msg.error("请输入完整信息！")
    };

    const renderWordsReference = () => {
        return (
            <div className={styles.words_reference}>
                <p className={styles.words_user}>引用mwq的发言:</p>
                <span>实现方法：在本地数据库建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传</span>
                <div className={styles.cancel_reference}>
                    <span>取消引用</span>
                </div>
            </div>
        )
    }

    const renderCommentBox = () => {
        return (
            <div className={styles.words_input}>
                {renderWordsReference()}
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

    const onPageChange: PaginationProps['onChange'] = (current, pageSize) => {
        setPageSize(pageSize);
        setCurrent(current);
        console.log(current, pageSize);
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
                        <Pagination defaultCurrent={1} total={50} current={current} pageSize={pageSize} showSizeChanger onChange={onPageChange} />
                    </div>
                    {renderCommentBox()}
                </div>
            </div>
        </Fragment>
    )
}

export default LeaveWords