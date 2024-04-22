$("body").fadeIn(1500);

let contenedorNoticias = $("#contenedor-noticias");

mostrarnoticias(noticias);

function mostrarnoticias(noticias) {
  contenedorNoticias.html("");

  for (const noticia of noticias) {
    contenedorNoticias.append(`
            <div class="card-noticias">
                <div>
                    <img class="noticia-img" src=${noticia.img} alt="noticia">
                    <p class="noticia-descripcion">${noticia.desc}</p>
                </div>
            </div>
            `);
  }
}
