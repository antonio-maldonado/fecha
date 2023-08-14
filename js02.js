// let dia = document.getElementById("dia");
// let mes = document.getElementById("mes");
// let anio = document.getElementById("anio");

// let dias=31;
function esAnioBisiesto( anio ){
    return anio%4===0;
}


function mostrarDias(){
    let mes = (document.getElementById("mes"));
    let anio = parseInt(document.getElementById("anio").value);

    switch(parseInt(mes.value)){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dias = 31;
            break;
    
        case 2:
            dias = esAnioBisiesto( anio ) ? 29 : 28;
        
            break;
    
        case 4:
        case 6:
        case 9:
        case 11:
            dias = 30;
            break;
    
        default:
            dias = 31;
            break;
    }
    dia.setAttribute("max",dias);
    return dias;
}

const diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]

function calcularFecha(){
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let anio = parseInt(document.getElementById("anio").value);

    let fecha = new Date(anio,mes-1,dia);
    let mensaje;
    let mostrarFecha = document.getElementById("fechaCompleta");

    if( mes >= 13 || mes <= 0 || dia > mostrarDias(  ) ){
        mostrarFecha.textContent = "Fecha inválida";
        return;
    }

    if( fecha.getDay() >= 1 && fecha.getDay()<=5 ){
        mensaje = ", día laborable"
    }else{
        mensaje = ", día no laborable"
    }

    mostrarFecha.textContent=diasSemana[fecha.getDay()]+mensaje;
}
