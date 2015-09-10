rest-api-doc
====

### Install
```
npm install -g rest-api-doc
```

### Run
```
rest-api-doc [options]
```

### Get started
```shell
rest-api-doc --example  # generate api example
cd example # go to the example dir
rest-api-doc dev # generate rest api doc with dev mod
```

### Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -s, --source       directory which the api defined in
    -t, --target       directory which the api doc generated in
    -d, --development  development mode

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
