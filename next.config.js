module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  /* / images:{
        domains: ['links.papareact.com']
    } */
  images: {
    loader: 'imgix',
    path: '/'
  }
}
