FROM node:12

ENV HOME /React-Play

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

ENV NODE_ENV production

# envs --
ENV SITE_URL https://react-by-example-dev.firebaseapp.com
# -- envs

RUN yarn build
