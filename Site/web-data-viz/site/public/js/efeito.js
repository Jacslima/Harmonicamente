window.revelar = ScrollReveal({ reset: true })


// EFEITO NOS TEXTOS E IMGS

revelar.reveal('.efeito', {
    duration: 2000,
    distance: '90px',
})

revelar.reveal('.efeitoImg', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

function limparSessao() {
    Swal.fire({
        title: "Logout realizado",
        text: "Até mais!!",
        icon: "success"
    });

    setTimeout(function() {
        window.location = "../login.html";
    }, 2000);

    sessionStorage.clear()
}
