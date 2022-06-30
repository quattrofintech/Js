function inicializa(){
    // FOCUS NO INPUT
    document.getElementsByName('txtLogin')[0].focus();
}

// OUVINDO EVENTO
var form = document.getElementsByName('formLogin')[0];
form.addEventListener('submit', logar);

function logar(e){
    e.preventDefault();

    /* 
        LIMPAR CAMPO DE TEXTO
        document.getElementsByName('txtLogin')[0].value = "";
        document.getElementsByName('txtSenha')[0].value = "";
    */

    //VARIAVEL LOGIN
    var txtLogin = document.getElementsByName('txtLogin')[0].value;
    console.log(txtLogin);

    // MOSTRAR USUÁRIO
    document.querySelector('header div').style.display = "block";
    document.querySelector('header div span').innerHTML = txtLogin;
    //document.querySelector('div span').innerText = document.getElementsByName('txtLogin')[0].value;


    // OCULTA O FORM
    form.style.display = "none";

}

var selectMode = document.getElementsByName('selectMode')[0];
selectMode.addEventListener('change', function(){
    //console.log('Teste select ' +  selectMode.value);

    /*
        --color0: #2f3e46;
        --color1: #354f52;
        --color2: #52796f;
        --color3: #84a98c;
        --color4: #cad2c5;

    */
    if(selectMode.value == 1){
        document.body.style.setProperty('--color2', '#354f52');
        document.body.style.setProperty('--color3', '#84a98c');
    }else{
        document.body.style.setProperty('--color2', '#2f3e46');
        document.body.style.setProperty('--color3', '#354f52');
    }

    /* 

        if(selectMode.value == 1){
            console.log('light')
        }else if(selectMode.value == 2){
            console.log('Dark')
        }else{
            
        }

        **********

        if(selectMode.value == 1){
        console.log('light')
        }
        if(selectMode.value == 2){
            console.log('Dark')
        }
        if(selectMode.value == 3){
            console.log('Base')
        }

        ***********
        switch(selectMode.value){
            case 1:
                console.log('light');
                break;
            case 2: 
                console.log('Dark');
                break;

            default:
                console.log('Teste');
                break;
        }

    */
})


// ALTERAR COR 
var txtCor = document.getElementsByName('txtColor')[0];
txtCor.addEventListener('change', function(){
    console.log(txtCor.value);
    document.body.style.backgroundColor = txtCor.value;
})
