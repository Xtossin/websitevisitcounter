#base image to use
FROM node:alpine

#chnage working dir to copy files here
WORKDIR '/app'

#putting package.json here so the image wont have to rebuild if index.js is edited
COPY package.json .

#dependancies install
RUN npm install

#copy rest of source code
COPY . .

#command to run to start up server
CMD ["npm", "start"]
