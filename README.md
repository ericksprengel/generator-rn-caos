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
? Your screen/container path dir: App/Auth
? List input views (ex.: email, password): email,password
? List button actions: onLogin,onBack,onForgotPassword
```

Generated files:
``` bash
   create src/containers/App/Auth/Login/index.tsx
   create src/containers/App/Auth/Login/styles.ts
   create src/containers/App/Auth/Login/tests/componentStates.tsx
   create src/containers/App/Auth/Login/tests/index.stories.ts
   create src/containers/App/Auth/Login/tests/index.test.tsx
   create src/screens/App/Auth/Login/index.tsx
```
