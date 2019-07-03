/**
 * set shortcut to clear cache in address bar
 */
chrome.omnibox.setDefaultSuggestion({description: "Type 'c' to have Cache Cat clear all browser cache."});
chrome.omnibox.onInputEntered.addListener(function(command){
	if(command == "c")
	{
		clearCache();
	}
});
