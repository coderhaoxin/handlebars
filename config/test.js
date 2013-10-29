module.exports = {
  port: 3000,
  redis: {
    host: 'localhost',
    port: 6379
  },
  mysql: {
    host: '192.168.0.115',
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
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  },
  production: false
}
