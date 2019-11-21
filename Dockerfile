FROM ubuntu:18.04

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY server .

ENTRYPOINT [ "echo", "Bootstrapped with app-cli" ]