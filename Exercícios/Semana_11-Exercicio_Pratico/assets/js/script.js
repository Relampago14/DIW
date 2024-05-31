// Função que lê o localStorage e converte para JSON e retorna o valor
function lerTarefas(){
    // Declara o 'str_tarefas' para receber o banco local 'db_Tarefas'
    let str_tarefas = localStorage.getItem('db_Tarefas');
    //Declara o objeto 'lista_tarefas'
    let lista_tarefas = {};

    // Se 'str_tarefas' tiver qualquer valor, converte 'str_tarefas' para o formato JSON e
    // insere o valor em 'lista_tarefas'
    if (str_tarefas){
        lista_tarefas = JSON.parse(str_tarefas);
    }

    // Se não, cria um array 'tarefas' vazio em 'lista_tarefas'
    else{
        lista_tarefas = { tarefas: [
            
        ]};
    }

    // Retorna a lista de tarefas
    return lista_tarefas;
}

// Função que recebe o parâmetro 'lista_tarefa' e salva no banco
function salvarTarefas(lista_tarefa){

    // Converte o parâmetro 'lista_tarefa' para string no formato JSON e armazena a nova lista no banco
    localStorage.setItem('db_Tarefas', JSON.stringify(lista_tarefa));
    
}

// Função que remove as tarefas com base no parâmetro 'index'
function removerTarefa(index){
    // Pega a lista de tarefas e armazena na variável 'lista_tarefas'
    let lista_tarefas = lerTarefas();
    
    // Acessa o array 'tarefas' e remove o item com base no 'index'
    lista_tarefas.tarefas.splice(index, 1);

    // Salva a nova lista com o valor removido
    salvarTarefas(lista_tarefas);

    // Exibe na tela a nova lista
    mostrarTarefas();
}

// Função que remove todas as tarefas e exibe a nova lista zerada na tela
function removertodasTarefas(){
    // Pega a lista de tarefas e armazena na variável 'lista_tarefas'
    let lista_tarefas = lerTarefas();

    // Acessa o array 'tarefas' e declara-o com nenhum valor, isto é, zera a lista
    lista_tarefas.tarefas = [];

    // Salva a nova lista zerada
    salvarTarefas(lista_tarefas);

    // Exibe na tela a nova lista
    mostrarTarefas();
}

// Função que marca a tarefa como concluída com base no parâmetro 'index'
function concluirTarefa(index){
    // Pega a lista de tarefas e armazena na variável 'lista_tarefas'
    let lista_tarefas = lerTarefas();

    // Acessa o array 'tarefas' e o item 'status_tarefa' com base no 'index' e muda o valor para true
    lista_tarefas.tarefas[index].status_tarefa = true;

    // Salva a nova lista com a tarefa concluída
    salvarTarefas(lista_tarefas);

    // Exibe na tela a nova lista
    mostrarTarefas();
}

// Função que desmarca a tarefa como concluída com base no parâmetro 'index'
function naoconcluirTarefa(index){
    // Pega a lista de tarefas e armazena na variável 'lista_tarefas'
    let lista_tarefas = lerTarefas();

    // Acessa o array 'tarefas' e o item 'status_tarefa' com base no 'index' e muda o valor para false
    lista_tarefas.tarefas[index].status_tarefa = false;

    // Salva a nova lista com a tarefa não concluída
    salvarTarefas(lista_tarefas);

    // Exibe na tela a nova lista
    mostrarTarefas();
}

