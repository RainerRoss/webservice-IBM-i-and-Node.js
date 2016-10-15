# webservice-IBM-i-and-Node.js
Providing a webservice based on IBM i and Node.js

The webservice powered by IBM i needs V7R1 and Node.js delivered with 5770OPS
```
5770OPS Option 1 	Node.js 0.x
5770OPS Option 5 	Node.js 4.x
```
Go [here](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/IBM%20i%20Technology%20Updates/page/Node.js) to get started with Node.js on IBM i.

#Set Node.js to V4:

```
5250> qsh
$ /QOpenSys/QIBM/ProdData/OPS/Node4/bin/nodever.sh 4
```

#Check your Node.js version:

```
5250> qsh
$ node -v
```

#Manual Install
Create the following Directories:

```
5250> qsh
$ mkdir -p /home/node  (for the webservice.js)
```

#Git Clone Install
From a PASE shell enter the following:

```
5250> qsh
$ git clone git@github.com:RainerRoss/webservice-IBM-i-and-Node.js.git
```

Start the webservice:

```
5250> qsh
$ node /home/node/webservice.js
```

Start the webservice in your browser:

http://yourip:8080/MyWebservice?name=A%25/

If the port `8080` is used on your machine please use another port and change it in the `webservice.js - line 27` 

check the port on IBM i: 

```
5250> netstat *cnn
```
