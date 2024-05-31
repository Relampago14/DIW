// Declara o botão no JS
var calc_btn = document.getElementById('CalcBTN');

// Quando o botão for clicado, executa a função abaixo
calc_btn.addEventListener('click', function (){

    // Declara a variável "x" sendo o valor inicial a ser convertido inserido
    var x = document.getElementById("v_inicial").value;

    // Declara a variável "y" sendo a variável "x" convertida para número
    var y = Number(x);

    // Torna a variável "y" com apenas duas casas decimais
    var y = y.toFixed(2);

    // Declara a variável "moeda_1" para receber a box selection da moeda inicial da página
    var moeda_1 = document.getElementById("moedas_ini");

    // Declara a variável "text_1" para receber o texto selecionado da box selection acima
    var text_1 = moeda_1.options[moeda_1.selectedIndex].text;

    // Declara a variável "moeda_2" para receber a box selection da moeda convertida da página
    var moeda_2 = document.getElementById("moedas_conv");

    // Declara a variável "text_2" para receber o texto selecionado da box selection acima
    var text_2 = moeda_2.options[moeda_2.selectedIndex].text;

    // Se "x" não for um número, exibe como saída que o valor inserido não é um número
    if (Number.isNaN(x)) {
        document.getElementById("resultado").innerText = ("O valor inserido não é um número!");
    }

    // Se não, executa o bloco abaixo
    // Obs: as cotações das moedas se referem ao dia 07/05/2024 às 18:00
    else {

        // Se "text_1" for igual a "Dólar Americano", executa o bloco abaixo
        if (text_1 == "Dólar Americano"){

            // Se "text_2" for igual a "Dólar Americano", executa o bloco abaixo
            if (text_2 == "Dólar Americano"){
                // Declara a variável "result" para receber o valor de "y"
                var result = y;

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "$ " + result;
            }

            // Se "text_2" for igual a "Euro", executa o bloco abaixo
            else if (text_2 == "Euro"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y * 0.93);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "€ " + result;
            }

            // Se "text_2" for igual a "Peso Argentino", executa o bloco abaixo
            else if (text_2 == "Peso Argentino"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y * 881.57);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "ARS " + result;
            }

            // Se "text_2" for igual a "Bitcoin", executa o bloco abaixo
            else if (text_2 == "Bitcoin"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y * 0.000016);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "BTC " + result;
            }
            
        }

        //Se não, se "text_1" for igual a "Euro", executa o bloco abaixo
        else if (text_1 == "Euro"){

            // Se "text_2" for igual a "Dólar Americano", executa o bloco abaixo
            if (text_2 == "Dólar Americano"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y / 0.93);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "$ " + result;
            }

            // Se "text_2" for igual a "Euro", executa o bloco abaixo
            else if (text_2 == "Euro"){
                // Declara a variável "result" para receber o valor de "y"
                var result = y;

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "€ " + result; 
            }

            // Se "text_2" for igual a "Peso Argentino", executa o bloco abaixo
            else if (text_2 == "Peso Argentino"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y * 947.69);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "ARS " + result;
            }

            // Se "text_2" for igual a "Bitcoin", executa o bloco abaixo
            else if (text_2 == "Bitcoin"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y * 0.000017);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "BTC " + result;
            }

        }

        //Se não, se "text_1" for igual a "Peso Argentino", executa o bloco abaixo
        else if (text_1 == "Peso Argentino"){

            // Se "text_2" for igual a "Dólar Americano", executa o bloco abaixo
            if (text_2 == "Dólar Americano"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y / 881.57);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "$ " + result;
            }

            // Se "text_2" for igual a "Euro", executa o bloco abaixo
            else if (text_2 == "Euro"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y / 947.69);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "€ " + result;
            }

            // Se "text_2" for igual a "Peso Argentino", executa o bloco abaixo
            else if (text_2 == "Peso Argentino"){
                // Declara a variável "result" para receber o valor de "y"
                var result = y;

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "ARS " + result;   
            }

            // Se "text_2" for igual a "Bitcoin", executa o bloco abaixo
            else if (text_2 == "Bitcoin"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y * 0.0000000182);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "ARS " + result;
            }
        }

        //Se não, se "text_1" for igual a "Bitcoin", executa o bloco abaixo
        else if (text_1 == "Bitcoin"){

            // Se "text_2" for igual a "Dólar Americano", executa o bloco abaixo
            if (text_2 == "Dólar Americano"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y / 0.000016);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "$ " + result;
            }

            // Se "text_2" for igual a "Euro", executa o bloco abaixo
            else if (text_2 == "Euro"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y / 0.000017);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "€ " + result;
            }

            // Se "text_2" for igual a "Peso Argentino", executa o bloco abaixo
            else if (text_2 == "Peso Argentino"){
                // Declara a variável "result" para receber a conversão de "y"
                var result = Number(y / 0.0000000182);

                // Se "result" for > 0.01, arredonda "result" para duas casas decimais
                if (result > 0.01){
                    var result = result.toFixed(2);
                }

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "ARS " + result;
            }

            // Se "text_2" for igual a "Bitcoin", executa o bloco abaixo
            else if (text_2 == "Bitcoin"){
                // Declara a variável "result" para receber o valor de "y"
                var result = y;

                // "result" é convertido de número para string e substitui o ponto pela vírgula na separação das casas decimais
                var result = result.toString().replace(".", ",");

                // A saída com o sinal da moeda e o valor da conversão é exibida no elemento com id="resultado"
                document.getElementById("resultado").innerText = "BTC " + result;
            }

        }
            
    }

}, )
