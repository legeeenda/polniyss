document.querySelector('.smena').addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT') {
        console.log('успешно включен');
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(event.target.value);
    }
});