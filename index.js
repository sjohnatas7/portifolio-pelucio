document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('.imagemQuadrada');
    imagens.forEach(imagem => {
      let fotoGaleria = imagem.querySelector('.fotoGaleria');

      imagem.addEventListener('click', function () {
          // Cria uma div para a imagem expandida
          const lightbox = document.createElement('div');
          lightbox.className = 'lightbox';
          // Cria a imagem expandida
          const imagemExpandida = document.createElement('img');

          imagemExpandida.src = fotoGaleria.src;

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
    var carrosels = document.querySelectorAll('.carosel-slide img.fotoGaleria');
    var left = document.querySelector('.nav-left');
    var right = document.querySelector('.nav-right');

    
    


    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
}); 