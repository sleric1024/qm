module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://c.y.qq.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            },
            '/api2': {
                target: 'https://u.y.qq.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api2': ''
                }
            }
        }
    }
}
