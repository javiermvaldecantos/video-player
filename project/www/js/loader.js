/*
 * JavaScript code to enable video retrieving from JSON file
 */
var allVids = [];	//array of videos

var allVidsByID = {};	//map of videos identified by their IDs

var loadContent = function() {

	console.log("using ajax...");	//debug
	
	$.ajax({
		url:"clips.json",	//this is the correct URL because
							//although this file is inside 'js' folder
							//the script inside will be loaded in the parent directory
		success: successCallback,
		error: function(xhr, status, errorThrown) {
			console.log("Problem getting JSON file");
			console.log("Error: " + errorThrown);
			console.log("Status: " + status);
			console.dir(xhr);
		}
	});
	
	return [allVids, allVidsByID];
	
}

var successCallback = function(videos) {

	console.log("success on the request!");	//debug
	
	$.each(videos, function(i, video) {
		//console.dir(video); //debug
		var currentVideo = new iitnews.Video(
			video.id,
			video.name,
			video.description,
			video["content-url"],	//necessary due to the '-' character
			video["thumb-url"],		//necessary due to the '-' character
			false	//'watched' property set to false
		);
		allVids.push(currentVideo);
		allVidsByID[currentVideo.id] = currentVideo;
		
	});
	
	renderPlayer();
}