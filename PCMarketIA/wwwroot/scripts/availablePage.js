$(document).ready(function () {
    // Inicializar Isotope después de que todas las imágenes estén cargadas
    $('.grid').imagesLoaded(function () {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
    });

    // Función para aplicar filtros
    function applyFilter(filterValue) {
        $('.grid').isotope({ filter: filterValue });
        $('.btn').removeClass('on');
        $(`.btn[data-category="${filterValue}"]`).addClass('on');
        window.history.replaceState(null, null, filterValue ? `?category=${filterValue}` : '.');
    }

    // Manejar clics en los botones
    $('.btn').click(function () {
        const filterValue = $(this).attr('data-category');
        applyFilter(filterValue);
    });

    // Aplicar filtro desde la URL en la carga de la página
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    applyFilter(category ? `.${category}` : '*');
});
