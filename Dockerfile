FROM node:8-alpine

RUN mkdir /cart
WORKDIR /cart

COPY . .
COPY app app

RUN npm install

