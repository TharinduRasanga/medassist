# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.16.0-alpine as build

# Set the working directory
WORKDIR /usr/local

# Add the source code to app
COPY . /usr/local

FROM nginx:1.14-alpine
COPY --from=build /usr/local/dist/med-assist-ui /usr/share/nginx/html

#COPY certNew.csr /etc/nginx/certNew.csr
#COPY keyNew.key /etc/nginx/keyNew.key
COPY nginx.conf.temp /nginx.conf.temp

# https://punchsalad.com/ssl-certificate-generator/  https://www.youtube.com/watch?v=DZOBGDE_EB8
# RUN mkdir -p /usr/share/nginx/html/.well-known/acme-challenge/Gj22QtK0AptnCHiJVafEMyl4bsJ_TbNlBcamPUO6H5g
# RUN mkdir -p /usr/share/nginx/html/.well-known/acme-challenge/wGpIqjK0giUZCGUQUeK8do0f4Q5jekSVbUgsplAJb2Q
# COPY Gj22QtK0AptnCHiJVafEMyl4bsJ_TbNlBcamPUO6H5g /usr/share/nginx/html/.well-known/acme-challenge/Gj22QtK0AptnCHiJVafEMyl4bsJ_TbNlBcamPUO6H5g
# COPY wGpIqjK0giUZCGUQUeK8do0f4Q5jekSVbUgsplAJb2Q /usr/share/nginx/html/.well-known/acme-challenge/wGpIqjK0giUZCGUQUeK8do0f4Q5jekSVbUgsplAJb2Q

CMD /bin/sh -c "cat /nginx.conf.temp > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"
