FROM mhart/alpine-node:13.13
RUN npm install redis && npm install express
WORKDIR /app
COPY app /app
CMD ["node","Simple_Server"]
