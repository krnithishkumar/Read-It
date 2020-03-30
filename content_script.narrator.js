var begin = !!begin;

if(!begin) {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.command) {
			console.log("Got request: " + request.command);
			if(request.command == "getSelectionUtterance") {
				getSelectionUtterance();
			}
		}
	});

	getSelectionUtterance = function() {
		var strData = window.getSelection().toString();
		console.log(strData.toString().length)
		console.log(strData.toString())
		if(strData && strData.length) {
			chrome.runtime.sendMessage({utterance: strData.toString()}, function(response) {
				if(response) { console.log(response); }
			});
		} else {
			console.log("Nothing selected to narrate!");
		}
	}
	
	begin = true;
}
begin;