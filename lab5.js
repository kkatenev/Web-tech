const table = document.createElement('table');
const w = 1.8;
const b = 32;

    
    document.write("<h1>f = c * w + b</h1>"); 
    for (let c = 0; c <= 30; c++) {
    var f = c * w + b;
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.textContent = 'c = ' + c + ' | ' + 'f = ' + f.toFixed(1) ;
        
       
        // row = table.insertRow();
        // cell = row.insertCell();
        // cell.textContent = +(f);
    }

document.body.append(table);