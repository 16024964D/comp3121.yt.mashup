<script>
	var url =
    "https://www.googleapis.com/youtube/v3/search" +
    "?id=7lCDEYXw3mM" +
    "&key=AIzaSyAYTm2gGb3Dg6xhmr7MHNxLMreiX8-BRgE" +
    "&part=snippet" +
    "&q=YouTube+Data+API" +
    "&type=video" +
    "&videoCaption=closedCaption";


	function makeRequest(){
	  xhr = new XMLHttpRequest();
	  xhr.open('GET',url);
	  xhr.onload = function(){
		// do something
		var response = JSON.parse(this.responseText);
		for(var i = 0; i<response.items.length ; i++){
		  var item = response.items[i];
		  var title = item.snippet.title;
		  var desc = item.snippet.description;
		  var imgUrl = item.snippet.thumbnails.default.url;
		   console.log(title,desc,imgUrl)
		}
	   
	  }
	  xhr.send();
	}


makeRequest();
</script>
  
