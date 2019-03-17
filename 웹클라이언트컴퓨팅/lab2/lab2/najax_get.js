// npm install najax


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
