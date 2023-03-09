document.write("<h1>Таблица умножения</h1>"); 
 
const table = document.createElement('table');

for (let i = 1; i < 10; i++) {
    const row = table.insertRow();
    for (let j = 1; j < 10; j++) {
        const cell = row.insertCell();
        cell.textContent = (i*j);
    }
}

document.body.append(table);