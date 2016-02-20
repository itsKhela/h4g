

$(function(){
    $('#add-restriction-button').on('click',function(){

        var r= $('<div class="form-group">'+
                    '<label>Reglas</label>'+
                    '<select class="form-control" id="listRules">'+
                    '<option name="contain"> Contiene</option>'+                 
                    '<option name="checkCopypaste">Verificar que no sea copiado de otras páginas</option>'+                           
                    '<option name="spelling">Verificar ortografía</option>'+
                    '<option name="replyTime">Controlar tiempo de respuesta</option>'+
                    '<option name = "psicotecnico">Hacer antes psicotécnico</option>'+
                   '</select>'+
                  '</div> ');
        $("body").append(r);
    });
});





$('select').on('change', function() {
  alert( this.value );
})




    