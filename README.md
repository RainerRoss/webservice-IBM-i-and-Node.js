# Providing a JSON webservice based on IBM i, DB2 and Node.js

## Install Node.js with YUM
```
5250> qp2term
===> echo 'PATH=/QOpenSys/pkgs/bin:$PATH' >> $HOME/.profile      
export PATH >> $HOME/.profile                               
===> yum install nodejs14
```
## Verify your Node.js installation
```
5250> qp2term                        
===> yum list nodejs14
```
## Check your Node.js and npm (Node Package Manager) version
```
5250> qp2term                        
===> node -v
v14.17.2
===> npm -v
6.14.13
```
## Install the Node.js DB2 connector with npm (Node Package Manager)
```
5250> qp2term
===> npm install idb-connector
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
