# React Fullstack Starter

:ram: A boilerplate for React, Material, Express, Babel, Flow, and ReactiveX.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/React-Fullstack-Starter/master.svg)](https://circleci.com/gh/Shyam-Chen/React-Fullstack-Starter)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/React-Fullstack-Starter/master.svg)](https://codecov.io/gh/Shyam-Chen/React-Fullstack-Starter)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter/status.svg)](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter/dev-status.svg)](https://david-dm.org/Shyam-Chen/React-Fullstack-Starter?type=dev)

:rainbow: Live Demo: Develop | [Master](https://react-by-example.firebaseapp.com/)

## Table of Contents

* [Getting Started](#getting-started)
* Project Template
* Dockerization
* Configuration
* [Directory Structure](#directory-structure)

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this Boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/React-Fullstack-Starter <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ yarn install
```

3. Set an active project for working direct

```bash
$ yarn firebase use development
```

4. Start a local server

```bash
# front-end
$ yarn start:app

# back-end
$ yarn start:api
```

5. Compile and bundle code

```bash
# front-end
$ yarn build:app

# back-end
$ yarn build:api
```

6. Check the code quality

```bash
# front-end
$ yarn lint:app  # (not yet)

# back-end
$ yarn lint:api  # (not yet)
```

7. Run the unit tests

```bash
# front-end
$ yarn test:app  # (not yet)

# back-end
$ yarn test:api  # (not yet)
```

8. Run the end-to-end tests

```bash
# front-end
$ yarn e2e:app  # (not yet)

# back-end
$ yarn e2e:api  # (not yet)
```

## Directory Structure

The structure follows the LIFT Guidelines.

```coffee
.
├── src
│   ├── api
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> api of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   └── ...
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   └── ...
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       └── ...
│   │   ├── graphql
│   │   │   ├── <FEATURE>  -> feature modules
│   │   │   │   ├── __tests__
│   │   │   │   │   └── ...
│   │   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   └── <GROUP>  -> module group
│   │   │       └── <FEATURE>  -> feature modules
│   │   │           ├── __tests__
│   │   │           │   └── ...
│   │   │           ├── _<THING>  -> feature of private things
│   │   │           │   └── ...
│   │   │           └── ...
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   └── index.js
│   ├── app
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> app of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   ├── actions.spec.js
│   │   │   │   ├── <FEATURE>.e2e-spec.js
│   │   │   │   ├── <FEATURE>.spec.js
│   │   │   │   ├── <epics|sagas>.spec.js
│   │   │   │   ├── reducer.spec.js
│   │   │   │   └── selectors.spec.js
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── <FEATURE>.vue
│   │   │   ├── <epics|sagas>.js
│   │   │   ├── reducer.js
│   │   │   ├── selectors.js
│   │   │   └── types.js
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   ├── actions.spec.js
│   │   │       │   ├── <FEATURE>.e2e-spec.js
│   │   │       │   ├── <FEATURE>.spec.js
│   │   │       │   ├── <epics|sagas>.spec.js
│   │   │       │   ├── reducer.spec.js
│   │   │       │   └── selectors.spec.js
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       ├── actions.js
│   │   │       ├── constants.js
│   │   │       ├── <FEATURE>.js
│   │   │       ├── <epics|sagas>.js
│   │   │       ├── reducer.js
│   │   │       ├── selectors.js
│   │   │       └── types.js
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   ├── actions.js
│   │   ├── App.js
│   │   ├── constants.js
│   │   ├── epics.js
│   │   ├── reducer.js
│   │   ├── sagas.js
│   │   ├── selectors.js
│   │   └── types.js
│   ├── assets  -> datas, fonts, images, medias, styles
│   │   └── ...
│   ├── client.js
│   ├── index.html
│   └── server.js
├── tools
│   └── ...
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
├── .gitignore
├── .postcssrc
├── .stylelintrc
├── Dockerfile
├── LICENSE
├── README.md
├── circle.yml
├── docker-compose.yml
├── env.js
├── firebase.json
├── gulpfile.js
├── jest.config.js
├── package.json
├── webpack.config.js
└── yarn.lock
```
