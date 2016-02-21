var cont = 0;


$(function(){
    $('#add-restriction-button').on('click',function(){

      var contain = '<option value="contain"> Contiene</option>';
      var check='<option value="checkCopypaste">Verificar que no sea copiado de otras páginas</option>'
      var spelling = '<option value="spelling">Verificar ortografía</option>'
      var replyTime = '<option value="replyTime">Controlar tiempo de respuesta</option>'
      var psicotecnico =' <option value= "psicotecnico">Hacer antes psicotécnico</option>'

        var r= $('<div class="form-group">'+
                    '<label>Reglas</label>'+
                    '<select class="form-control" id="listRules">'+
                    '<option value="contain"> Contiene</option>'+                 
                    '<option value="checkCopypaste">Verificar que no sea copiado de otras páginas</option>'+                           
                    '<option value="spelling">Verificar ortografía</option>'+
                    '<option value="replyTime">Controlar tiempo de respuesta</option>'+
                    '<option value= "psicotecnico">Hacer antes psicotécnico</option>'+
                   '</select>'+
                  '<input id="addRule" type="button" value="Añade esta restricción">'+
                  '</div> ');
        




        $("body").append(r);

        $('#add-restriction-button').remove();
        
        switchHtml();
       

    });
});



function switchHtml(){  
                 $('#addRule').click(function(){
                  
                  var option = $( "#listRules option:selected" ).val();
                 

          switch (option) { 
                case 'contain': 
                    createContain();


                    break;
                case 'checkCopypaste': 
                   createCheck();
                    break;
                case 'spelling': 
                    createSepelling();
                    break;    
                case 'replyTime': 
                    createReplyTime()
                    break;
                case 'psicotecnico': 
                    createPsico();
                    break;
                default:
                  alert('Nobody Wins!');
                  };

          


              
        });
        }; 


function createContain(){
  var idcontain = 'contain'+cont;
  var f = 'contain'+cont;
  var delet = 'delete'+cont;
  cont++;
  var comp = '<label for = '+f+'> Debe de contener</label>'+
              '<input id='+idcontain+' class="form-control" placeholder="Mete tu palabra o expresión" >'+
              '<input id="'+delet+'" type="button" value="Borrar">  <br for ="'+delet+'"/>'


    $('#rectrictions').append(comp);
    deleteParam('#'+idcontain,f,delet);


};


function createCheck(){
  var check = 'checkcopypaste'
  var f = 'checkcopypaste';
  var delet = 'deletecheck';
    var comp = '<label for = '+f+' > Verificar que no sea copiado de otras páginas </label> <br for ="'+delet+'"/>'+
              '<input id='+check+'  type="checkbox" checked> <br for ="'+delet+'"/>'+
              '<input id="'+delet+'" type="button" value="Borrar">  <br for ="'+delet+'"/>'


    $('#rectrictions').append(comp);
    deleteParam('#'+check,f,delet);

    


};




function createSepelling(){
  var spelling = 'checkspelling'
  var f = 'checkspelling';
  var delet = 'deletespelling';
    var comp = '<label for = '+f+' > Verificar ortografía</label> <br for ="'+delet+'"/>'+
              '<input id='+spelling+'  type="checkbox" checked> <br for ="'+delet+'"/>'+
              '<input id="'+delet+'" type="button" value="Borrar">  <br for ="'+delet+'"/>'


    $('#rectrictions').append(comp);
    deleteParam('#'+spelling,f,delet);

    


};

function createReplyTime(){
  var reply = 'checkreplytime'
  var f = 'checkreplytime';
  var delet = 'replytime';
    var comp = '<label for = '+f+'> Tiempo máximo </label>'+
              '<input id='+reply+' class="form-control" placeholder="Enter text" >'+
              '<input id="'+delet+'" type="button" value="Borrar">  <br for ="'+delet+'"/>'


    $('#rectrictions').append(comp);
    deleteParam('#'+reply,f,delet);

};




function createPsico(){
  var psico = 'checkpsicotecnico'
  var f = 'checkpsicotecnico';
  var delet = 'deletepsico';
    var comp = '<label for = '+f+' > Antes hacer Psicológico</label> <br for ="'+delet+'"/>'+
              '<input id='+psico+'  type="checkbox" checked> <br for ="'+delet+'"/>'+
              '<input id="'+delet+'" type="button" value="Borrar">  <br for ="'+delet+'"/>'


    $('#rectrictions').append(comp);
    deleteParam('#'+psico,f,delet);

    


};


function deleteParam(id,f,del){

$('#'+del).click(function(){
  $('label[for='+f+']').remove();
  $(id).remove();
  $('#'+del).remove();

  $('br[for='+del+']').remove();

});};


