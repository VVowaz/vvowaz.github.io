document.addEventListener('DOMContentLoaded', function() {

    const surnameElement = document.getElementById('surname');
    const surnameInput = document.getElementById('new-surname-input');
    const changeSurnameButton = document.getElementById('change-surname-btn');
    const changeBgButton = document.getElementById('change-bg-btn');

    changeSurnameButton.addEventListener('click', function() {
        const newSurname = surnameInput.value.trim();

        if (newSurname !== "") {
            surnameElement.textContent = newSurname;
            surnameInput.value = '';
        } else {
            alert('Пожалуйста, введите новую фамилию в поле.');
        }
    });

    changeBgButton.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        document.body.style.backgroundColor = randomColor;
    });

}); 