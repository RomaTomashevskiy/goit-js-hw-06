const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');






form.addEventListener('submit', fnA);
// form.addEventListener('submit', fnB);

function fnA(eventy) {
    eventy.preventDefault();
    if (inputEmail.value === '') {
        alert('Enter your email')
    };
    if (inputPassword.value === '') {
        alert('Enter your password')
    };


    
    // const formData = new FormData(eventy.currentTarget);

    // formData.forEach((a, b) => {
    //     console.log()
    // })
    

    // console.log(inputEmail.value)
    // console.log(inputPassword.value)
     form.reset()
};




// Обработка отправки формы form.login-form должна быть по событию submit.✅
// При отправке формы страница не должна перезагружаться.✅
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.✅
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.✅