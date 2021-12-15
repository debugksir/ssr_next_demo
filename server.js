
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
    '/api/': {
        target: 'http://10.2.130.23:8081',
        pathRewrite: {
            '^/api': ''
        },
        changeOrigin: true
    }
}

const prodProxy = {
    '/api/': {
        target: 'http://10.2.130.23:8081',
        pathRewrite: {
            '^/api': ''
        },
        changeOrigin: true
    }
}

const port = process.env.PORT || 3000
const hostanme = '0.0.0.0'
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        if (dev) {
            if (devProxy) {
                Object.keys(devProxy).forEach(context => {
                    server.use(createProxyMiddleware(context, devProxy[context]))
                })
            }
        } else {
            if (prodProxy) {
                Object.keys(devProxy).forEach(context => {
                    server.use(createProxyMiddleware(context, prodProxy[context]))
                })
            }
        }

        server.all('*', (req, res) => {
            handle(req, res)
        })

        server.listen(port, hostanme, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on http://${hostanme}:${port}`)
        })
    })
    .catch((err) => {
        console.log('An error occurred, unable to start the server')
        console.log('发生错误，无法启动服务器')
        console.log(err)
    })