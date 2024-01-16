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
    const carrosels = document.querySelectorAll('.carosel-slide img.fotoGaleria');
    const left = document.querySelector('.nav-left')
    const right = document.querySelector('.nav-right')
    console.log(carrosels)
    right.addEventListener('click', ()=>{
        const temp = carrosels[2].src
        carrosels[2].src = carrosels[1].src
        carrosels[1].src = carrosels[0].src
        carrosels[0].src = temp
    })

    left.addEventListener('click', ()=>{
        const temp = carrosels[2].src
        carrosels[2].src = carrosels[0].src
        carrosels[0].src = carrosels[1].src
        carrosels[1].src = temp
    })
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