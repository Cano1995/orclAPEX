/*
 *
 * Este archivo es parte de un proyecto de desarrollo en Oracle APEX.
 *
 * El código proporcionado en este archivo incluye diversas funciones de UI,
 * como la manipulación de ítems, mensajes temporales, entre otros.
 * 
 * Este archivo es software libre: puedes redistribuirlo y/o
 * modificarlo bajo los términos de la Licencia Pública General de GNU
 * según se publica por la Free Software Foundation, ya sea la versión 3
 * de la Licencia, o (a tu elección) cualquier versión posterior.
 *
 * Este programa se distribuye con la esperanza de que sea útil,
 * pero SIN GARANTÍA ALGUNA. Consulta
 * la Licencia Pública General de GNU para más detalles.
 
 *
 * Autor: Cristhian Cano
 * Fecha: 17/11/2024
 * Desarrollador Oracle APEX
 * LinkedIn: https://www.linkedin.com/in/cristhian-cano-bogado-86473713b/
 * Blog: https://paraguayandev.hashnode.dev/
 */

// Función para hacer parpadear un elemento
function blinkItem(itemId, times = 3, interval = 1000) {
    // Verifica que el elemento con el ID proporcionado exista
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }
    
    // Función interna que ejecuta el parpadeo
    function blink() {
        $item.fadeOut(500).fadeIn(500);
    }

    // Ejecutar el parpadeo "times" veces con el intervalo dado
    for (let i = 0; i < times; i++) {
        setTimeout(blink, i * interval);
    }
}


function ColorDeFondo(itemId, color) {
    // Verifica que el elemento con el ID proporcionado exista
    var elemento = document.getElementById(itemId);
    
    if (elemento) {
        elemento.style.backgroundColor = color;
    } else {
        console.error('No se encontró un elemento con ID:', itemId);
    }
}

function show_error(mensaje,item,location){
    apex.message.showErrors([{
    "type": "error",
    "message": mensaje,
    "location": location,
    "pageItem": item, // Dinámico
    "unsafe": false
}]);
}


function clearErrors(){
    apex.message.clearErrors();
}
function mostrarItem(itemId, mostrar = true) {
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }

    if (mostrar) {
        $item.show();  // Mostrar el ítem
    } else {
        $item.hide();  // Ocultar el ítem
    }
}
function habilitarItem(itemId, habilitar = true) {
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }

    if (habilitar) {
        $item.prop('disabled', false);  // Habilitar el ítem
    } else {
        $item.prop('disabled', true);   // Deshabilitar el ítem
    }
}
function setValorItem(itemId, nuevoValor) {
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }

    $item.val(nuevoValor);  // Actualiza el valor del ítem
}
function addClase(itemId, claseCSS, agregar = true) {
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }

    if (agregar) {
        $item.addClass(claseCSS);  // Agregar clase
    } else {
        $item.removeClass(claseCSS);  // Eliminar clase
    }
}

function enfocarItem(itemId) {
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }

    $item.focus();  // Lleva el foco al ítem
}
function succesTmp(mensaje, tipo = 'success', duracion = 3000) {
    // Define colores según el tipo de mensaje
    var colorFondo, colorTexto;

    if (tipo === 'error') {
        colorFondo = '#f8d7da';  // Fondo rojo claro para error
        colorTexto = '#721c24';  // Texto rojo oscuro
    } else if (tipo === 'warning') {
        colorFondo = '#fff3cd';  // Fondo amarillo claro para advertencia
        colorTexto = '#856404';  // Texto amarillo oscuro
    } else {
        colorFondo = '#d4edda';  // Fondo verde claro para éxito
        colorTexto = '#155724';  // Texto verde oscuro
    }

    // Crea el mensaje con el color adecuado
    var $mensaje = $('<div class="apex-notification"></div>').text(mensaje);
    
    // Estilos en línea para el mensaje
    $mensaje.css({
        'background-color': colorFondo,
        'color': colorTexto,
        'border': '1px solid ' + colorTexto,
        'padding': '10px',
        'border-radius': '5px',
        'position': 'fixed',
        'top': '10px',
        'right': '10px',
        'z-index': '1000',
        'font-size': '14px',
        'font-weight': 'bold'
    });

    // Agregar el mensaje al body
    $('body').append($mensaje);

    // Hacer desaparecer el mensaje después de un tiempo
    setTimeout(function() {
        $mensaje.fadeOut(500, function() {
            $(this).remove();
        });
    }, duracion);
}
function desplazarAItem(itemId) {
    var $item = $('#' + itemId);
    
    if ($item.length === 0) {
        console.error('No se encontró un elemento con ID:', itemId);
        return;
    }

    $('html, body').animate({
        scrollTop: $item.offset().top - 100  // Ajustar el desplazamiento vertical
    }, 500);  // Duración de 500ms para el desplazamiento
    enfocarItem(itemId);
}

function disableFormulario(formId,habilitar=false) {
    $('#' + formId + ' :input').prop('disabled', habilitar);  // Desactiva todos los ítems dentro de un formulario
}

//