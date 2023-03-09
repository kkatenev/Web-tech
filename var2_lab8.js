var f=window.prompt('Введите строку цифр');
var count=0;

if(Number(f)==0)
    count++;

// for(i=Number(f);i!=0;i=parseInt(i/10),count++);
// {}
// alert('Количество цифр: '+count);

g=Number(f);
while(g!=0)
{
    count++;
    g=parseInt(g/10);
}
alert('Количество цифр: '+count);