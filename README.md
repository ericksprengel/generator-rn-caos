# generator-rn-caos
React Native - CAOS (Coding An Organized Software)

## Setup

``` bash
npm install -g yo generator-rn-caos
```

## Usage

Generate Login container/screen:
``` bash
$ yo rn-caos
? Your screen/container name: Login
? Your screen/container path dir: Auth
? List input views (ex.: email, password): email,password
? List button actions: onLogin,onForgotPassword
```

Generated files:
``` bash
   create src/containers/Auth/Login/index.js
   create src/containers/Auth/Login/index.stories.js
   create src/containers/Auth/Login/index.test.js
   create src/containers/Auth/Login/styles.js
   create src/screens/Auth/Login/index.js
```
