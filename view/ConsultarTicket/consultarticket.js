var tabla;
var usu_id =  $('#user_idx').val();
var rol_id =  $('#rol_idx').val();

function init(){
    $("#tick_form").on("submit",function(e){
        guardaryeditartick(e);	
    });
}

function guardaryeditartick(e){
    e.preventDefault();
	var formData = new FormData($("#tick_form")[0]);
    $.ajax({
        url: "../../controller/ticket.php?op=guardaryeditartick",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){    
            console.log(datos);
            $('#tick_form')[0].reset();
            $("#modalconsultar").modal('hide');
            $('#tick_data').DataTable().ajax.reload();

            swal({
                title: "NCS Consulting",
                text: "Completado.",
                type: "success",
                confirmButtonClass: "btn-success"
            });
        }
    }); 
}

$(document).ready(function(){

    if (rol_id==1){
        tabla=$('#ticket_data').dataTable({
            "aProcessing": true,
            "aServerSide": true,
            dom: 'Bfrtip',
            "searching": true,
            lengthChange: false,
            colReorder: true,
            buttons: [		          
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                    'pdfHtml5'
                    ],
            "ajax":{
                url: '../../controller/ticket.php?op=listar_x_usu',
                type : "post",
                dataType : "json",	
                data:{ usu_id : usu_id },						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
            "bDestroy": true,
            "responsive": true,
            "bInfo":true,
            "iDisplayLength": 10,
            "autoWidth": false,
            "language": {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }     
        }).DataTable(); 
    }else{
        tabla=$('#ticket_data').dataTable({
            "aProcessing": true,
            "aServerSide": true,
            dom: 'Bfrtip',
            "searching": true,
            lengthChange: false,
            colReorder: true,
            buttons: [		          
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                    'pdfHtml5'
                    ],
            "ajax":{
                url: '../../controller/ticket.php?op=listar',
                type : "post",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
            "bDestroy": true,
            "responsive": true,
            "bInfo":true,
            "iDisplayLength": 10,
            "autoWidth": false,
            "language": {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }     
        }).DataTable(); 
    }

});

function ver(tick_id){
    window.open('http://localhost:90/Tickets/view/DetalleTicket/?ID='+ tick_id +'');
}
function editar(tick_id){
    $('#mdltitulo').html('Editar Registro');

    $.post("../../controller/ticket.php?op=mostrar", {tick_id : tick_id}, function (data) {
        data = JSON.parse(data);
        $('#tick_id').val(data.tick_id);
        $('#tick_titulo').val(data.tick_titulo);
        $('#tick_descrip').val(data.tick_descrip);
        $('#tick_estado').val(data.tick_estado);
        $('#cat_id').val(data.cat_id).trigger('change');
    }); 

    $('#modalconsultar').modal('show');
}
function eliminar(tick_id){
    swal({
        title: "NCS Consulting",
        text: "Esta seguro de Eliminar el registro?",
        type: "error",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        closeOnConfirm: false
    },
    function(isConfirm) {
        if (isConfirm) {
            $.post("../../controller/ticket.php?op=eliminartick", {tick_id : tick_id}, function (data) {

            }); 

            $('#ticket_data').DataTable().ajax.reload();	

            swal({
                title: "NCS Consulting!",
                text: "Registro Eliminado.",
                type: "success",
                confirmButtonClass: "btn-success"
            });
        }
    });
}
init();