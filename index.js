

document.addEventListener('DOMContentLoaded', () => {
    const formEnvio = document.getElementById('formEnvio');
    if (formEnvio) {
        formEnvio.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = 'pedidos.html';
        });
    }

    const formCadastro = document.getElementById('formCadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = 'envio.html';
        });
    }

    const solicitarNovoBtn = document.getElementById('solicitarNovo');
    if (solicitarNovoBtn) {
        solicitarNovoBtn.addEventListener('click', () => {
            window.location.href = 'envio.html';
        });
    }

    const cadastreSeLink = document.getElementById('cadastreSeLink');
    if (cadastreSeLink) {
        cadastreSeLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'cadastro.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = 'pedidos.html';
        });
    }
});