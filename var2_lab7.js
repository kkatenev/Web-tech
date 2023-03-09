
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


var count=0,count1=getRandomInt(-9,9),count2=getRandomInt(-9,9);
var sizeN=prompt('Введите размер N');
var sizeM=prompt('Введите размер M');
const table = document.createElement('table');


if(count1>count2)
{
    max=count1;
    mmi=count2;
}
else
{
    min=count1;
    max=count2;
}



for (var i = 0; i < sizeN; i++) {
    const row = table.insertRow();
    for (var j = 0; j < sizeM; j++) {
        const cell = row.insertCell();
        f=getRandomInt(min,max);
        cell.textContent = (f);
        if(f<0)
        {
            count++;
        }
    }
}
document.body.append(table);
document.write('Сумма отрицательных элементов: '+count);
