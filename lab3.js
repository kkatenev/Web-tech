var a=0;
function line() {
document.writeln("<hr align='center' width='"+(a+=10)+"'>");
}
for (var i=1; i<100; i++)
line();