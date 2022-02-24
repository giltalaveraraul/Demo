FROM nginx
COPY hello-world /usr/share/nginx/html
CMD /bin/sh -c "envsubst < /usr/share/nginx/html/assets/env.template > /usr/share/nginx/html/assets/env.json && nginx -g 'daemon off;'"