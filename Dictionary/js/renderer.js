// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var search = function(sp){
	var result = [];
	var index=0;
	for(var key in tjru){
		if(key.includes(sp)){
			result.push([key,tjru[key]]);
			index++;
			if(index===50)break;
		}
	}console.log(result);
	return result;
};

var render = function(arr){
	$('#searched').html(arr.reduce(function(a,el){
	return [a ,"<div class='list-group-item-action'><div class='row'><div class='col-sm-3'>",el[0],"</div><div class='col-sm-9'>",el[1],"</div></div></div>"].join("");
	},""));
}


jQuery('#searchBtn').on('click',function(){
	 
	var text = $('#searchInpt').val();
	render(search(text));
});
