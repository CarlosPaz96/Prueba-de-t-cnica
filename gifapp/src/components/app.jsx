import React from "react";

const inpBuscador = document.getElementById("impB");

export function AppF() {
    const divCont = document.getElementById("IdCont");
    var keyApi = "EiWednMZLDnifkNm8JXqfFxNDgWn4I01";
    var urlApi = `https://api.giphy.com/v1/gifs/search?q=${inpBuscador.value}&rating=g&api_key=${keyApi}`;

    try {
        fetch(urlApi).then(function (data) {
            return data.json()
        })
            .then(function (json) {
                console.log(json.data.length)
                console.log(json.data[1])
                for (let i = 0; i < json.data.length; i++) {
                    var img = json.data[i].images.fixed_height.url;
                var titulos = json.data[i].title;
                var UrlText = json.data[i].url;              


                var prototipo = `<div class="divC">
                <div class="divImg">
                    <img src="${img}" alt="">
                </div>
                <div class="divDec">
                    <h2>${titulos}</h2>
                    <p>${UrlText}</p>
                </div>
            </div>`
                if (i==0) {
                    divCont.innerHTML = prototipo;
                } else {
                    divCont.innerHTML += prototipo;
                }        
                
                    
                }
            })
    } catch (error) {
        console.log(error)
    }
}


