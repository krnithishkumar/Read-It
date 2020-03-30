chrome.contextMenus.create({
		type: "normal",
		title: "Read Highlighted Text",
		contexts: ["selection"],
		onclick: function(info, tabs) {
			var strData = info.selectionText;
			if(strData && strData.length) {
				narrate(strData, function(response) {
					if(response) { console.log(response); }
				});
			} else {
				console.log("Nothing to narrate.");
			}
		}
	}, 
	function() {
		if(chrome.runtime.lastError !== undefined) { 
			console.error("Runtime error:", chrome.runtime.lastError.message); 
		}
	});
	