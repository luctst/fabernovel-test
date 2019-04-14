!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);class o{constructor(t){this.renderTitle(t)}renderTitle(t){const e=document.createElement("header");e.setAttribute("class","container-fluid mt-5"),e.innerHTML='\n        <div class="row">\n            <div class="col-12">\n                <h1 class="display-3">PokéCards</h1>\n            </div>\n        </div>\n        ',t.appendChild(e)}}class s{constructor(t){this.renderIntroText(t)}renderIntroText(t){const e=document.createElement("section");e.setAttribute("class","container-fluid introduction mt-4"),e.innerHTML='\n        <div class="row">\n            <div class="col-8">\n                <div class="intro--text">\n                    <p> Welcome on PokéCards. You can retrieve all cards about your favorite Pokémon. If you want to find all of them, you can search him by his name and if you want a special one, use the filters. ;) </p>\n                    <p>GOTTA CATCH ALL OF THEM !!!</p>\n                </div>\n            </div>\n        </div>',t.appendChild(e)}}class a{constructor(t){this.renderLoader(t)}renderLoader(t){const e=document.createElement("div");e.setAttribute("class","loader"),t.appendChild(e)}}class i{constructor(t,e){this.renderCards(t,e)}renderCards(t,e){if(document.querySelector(".section--cards")){const t=document.querySelector(".section--cards");if(t.innerHTML="",0===e.length){const e=document.createElement("p");e.textContent="No pokemon for this research..",t.appendChild(e)}else e.map(e=>{const n=document.createElement("div");n.setAttribute("class","poke--cards"),n.innerHTML=`<a class="card-link" href="${window.location.href}cards?id=${e.id}"><img class="card--picture" src="${e.imageUrl}"></a>`,t.appendChild(n)})}else{const n=document.createElement("section");n.setAttribute("class","container-fluid d-flex flex-wrap mt-5 section--cards"),""===n?new a(t):(e.map(t=>{const e=document.createElement("div");e.setAttribute("class","poke--cards"),e.innerHTML=`<a class="card-link" href="${window.location.href}cards?id=${t.id}"><img class="card--picture" src="${t.imageUrl}"></a>`,n.appendChild(e)}),t.appendChild(n))}}}const r=async t=>{try{return(await fetch(t)).json()}catch(t){throw t}};class c{constructor(t){this.renderFooter(t)}renderFooter(t){const e=document.createElement("footer");e.innerHTML='\n        <div class="footer">\n            <div class="footer-links">\n                <a href="#"><i class="fab fa-github"></i></a>\n                <a href="#"><i class="fab fa-instagram"></i></a>\n                <a href="#"><i class="fab fa-facebook"></i></a>\n                <a href="#"><i class="fab fa-twitter"></i></a>\n                <a href="#"><i class="fab fa-linkedin"></i></a>\n            </div>\n                <div class="footer-copyright">\n                    This footer is made with <i class="fas fa-heart"></i> by Kévin\n                </div>\n        </div>',t.appendChild(e)}}class l{constructor(t){this.filtersRender(t)}filtersRender(t){const e=document.createElement("section");e.setAttribute("class","container-fluid search--bar"),e.innerHTML='\n        <div class="row">\n            <div class="col-8">\n                <form>\n                    <div class="form-group">\n                        <input id="myInput" placeholder="Search by name" class="form-control">\n                    </div>\n                    <div class="form-group">\n                        <div class="row">\n                            <div class="col-3 mb-5">\n                                <label>Type</label>\n                                <select class="form-control type" name="types">\n                                    <option selected>Default</option>\n                                    <option>Fire</option>\n                                    <option>Water</option>\n                                    <option>Fighting</option>\n                                    <option>Psychic</option>\n                                    <option>Dragon</option>\n                                    <option>Colorless</option>\n                                    <option>Fairy</option>\n                                    <option>Grass</option>\n                                    <option>Metal</option>\n                                    <option>Lightning</option>\n                                </select>\n                            </div>\n                            <div class="col-3">\n                                <label>Rarity</label>\n                                <select class="form-control rarity" name="rarity">\n                                    <option selected>Default</option>\n                                    <option>Rare</option>\n                                    <option>Common</option>\n                                    <option>Holo</option>\n                                </select>\n                            </div>\n                            <div class="col-3">\n                                <label>Supertype</label>\n                                <select class="form-control rarity" name="supertype">\n                                    <option selected>Default</option>\n                                    <option>Trainer</option>\n                                    <option>Pokemon</option>\n                                    <option>Energy</option>\n                                </select>\n                            </div>\n                            <div class="col-3">\n                                <label>Hp</label>\n                                <select class="form-control rarity" name="hp">\n                                    <option selected>Default</option>\n                                    <option>10</option>\n                                    <option>20</option>\n                                    <option>30</option>\n                                    <option>40</option>\n                                    <option>50</option>\n                                    <option>60</option>\n                                    <option>70</option>\n                                    <option>80</option>\n                                    <option>90</option>\n                                    <option>100</option>\n                                    <option>110</option>\n                                    <option>120</option>\n                                    <option>130</option>\n                                    <option>140</option>\n                                    <option>150</option>\n                                    <option>160</option>\n                                    <option>170</option>\n                                    <option>180</option>\n                                    <option>190</option>\n                                    <option>200</option>\n                                    <option>210</option>\n                                    <option>220</option>\n                                    <option>230</option>\n                                    <option>240</option>\n                                    <option>250</option>\n                                </select>\n                            </div>\n                            <div class="col-3">\n                                <label>RetreatCost</label>\n                                <select class="form-control rarity" name="retreatCost">\n                                    <option selected>Default</option>\n                                    <option>1</option>\n                                    <option>2</option>\n                                    <option>3</option>\n                                    <option>4</option>\n                                    <option>5</option>\n                                    <option>6</option>\n                                </select>\n                            </div>\n                            <div class="col-3">\n                                <label>Weaknesses</label>\n                                <select class="form-control rarity" name="weaknesses">\n                                    <option selected>Default</option>\n                                    <option>Fire</option>\n                                    <option>Water</option>\n                                    <option>Fighting</option>\n                                    <option>Psychic</option>\n                                    <option>Dragon</option>\n                                    <option>Colorless</option>\n                                    <option>Fairy</option>\n                                    <option>Grass</option>\n                                    <option>Metal</option>\n                                    <option>Lightning</option>\n                                </select>\n                            </div>\n                            <div class="col-3">\n                                <label>Resistances</label>\n                                <select class="form-control rarity" name="resistances">\n                                    <option selected>Default</option>\n                                    <option>Fire</option>\n                                    <option>Water</option>\n                                    <option>Fighting</option>\n                                    <option>Psychic</option>\n                                    <option>Dragon</option>\n                                    <option>Colorless</option>\n                                    <option>Fairy</option>\n                                    <option>Grass</option>\n                                    <option>Metal</option>\n                                    <option>Lightning</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>',t.appendChild(e)}}class p{constructor(t){this.pokemonData=[],this.state={baseUrl:"https://api.pokemontcg.io/v1/cards?",filtersList:[],oldInputValue:""},new l(t),this.initialCardsRender(t),this.filterByName(t),this.applyFilter(t)}async reRenderCards(t,e){const n=await r(e);this.pokemonData=[...n.cards],new i(t,this.pokemonData)}initialCardsRender(t){this.reRenderCards(t,this.state.baseUrl),!document.querySelector("footer")&&new c(t)}filterByName(t){const e=document.getElementById("myInput");e.addEventListener("input",async()=>{if(0===this.state.filtersList.length&&""!==e.value)this.state.baseUrl=`https://api.pokemontcg.io/v1/cards?name=${e.value}`,this.state.oldInputValue=e.value,this.reRenderCards(t,this.state.baseUrl);else if(""===e.value)this.state.filtersList.length,this.state.baseUrl="https://api.pokemontcg.io/v1/cards?",this.state.filtersList.map((t,e)=>{this.state.baseUrl+=0===e?`${t.param}=${t.value}`:`&${t.param}=${t.value}`}),this.reRenderCards(t,this.state.baseUrl);else if(this.state.baseUrl.includes("name")){const n=this.state.baseUrl.replace(this.state.oldInputValue,e.value);this.state.oldInputValue=e.value,this.state.baseUrl=n,this.reRenderCards(t,this.state.baseUrl)}else{const n=this.state.baseUrl,o=`&name=${e.value}`;this.state.baseUrl=`${n}${o}`,this.state.oldInputValue=e.value,this.reRenderCards(t,this.state.baseUrl)}})}applyFilter(t){const e=document.querySelectorAll("select"),n=document.getElementById("myInput");e.forEach(e=>{e.addEventListener("change",()=>{console.log(this.state.filtersList),"Default"===e.value?this.state.filtersList.forEach((o,s)=>{if(o.param===e.name)return this.state.filtersList.splice(s,1),this.state.baseUrl="https://api.pokemontcg.io/v1/cards?",this.state.filtersList.map((t,e)=>{console.log(n.value),""!==n.value?this.state.baseUrl+=`name=${n.value}&${t.param}=${t.value}`:this.state.baseUrl+=0===e?`${t.param}=${t.value}`:`&${t.param}=${t.value}`}),this.reRenderCards(t,this.state.baseUrl),null}):this.state.baseUrl.includes(e.name)?(this.state.filtersList.map(t=>{if(t.param===e.name){const n=this.state.baseUrl.replace(t.value,e.value);t.value=e.value,this.state.baseUrl=n}}),this.reRenderCards(t,this.state.baseUrl)):(this.state.filtersList.push({param:e.name,value:e.value}),this.state.filtersList.map((t,e)=>{this.state.baseUrl.includes(t.param)||(0===e&&""!==n.value?this.state.baseUrl+=`&${t.param}=${t.value}`:0===e&&""===n.value?this.state.baseUrl+=`${t.param}=${t.value}`:this.state.baseUrl+=`&${t.param}=${t.value}`)}),this.reRenderCards(t,this.state.baseUrl))})})}}class d{constructor(t){new o(t),new s(t),new p(t)}}class u{constructor(t,e){this.renderPkmn(t,e)}renderPkmn(t,e){t.innerHTML=`\n        <header class="container-fluid">\n            <div class="row">\n                <div class="col-12 d-flex align-items-center mt-4 text-center">\n                <h1 class="pkmn--name">${e.cards[0].name}</h1>\n                    <div class="d-flex header--about">\n                        <p class="ml-5"><strong>HP:</strong> ${e.cards[0].hp}</p>\n                        <p class="ml-5"><strong>Type:</strong> ${e.cards[0].types}</p>\n                        <p class="ml-5"><strong>Rarity:</strong> ${e.cards[0].rarity}</p>\n                        <p class="ml-5"><strong>Supertype:</strong> ${e.cards[0].supertype}</p>\n                    </div>\n                    <a href="/"><button type="button" class="btn btn-success btn--back">Back</button></a>\n                </div>\n            </div>\n        </header>\n        <section class="container-fluid mt-5 section--cards">\n            <div class="row">\n                <div class="col-4 pkmn--img text-center">\n                    <img class="pkmn--picture" src="${e.cards[0].imageUrl}">\n                </div>\n                <div class="col-8 pkmn--about">\n                    <div class="render--attacks"></div>\n                    <p class="cards--retreat--cost"><strong>RetreatCost energy:</strong> ${e.cards[0].convertedRetreatCost} ${e.cards[0].retreatCost}</p>\n                    <p><strong>Subtype:</strong> ${e.cards[0].subtype}</p>\n                    <div class="render--weaknesses"></div>\n                </div>\n            </div>\n        <section>`,e.cards[0].attacks.map(t=>{for(const e in t){const n=document.querySelector(".render--attacks"),o=document.createElement("p");switch(e){case"name":o.innerHTML=`<span class="cost">${t.cost}</span> || ${t[e]} || ${t.damage}`,o.setAttribute("class","p--name"),n.appendChild(o);break;case"text":o.textContent=`${t[e]} `,o.setAttribute("class","p--text"),n.appendChild(o)}}}),e.cards[0].weaknesses.map(t=>{for(const e in t){const n=document.querySelector(".render--weaknesses"),o=document.createElement("p");switch(e){case"type":o.innerHTML=`<strong>Weaknesses</strong>: ${t[e]}${t.value}`,n.appendChild(o)}}})}}class m{constructor(t,e){this.renderTrainer(t,e)}renderTrainer(t,e){t.innerHTML=`\n        <header class="container-fluid">\n            <div class="row">\n                <div class="col-12 d-flex align-items-center mt-4 text-center">\n                <h1 class="trainer--name">${e.cards[0].name}</h1>\n                    <div class="d-flex header--about">\n                        <p class="ml-5"><strong>Rarity:</strong> ${e.cards[0].rarity}</p>\n                        <p class="ml-5"><strong>Supertype:</strong> ${e.cards[0].supertype}</p>\n                    </div>\n                    <a href="/"><button type="button" class="btn btn-success btn--back">Back</button></a>\n                </div>\n            </div>\n        </header>\n        <section class="container-fluid mt-5 section--cards">\n            <div class="row">\n                <div class="col-3 trainer--img text-center">\n                    <img class="trainer--picture" src="${e.cards[0].imageUrl}">\n                </div>\n                <div class="col-9 trainer--about">\n                    <div class="render--text"></div>\n                    <p><strong>Description:</strong></p>\n                    <p>${e.cards[0].text}</p>\n                </div>\n            </div>\n        <section>`}}class h{constructor(t,e){this.renderEnergy(t,e)}renderEnergy(t,e){t.innerHTML=`\n        <header class="container-fluid">\n            <div class="row">\n                <div class="col-12 d-flex align-items-center mt-4 text-center">\n                <h1 class="energy--name">${e.cards[0].name}</h1>\n                    <div class="d-flex header--about">\n                        <p class="ml-5"><strong>Rarity:</strong> ${e.cards[0].rarity}</p>\n                        <p class="ml-5"><strong>Supertype:</strong> ${e.cards[0].supertype}</p>\n                    </div>\n                    <a href="/"><button type="button" class="btn btn-success btn--back">Back</button></a>\n                </div>\n            </div>\n        </header>\n        <section class="container-fluid mt-5 section--cards">\n            <div class="row">\n                <div class="col-3 energy--img text-center">\n                    <img class="energy--picture" src="${e.cards[0].imageUrl}">\n                </div>\n               <div class="col-9 energy--about"></div>\n            </div>\n        <section>`,this.renderTextEnergy(document.querySelector(".energy--about"),e.cards[0])}renderTextEnergy(t,e){const n=document.createElement("p");e.text?(n.innerHTML=`\n            <p><strong>Description: </strong></p>\n            <p>${e.text}</p>\n            `,t.appendChild(n)):(n.innerHTML="<em>No description.</em>",t.appendChild(n))}}class v{constructor(t){this.getPokemonData(t)}async getPokemonData(t){const e=window.location.search.split("="),n=await r(`https://api.pokemontcg.io/v1/cards?id=${e[1]}`);if(0===n.cards.length){const e=document.createElement("section");e.setAttribute("class","container d-flex justify-content-center align-items-center"),e.setAttribute("style","height:100vh;"),e.innerHTML=`\n                <div class="row">\n                    <div class="col-12">\n                        <h1 class="text-center display-3">${pokeName[1]} is not a pokemon..</h1>\n                        <p class="small"><a href="${window.location.origin}/cards?name=charizard"> Try to click here</a></p>\n                    </div>\n                </div>\n            `,t.appendChild(e)}else"Pokémon"===n.cards[0].supertype?new u(t,n):"Energy"===n.cards[0].supertype?new h(t,n):new m(t,n)}}const f=document.querySelector("#root");"/"===window.location.pathname?new d(f):"/cards"===window.location.pathname&&new v(f)}]);