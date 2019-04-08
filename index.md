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
                // Handle the results here (response.result has the parsed body).
                //console.log("Response", response);
				console.log("Response", response.body);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
</script>
<button onclick="loadClient()">load</button>
<button onclick="execute()">execute</button>



<!-- Embedded Video -->

