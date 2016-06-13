FROM node:6.2.0

RUN mkdir -p /opt/pub-t-destination
WORKDIR /opt/pub-t-destination
ADD . /opt/pub-t-destination

EXPOSE 3000
RUN npm i
CMD npm start
