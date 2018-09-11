function switchKategorieAnsicht(checkboxElem) {
    onlyOne(checkboxElem)
    switchReset();
    if (checkboxElem.checked) {
        KategorieAnsichtOn();
    }
}
function switchWasWirdSchonBestellt(checkboxElem) {
    onlyOne(checkboxElem)
    switchReset();
    if (checkboxElem.checked) {
        WasWirdSchonBestelltOn();
    }
}
//function switchBestellverwaltungAufraeumen(checkboxElem) {
//    onlyOne(checkboxElem)
//    if (checkboxElem.checked) {
//        BestellverwaltungAufraeumenOn();
//    } else {
//        BestellverwaltungAufraeumenOff();
//    }
//}


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByClassName('switch-input')
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) checkboxes[i].checked = false
    }
}

function switchReset() {
    /* show all */
    table = document.getElementsByClassName('table-hover');
    rows = table[0].getElementsByTagName('tr');
    for (i = 2; i < rows.length; i++) {
        row = rows[i];
        cols = row.getElementsByTagName('td');
        if (cols.length > 6) {
            code = cols[7];
            divs = code.getElementsByTagName('span');
            menge = parseInt(divs[2].innerHTML) + parseInt(divs[3].innerHTML);
            row.style.display = 'table-row';
        }
    }

    /* remove title line links */
    for (i = 1; i < rows.length; i++) {
        row = rows[i];
        if (row.className == 'list-heading article-category') {
            row.onclick = "";
            row.removeAttribute('hide');
//            row.removeAttribute('onmouseover');
            row.setAttribute('onmouseover', 'this.style.cursor="default"')
        }
    }
}

/* Kategorie-Ansicht */
function openCat() {
    table = document.getElementsByClassName('table-hover');
    rows = table[0].getElementsByTagName('tr');
    disp = 'none';
    for (i = 1; i < rows.length; i++) {
        row = rows[i];
        if (row == this) {
            if (eval(this.getAttribute('hide'))) {
                disp = 'table-row';
                row.setAttribute('hide', false);
            } else {
                disp = 'none';
                row.setAttribute('hide', true);
            }
        } else if (row.className == 'list-heading article-category') {
            row.onclick = openCat;
            row.setAttribute('hide', true);
            disp = 'none';
        } else if (row.className.indexOf('order-article')) {
            row.style.display = disp;
        }
    }
    this.scrollIntoView(true);
}
function KategorieAnsichtOn() {
    table = document.getElementsByClassName('table-hover');
    rows = table[0].getElementsByTagName('tr');
    for (i = 1; i < rows.length; i++) {
        row = rows[i];
        if (row.className == 'list-heading article-category') {
            row.onclick = openCat;
            row.setAttribute('hide', true);
            row.setAttribute('onmouseover', 'this.style.cursor="pointer"')
        } else if (row.className.indexOf('order-article')) {
            row.style.display = 'none';
        }
    }
}
//function KategorieAnsichtOff() {
//    table = document.getElementsByClassName('table-hover');
//    rows = table[0].getElementsByTagName('tr');
//    for (i = 1; i < rows.length; i++) {
//        row = rows[i];
//        row.style.display = 'table-row';
//        row.setAttribute('onmouseover', 'this.style.cursor="default"')
//    }
//}



/* Was wird schon bestellt */
function WasWirdSchonBestelltOn() {
    Bestellung_hidden_rows = [];
    table = document.getElementsByClassName('table-hover');
    rows = table[0].getElementsByTagName('tr');
    for (i = 2; i < rows.length; i++) {
        row = rows[i];
        cols = row.getElementsByTagName('td');
        if (cols.length > 6) {
            code = cols[7];
            divs = code.getElementsByTagName('span');
            menge = parseInt(divs[2].innerHTML) + parseInt(divs[3].innerHTML);
            if (menge == 0) {
                row.style.display = 'none';
                Bestellung_hidden_rows.push(row);
            }
            else {
                row.style.display = 'table-row';
            }
        }
    }
}
//function WasWirdSchonBestelltOff() {
//    if (typeof(window['Bestellung_hidden_rows']) == "object") {
//        for (i = 0; i < Bestellung_hidden_rows.length; i++) {
//            Bestellung_hidden_rows[i].style.display = 'table-row';
//        }
//    }
//}



/* Bestellverwaltung aufraeumen */
//function BestellverwaltungAufraeumenOn() {
//    Buebersicht_hidden_rows = [];
//    Buebersicht_hidden = true;
//    articlesection = document.getElementById('articles_table');
//    rows = articlesection.getElementsByTagName('tr');
//    for (i = 2; i < rows.length; i++) {
//        row = rows[i];
//        cols = row.getElementsByTagName('td');
//        if (cols.length > 2) {
//            menge = eval(cols[3].innerHTML);
//            if (menge == 0) {
//                row.style.display = 'none';
//                Buebersicht_hidden_rows.push(row);
//            }
//        }
//    }
//}
//function BestellverwaltungAufraeumenOn() {
//    if (typeof(window['Buebersicht_hidden_rows']) == "object") {
//        for (i = 0; i < Buebersicht_hidden_rows.length; i++) {
//            Buebersicht_hidden_rows[i].style.display = 'table-row';
//        }
//    }
//}
