function lerDados(){

    let str_dados = localStorage.getItem('db');
    let obj_dados = {};
    
    if (str_dados){
        obj_dados = JSON.parse(str_dados);
    }
    else{
        obj_dados = { contatos: [
            {nome: 'João Marcos', telefone: 31972391181},
            {nome: 'Alfredo', telefone: 123456789}
        ]};
    }

    return obj_dados;
}

function salvarDados(dados){

    localStorage.setItem('db', JSON.stringify(dados));
    
}

function incluirDados(){
    // le dados do local storage

    let obj_dados = lerDados();

    // inclui novo contato

    let str_nome = document.getElementById('campo_nome').value;
    let str_telefone = document.getElementById('campo_telefone').value;

    let contato = {
        nome: str_nome,
        telefone: str_telefone
    };

    obj_dados.contatos.push(contato);
    // salva os dados no local storage

    salvarDados(obj_dados);

}

function imprimirDados(){
    let tela = document.getElementById('tela');
    let str_html = '';
    let obj_dados = lerDados();
    
    for (let i = 0; i < obj_dados.contatos.length; i++){

        str_html += `<p>${obj_dados.contatos[i].nome} - ${obj_dados.contatos[i].telefone}</p>`

    }

    tela.innerHTML = str_html;
}

// configura os botões

document.getElementById("load_data").addEventListener('click', imprimirDados);
document.getElementById("btn_incluir_contato").addEventListener('click', incluirDados);
