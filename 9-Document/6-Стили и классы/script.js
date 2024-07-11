// Напишите функцию showNotification(options), 
// которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.



const showNotification = ({top = 0, right = 0, text}) => {
    
    let notific = document.createElement('div');
    notific.style.top = top + 'px';
    notific.style.right = right + 'px';

    notific.innerHTML = text;

    document.body.append(notific);

    setTimeout(() => notific.remove(), 1500);

}

showNotification({top: 10, right: 10, text: 'Hellow'});