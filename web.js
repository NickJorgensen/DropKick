var fs = require('fs')
var http = require('http');
var express = require("express")
var app = express()
var amazonSecret = process.env.AMAZON_SECRET
var amazonKey = process.env.AMAZON_KEY
var bucketName = 'nodewebkitexamplebucket'

// you can use jquery
// Lets change the text in our helloDisplay div
$('#helloDisplay').text('DropKick')


var s3 = require('aws2js').load('s3', amazonKey, amazonSecret).setBucket(bucketName);
$('#uploadButton').click(function(){
	//loads hidden input tag which is used to as file selector
	var fInput = $('<input></input>').appendTo('body')
	.css('display','none')
	.attr('type','file')
	.change(function(evt) {
		if(!$(this).val()) {
			return
		}
		var fullPath = $(this).val()
		var name = path.basename(fullPath)
		s3.put('/'+name, {}, fullPath, function (err,data) {
			if(err) throw err;
			$('<div></div>').text(name).appendTo('#fileButtons')
		})
		fInput.remove()
	})
	fInput.trigger('click')
})


//Notice you can use this web.js like a regular node.js server
// var port = 80900
// app.configure(function(){
	// app.use(express.favicon("public/js/icon.ico")); 
	// app.use('/public/js', express.static(APP_ROOT + '/public/js'))
// })
// app.listen(port)

