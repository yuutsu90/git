//request.js
let request=require('request');
let fs=require('fs');

console.log(__dirname);

let homepage=request('http://www.naver.com', home=function(err, res, body){     //home = function 익명함수 대체
    fs.writeFile(__dirname+"/temp/naver_page.html", body, error=function(err) {    //error = function 익명함수 대체
        if(err) {
            return console.log(err);
        }
        console.log("The file(naver_page.html) was saved!");
    });
});

homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html"));

let timeout = setTimeout(function(){   //timeout = setTimeout(function) 익명함수 대체
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    }, 5000);



//najax_get.js
let najax = $ = require('najax');
let fs=require('fs');


let data = (callback) => {   //let data = (callback) => 화살표함수
	let tableData;
	$.get('https://www.google.com', callback);
	return tableData;
}

data(resp = (response) => {    //resp = (response) => 화살표함수
		   tableData = response;
                   //console.log(tableData);
                   fs.writeFile(__dirname+"/temp/google_page.html", tableData, errors = (err) => {
                       if(err) {
                           return console.log(err);
                       }
                       console.log("The file(google_page.html) was saved!");
         });
});
