
var count1=0,count2=0;
onload = function() {
    for (var t; t = prompt('Введите массив по очереди');) {
        if(t%2==0)
        {
            count1+=Number(t);
        }
        else
        {
            count2+=Number(t);
        }
    }
    this.alert('Сумма четных: '+ count1+'\nCумма нечетных: '+ count2);
    this.document.write('Разница четных и нечетных: '+ (count1-count2));
}