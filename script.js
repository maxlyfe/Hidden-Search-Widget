/* Seleccionando la búsqueda de clases. */
const search = document.querySelector('.search');

/* Selección del elemento del botón. */
const btn = document.querySelector('.btn');

/* Selección del elemento de entrada. */
const input = document.querySelector('.input');

/* Selección del elemento de entrada. */
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})