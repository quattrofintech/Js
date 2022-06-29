function carregar(){
    /* MODAL */ 
    document.getElementsByClassName('modal-container')[0].style.display = "block";
}


function menu(){
    // Verifica Checkbox
    var check = document.getElementsByName('checkMenu')[0].checked;

    if(check){
        document.getElementsByClassName('container-menu')[0].style.display = "block";
    }else{
        document.getElementsByClassName('container-menu')[0].style.display = "none";
    }
    
}


function fecharModal(){
    /* MODAL */
    document.getElementsByClassName('modal-container')[0].style.display = "none";
}