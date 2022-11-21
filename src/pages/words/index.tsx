import React, { FC, Fragment, useRef } from "react";
import { Input, Button, message as msg, Form, FormInstance } from 'antd';
import styles from './index.module.less';

const LeaveWords: FC = () => {
    const formRef = useRef<FormInstance<any>>(null);

    const renderCommentList = () => {
        return (
            <div className={styles.comment_list}>
                <p className={styles.comment_user}>马文卿：</p>
                <p className={styles.comment_body}>实现方法：在本地数据库建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传</p>
                <div className={styles.comment_footer}>
                    <span className={styles.comment_time}>2022年11月 4日 08:30</span>
                    <span>浙江</span>
                </div>
            </div>
        )
    };

    const renderCommentBox = () => {
        return (
            <div className={styles.words_input}>
                <Form
                    name="comment"
                    ref={formRef}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: false }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="您的留言"
                        name='words'
                        rules={[{ required: true, message: '请输入留言!' }]}
                    >
                        <Input placeholder="请输入留言" />
                    </Form.Item>
                    <Form.Item
                        label="您的名字"
                        name='name'
                        rules={[{ required: true, message: '请输入您的大名!' }]}
                    >
                        <Input placeholder="请输入名字" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    return (
        <Fragment>
            <div className={styles.words_main}>
                <div className={styles.words_body}>
                    <div className={styles.words_title}>
                        <h1>留言板</h1>
                    </div>
                    {renderCommentList()}
                    {renderCommentBox()}
                </div>
            </div>
        </Fragment>
    )
}

export default LeaveWords