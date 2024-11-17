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
