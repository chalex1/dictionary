if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('tjru.xlsx');
/* DO SOMETHING WITH workbook HERE */
var firstSheetName = workbook.SheetNames[0];
var sheet = workbook.Sheets[firstSheetName];
var obj;
var index=0,emptyCells=3;
var fc,sc;
var result = {};
while(emptyCells){
	fc = 'A'+index;
	sc = 'B'+index;
	if(!sheet[fc]||!sheet[sc])
		emptyCells--;
	else {
	result[sheet[fc].v]=sheet[sc].v;
	}index++;
	//console.log(index)
};
//console.log(result);
const fs = require('fs');
const content = JSON.stringify(result);

fs.writeFile("d:/tjru.js", content, {encoding:'utf8',flag:'w'}, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
//console.log(workbook)
