onload = function() {
    for (var t; t = prompt('Введите пол (Мужской/Женский)');) {
        if(t=='Мужской' || t=='Женский')
        {
            document.body.innerHTML = t + '<br>';
            exit();
        }
        else
        {
            alert('Введите правильно!');
        }
    }
}