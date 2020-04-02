var bodyTable = document.getElementById('bodyTable');
var btnApagarTudo = document.getElementById('btnApagarTudo');
var count = 0;

if(localStorage.getItem('count')){
    count = localStorage.getItem('count');
    count = Number.parseInt(count);
    for(var id = 1; id<count; id++){
        string = localStorage.getItem(id);
        array = string.split(',');
        th = document.createElement('th');
        th.innerText = id;
        td1 = document.createElement('td');
        td1.innerText = array[0];
        td2 = document.createElement('td');
        td2.innerText = array[1];
        tr = document.createElement('tr');
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        bodyTable.appendChild(tr);
    }
}

btnApagarTudo.onclick = function(){
    for(var i = 1; i<count; i++){
        localStorage.removeItem(i);
        window.location.reload();
    }
    localStorage.removeItem('count');
}



