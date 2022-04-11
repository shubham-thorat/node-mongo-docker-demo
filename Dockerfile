FROM node:12

WORKDIR /usr/src/app

COPY package*.json .

#RUN npm install --only=production
ARG NODE_ENV
RUN if [[ -z "$NODE_ENV" = "development" ]] ; then RUN npm install ; else npm install --only=production ; fi
# RUN if [ "$NODE_ENV" = "development" ]; \
#         then RUN npm install; \
#         else npm install --only=production; \
#         fi 


COPY . .

EXPOSE 5000

CMD ["node","server.js"]