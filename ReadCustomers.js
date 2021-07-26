const http		 = require('http');
const url		 = require('url');
const db		 = require('idb-connector');
const connection = new db.dbconn();

connection.conn('*LOCAL');


http.createServer(function (request, response) {
	var start = timerStart();	
	var pathname = url.parse(request.url).pathname;	
	console.log('Pathname: ' + pathname);

	response.writeHead(200, {'Content-Type':'application/json'});
	response.end(JSON.stringify(readCustomers()));
	
	console.log('Runtime: ' + timerEnd(start));
}).listen(8080);


function readCustomers() {
	const statement	= new db.dbstmt(connection);
	const mySql = `Select CUSNUM, trim(LSTNAM) as Lstnam, trim(CITY) as City, BALDUE
	                 From QIWS.QCUSTCDT`;
	var data = new Object();
	statement.execSync(mySql, function(result) {
		if (result.length > 0) {
			data.success = true;
			data.error   = null;
			data.records = result.length;
			data.data    = result;
		} else {
			data.success = false;
			data.error   = 'No records found';
			data.records = result.length;
			data.data    = '';
		}		
		statement.close();
	})
	return data;
}


function timerStart() {
	return (new Date()).getTime();
}

function timerEnd(start) {
	return ((new Date()).getTime() - start) + "ms";
}
