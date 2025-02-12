const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  )

  app.use(
    '/waifu-pics',
    createProxyMiddleware({
      target: 'https://i.waifu.pics',
      changeOrigin: true,
      pathRewrite: {
        '^/waifu-pics': '',
      },
      // Adicione esta opção para lidar com arquivos estáticos
      // Ela impede que o proxy tente interpretar a resposta como HTML
      // e apenas repassa os dados binários da imagem
      secure: false, // Pode ser necessário dependendo da configuração do servidor
    })
  )
}
