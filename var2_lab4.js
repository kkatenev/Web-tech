onload = function() {
var t = prompt('Введите погоду: дождливо, ветрено, солнечно, снежно');
switch(t){
    case 'дождливо':
        {
            this.alert('Захватите зонт и наденьте калоши');
            break;
        }
    case 'ветрено':
        {
            this.alert('Укутайтесь по- теплее');
            break;
        }
    case 'солнечно':
        {
            this.alert('Возьмите солнечные очки — берегите глаза');
            break;
        }
    case 'снежно':
        {
            this.alert('Пора лепить снеговиков');
            break;
        }
    default:
        alert('«Одевайтесь, как хотите, но погода непредсказуема');
}
}