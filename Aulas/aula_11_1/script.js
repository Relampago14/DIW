var cadastro = [{
    "nome": "João Marcos",
    "cidade": "Mário Campos",
    "idade": 19,
    "veiculos":[{
        "marca": "Fiat",
        "modelo": "Argo",
        "ano": 2022
    }, {
        "marca": "Ford",
        "modelo": "Mustang",
        "ano": 2024
    }]
}, {
    "nome": "Relampagouu",
    "cidade": "Radiator Springs",
    "idade": 17,
    "veiculos":[{
        "marca": "Chevrolet",
        "modelo": "Corvette C6",
        "ano": 2007
    }]
}];

function exibirCadastro(){
    var text_html = "";
    for (let i = 0; i < cadastro.length; i++){
        text_html += `Nome: ${cadastro[i].nome} <br>`
        for (let y = 0; y < cadastro[i].veiculos.length; y++){
            text_html += `<li>
            ${cadastro[i].veiculos[y].marca} -
            ${cadastro[i].veiculos[y].modelo} -
            ${cadastro[i].veiculos[y].ano}</li>`
        }
    };

    //alert(text_html);
    document.getElementById('tela').innerHTML = text_html;
}