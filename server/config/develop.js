module.exports = {
  port: 3000,
  redis: {
    host: 'localhost',
    port: 6379
  },
  mysql: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'test',
    timezone: 'Asia/Shanghai'
  },
  oss: {
    accessKeyId: '',
    accessKeySecret: '',
    bucketName: ''
  },
  email: {
    service: '',
    auth: {
      user: '',
      pass: ''
    }
  },
  production: false
}
