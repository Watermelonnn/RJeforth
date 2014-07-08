RJeforth
========

## Use Forth Instructions to handle R 

您可以使用 Forth 指令來控制 R 軟體

## 環境準備

+ Chrome 瀏覽器
+ 文字編輯器（Notepad++, Emeditor ....）
+ NodeJS 執行環境
+ R 軟體(R 3.0 以上版本)


## 安裝開發環境與 nodejs 

### 首先安裝 Chrome 瀏覽器與文字編輯器，作為軟體開發環境。

+ 安裝 Chrome 最新版本（目前是 35.0.1916.153）
+ 安裝 文字編輯器，本例使用 Notepad++ (目前是 v 6.6.4)

### 安裝 Nodejs 系統

下載 [nodejs](http://nodejs.org/download/ "下載 nodejs")

安裝 nodejs

測試 nodejs 版本

```
C:\Users\Daniel>node -v
v0.10.28

C:\Users\Daniel>npm -v
1.4.9
```

安裝 node-dev 環境

```
npm install -g node-dev
```

### 設定 Express Framework

安裝 Express 環境

```
npm install -g express@3.2.2
```

```
C:\Users\Daniel>npm install -g express@3.2.2
npm http GET https://registry.npmjs.org/express
npm http 200 https://registry.npmjs.org/express
npm http GET https://registry.npmjs.org/express/-/express-3.2.2.tgz
npm http GET https://registry.npmjs.org/express/-/express-3.2.2.tgz
npm http 200 https://registry.npmjs.org/express/-/express-3.2.2.tgz
npm http GET https://registry.npmjs.org/qs
npm http GET https://registry.npmjs.org/mkdirp
npm http GET https://registry.npmjs.org/debug
npm http GET https://registry.npmjs.org/connect
npm http GET https://registry.npmjs.org/commander
npm http GET https://registry.npmjs.org/cookie
npm http GET https://registry.npmjs.org/range-parser
npm http GET https://registry.npmjs.org/methods
npm http GET https://registry.npmjs.org/buffer-crc32
npm http GET https://registry.npmjs.org/cookie-signature
npm http GET https://registry.npmjs.org/send
npm http GET https://registry.npmjs.org/fresh
npm http 304 https://registry.npmjs.org/debug
npm http 304 https://registry.npmjs.org/mkdirp
npm http 304 https://registry.npmjs.org/commander
npm http 200 https://registry.npmjs.org/qs
npm http 304 https://registry.npmjs.org/range-parser
npm http GET https://registry.npmjs.org/qs/-/qs-0.6.3.tgz
npm http 304 https://registry.npmjs.org/cookie
npm http 304 https://registry.npmjs.org/methods
npm http 304 https://registry.npmjs.org/connect
npm http 304 https://registry.npmjs.org/fresh
npm http 304 https://registry.npmjs.org/cookie-signature
npm http 304 https://registry.npmjs.org/send
npm http 304 https://registry.npmjs.org/buffer-crc32
npm http 200 https://registry.npmjs.org/qs/-/qs-0.6.3.tgz
npm http GET https://registry.npmjs.org/mime
npm http GET https://registry.npmjs.org/ms
npm http GET https://registry.npmjs.org/pause
npm http GET https://registry.npmjs.org/formidable
npm http GET https://registry.npmjs.org/bytes
npm http 304 https://registry.npmjs.org/mime
npm http 304 https://registry.npmjs.org/formidable
npm http 304 https://registry.npmjs.org/bytes
npm http 304 https://registry.npmjs.org/ms
npm http 304 https://registry.npmjs.org/pause
npm WARN engine formidable@1.0.13: wanted: {"node":"<0.9.0"} (current: {"node":"
v0.10.28","npm":"1.4.9"})
C:\Users\Daniel\AppData\Roaming\npm\express -> C:\Users\Daniel\AppData\Roaming\n
pm\node_modules\express\bin\express
express@3.2.2 C:\Users\Daniel\AppData\Roaming\npm\node_modules\express
├── methods@0.0.1
├── qs@0.6.3
├── range-parser@0.0.4
├── cookie-signature@1.0.1
├── fresh@0.1.0
├── buffer-crc32@0.2.1
├── cookie@0.0.5
├── commander@0.6.1
├── mkdirp@0.3.4
├── send@0.1.0 (mime@1.2.6)
├── debug@1.0.2 (ms@0.6.2)
└── connect@2.7.8 (pause@0.0.1, bytes@0.2.0, formidable@1.0.13)

C:\Users\Daniel>
```

### 下載 R 軟體與設定必須的套件庫

下載 [R 軟體](http://cran.csie.ntu.edu.tw/bin/windows/base/R-3.1.0-win.exe "下載 R 軟體")

安裝 R 軟體

安裝 RServe

您也可以直接


## 第一個測試範例
