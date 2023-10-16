document.addEventListener("DOMContentLoaded", function() {
    // Obtém todas as imagens da galeria
    const imagens = document.querySelectorAll('.imagemQuadrada');
    console.log("JS ATIVADO")
    imagens.forEach(imagem => {
        console.log(imagem)
        imagem.addEventListener('click', function() {
            // Cria uma div para a imagem expandida
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            // Cria a imagem expandida
            const imagemExpandida = document.createElement('img');

            img = imagem.firstChild
            imagemExpandida.src = img.src;

            // Adiciona a imagem expandida à div do lightbox
            lightbox.appendChild(imagemExpandida);

            // Adiciona o lightbox ao corpo do documento
            document.body.appendChild(lightbox);
            console.log("FOI");
            // Fecha o lightbox quando clicado
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});