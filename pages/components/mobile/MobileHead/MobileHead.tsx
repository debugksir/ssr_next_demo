import Head from 'next/head'
import Script  from 'next/script';

const MobileHead:React.FC = () => {

    return <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, maximum-scale=5.0, user-scalable=no"></meta>
        <Script src='https://res.wx.qq.com/open/js/jweixin-1.6.0.js'></Script>
    </Head>
}

export default MobileHead;
