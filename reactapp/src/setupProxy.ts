export const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/someonehelpme",
];

module.exports = function (app:any) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7105',
        changeOrigin: true
    });

    app.use(appProxy);
};
