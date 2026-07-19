FROM jenkins/jenkins:lts

USER root

RUN apt-get update && \
    apt-get install -y \
    docker.io \
    curl \
    git \
    nodejs \
    npm

USER jenkins