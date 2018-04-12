var db = new PouchDB('sampledb');

var docs = [
    {
      _id: "1",
      titulo: "Pregunta 1",
      respuesta: "Esta es la respuesta de la pregunta 1"
    },
    {
      _id: "2",
      titulo: "Pregunta 2",
      respuesta: "Esta es la respuesta de la pregunta 2"
    },
    {
      _id: "3",
      titulo: "Pregunta 3",
      respuesta: "Esta es la respuesta de la pregunta 3"
    },
    {
      _id: "4",
      titulo: "Pregunta 4",
      respuesta: "Esta es la respuesta de la pregunta 4"
    },
    {
      _id: "5",
      titulo: "Pregunta 5",
      respuesta: "Esta es la respuesta de la pregunta 5"
    }
];

db.bulkDocs(docs).then(
  function () {
    db.info().then(
      function (info) {
        console.log('Se ha creado la base de datos con exito: ' + "doc_count: " + JSON.stringify(info.doc_count) + ", " + "db_name: " + JSON.stringify(info.db_name));
      }
    )
  }
).catch(
  function (error) {
    console.log('Ups!, ha ocurrido un problema al insertar los registros en BD: ' + error);
  }
)
