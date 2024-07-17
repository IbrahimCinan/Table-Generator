let tableCount = 0;

function createTable() {
    tableCount++;

  
    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.textContent = 'Table ' + tableCount;
    fieldset.appendChild(legend);

    // tablo oluştur
    let table = document.createElement('table');

   
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let headers = ['Name', 'Surname', 'Number', 'Delete'];
    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

   
    let addActionCell = document.createElement('td');
    let addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', () => {
        let inputName = document.getElementById('inputName').value;
        let inputSurname = document.getElementById('inputSurname').value;
        let inputNumber = document.getElementById('inputNumber').value;
        
        if (!inputName || !inputSurname || !inputNumber) {
            alert('Hatalı Giriş yapıldı/Giriş yapılmadı');
            return;
        }

        let newRow = document.createElement('tr');
        let cells = [inputName, inputSurname, inputNumber].map(value => {
            let td = document.createElement('td');
            td.textContent = value;
            return td;
        });
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            newRow.remove();
        });
        let deleteCell = document.createElement('td');
        deleteCell.appendChild(deleteButton);
        newRow.append(...cells, deleteCell);
        tbody.appendChild(newRow);

       
        document.getElementById('inputName').value = '';
        document.getElementById('inputSurname').value = '';
        document.getElementById('inputNumber').value = '';
    });
    

    addActionCell.appendChild(addButton);
    let addRow = document.createElement('tr');
    addRow.appendChild(addActionCell);
    tbody.appendChild(addRow);

    //tablo iç işlemleri silme
    let controlsDiv = document.createElement('div');
    controlsDiv.className = 'table-controls';
    let deleteTableButton = document.createElement('button');
    deleteTableButton.textContent = 'Delete Table';
    deleteTableButton.addEventListener('click', () => {
        fieldset.remove();
    });
    let clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
   // buradan deneme 
    clearButton.addEventListener('click', () => {
     inputSurname.textContent="";
    }); 
    controlsDiv.append(deleteTableButton, clearButton,addButton);
    fieldset.appendChild(table);
    fieldset.appendChild(controlsDiv);

    
    document.getElementById('tables-container').appendChild(fieldset);
}

// tüm tabloları kaldırır
function deletealltable(){
    var tables = document.getElementsByTagName("fieldset");

    
   
        for (var i = tables.length - 1; i >= 1; i--) {
            tables[i].parentNode.removeChild(tables[i]);
        }
    
   
}
