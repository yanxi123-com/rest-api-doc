rest-api-doc
====

### Put you API in api directory:
[put your apis here](./api)

### install
```
npm install -g rest-api-doc
```

### Generate Rest Api Doc
```
rest-api-doc [options]
```

### See help
```
rest-api-doc -h
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
