// QND PAGINA CARREGAR 
function inicializar(){
    var titulo = document.createElement('h1');
    titulo.innerText = 'Olá. Mundo!';
    //console.log(titulo);


    // ADICIONAR o ELEMENTO CRIADO no Body da Pagina
    document.body.appendChild(titulo);
    // REMOVER 
    //document.body.removeChild(titulo);


    // ADICIONAR IMG
    var logoImg = document.createElement('img')
    logoImg.setAttribute('width', '200');
    logoImg.setAttribute('alt', 'Imagem totalmente azul');
    logoImg.setAttribute('src', '../assets/img/logoFundoAzulVGA.jpg');
    logoImg.title = "Imagem de uma log azul";

    console.log(logoImg);
    document.getElementsByClassName('teste')[0].appendChild(logoImg)
    // REMOVER atributo 
    logoImg.removeAttribute('title');
    // Pegar atributo
    console.log("CAMINHO IMG: " + logoImg.getAttribute('src'));

    // Paragrafo
    var parag = document.createElement('p');
    parag.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut aperiam facilis est consequatur commodi! Deleniti id necessitatibus veritatis omnis repudiandae sunt veniam aliquam neque distinctio modi? Nam, quibusdam rem!";

    document.body.appendChild(parag)
}

// ADD INPUT
function newInput(e){
    e.preventDefault();
    // Criar Input
    var moreInput = document.createElement('input');
    var linha = document.createElement('br');

    // ADD TRIBUTOS 
    moreInput.setAttribute('type', 'text');
    moreInput.setAttribute('class', 'inpt');
    moreInput.setAttribute('onblur', 'exibirTootips()'); // Colocando evento no input
    moreInput.setAttribute('placeholder', 'Sql, Python, Js, Node, Java, C, C# . . .');

    // Add Input ao FIELDSET
    document.querySelectorAll('.container-form form fieldset')[1].appendChild(moreInput);
    // Add br ao FIELDSET
    document.querySelectorAll('.container-form form fieldset')[1].appendChild(linha);
}

// REMOVE INPUT
function rmInput(e){
    e.preventDefault();

    // Quantidade de itens que possuem class = 'inpt' (lista)
    var tamList = document.querySelectorAll('.inpt').length
    //console.log(tamList)

    // Pego o ultimo item da lista (totalLista - 1);
    var lastInput = document.querySelectorAll('.inpt')[tamList - 1];
    //console.log(lastInput);
    
    // Se a lista for maior que 1 remove o ultimo da lista 
    if(tamList > 1){
        // Remover ultimo input da lista 
        document.querySelectorAll('.container-form form fieldset')[1].removeChild(lastInput)
    }
}

// EXIBIR TOOTIPS
function exibirTootips(){
    console.clear();
    //console.log(document.getElementsByClassName('inpt')[0].value);
    // Crio uma variavel para receber o texto
    var texto = "";
    
    // lista = 10 -> document.getElementsByClassName('inpt').length

    // cria um val          -- operação logica                      
    for(var i = 0; i < document.getElementsByClassName('inpt').length; i++){
        // Executar o Comando
        //console.log(document.getElementsByClassName('inpt')[i].value);
        
        texto += "<span>" + document.getElementsByClassName('inpt')[i].value + "</span>";

    } // Fim


    console.log(texto)
    // Add a tela
    document.querySelector('p').innerHTML = texto;
}