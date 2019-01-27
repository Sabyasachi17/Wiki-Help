//pop up when you click the button


var displayWikipediaData = function(){
	var searchString = $('#searchString').val();
	var $linksElement = $('#links');

	var wikipediaUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchString + '&format=json&callback=?';


	$.ajax({
		
		url: wikipediaUrl, 
		dataType: "jsonp", 
		jsonp:"callback",

		success: function(res) {     
		var linkList = res[1];
        linklists.forEach(function(item){ 
        	var url='https://en.wikipedia.org/wiki/' + item; 
		$linksElement.append('<li><a href="' + url + '">' + item + '</a></li>');
		
		 return url; 
		})
	}	

	})

	return false;

};
#include<