// next.config.js
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/events': { page: '/events' },
            '/why-coldfront': { page: '/why-coldfront' },
        }
    }
}