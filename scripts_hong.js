
var settings = {
  "async": true,
  "crossDomain": true,
  // "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5ba1c6c2e1777e61a31ad2d54afb241a&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
  "url": "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5ba1c6c2e1777e61a31ad2d54afb241a&per_page=10&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function (data) {
  console.log(data);



$("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
    	$.each( data.photos.photo, function( i, gp ) {

var farmId = gp.farm;
var serverId = gp.server;
var id = gp.id;
var secret = gp.secret;

console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

//  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

$("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg" width="100%"/><br><br>');

});
});
