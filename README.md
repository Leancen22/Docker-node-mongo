Para levantar con bd:

docker-compose build
docker-compose up

Sin db:

docker build -t hellonode .
docker images
docker run -p 4000:3000 hellonode

Contenedor:

docker ps
docker exec -it exampleapp bash
