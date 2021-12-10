import { Card } from "antd";
import { Toast, Dialog } from "antd-mobile";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './doctorIndex.module.less';
import { Button } from 'antd';

const DoctorIndex:React.FC = () => {

    const [visible, setVisible] = useState(false);

    const fetchData = async () => {
        const res = await axios.get('/api/day1/student?id=1');
        if(!res) return;
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
        <div className={styles.text}>
            style is work?
        </div>
        <Card>
            <p>医生首页</p>
            <Button>hello world</Button>
        </Card>
        <Button size="middle" color="primary" onClick={() => setVisible(true)}>hello wolrd!</Button>
        <Dialog
            visible={visible}
            onClose={() => setVisible(false)}
            title="提示！"
            content={<div>hello world!</div>}
            closeOnMaskClick
        />
    </div>
}

export default DoctorIndex;