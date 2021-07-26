# Providing a JSON webservice based on IBM i, DB2 and Node.js
With Node.js you are able to create very easy and with a few lines of code a REST webservice on your IBM i

## Performance
The webservice ist very fast - look at the runtime
```
Pathname: /MyWebservice 
Runtime: 3ms                 
Pathname: /MyWebservice      
Runtime: 2ms                 
Pathname: /MyWebservice      
Runtime: 2ms                 
Pathname: /MyWebservice      
Runtime: 1ms                 
Pathname: /MyWebservice      
Runtime: 1ms                 
Pathname: /MyWebservice      
Runtime: 1ms                 
```
## Install Node.js with YUM
```
5250> call qp2term
===> echo 'PATH=/QOpenSys/pkgs/bin:$PATH' >> $HOME/.profile      
export PATH >> $HOME/.profile                               
===> yum install nodejs14
```
## Verify your Node.js installation
```
5250> call qp2term                        
===> yum list nodejs14
```
## Check your Node.js and npm (Node Package Manager) version
```
5250> call qp2term                        
===> node -v
v14.17.2
===> npm -v
6.14.13
```
## Install the Node.js DB2 connector with npm (Node Package Manager)
```
5250> call qp2term
===> npm install idb-connector
```
## Manual Install
Create the following Directories

```
5250> call qp2term
===> mkdir -p /home/node  (for the ReadCustomers.js)
```

## Git Clone Install
From a PASE shell enter the following

```
5250> call qp2term
===> git clone git@github.com:RainerRoss/webservice-IBM-i-and-Node.js.git
```

## Start the webservice on your IBM i

```
5250> call qp2term
===> node /home/node/ReadCustomers.js
```

## Start the webservice in your browser

http://yourip:8080/MyWebservice

The result is the following JSON String
```
{
    "success": true,
    "error": null,
    "records": 12,
    "data": [
        {
            "CUSNUM": "938472",
            "LSTNAM": "Henning",
            "CITY": "Dallas",
            "BALDUE": "37.00"
        },
        {
            "CUSNUM": "839283",
            "LSTNAM": "Jones",
            "CITY": "Clay",
            "BALDUE": "100.00"
        },
        {
            "CUSNUM": "392859",
            "LSTNAM": "Vine",
            "CITY": "Broton",
            "BALDUE": "439.00"
        },
        {
            "CUSNUM": "938485",
            "LSTNAM": "Johnson",
            "CITY": "Helen",
            "BALDUE": "3987.50"
        },
        {
            "CUSNUM": "397267",
            "LSTNAM": "Tyron",
            "CITY": "Hector",
            "BALDUE": ".00"
        },
        {
            "CUSNUM": "389572",
            "LSTNAM": "Stevens",
            "CITY": "Denver",
            "BALDUE": "58.75"
        },
        {
            "CUSNUM": "846283",
            "LSTNAM": "Alison",
            "CITY": "Isle",
            "BALDUE": "10.00"
        },
        {
            "CUSNUM": "475938",
            "LSTNAM": "Doe",
            "CITY": "Sutter",
            "BALDUE": "250.00"
        },
        {
            "CUSNUM": "693829",
            "LSTNAM": "Thomas",
            "CITY": "Casper",
            "BALDUE": ".00"
        },
        {
            "CUSNUM": "593029",
            "LSTNAM": "Williams",
            "CITY": "Dallas",
            "BALDUE": "25.00"
        },
        {
            "CUSNUM": "192837",
            "LSTNAM": "Lee",
            "CITY": "Hector",
            "BALDUE": "489.50"
        },
        {
            "CUSNUM": "583990",
            "LSTNAM": "Abraham",
            "CITY": "Isle",
            "BALDUE": "500.00"
        }
    ]
}
```
When the port `8080` is used on your machine use another port and change it in the `ReadCustomers.js` script
```
line 18 }).listen(8080);
```
check the port on IBM i 
```
5250> netstat *cnn
```
