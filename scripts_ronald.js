var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	var list = JSON.parse(this.responseText).data.children;
	for (var i = 0; i < list.length; i++) {
		var myData = list[i].data;
		
		if(!myData.url.startsWith("https://www.reddit.com")){
			continue;
		}
		var paraBQ = document.createElement("blockquote");
		paraBQ.setAttribute('class', 'reddit-card');
		var paraA = document.createElement("a");
		paraA.setAttribute('href', myData.url);
		paraBQ.appendChild(paraA);
		//document.body.appendChild(paraBQ);
		
		var scriptStyle = document.createElement("script");
		scriptStyle.setAttribute('src', 'https://embed.redditmedia.com/widgets/platform.js');
		document.head.appendChild(scriptStyle);
		
		var content = document.getElementById("Ronald");
		content.appendChild(paraBQ);
	}
  }
};
xmlhttp.open("GET", "https://www.reddit.com/r/nba/top.json?limit=30", true);
xmlhttp.send();