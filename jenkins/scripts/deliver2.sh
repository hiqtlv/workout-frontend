echo "starting awesome react docker deployment script"
echo "start by building new image"

docker build -t workout .

echo "start new container"

JENKINS_NODE_COOKIE=dontkillme docker run -it \
  --name workout \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm \
  workout