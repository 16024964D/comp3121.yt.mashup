// !!!!!!!! Please add this to index --> <script src="https://apis.google.com/js/api.js"></script>
	function setAttributes(el, attrs) {
		for(var key in attrs) 
			el.setAttribute(key, attrs[key])
	}

	
	var ytAttr = {"width":"300","height":"300","frameborder":"0","allow":"autoplay; encrypted-media"};
	
	var ytDiv = document.createElement('div');
	ytDiv.setAttribute('id', 'ytDiv');
	
	document.getElementById("Alan").appendChild(ytDiv);	
	
	document.getElementById("ytDiv").style.width = "300px";
	
	function getVideo(val) {
		var ytTitle = document.createElement('h2');
		ytTitle.textContent = val.snippet.title;
		var ytVideo = document.createElement('iframe');
		setAttributes(ytVideo, ytAttr);
		var ytURL = "http://www.youtube.com/embed/"+val.id;
		ytVideo.setAttribute('src', ytURL);
		ytDiv.appendChild(ytTitle); 
		ytDiv.appendChild(ytVideo); 
		ytDiv.appendChild(document.createElement("br"));
	}

	
	function execute() {
		return gapi.client.youtube.videos.list({
			"part": "snippet,contentDetails,statistics",
			"chart": "mostPopular",
			"regionCode": "US"
		})
        .then(
			function(response) {
				var respList = response.result.items;
				//console.log(respList[0]);
				//console.log(respList[0].snippet.title);
				respList.forEach(getVideo)
            },
			function(err) { console.error("Execute error", err); }
		);
	}
	
	function loadClient() {
		gapi.client.setApiKey("AIzaSyAYTm2gGb3Dg6xhmr7MHNxLMreiX8-BRgE");
		return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
		.then(function(){ 
			console.log("GAPI client loaded for API"); 
			setTimeout(execute, 3000);
		},
			function(err) { 
				console.error("Error loading GAPI client for API", err); 
				setTimeout(loadClient, 3000);
			}
		);
	}

	gapi.load("client");
	
	window.onload = function(){
		loadClient();
	};
