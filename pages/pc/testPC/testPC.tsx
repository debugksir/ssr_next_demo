import { Card } from "antd";
import { Toast, Dialog } from "antd-mobile";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './testPC.module.less';
import { Button } from 'antd';
import Script from 'next/script'
import { PCHead } from "../../../components";

const TestPC: React.FC = () => {

    const [visible, setVisible] = useState(false);

    const fetchData = async () => {
        const res = await axios.get('/api/day1/student?id=1');
        if (!res) return;
        // message.info(res.data)
        Toast.show({
            icon: 'success',
            content: res.data,
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <div className={styles.container}>
        <PCHead />
        <div className={styles.text}>
            style is work?
        </div>
        <Card>
            <p>PC antd style</p>
            <Button>antd button</Button>
        </Card>
        <Button size="middle" color="primary" onClick={() => setVisible(true)}>hello wolrd!</Button>
        <Dialog
            visible={visible}
            onClose={() => setVisible(false)}
            title="mobile 提示！"
            content={<div>hello world!</div>}
            closeOnMaskClick
        />
        <Script
            src="https://ssl.captcha.qq.com/TCaptcha.js"
            onLoad={() => {
                console.log('captcha script loaded!')
            }}
        />
    </div>
}

export default TestPC;