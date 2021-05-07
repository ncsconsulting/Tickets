<div id="modalconsultar" class="modal fade bd-example-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="modal-close" data-dismiss="modal" aria-label="Close">
                    <i class="font-icon-close-2"></i>
                </button>
                <h4 class="modal-title" id="mdltitulo"></h4>
            </div>
            <form method="post" id="ticket_form">
                <div class="modal-body">
                    <input type="hidden" id="tick_id" name="tick_id">

                    <div class="form-group">
                        <label class="form-label" for="tick_titulo">Titulo ticket</label>
                        <input type="text" class="form-control" id="tick_titulo" name="tick_titulo" placeholder="Ingrese Titulo ticket" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="tick_descrip">Descripcion de ticket</label>
                        <input type="text" class="form-control" id="tick_descrip" name="tick_descrip" placeholder="Ingrese Descripcion de ticket" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="tick_estado">ticket estado</label>
                        <input type="text" class="form-control" id="tick_estado" name="tick_estado" placeholder="Estado de ticket." required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="cat_id">Categoria</label>
                        <select class="select2" id="cat_id" name="cat_id">
                            <option value="1">Hardware</option>
                            <option value="2">Software</option>
                            <option value="3">Incidencias</option>
                            <option value="4">Politicas de servicio</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-rounded btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="submit" name="action" id="#" value="add" class="btn btn-rounded btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>