# Providing a JSON webservice based on IBM i and Node.js

The webservice powered by IBM i needs V7R1 and Node.js
```
5733-OPS Option 1 	Node.js 0.x
5733-OPS Option 5 	Node.js 4.x
5733-OPS Option 10 	Node.js 6.x
```
Go [here](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/IBM%20i%20Technology%20Updates/page/Node.js) to get started with Node.js on IBM i.

## When you have installed Node.js 6.x set Node.js to V6
```
5250> qsh
$ /QOpenSys/QIBM/ProdData/OPS/Node6/bin/nodever.sh 6
Node.js v6 will now be used. 
```

## Check your Node.js and Node Package Manager version

```
5250> qsh
$ node -v
v6.9.1
$ npm -v
3.10.8
```

## Manual Install
Create the following Directories

```
5250> qsh
$ mkdir -p /home/node  (for the webservice.js)
```

## Git Clone Install
From a PASE shell enter the following

```
5250> qsh
$ git clone git@github.com:RainerRoss/webservice-IBM-i-and-Node.js.git
```

## Start the webservice on your IBM i

```
5250> qsh
$ node /home/node/webservice.js
```

## Start the webservice in your browser

http://yourip:8080/MyWebservice?name=A%25

The result is the following JSON String
```
{
   "success":true,
   "errmsg":"",
   "records":2,
   "items":[
      {
         "CUSNUM":"846283",
         "LSTNAM":"Alison",
         "CITY":"Isle",
         "BALDUE":"10.00"
      },
      {
         "CUSNUM":"583990",
         "LSTNAM":"Abraham",
         "CITY":"Isle",
         "BALDUE":"500.00" 
      }
   ]
}
```

When the port `8080` is used on your machine use another port and change it in the `webservice.js` script
```
line 27 }).listen(8080);
```

check the port on IBM i: 

```
5250> netstat *cnn
```
