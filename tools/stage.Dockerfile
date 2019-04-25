FROM node:8

ENV HOME /React-Play

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

ENV NODE_ENV production

# envs --
ENV SITE_URL https://react-by-example-stage.firebaseapp.com
ENV FUNC_URL https://us-central1-react-by-example-stage.cloudfunctions.net
# -- envs

RUN yarn build
RUN yarn build:api && cd functions && yarn install
