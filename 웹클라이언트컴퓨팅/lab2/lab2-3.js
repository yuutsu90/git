//request.js
let request=require('request');
let fs=require('fs');

console.log(__dirname);

let homepage=request('http://www.naver.com', home=function(err, res, body){
    fs.writeFile(__dirname+"/temp/naver_page.html", body, error=function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file(naver_page.html) was saved!");
    });
});

homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html"));

let timeout = setTimeout(function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    }, 5000);



//najax_get.js
let najax = $ = require('najax');
let fs=require('fs');


let data = (callback) => {
	let tableData;
	$.get('https://www.google.com', callback);
	return tableData;
}

data(resp = (response) => {
		   tableData = response;
                   //console.log(tableData);
                   fs.writeFile(__dirname+"/temp/google_page.html", tableData, errors = (err) => {
                       if(err) {
                           return console.log(err);
                       }
                       console.log("The file(google_page.html) was saved!");
         });
});
