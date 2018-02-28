FROM nginx:latest

COPY react.conf /etc/nginx/conf.d/react.conf
RUN apt-get update && apt-get install -y \
        curl \
        wget \
        nano \
        git \
        build-essential \
        libssl-dev \
        python

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.9.1

# NVM Manager
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

EXPOSE 9000

# Default dir in bash\
WORKDIR /var/www/react_app

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

CMD rm -rf ./node_modules \
    && source $NVM_DIR/nvm.sh \
    && npm install -g yarn \
    && yarn \
    && yarn build \
    && service nginx restart \
    && bash

