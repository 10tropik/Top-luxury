document.querySelectorAll('.case').forEach(item => {
    item.addEventListener('click', () => {
        item.style.boxShadow = '0 0 30px #ffcc00, 0 0 60px #ffcc00';
        setTimeout(() => {
            item.style.boxShadow = '';
        }, 300);
    });
});