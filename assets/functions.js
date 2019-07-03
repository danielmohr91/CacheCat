
function showDone()
{
	$("#done").hide();
	$("#done").stop().fadeIn("slow");
	
	setTimeout(function(){
		$("#done").stop().fadeOut("slow", function() {
			window.close();
		});
	}, 1500);
}

function clearCache()
{
	var options = {};
	chrome.browsingData.removeCache(options, function(){
		showDone();
	});
}
