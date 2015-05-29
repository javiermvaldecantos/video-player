/*
 * Core structures used on the IIT News web site
 *
 * All structures will be created inside 'iitnews' namespace
 */
 
(function(iitnews) {	//iitnews namespace
	
	/*
	 * Video object
	 */
	iitnews.Video = function(id, name, description, content, thumbnail, watched) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.content = content;
		this.thumbnail = thumbnail;
		this.watched = watched;	//boolean which specifies if the user has watched this video
		
		this.renderThumbnail = function() {
			var thumbnailDiv = $('<div id="thumb-div-' + this.id + '" class="col-md-2 thumb-div"></div>');
			thumbnailDiv.append('<p>' + this.name + '</p>');
			thumbnailDiv.append('<img id="thumb-' + this.id + '" class="thumb-img" onclick="playVideo(this)" src="' + this.thumbnail + '" style="max-width: 162px; max-height: 100px">');
			
			if(this.watched) {
				thumbnailDiv.append('<h6><span id="status-' + this.id + '" class="label label-success">WATCHED</span></h6>');
			} else {
				thumbnailDiv.append('<h6><span id="status-' + this.id + '" class="label label-info">UNWATCHED</span></h6>');
			}		
			
			return thumbnailDiv;
		}
		
		this.renderVideo = function() {
			var videoDiv = $('<div class="col-md-12" id="video-div"></div>');
			videoDiv.append('<h3 id="video-title">' + this.name + '</h3>');
			videoDiv.append('<img src="' + this.thumbnail + '" height="330px" onclick="playMainVideo()" id="thumbnail">');	//main thumbnail displayed first
			videoDiv.append('<video id="' + this.id + '" width="500px" style="visibility: hidden; display: none;"><source src="' + this.content + '"></source></video>');	//video
			return videoDiv;
		}
	}
	
	/*
	 * Function to render the heading of our Web Site
	 */
	iitnews.renderHeading = function() {
		/*
		 * Web site title
		 */
		var heading = $('<div class="jumbotron" id="heading"></div>');
		heading.append('<h1><img src="./img/iitlogo-small.png"> IIT News </h1>');
		$('.hook').append(heading);
		
		/*
		 * Video player label and button to switch video modes
		 */
		var topRow = $('<div class="row" id="top-row"></div>');
		
		var videoLabel = $('<div class="col-md-9" id="video-label"></div>');
		videoLabel.append($('<h5><span class="label label-primary">IIT News Video Player</span></h5>'));
		
		var videoModes = $('<div class="btn-group col-md-3" id="video-modes"></div>');
		videoModes.append($('<button class="btn btn-primary" id="default-mode" onclick="switchMode(this)">Default Mode</button>'));
		videoModes.append($('<button class="btn btn-default" id="theatre-mode" onclick="switchMode(this)">Theatre Mode</button>'));
		
		topRow.append(videoLabel);
		topRow.append(videoModes);
		$('.hook').append(topRow);
	}
	
})(window.iitnews = window.iitnews || {});