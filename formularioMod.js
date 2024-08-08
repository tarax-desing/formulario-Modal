const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const mostrarModal = document.querySelector('#mostrarModal');
const cbox = document.querySelector('#cbox');

mostrarModal.onclick = () => {
    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if(event.target.classList.contains('modal-content')){
        modal.style.display = "none";
    }
}

document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // comprobar si el checkbox está seleccionado
    if(!cbox.checked){
        alert('Por favor acepta la política de privacidad');
    }else{
        alert('Formulario enviado!')
    }
});













































// const formul = document.getElementById('myformulario');
// const checkbox = document.getElementById('checkbox');
// const errorMessage = document.getElementById('submitError');
// const modal = document.querySelector('')
// console.log(formul)

// formul.addEventListener('submit', (event) => {

//     event.preventDefault();
//     submitError.textContent = '';
//     submitError.style.display = 'none';
//     if (checkbox.checked) {
//         console.log('El check está marcado');
//         return true;

//     } else {
//         submitError.textContent = 'Por favor, acepte los términos y condiciones antes de enviar.';
//         submitError.style.display = 'block';
//         return false;



//     }
// });

