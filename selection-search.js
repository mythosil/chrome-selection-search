window.addEventListener('keydown', function(e) {
  if (e.metaKey && e.keyCode == 13) {
    var text = window.getSelection().toString();
    if (text.length > 0) {
      chrome.extension.sendMessage({ text: text }, function(response) {});
      //window.open("http://search.yahoo.co.jp/search?ei=UTF-8&fr=crmas&p=" + words);
    }
  }
}, false);
