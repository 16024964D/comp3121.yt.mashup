<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://apis.google.com/js/api.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-137428551-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-137428551-1');

</script>
<script type="text/javascript">
var queryString = window.location.search.slice(1);
if (queryString){
qString = queryString.split('q=')[1].split('&')[0];
alert(qString);

}

</script>
<script src="scripts_david.js"></script>
<script src="scripts_hong.js"></script>
<script src="scripts_kay.js"></script>
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'>
<script src="scripts_alan.js"></script>
<link rel="stylesheet" type="text/css" href="css_alan.css">
<script src="scripts_ronald.js"></script>
<style>
table {
    table-layout : fixed;
	width: 100%;
}
table, th, td {
  border: 1px solid black;

  border-collapse: collapse;
  padding: 5px;
}
td {
vertical-align: top;

}
</style>
</head>

<body>
<table>
<tr>
<th>Ronald</th>
<th>Kay</th>
<th>Alan</th>
<th>Edward</th>
<th>Hong</th>
<th>David</th>
</tr>
<tr>
<td><div id="Ronald"></div>
</td>
<td><div id="Kay"></div>
</td>
<td><div id="Alan"></div>
</td>
<td><div id="Edward"></div>
</td>
<td><div id="Hong"><h2>Recent Gallery</h2><div id="flickr"/></div>
</td>
<td><div id="david"></div>
</td>


</tr>

</table>
  
    
</body>



</html>
