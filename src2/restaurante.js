let indice = 0;
     const imagens = document.querySelectorAll(".carrossel img"); 

     function mostrarImagem(foto) {
        imagens.forEach(img => img.classList.remove("ativa"));
        imagens[foto].classList.add("ativa");
     }

     function proximo() {
        indice = (indice + 1) % imagens.length;
        mostrarImagem(indice);
     } 

     function anterior() {
        indice = (indice - 1 + imagens.length) % imagens.length;
        mostrarImagem(indice);
     }
