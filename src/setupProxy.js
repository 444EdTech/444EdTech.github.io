const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.sambanova.ai',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Optional: Remove `/api` prefix before sending the request
            },
        })
    );
};