document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('logo');

    texto.addEventListener('mouseover', () => {
        texto.style.color = 'fuchsia'; // Cambia a cualquier color que desees
    });

    texto.addEventListener('mouseout', () => {
        texto.style.color = 'black'; // Color original
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('text');

    texto.addEventListener('mouseover', () => {
        texto.style.color = 'fuchsia'; // Cambia a cualquier color que desees
    });

    texto.addEventListener('mouseout', () => {
        texto.style.color = 'yellow'; // Color original
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('me');

    texto.addEventListener('mouseover', () => {
        texto.style.color = 'yellow'; // Cambia a cualquier color que desees
    });

    texto.addEventListener('mouseout', () => {
        texto.style.color = 'turquoise'; // Color original
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('description');

    texto.addEventListener('mouseover', () => {
        texto.style.color = 'yellow'; // Cambia a cualquier color que desees
    });

    texto.addEventListener('mouseout', () => {
        texto.style.color = 'turquoise'; // Color original
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('miImagen1');

    imagen.addEventListener('mouseover', () => {
        imagen.style.transform = 'rotate(15deg)'; // Ajusta el ángulo según sea necesario
    });

    imagen.addEventListener('mouseout', () => {
        imagen.style.transform = 'rotate(0deg)'; // Regresa al estado original
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('miImagen2');

    imagen.addEventListener('mouseover', () => {
        imagen.style.transform = 'rotate(15deg)'; // Ajusta el ángulo según sea necesario
    });

    imagen.addEventListener('mouseout', () => {
        imagen.style.transform = 'rotate(0deg)'; // Regresa al estado original
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('miImagen3');

    imagen.addEventListener('mouseover', () => {
        imagen.style.transform = 'rotate(15deg)'; // Ajusta el ángulo según sea necesario
    });

    imagen.addEventListener('mouseout', () => {
        imagen.style.transform = 'rotate(0deg)'; // Regresa al estado original
    });
});