document.getElementById("nova-tarefa").focus();

adicionar.addEventListener("click", criaDiv);

var texto;

function criaDiv(){

    
    var tarefa = document.getElementById("tarefa");
    var div = document.createElement("div");

    div.id = "pula-linha";

    tarefa.appendChild(div);

    adicionaTarefa();
}

function adicionaTarefa(){
    var input = document.getElementById("nova-tarefa");
    var texto = input.value;
    var teste = document.getElementById("teste");
    var checkbox = document.createElement("input");
    

    checkbox.type = "checkbox";
    
    var label = document.createElement("label");

    label.appendChild(document.createTextNode(texto));

    if(texto == ""){
        alert("Digite uma tarefa !");
        document.getElementById("nova-tarefa").focus();
    }
    else{
        tarefa.appendChild(checkbox);
        tarefa.appendChild(label);
        document.getElementById("nova-tarefa").value="";
        document.getElementById("nova-tarefa").focus();

    }
}

