# React Fullstack Starter

:ram: A boilerplate for React, Material, Express, Babel, Flow, and ReactiveX.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/React-Fullstack-Starter/master.svg)](https://circleci.com/gh/Shyam-Chen/React-Fullstack-Starter)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/React-Fullstack-Starter/master.svg)](https://codecov.io/gh/Shyam-Chen/React-Fullstack-Starter)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter/status.svg)](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter/dev-status.svg)](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter?type=dev)

[Live Demo (Firebase)](https://react-by-example.firebaseapp.com/) | [Live Demo (Heroku)](https://react-by-example.herokuapp.com/)

## Getting Started

1. Clone this Boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/React-Fullstack-Starter <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install Dependencies

```bash
$ yarn install

# then install types
$ yarn typed
```

3. Run the Application

```bash
# front-end
$ yarn start:app

# back-end
$ yarn start:api
```

4. Build the Application

```bash
# front-end
$ yarn build:app

# back-end
$ yarn build:api
```

5. Test the Application

```bash
# front-end
$ yarn test:app

# back-end
$ yarn test:api
```

## Practical Examples

* [x] CRUD Operations
  * [x] Static
  * [x] REST
    * [x] Thunk (`redux-thunk`)
    * [x] Saga (`redux-saga`)
    * [x] Observable (`redux-observable`)
  * [x] GraphQL
* [ ] Form Controls
  * [x] Just Redux (`redux`)
  * [x] With Redux Form (`redux`, `redux-form`)
  * [ ] Reactive Forms (`redux`, `redux-observable`)
* [ ] Data Table
  * [x] Static
  * [ ] REST
  * [ ] GraphQL
* [ ] Globalization
  * [ ] Internationalization (`react-intl`)
  * [ ] Localization
* [ ] Authorization
  * [ ] REST
  * [ ] GraphQL
* [ ] Data Chart
  * [ ] SVG (`d3`)
  * [ ] Canvas (`d3`)
  * [ ] WebGL (`three`)
* [ ] Realtime
  * [ ] WebSockets (`socket.io`)
  * [ ] GraphQL Subscriptions
* [ ] Playground
  * [x] Counter
    * [x] State Management (`redux`)
    * [x] Asynchronous
      * [x] Thunk (`redux-thunk`)
      * [x] Saga (`redux-saga`)
      * [x] Observable (`redux-observable`)
  * [ ] ...
