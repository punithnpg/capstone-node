module.exports = [
    {
        script: './app.js',
        name: 'search-restaurants',
        exec_mode: 'cluster',
        instances: 3,
        watch: true,
        env: {
            "NODE_ENV": "development",
            PORT: 3000
        }
    }
]