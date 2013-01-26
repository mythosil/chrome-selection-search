chrome.extension.onMessage.addListener(function(req, sender, callback) {
  if (sender.tab) { // from a content script
    if (req.text !== undefined) {
      var url = encodeURI("http://search.yahoo.co.jp/search?ei=UTF-8&fr=crmas&p=" + req.text);
      var properties = { url: url };
      chrome.tabs.create(properties, function(tab) {});
    }
  }
});
