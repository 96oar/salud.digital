$(document).ready(()=>{
    myEvents = [
        { name: "Evaluacion de aprendizaje 1", date: "06/12/2020", type: "holiday", everyYear: true },
        { name: "Evaluacion de aprendizaje 2", date: "06/01/2020", type: "holiday", everyYear: true },
        { name: "Dia de la bandera", date: "06/20/2020", type: "birthday" },
        { name: "Evaluacion de aprendizaje 3", date: "06/24/2020", type: "birthday", everyYear: true },
        { name: "Aprobamos!!", date: "06/30/2020", type: "event" },
        { name: "Festejar!", date: "06/30/2020", type: "birthday" },
        { name: "Hola movil 2!", date: "06/30/2020", type: "holiday" },
      ],
    $('#evoCalendar').evoCalendar({
        calendarEvents: myEvents,
        format: 'mm/dd/yyyy',
        titleFormat: 'MM yyyy',
        eventHeaderFormat: 'MM d, yyyy',
        language: 'es',
        todayHighlight:true
      });
})