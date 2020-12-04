module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vuepwa2' : '/',
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: './src/service-worker.js'
        }
    }
};