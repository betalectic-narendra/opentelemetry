module.exports = {
  apps : [
    {
      name: 'initDEmo',
      script: 'index.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '512M',
      env: {
        SERVICE_NAME: 'init-service',
        NODE_ENV: 'development',
        PORT: 14269
      }
    }
]
};
