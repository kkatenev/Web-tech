const table = document.createElement('table');


    var y=1;

    for (let i = 1; i <= 30; i++) {
    y*=i;
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.textContent = 'n = ' + i + " | " + 'n! = ' + y;
    }

document.body.append(table);