
//alert(window.location.href);

//alert(browser.extension.getURL("KategorieAnsicht.js"));


// inject scripts
//var newScript = document.createElement('script');
//newScript.src = browser.extension.getURL("BestellverwaltungAufraeumen.js");
//document.body.appendChild(newScript);

//var newScript = document.createElement('script');
//newScript.src = browser.extension.getURL("KategorieAnsicht.js");
//document.body.appendChild(newScript);

//var newScript = document.createElement('script');
//newScript.src = browser.extension.getURL("WasWirdSchonBestellt.js");
//document.body.appendChild(newScript);

if (window.location.href.includes("/group_orders/") || window.location.href.includes("/orders/")) {
    var newScript = document.createElement('script');
    newScript.src = browser.extension.getURL("scripts.js");
    document.body.appendChild(newScript);

    //inject css
    var newStyle=document.createElement("link")
    newStyle.setAttribute("rel", "stylesheet")
    newStyle.setAttribute("type", "text/css")
    newStyle.setAttribute("href", browser.extension.getURL("buttons.css"))
    document.getElementsByTagName("head")[0].appendChild(newStyle)


    if (window.location.href.includes("/group_orders/")) {
        var txtFile = new XMLHttpRequest();
        txtFile.open("GET", browser.extension.getURL("Bestellung.html"), true);
        txtFile.onreadystatechange = function() {
          if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
            if (txtFile.status === 200) {  // Makes sure it's found the file.
              allText = txtFile.responseText; 

              var element = document.createElement("span");
              element.innerHTML = txtFile.responseText;
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

//// add buttons
//var element = document.createElement("input");
////element.setAttribute("type", "button");
//element.setAttribute("value", "BestellverwaltungAufraeumen");
//element.setAttribute("name", "btn_BestellverwaltungAufraeumen");
//element.setAttribute("onclick", "BestellverwaltungAufraeumen()");

//element.setAttribute("type", "checkbox");
//element.setAttribute("class", "slider");
//// insert element
//article_search = document.getElementById("article")
//search_row = article_search.parentElement.parentElement
//search_row.appendChild(element)

//var element = document.createElement("input");
//element.setAttribute("type", "button");
//element.setAttribute("value", "KategorieAnsicht");
//element.setAttribute("name", "btn_KategorieAnsicht");
//element.setAttribute("onclick", "KategorieAnsicht()");
//// insert element
//article_search = document.getElementById("article")
//search_row = article_search.parentElement.parentElement
//search_row.appendChild(element)

//var element = document.createElement("input");
//element.setAttribute("type", "button");
//element.setAttribute("value", "WasWirdSchonBestellt");
//element.setAttribute("name", "btn_WasWirdSchonBestellt");
//element.setAttribute("onclick", "WasWirdSchonBestellt()");
//// insert element
//article_search = document.getElementById("article")
//search_row = article_search.parentElement.parentElement
//search_row.appendChild(element)

