import {createProxyMiddleware} from 'http-proxy-middleware'

const TARGET = `OUR_MEGA_URL`

const proxy = createProxyMiddleware({
  target: TARGET,
  changeOrigin: true,
  logLevel: 'debug',
  cookieDomainRewrite: 'localhost',
  onProxyRes: (proxyRes) => {
    if (!proxyRes.headers['set-cookie']) {
      return
    }

    const adaptCookiesForLocalhost = proxyRes.headers['set-cookie'].map(
      (cookie) =>
        cookie.replace(/; secure/gi, '').replace(/; SameSite=None/gi, ''),
    )

    proxyRes.headers['set-cookie'] = adaptCookiesForLocalhost
  },
  onError: (err) => console.error(err),
})

export default function handler(req, res) {
  if (process.env.APP_PROXY !== 'true') {
    return res.status(404).json({message: 'Not found'})
  }
  return proxy(req, res)
}