// Função que exibe na tela a lista com todas as tarefas
function mostrarTarefas(){
    // Declara 'tela' para receber a div com id="screen_task_list"
    let tela = document.getElementById('screen_task_list');
    // Declara 'str_html' com o valor vazio
    let str_html = '';
    // Pega a lista de tarefas e armazena na variável 'lista_tarefas'
    let lista_tarefas = lerTarefas();
    
    // Para cada valor de 'i' menor que o tamanho da lista de tarefas, executa o bloco abaixo
    // 'i' começa igual a zero e vai sendo incrementando no valor de uma unidade
    // Esse código faz com que eu leia toda minha lista e imprima item por item
    for (let i = 0; i < lista_tarefas.tarefas.length; i++){

        // Se a tarefa o status da tarefa estiver concluída, exibe a tarefa 
        // com a imagem de check com preenchimento preto. Em assets/css/style.css terá o parágrafo riscado.
        if (lista_tarefas.tarefas[i].status_tarefa){
            // Declara o valor da div da tarefa com o código abaixo
            str_html += `
            <div class="row">
                <div class="col-12">
                    <li>
                        <!-- Imprime o nome da tarefa com base no valor de 'i' -->
                        <p class="checked_task">${lista_tarefas.tarefas[i].nome_tarefa} </p>
                        
                        <!-- Declara o atributo 'name' com base no valor de 'i' -->
                        <!-- O atributo 'onclick' irá executar a função de desmarcar a tarefa -->
                        <!-- enviando o valor do atributo 'name', servindo como index para navegar -->
                        <!-- no array e poder alterar este status -->
                        <button class="task_btns" id="btn_uncheck_task" name="${i}" 
                        onclick="naoconcluirTarefa(this.name)">
                            <img class="check_imgs" 
                            src="assets/img/check_sign_black-sf.png" alt="Sinal de 'ok' preto">
                        </button>

                        <!-- Declara o atributo 'name' com base no valor de 'i' -->
                        <!-- O atributo 'onclick' irá executar a função de excluir a tarefa -->
                        <!-- enviando o valor do atributo 'name', servindo como index para navegar -->
                        <!-- no array e poder excluir essa tarefa -->
                        <button class="task_btns" id="btn_remove_task" name="${i}" 
                        onclick="removerTarefa(this.name)">
                            <img class="check_imgs" 
                            src="assets/img/delete.png" alt="Lixeira">
                        </button>
                    </li>
                </div>
            </div>
            `;
        }

        else if (lista_tarefas.tarefas[i].status_tarefa == false){
            str_html += `
            <div class="row">
                <div class="col-12">
                    <li>
                        <!-- Imprime o nome da tarefa com base no valor de 'i' -->
                        <p class="unchecked_task">${lista_tarefas.tarefas[i].nome_tarefa}</p>

                        <!-- Declara o atributo 'name' com base no valor de 'i' -->
                        <!-- O atributo 'onclick' irá executar a função de marcar a tarefa -->
                        <!-- enviando o valor do atributo 'name', servindo como index para navegar -->
                        <!-- no array e poder alterar este status -->
                        <button class="task_btns" id="btn_check_task" name="${i}" 
                        onclick="concluirTarefa(this.name)">
                            <img class="check_imgs" 
                            src="assets/img/check_sign_white-sf.png" alt="Sinal de 'ok' branco"></button>
                    
                        <!-- Declara o atributo 'name' com base no valor de 'i' -->
                        <!-- O atributo 'onclick' irá executar a função de excluir a tarefa -->
                        <!-- enviando o valor do atributo 'name', servindo como index para navegar -->
                        <!-- no array e poder excluir essa tarefa -->
                        <button class="task_btns" id="btn_remove_task" name="${i}" 
                        onclick="removerTarefa(this.name)">
                            <img class="check_imgs" 
                            src="assets/img/delete.png" alt="Lixeira">
                        </button>
                    </li>
                </div>
            </div>
            `;
        }

    }

    // O interior da div recebe o valor de 'str_html'
    tela.innerHTML = str_html;
}

// Função que inclui tarefa
function incluirTarefa(){
    // Pega a lista de tarefas e armazena na variável 'lista_tarefas'
    let lista_tarefas = lerTarefas();

    // Pega o nome da tarefa do input do usuário e declara o status dela como não concluída
    let str_tarefa = document.getElementById('input_task_name').value;
    let sts_tarefa = false;

    // Cria o objeto da nova tarefa
    let tarefa = {
        nome_tarefa: str_tarefa,
        status_tarefa: sts_tarefa
    };

    // Adiciona a tarefa criada anteriormente à lista de tarefas
    lista_tarefas.tarefas.push(tarefa);

    // Salva a nova lista de tarefas
    salvarTarefas(lista_tarefas);

    // Exibe na tela a nova lista
    mostrarTarefas();
}

// Mostra a lista de tarefas ao carregar a página
document.addEventListener("DOMContentLoaded", mostrarTarefas);


// Declara a função dos Botões

// Botão que adiciona uma tarefa
document.getElementById('btn_save_new_task').addEventListener('click', incluirTarefa);

// Botão que recarrega a lista de arefas
document.getElementById('btn_reload_task').addEventListener('click', mostrarTarefas);

// Botão que deleta todas as tarefas
document.getElementById('btn_delete_all_task').addEventListener('click', removertodasTarefas);