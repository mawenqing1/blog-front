import React, {FC, Fragment, useEffect, useState} from "react";
import { LOGIN } from "@/api/api";
import { Modal, Input, message as msg } from "antd";
import styles from "./index.module.less";

interface Props {
    visible: boolean;
    handleCloseModal: () => void
}

const LoginModel: FC<Props> = ({visible, handleCloseModal}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOk = async () => {
        const { data , code, message} = await LOGIN({
            username,
            password
        });
        
        if(code === 1) {
            handleCloseModal();
            msg.success(message)
        } else {
            msg.error(message)
        }
    };

    const handleCancel = () => {
        handleCloseModal();
    }

    return (
        <Modal
        title="登陆"
        className={styles.custom_login_modal}
        open={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Fragment>
            <div className={styles.user_name}>
                <span className={styles.name_text}>用户名：</span>
                <Input placeholder="请输入用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className={styles.user_password}>
                <span className={styles.password_text}>密码：</span>
                <Input.Password placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </Fragment>
      </Modal>
    )
}

export default LoginModel