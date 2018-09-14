/* Switching functions */
function switchCategoryView(checkboxElem) {
    onlyOne(checkboxElem)
    switchReset();
    if (checkboxElem.checked) {
        CategoryViewOn();
    }
}
function switchAlreadyOrdered(checkboxElem) {
    onlyOne(checkboxElem)
    switchReset();
    if (checkboxElem.checked) {
        AlreadyOrderedOn();
    }
}

/* Deactive all other checkboxes when one gets checked */
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByClassName('switch-input')
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) checkboxes[i].checked = false
    }
}

/* Reset Orderlist */
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
            row.setAttribute('onmouseover', 'this.style.cursor="default"')
        }
    }
}

/* Categorie View */
function openCat() {
    table = document.getElementsByClassName('table-hover');
    rows = table[0].getElementsByTagName('tr');
    disp = 'none';
    for (i = 1; i < rows.length; i++) {
        row = rows[i];
        if (row == this) {
            if (this.getAttribute('hide') == 'true') {
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
function CategoryViewOn() {
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

/* What is already ordered? */
function AlreadyOrderedOn() {
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
            }
            else {
                row.style.display = 'table-row';
            }
        }
    }
}

/* Clean Order overivew */
//function CleanOrderOverviewOn() {
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
//function CleanOrderOverviewOn() {
//    if (typeof(window['Buebersicht_hidden_rows']) == "object") {
//        for (i = 0; i < Buebersicht_hidden_rows.length; i++) {
//            Buebersicht_hidden_rows[i].style.display = 'table-row';
//        }
//    }
//}
