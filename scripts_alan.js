$().ready(function(){
			var url = 'https://api.pinterest.com/v3/pidgets/boards/creativthing/magazine-design/pins/';  
			var req = new Request(url);
			fetch(req)
			.then(response => {
				return response.json()
			  }).then(data => {
				var pins = data.data.pins;
				for (index in pins) {
					if(pins[index].attribution != null){
						//console.log(pins[index]);
						var title = pins[index].attribution.title;
						var author = pins[index].attribution.author_name;
						var description = pins[index].description;
						var images = pins[index].images['564x'].url;
						createCardDiv(index, title, description, author, new Date(), images);
					}else{
						var title = pins[index].description;
						var author = pins[index].pinner.full_name;
						var description = pins[index].description;
						var images = pins[index].images['564x'].url;
						createCardDiv(index, title, description, author, new Date(), images);
					}
				}
			})
		})
		
		
		function createCardDiv(index, titleText, description, authorName, pubDate, imageUrl){
			console.log("titleText :" + titleText);
			console.log("description :" + description);
			console.log("authorName :" + authorName);
			console.log("pubDate :" + pubDate);
			console.log("imageUrl :" + imageUrl);
			var card = document.createElement('div');
			card.setAttribute('class', 'example-1 card');
			var wrapper = document.createElement('div');
			wrapper.setAttribute('class', 'wrapper');
			wrapper.setAttribute('style', 'background: url(' + imageUrl + ') 50% 25% no-repeat;');
			var date = document.createElement('div');
			date.setAttribute('class', 'date');
			var day = document.createElement('span');
			day.setAttribute('class', 'day');
			day.textContent = new Date(pubDate).getDate();
			var month = document.createElement('span');
			month.setAttribute('class', 'month');
			month.textContent = new Date(pubDate).getMonth() + 1;
			var year = document.createElement('span');
			year.setAttribute('class', 'year');
			year.textContent = new Date(pubDate).getFullYear();
			date.appendChild(day);
			date.appendChild(month);
			date.appendChild(year);
			wrapper.appendChild(date);
			
			
			var data = document.createElement('div');
			data.setAttribute('class', 'data');
			var content = document.createElement('div');
			content.setAttribute('class', 'content');
			var author = document.createElement('span');
			author.setAttribute('class', 'author');
			author.textContent = authorName;
			var title = document.createElement('h3');
			title.setAttribute('class', 'title');
			title.textContent = titleText;
			var text = document.createElement('p');
			text.setAttribute('class', 'text');
			text.textContent = description;
			var label = document.createElement('label');
			label.setAttribute('class', 'menu-button');
			label.setAttribute('for', 'show-menu' + index);
			label.appendChild(document.createElement('span'));
			content.appendChild(author);
			content.appendChild(title);
			content.appendChild(text);
			content.appendChild(label);
			data.appendChild(content);
			
			
			
			
			var input = document.createElement('input');
			input.setAttribute('type', 'checkbox');
			input.setAttribute('id', 'show-menu' + index);
			var ul = document.createElement('ul');
			ul.setAttribute('class', 'menu-content');
			
			var li1 = document.createElement('li');
			var a1 = document.createElement('a');
			a1.setAttribute('class', 'fa fa-bookmark-o');
			var li2 = document.createElement('li');
			var a2 = document.createElement('a');
			a2.setAttribute('class', 'fa fa-heart-o');
			var li3 = document.createElement('li');
			var a3 = document.createElement('a');
			a3.setAttribute('class', 'fa fa-comment-o');
			
			li1.appendChild(a1);
			li2.appendChild(a2);
			li3.appendChild(a3);
			
			ul.appendChild(li1);
			ul.appendChild(li2);
			ul.appendChild(li3);
			
			data.appendChild(input);
			data.appendChild(ul);
			wrapper.appendChild(data);
			
			
			
			card.appendChild(wrapper);
			
			document.getElementById("Alan").appendChild(card);
			
		}