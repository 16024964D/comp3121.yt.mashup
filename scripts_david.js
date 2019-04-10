  var url = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=308852d80b704b218f7282b74f48a882';
var req = new Request(url);
fetch(req)
.then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    //console.log(data)
	
	  var  i, x= "";
  for (i in data.articles) {
  x += "<div><b>Title:</b> " + data.articles[i].title + "<br>";
  
  
  
  if (data.articles[i].description==null) {
    x += "<b>Description:</b> <br>";
  } else {
    x += "<b>Description:</b> " + data.articles[i].description.substring(0, 100) + "...<br>";
  }
  
  x += "<img src=" + data.articles[i].urlToImage + " width='50%'><br>";
  x += "<b>Author:</b> <i>" + data.articles[i].author + "</i><br>";
  x += "<b>Date:</b> " + data.articles[i].publishedAt.substring(0, 10);
  x += "<br><b>Time:</b> " + data.articles[i].publishedAt.substring(11, 16) + "<br></div><hr>";
  
}
document.getElementById("david").innerHTML = x;
	
  })