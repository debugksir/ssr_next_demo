import Head from 'next/head'
import Script  from 'next/script';

const PCHead:React.FC = () => {

    return <Head>
        <meta name="viewport" content="width=980"></meta>
        <Script src='https://res.wx.qq.com/open/js/jweixin-1.6.0.js'></Script>
    </Head>
}

export default PCHead;
