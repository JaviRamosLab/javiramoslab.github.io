// =======================================================
// * APP Name: OperationCaribbeanSummer
// * Updated: 2024/01/15
// * APP URL: https://javiramoslab.com/
// * Author: Javier Ramos Nistal (@JaviRamosLab) and Lazaro Ochoa
// * Version: 0.4.4 (beta)
// * License: CC-BY-SA and GPL
// ========================================================

const testimonialsContainer = document.querySelector(".OpCaSuInspirationContainer");
const testimonial = document.querySelector(".OpCaSuQuote");
const usernameInspiration = document.querySelector(".OpCaSuUsername");
const OpCaSuUserAvatar = document.querySelector(".OpCaSuUserAvatar");
const OpCaSuLinkInspiracion = document.querySelector(".OpCaSuLinkInspiracion");
const OpCaSuInspirationLine = document.querySelector(".OpCaSuInspirationLine");

const testimonials = [
  {
    nameInspiration: "José Martí",
    avatarInspiration: "./images/José-Martí-(eta).jpg",
    urlInspiration: "inspiration/marti.html",
    quoteInspiration: "Trincheras de ideas valen más que trincheras de piedra.",
  },
  {
    nameInspiration: "Henry David Thoreau",
    avatarInspiration: "./images/Henry-David-Thoreau-(eta).jpg",
    urlInspiration: "inspiration/thoreau.html",
    quoteInspiration: "Lo deseable no es cultivar el respeto por la ley, sino por la justicia. La única obligación que tengo derecho a asumir es la de hacer en cada momento lo que crea justo.",
  },
  {
    nameInspiration: "Martin Luther King",
    avatarInspiration: "./images/Martin-Luther-King-(eta).jpg",
    urlInspiration: "inspiration/martin-luther-king.html",
    quoteInspiration: "Nuestra generación no se habrá lamentado tanto de los crímenes de los perversos, como del estremecedor silencio de los bondadosos.",
  },
  {
    nameInspiration: "Mahatma Gandhi",
    avatarInspiration: "./images/Mahatma-Gandhi-(eta).jpg",
    urlInspiration: "inspiration/gandhi.html",
    quoteInspiration: "En cuanto alguien comprende que obedecer leyes injustas es contrario a su dignidad humana, ninguna tiranía puede dominarle.",
  },
  {
    nameInspiration: "Nelson Mandela",
    avatarInspiration: "./images/Nelson-Mandela-(eta).jpg",
    urlInspiration: "inspiration/mandela.html",
    quoteInspiration: "Education is the most powerful weapon which you can use to change the world.",
  },
  {
    nameInspiration: "Aaron Swartz",
    avatarInspiration: "./images/Aaron-Swartz-(eta).jpg",
    urlInspiration: "inspiration/aaron-swartz.html",
    quoteInspiration: "Al crecer, poco a poco tuve este proceso de darme cuenta de que todas las cosas a mi alrededor que la gente me había dicho eran simplemente la forma natural en que eran las cosas, como siempre serían las cosas, no eran naturales en absoluto. Eran cosas que podían cambiarse, y eran cosas que, lo que es más importante, estaban mal y deberían cambiar, y una vez que me di cuenta de eso, realmente no había vuelta atrás.",
  },
  {
    nameInspiration: "José Mujica",
    avatarInspiration: "./images/José-Mujica-(eta).jpg",
    urlInspiration: "inspiration/mujica.html",
    quoteInspiration: "Necesitamos gobernarnos a nosotros mismos o sucumbiremos; sucumbiremos porque no somos capaces de estar a la altura de la civilización que en los hechos fuimos desarrollando. Este es nuestro dilema.",
  },
  {
    nameInspiration: "Noam Chomsky",
    avatarInspiration: "./images/Noam-Chomsky-(eta).jpg",
    urlInspiration: "inspiration/chomsky.html",
    quoteInspiration: "Si asumes que no hay esperanza, garantizas que no habrá esperanza. Si asumes que hay un instinto de libertad, hay oportunidades para cambiar las cosas, existe la posibilidad de que contribuyas a hacer un mundo mejor. La elección es tuya.",
  }
  // {
  //   nameInspiration: "",
  //   avatarInspiration: "./images/.jpg",
  //   urlInspiration: "inspiration/.html",
  //   quoteInspiration: "",
  // },
];

let counter = 1;

function showNextTestimonial() {
  const { nameInspiration, quoteInspiration, urlInspiration, avatarInspiration } = testimonials[counter];

  testimonial.innerHTML = quoteInspiration;
  usernameInspiration.innerHTML = nameInspiration;
  OpCaSuLinkInspiracion.setAttribute("href", urlInspiration);
  OpCaSuUserAvatar.setAttribute("src", avatarInspiration);

  OpCaSuUserAvatar.setAttribute("alt", nameInspiration);
  OpCaSuInspirationLine.setAttribute("style", "animation: animation 10s linear infinite");

  counter++;
  if (counter > testimonials.length - 1) {
    counter = 0;
  }
}

setInterval(showNextTestimonial, 10000);