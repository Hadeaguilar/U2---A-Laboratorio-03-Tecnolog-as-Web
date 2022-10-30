function calcula(){
    var nombre = document.getElementsByName("nombre")[0].value;

    var nota1 = document.getElementsByName("nota1")[0].value;
    var nota2 = document.getElementsByName("nota2")[0].value;
    var nota3 = document.getElementsByName("nota3")[0].value;
    var nota4 = document.getElementsByName("nota4")[0].value;
    var nota5 = document.getElementsByName("nota5")[0].value;
    var nota6 = document.getElementsByName("nota6")[0].value;
    
    var verificar_nombre = document.getElementById("verificar_nombre");
    var verificar_nota1 = document.getElementById("verificar_nota1");
    var verificar_nota2 = document.getElementById("verificar_nota2");
    var verificar_nota3 = document.getElementById("verificar_nota3");
    var verificar_nota4 = document.getElementById("verificar_nota4");
    var verificar_nota5 = document.getElementById("verificar_nota5");
    var verificar_nota6 = document.getElementById("verificar_nota6");
    var verificar_ponderacion = document.getElementById("ponderacion");
    ponderacion1 = (nota1*0.12) + (nota2*0.21)
    ponderacion2 = (nota3*0.12) + (nota4*0.21)
    ponderacion3 = (nota1*0.13) + (nota2*0.21)
    ponderacion_final = (ponderacion1) + (ponderacion2) + (ponderacion3)

    verificar_nombre.innerHTML = "";
    verificar_nota1.innerHTML = "";
    verificar_nota2.innerHTML = "";
    verificar_nota3.innerHTML = "";
    verificar_nota4.innerHTML = "";
    verificar_nota5.innerHTML = "";
    verificar_nota6.innerHTML = "";


    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]*$/.test(nombre) || nombre === "" || nombre.length < 3 || nombre.length > 20){
        verificar_nombre.innerHTML = ("Datos inválidos");return;
    }
    if(nota1 < 1.0 || nota1 > 7.0 || isNaN(nota1) || nota1 == ""){
        verificar_nota1.innerHTML = ("Datos inválidos");return;
    }else if(nota2 < 1.0  || nota2 > 7.0 || nota2 === ""){
        verificar_nota2.innerHTML = "Datos inválidos";return;
    }
    if(nota3 < 1.0 || nota3 > 7.0 || isNaN(nota3) || nota3 == ""){
        verificar_nota3.innerHTML = ("Datos inválidos");return;
    }else if(nota4 < 1.0  || nota4 > 7.0 || nota4 === ""){
        verificar_nota4.innerHTML = ("Datos inválidos");return;
    }
    if(nota5 < 1.0 || nota5 > 7.0 || isNaN(nota5) || nota5 == ""){
        verificar_nota5.innerHTML = ("Datos inválidos");return;
    }else if(nota6 < 1.0  || nota6 > 7.0 || nota6 === ""){
        verificar_nota6.innerHTML = ("Datos inválidos");return;
    }
    if(ponderacion_final > 4.0){
        verificar_ponderacion.innerHTML =  "<table>"+
        "<tr>"+
            "<th colspan='3'><h1> APROBADO</h1></th>"+
        "</tr>"+
        "<tr>"+
            "<th colspan='3'>Nombre del Estudiante: "+nombre+"</th>"+
        "</tr>"+
        "<tr>"+
            "<th>Promedio: "+ponderacion_final+"</th>"+
        "</tr>"+ 
        "<tr>"+
                    "<td><b>Unidad 1</b></td>"+
                    "<td><b>Unidad 2 </b></td>"+
                    "<td><b>Unidad 3</b></td>"+
        "</tr>"+
        "<tr>"+
            "<td><b>Nota 1 (12%): </b>"+nota1+"</td>"+
            "<td><b>Nota 1 (12%): </b>"+nota3+"</td>"+
            "<td><b>Nota 1 (13%): </b>"+nota5+"</td>"+
    "</tr>"+
    "<tr>"+
            "<td><b>Nota 2 (21%): </b>"+nota2+"</td>"+
            "<td><b>Nota 2 (21%): </b>"+nota4+"</td>"+
            "<td><b>Nota 2 (21%): </b>"+nota6+"</td>"+
    "</tr>"+
    "<tr>"+
            "<td><b>Ponderacion: </b>"+ponderacion1+"</td>"+
            "<td><b>Ponderacion: </b>"+ponderacion2+"</td>"+
            "<td><b>Ponderacion: </b>"+ponderacion3+"</td>"+
    "</tr>"+
    "</table>"
    }else{
        verificar_ponderacion.innerHTML = "<table>"+
        "<tr>"+
            "<th colspan='3'><h1> REPROBADO</h1></th>"+
        "</tr>"+
        "<tr>"+
            "<th colspan='3'>Nombre del Estudiante: "+nombre+"</th>"+
        "</tr>"+
        "<tr>"+
            "<th>Promedio: "+ponderacion_final+"</th>"+
        "</tr>"+ 
        "<tr>"+
                    "<td><b>Unidad 1</b></td>"+
                    "<td><b>Unidad 2 </b></td>"+
                    "<td><b>Unidad 3</b></td>"+
        "</tr>"+
        "<tr>"+
            "<td><b>Nota 1 (12%): </b>"+nota1+"</td>"+
            "<td><b>Nota 1 (12%): </b>"+nota3+"</td>"+
            "<td><b>Nota 1 (13%): </b>"+nota5+"</td>"+
    "</tr>"+
    "<tr>"+
            "<td><b>Nota 2 (21%): </b>"+nota2+"</td>"+
            "<td><b>Nota 2 (21%): </b>"+nota4+"</td>"+
            "<td><b>Nota 2 (21%): </b>"+nota6+"</td>"+
    "</tr>"+
    "<tr>"+
            "<td><b>Ponderacion: </b>"+ponderacion1+"</td>"+
            "<td><b>Ponderacion: </b>"+ponderacion2+"</td>"+
            "<td><b>Ponderacion: </b>"+ponderacion3+"</td>"+
    "</tr>"+
    "</table>"
    }

}