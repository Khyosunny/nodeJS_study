# nodeJS_study

- Node.js 는 자바스크립트의 런타임.
  노드를 통해 자바스크립트 언어로 서버를 만들 수 있다.
- express.js는 node.js를 쉽게 이용할 수 있게 해주는 프레임워크

---

## 📌node.js 설치

```
npm init
```

> npm init을 한 경로 폴더에 package.json 파일이 생성된다.

## 📌express.js 설치

```
npm install express --save
```

## 📌index.js

- 아래 코드 입력

```
const express = require('express') //express를 설치했기때문에 가져올수있다.
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) // 터미널창에 해당 콘솔이 출력된다.
```

## 📌index.js 실행

### 1. 첫번째 방법

- package.json 에서 아래 코드 추가

```
"scripts": {
  "start": "node index.js"
  ...
}
```

> package.json의 `dependencies` 들은 `node_module` 폴더에서 관리됨.

- 터미널 창에서 아래 코드 입력

```
npm run start
```

- 브라우저에서 http://localhost:5000 사이트를 접속하면 `Hello World!` 글자가 보인다.
- 그러나, 해당 콘솔을 수정하고 결과를 다시 출력하려면 `Ctrl+C`를 입력해서 서버를 껐다가 다시 run start를 해야하는 번거로움이 있다. 그럴 때 `nodemon`을 사용하면 된다.

### 2. 두번째 방법 (nodemon 사용하기)

- nodemon 설치

```
npm install nodemon --save-dev
```

- package.json 에서 아래 코드 추가

```
"scripts": {
    ...
    "nodemonStart": "nodemon index.js",
    ...
}
```

- 터미널 창에서 실행하기

```
npm run nodemonStart
```
