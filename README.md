rest-api-doc
=====================================

### Put you API in api directory:
[put your apis here](./api)

### install
```
npm install
npm install -g gulp
```

### Run dev
```
gulp dev
```

### deploy dev
```
gulp deploy-dev
```

### Run production
```
gulp prod
```

## api doc structure
```coffee
name: String
baseUrl: String
description: String
apis: [{
  title: String
  description: String   # optional
  url: String
  method: String    # POST, GET

  body: bodyStructure

  successResponse: successResponseStructure

  errorResponse: errorResponseStructure
}]
```
