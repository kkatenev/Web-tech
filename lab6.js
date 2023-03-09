const table = document.createElement('table');


    
    document.write("<h1>y=4x2-5.5x+2</h1>"); 
    for (let i = 0; i <= 2; i+=0.1) {
    var y=4*i*i-5.5*i+2;
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.textContent = 'x = ' + i.toFixed(1) + ' | ' + 'y = ' + y.toFixed(2);
    }

document.body.append(table);