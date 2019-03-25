var macy = Macy({
    container: '#macy',
    trueOrder: false,
    waitForImages: false,
    margin: 0,
    columns: 3,
    breakAt: {
        1200: 4,
        940: 2,
        520: 1,
        400: 1
    }
});

$('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

var $grid =  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })