document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("register-section").style.display = "block";
        document.getElementById("login-section").style.display = "none";
    });

    document.getElementById("back-button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("register-section").style.display = "none";
        document.getElementById("login-section").style.display = "block";
    });

    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com o envio do formulário de cadastro
        // Por exemplo, você pode enviar os dados do formulário para o backend para criar uma nova conta
        // Após o cadastro bem-sucedido, redirecione o usuário para a página inicial
        window.location.href = "index.html"; // Substitua "index.html" pelo nome do seu arquivo inicial
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com o envio do formulário de login
        // Após o login bem-sucedido, redirecione o usuário para a página inicial
        window.location.href = "index.html"; // Substitua "index.html" pelo nome do seu arquivo inicial
    });

    document.getElementById("forgot-password").addEventListener("click", function(event) {
        event.preventDefault();
        var email = prompt("Por favor, insira seu endereço de e-mail para redefinir a senha:");
        if (email) {
            fetch('/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = "definir-nova-senha.html";
                } else {
                    alert("Ocorreu um erro ao enviar o e-mail de redefinição de senha. Tente novamente mais tarde.");
                }
            })
            .catch(error => {
                console.error('Erro ao enviar requisição:', error);
                alert("Ocorreu um erro ao enviar a solicitação. Tente novamente mais tarde.");
            });
        }
    });
});
