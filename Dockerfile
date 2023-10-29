FROM node:18

RUN mkdir -p /usr/share/man/man1 && \
  echo 'deb http://ftp.debian.org/debian stretch-backports main' | tee /etc/apt/sources.list.d/stretch-backports.list && \
  apt update && apt install -y \
  git \
  ca-certificates \
  openjdk-11-jre \
  zsh \
  curl \
  wget \
  fonts-powerline \
  procps

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f" , "/dev/null" ]