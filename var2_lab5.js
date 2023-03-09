window.onload = function () {
    
    
    var a = document.querySelector('#ShowHide1');
    
    a.onmouseout = function(e) {
      document.getElementById('exemple1').style.display='none';
    }
  
    a.onmouseover = function(e) {
        var f=prompt('Введите ключевое слово');
        if(f!=null)
        {
            document.write('Вы ввели: ' + f);
        }
    };
  }