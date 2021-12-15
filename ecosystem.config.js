module.exports = {
  apps: [{
    name: "demo02",
    script: 'server.js',
    watch: false,
    env: {
      "PORT": 3001,
      "NODE_ENV": "development",
    },
    env_dev: {
      "PORT": 3001,
      "NODE_ENV": "development"
    },
    env_production: {
      "PORT": 3000,
      "NODE_ENV": "production",
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '122.51.115.87',
      ref: 'origin/main',
      repo: 'https://gitee.com/debugksir/ssr_next_demo.git',
      path: '/data/www/ssr_next',
      'pre-deploy-local': '',
      'post-deploy': 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
