$(document).ready(function() {

  var getpreguntas = function () {
    return db.allDocs({include_docs: true});
  }

  getpreguntas().then(function(result) {
    //console.log(result.rows[0].doc);

    for (var i = 0; i < result.rows.length; i++) {
        var _option = "<option value='" + result.rows[i].doc._id + "'>" + result.rows[i].doc.titulo + "</option>";
        $("#preguntas").append(_option);
    }

  });

  //***

  $("#procesar").click(function() {

    var _id = $("#preguntas").val();
    db.get(_id).then(function(result) {
      $("#respuesta").empty();
      $("#respuesta").append(result.respuesta);
    });

  });

});
