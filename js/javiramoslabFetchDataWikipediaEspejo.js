// =======================================================
// * APP Name: OperationCaribbeanSummer
// * Updated: 2024/01/15
// * APP URL: https://javiramoslab.com/
// * Author: Javier Ramos Nistal (@JaviRamosLab) and Lazaro Ochoa
// * Version: 0.4.4 (beta)
// * License: CC-BY-SA and GPL
// ========================================================

function FetchDataWikipediaEspejo() {
    fetch(`https://es.wikipedia.org/w/api.php?format=json&origin=*&action=parse&page=${urlTitle}`)
    .then(res => res.json())
    .then(data => fecthData(data))
    .catch(err => console.log(err));
    
    const fecthData = (data) => {
    let body = `${data.parse.text['*']}`
    bodyHtml = body.replace(/\n*/gm, "").replace(/"\/wiki\//gm, "https://es.wikipedia.org/wiki/").replace(/\/\/upload.wikimedia.org/gm, "https://upload.wikimedia.org");
    let pageTitle = `${data.parse.title}`
    document.getElementById('wikipediaEspejoSpan').innerHTML = `<hr><br><h1>${pageTitle}</h1> <br> ${bodyHtml} <br><hr>`
    document.getElementById('wikipediaEspejoSpanLink').innerHTML = `<a href="https://es.wikipedia.org/wiki/${urlTitle}" class="btn btn-dark buttonFull">${pageTitle}</a>`
    }
};