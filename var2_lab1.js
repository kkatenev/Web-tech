
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var count=1;
var length = getRandomInt(10,100);
alert("Минимальная длина символов для ввода текста: " + length);
function information(){
  var str1 = document.getElementById("text").value;
  var str2 = document.getElementById("text2").value;
  if(str1.length >= length) {
    var mas1 = str1.split(' ');
    var mas2 = str2.split(' ');
    for(var i = 0,j = 0; i < mas1.length; i++,j++) {
        j=0;
        count=i+1;
        while(mas1[i] === mas2[j]){
            if(j===mas2.length-1)
            {
                alert("Совпадение найдено! Позиция слова: "+count);
                exit(1);
            }
        j++;
        i++;
        }

    }
    alert("Совпадений нет!");

  } else {
    alert('Повторите ввод');
  }
}