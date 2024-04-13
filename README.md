# setup

1. build image

```shell
# in pyneapple-demo/
docker build -t pyneapple-demo .
```

2. start container

```shell
# in pyneapple-demo/
docker run -v ./client:/home/client --publish 3000:3000 -it pyneapple-demo sh
```

3. install packages (if needed) and run client

```shell
# in home/
cd client; npm start
```
