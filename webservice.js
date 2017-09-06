var http		= require('http');
var url			= require('url');
var querystring	= require('querystring');
var db			= require('/QOpenSys/QIBM/ProdData/OPS/Node6/os400/db2i/lib/db2');
var util		= require('util');

function Runtime() {
	this.starttime;
	this.runtime;
}

Runtime.prototype = {
	start: function() {
		this.starttime = new Date();
	},
	print: function() {
		this.runtime = new Date() - this.starttime;
		console.log('Runtime: ' + this.runtime + ' ms');
	}
};

var MyRuntime = new Runtime();

var responseData = {
	success: '',
	errmsg: '',
	records: '',
	items: ''
};

http.createServer(function (request, response) {
	MyRuntime.start();	
	var pathname = url.parse(request.url).pathname;
	var values = querystring.parse(url.parse(request.url).query);

	console.log('Pathname: ' + pathname);
	console.log('Querystring: ' + url.parse(request.url).query);
	console.log('Values:' + JSON.stringify(values));

	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(readCustomers(values.name));

	MyRuntime.print();
}).listen(8080);

function readCustomers(value) {
	var select = 'SELECT CUSNUM, trim(LSTNAM) as lstnam, trim(CITY) as City, BALDUE FROM QCUSTCDT';
	var where  = util.format("where lstnam like '%s'", value);
	var sql    = select + ' ' + where;
	var data   = '';
	console.log('SQL: ' + sql);
	db.init();
	db.conn('*LOCAL');
	db.exec('SET SCHEMA QIWS');
	db.exec(sql, function(rows) {
		data = createResponse(rows);
	});
	db.close;
	return data;
}

function createResponse(rows) {
	if (rows.length > 0) {
		responseData.success = true;
		responseData.errmsg  = '';
		responseData.records = rows.length;
		responseData.items   = rows;
	} else {
		responseData.success = false;
		responseData.errmsg  = 'No records found';
		responseData.records = rows.length;
		responseData.items   = '';
	}
	return JSON.stringify(responseData);
}