function initializeCards() {
    $(".cards").sortable({
        connectWith: ".cards",
        start: function(event, ui) {
        },
        stop: function(event, ui) {
            $("html").unbind('mousemove', ui.item.data("move_handler"));
            ui.item.removeData("move_handler");
        }
    });

    $(".portlet-toggle").click(function() {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".card").find(".portlet-content").toggle();
    });

    $('.overview').click(function() {
        var content = $(this).parent().find('.content');

        if (content.css('display') == 'none') {
            content.css('display', 'block');
            setTimeout(function () {
                content.addClass('expand');
                content.find('textarea').focus();
                $('textarea').textareaAutoSize();
            }, 175);
        }

        else {
            content.removeClass('expand');
            setTimeout(function () {
                content.css('display', 'none');
            }, 175);
        }
    });

    $('.edit').click(function() {
        openModal();
    });
}