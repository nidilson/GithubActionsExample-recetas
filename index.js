const frases = [
    {
      "quote": "La pluma es la lengua del alma.",
      "author": "Miguel de Cervantes"
    },
    {
      "quote": "El que quiere interesar a los demás tiene que provocarlos.",
      "author": "Salvador Dalí"
    },
    {
      "quote": "Todos los niños nacen artistas. El problema es cómo seguir siendo artistas al crecer.",
      "author": "Pablo Picasso"
    },
    {
      "quote": "Una es más auténtica, mientras más se parece a lo que soñó de sí misma.",
      "author": "Pedro Almovodar"
    },
    {
      "quote": "Soy el desesperado, la palabra sin ecos, el que lo perdió todo, y el que todo lo tuvo.",
      "author": "Pablo Neruda"
    },
    {
      "quote": "Aprender a sonreír es aprender a ser libres.",
      "author": "Octavio Paz"
    },
    {
      "quote": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
      "author": "Robert Collier"
    }]

document.addEventListener("DOMContentLoaded", ()=>{
    const botonFraseNueva = document.getElementById("nueva-frase");
    const fraseElement = document.getElementById("frase");
    const autorElement = document.getElementById("autor");

    botonFraseNueva.addEventListener("click", () => {
        let randomIndex = Math.floor(Math.random() * 7);
        fraseElement.innerText = frases[randomIndex].quote;
        autorElement.innerText = frases[randomIndex].author;
    })
})