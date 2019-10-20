FROM ubuntu:18.04

COPY . .

ENTRYPOINT [ "echo", "Bootstrapped with app-cli" ]