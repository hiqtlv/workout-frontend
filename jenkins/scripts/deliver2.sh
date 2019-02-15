echo "starting awesome react docker deployment script"
echo "start by building new image"

ls
echo ${PWD}

docker build -t workout .

echo "start new container"

JENKINS_NODE_COOKIE=dontkillme docker run \
  --name workout \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 5000:5000 \
  --rm \
  workout
