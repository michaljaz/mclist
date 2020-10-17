var express = require('express');
var opn=require('opn')
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8080,()=>{
	opn("http://localhost:8080/")
});
