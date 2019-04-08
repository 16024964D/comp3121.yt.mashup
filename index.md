<!DOCTYPE html>
<html >
<head>
<title>Pinterest RSS Feed</title>
</head>

<body>
<script src="https://apis.google.com/js/api.js"></script>
<script>
  /**
   * Sample JavaScript code for youtube.videos.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  function loadClient() {
    gapi.client.setApiKey("AIzaSyAYTm2gGb3Dg6xhmr7MHNxLMreiX8-BRgE");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.youtube.videos.list({
      "part": "snippet,contentDetails,statistics",
      "chart": "mostPopular",
      "regionCode": "US"
    })
        .then(function(response) {
			var videoList = response.result.items;
			videoList.forEach(retrieveVideo);
			var 
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
  
  function retrieveVideo(value, index, array){
		console.log(value.id);
  }
  
</script>
<button onclick="loadClient()">load</button>
<button onclick="execute()">execute</button> 
<!-- Embedded Video -->
<!--<iframe width="560" height="315" src="http://www.youtube.com/embed/ijROuD8jCeo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
</body>
</html>
