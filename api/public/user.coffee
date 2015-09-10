type = require process.env.DATA_TYPE

errorStructure =
  error: type String, 'UserNotFound; LoginFailed; Forbidden'

userStructure =
  username: String
  name: String
  address:
    country: String
    postcode: String
    street: String

module.exports = exports =
  name: '用户 api'
  baseUrl: 'http://example.com/api/user'
  description: '用户 API'
  apis: [{

    title: '用户登陆'
    url: '/login'
    method: 'POST'

    body:
      username: String
      password: type String, 'must be great than 6 chars'

    headers:
      'Auth-Key': String

    successResponse: userStructure

    errorResponse: errorStructure
  }, {

    title: '获取用户列表'

    url: '/list'
    method: 'GET'

    query:
      skip: Number
      max: type Number, '每次获取用户数目'

    successResponse: [userStructure]

    errorResponse: errorStructure
  }]
