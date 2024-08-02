// Напишите функцию showNotification(options), 
// которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.



const showNotification = ({top = 0, right = 0, text}) => {
    
    let notification = document.createElement('div');
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.style.position = 'absolute';

    notification.innerHTML = text;

    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);

}

showNotification({top: 10, right: 10, text: 'Hellow'});