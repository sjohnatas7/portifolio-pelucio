document.addEventListener("DOMContentLoaded", function () {
    // Obtém todas as imagens da galeria
    const imagens = document.querySelectorAll('.imagemQuadrada');
    console.log("JS ATIVADO")
    imagens.forEach(imagem => {
        imagem.addEventListener('click', function () {
            // Cria uma div para a imagem expandida
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            // Cria a imagem expandida
            const imagemExpandida = document.createElement('img');

            const img = imagem.firstChild
            imagemExpandida.src = img.src;

            // Adiciona a imagem expandida à div do lightbox
            lightbox.appendChild(imagemExpandida);

            // Adiciona o lightbox ao corpo do documento
            document.body.appendChild(lightbox);
            // Fecha o lightbox quando clicado
            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
    const carrosels = document.querySelector('.carosel-slide img');
    const left = document.querySelector('.nav-left')
    const right = document.querySelector('.nav-right')
    right.addEventListener('click', ()=>{
        const temp = carrosels[1].src
        carrosels[1].src = carrosels[0].src
        carrosels[0].src = temp
    })
    console.log(center);
}); 