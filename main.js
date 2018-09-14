// inject scripts and html code on order list page
if (window.location.href.includes("/group_orders/") || window.location.href.includes("/orders/")) {
    var newScript = document.createElement('script');
    newScript.src = chrome.extension.getURL("scripts.js");
    document.body.appendChild(newScript);

    //inject css
    var newStyle=document.createElement("link")
    newStyle.setAttribute("rel", "stylesheet")
    newStyle.setAttribute("type", "text/css")
    newStyle.setAttribute("href", chrome.extension.getURL("buttons.css"))
    document.getElementsByTagName("head")[0].appendChild(newStyle)


    if (window.location.href.includes("/group_orders/")) {
        var txtFile = new XMLHttpRequest();
        txtFile.open("GET", chrome.extension.getURL("orderlist.html"), true);
        txtFile.onreadystatechange = function() {
          if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
            if (txtFile.status === 200) {  // Makes sure it's found the file.
              externalHTML = txtFile.responseText; 
//              var cleanHTML = DOMPurify.sanitize(externalHTML);

              var element = document.createElement("span");
              element.innerHTML = externalHTML;
              // insert element
              article_search = document.getElementById("article")
              search_row = article_search.parentElement.parentElement
              search_row.appendChild(element)
            }
          }
        }
        txtFile.send(null);
    }
}

