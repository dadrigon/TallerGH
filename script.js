document.addEventListener('DOMContentLoaded', function(){
	var containerRoot=document.getElementById('container_gallery');
	fetch("https://pixabay.com/api/?key=9028854-57fbdff765bd9c3e29d77b542")
	.then(data =>data.text())
	.then(json =>JSON.parse(json))
	.then((response) => {
		response.hits.forEach(element => {
			var container =document.createElement('div');
			var img =document.createElement('img');
			img.src=element.previewURL;
			container.appendChild(img);
			containerRoot.appendChild(container);

		});
	})
},false);