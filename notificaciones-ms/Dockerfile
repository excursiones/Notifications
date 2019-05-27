FROM node:8.15.1
ENV work_dir /notificaciones-ms
WORKDIR ${work_dir}
COPY ["package.json", "package-lock.json*", "${work_dir}/"]
RUN cd ${work_dir} && npm install
COPY . ${work_dir}/
CMD ["npm", "start"]