function init() {
    
    initList();
}

var listas = [];

function initList() {
    createAddList($("#ul-list"));
    $(".add-list").click(addList);
}

//------------------------------------------------- CREAR LISTA
function createAddList (_where) {
    var addList = '<span class="add-list">Añadir una lista...</span>';
    _where.append(addList);
}
//----------------------------------------------- AGREGAR LISTA
function addList() {
    //console.log("click");
    
    var formList = '<div class="form-list"><input type="text" class="input-list form-control" placeholder="Añadir una lista..."><button class="btn btn-list">Guardar</button><i class="glyphicon glyphicon-remove icon-list"></i></div>';
    
    $(".add-list").parent().append(formList);
    $(".add-list").remove();
    
    //console.log($(".add-list").parent());
    
    $(".input-list").focus();
    $(".icon-list").click(closeList);
    $(".btn-list").click(keepList);
}
//------------------------------------------------ CERRAR LISTA
function closeList() {
    
    initList();
    $(".form-list").remove();
}

//----------------------------------------------- GUARDAR LISTA
function keepList() {
    localStorage.setItem("inputVal", $(".input-list").val());
    
    if($(".input-list").val() == ""){
        swal("Ingrese una lista");
    } 
    else{
        console.log($(".input-list").val());
        inputValue = localStorage.getItem("inputVal");
        //listas.push({text:inputValue});
        listas.push({text:$(".input-list").val()});
        drawList();
        
    }
}

function drawList() {
    $("#ul-list").html("");
    for(var i in listas){
        var list = '<li id="'+i+'"><div class="list"><div class="list-container"><div class="list-name">'+listas[i].text+'</div><i class="glyphicon glyphicon-option-horizontal"></i><a class="add-card" href="#">Añadir una tarjeta...</a></div></div></li>';
        
        //$(".form-list").parent().append(list);
        $("#ul-list").append(list);
        $(".form-list").remove();
    }
    createAddList($("#ul-list"));
    $(".add-list").click(addList);
}

//--------------------------------------------- OCULTAR/MOSTRAR
function hideShow (_hide, _show){
    _hide.slideUp("fast");
    _show.slideDown();
}
    //$(".add-list").clone().appendTo(".append2");
    //$(".append2 .add-list").slideDown();
    //$(".append2 .add-list").click(addList);










