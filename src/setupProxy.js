const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Define a local endpoint
        createProxyMiddleware({
            target: 'https://api.sambanova.ai', // Target API URL
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove '/api' prefix when forwarding
            },
        })
    );
};
