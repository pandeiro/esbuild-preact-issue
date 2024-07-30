# ESBuild/Preact issue

## Setup steps

```
$ yarn add esbuild preact
$ touch main.jsx
$ mkdir www
$ touch www/index.html
```

## Run

```
$ npx esbuild main.jsx \
    --outfile=www/main.js \
    --bundle \
    --jsx-import-source=preact \
    --jsx=automatic \
    --servedir=www/ \
    --serve=0.0.0.0:3000
```

## Page load error

```
Uncaught TypeError: t3 is null
    __ http://localhost:3000/main.js:324
    B http://localhost:3000/main.js:238
    <anonymous> http://localhost:3000/main.js:400
    <anonymous> http://localhost:3000/main.js:401
```
