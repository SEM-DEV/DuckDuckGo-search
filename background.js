
 

chrome.contextMenus.create({
    title: "Search the selected Text on DuckDuckGo",
    contexts:["selection"],
    id: "acasearch",
	onclick: sea1
});

function sea1(info,tab) {   
    const url22 = "https://duckduckgo.com/?q=" + info.selectionText;
    chrome.tabs.create({ url: url22, 'index': tab.index+1 });
}


















