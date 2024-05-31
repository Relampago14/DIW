// chama o objeto carros do banco de dados
const apiUrl = '/carros';

// usando o FETCH, chama a apiUrl, converte o json e chama a função carregarCarros passando o objeto carros
fetch(apiUrl).then(response => response.json()).then(cars => imprimeCarros(cars));

// recebe o objeto carros, e para cada item, imprime os dados na tela
function imprimeCarros(cars){
    strhtml = '';
    for (let i = 0; i < cars.length; i++){
        // console.log(cars[i]);
        
        strhtml += `
        <div class="col">
            <div class="card">
                <img src="data:image/png;base64, ${cars[i].img}" class="card-img-top" alt="${cars[i].marca + ' ' + cars[i].modelo}">
                <div class="card-body">
                    <h5 class="card-title">${cars[i].marca + ' ' + cars[i].modelo}</h5>
                    <p class="card-text">${cars[i].categoria + '; ' + cars[i].ano + '; ' + 'R$' + cars[i].preco}</p>
                </div>
            </div>
        </div>
            `
    }

    document.getElementById("carros").innerHTML = strhtml;
    
}