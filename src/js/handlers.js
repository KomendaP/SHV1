module.exports = (function($) {
    $('.dd-1 ul.dropdown-menu > li').on('click', function (e) {
        "use strict";
        var $this = $(this);
        $('#flag').find('span.flag').attr('class', $this.find('span.flag').attr('class'));
        $('#flag').find('span.word').text($this.find('span.word').text());
    });

    $('.dd-2 ul.dropdown-menu > li').on('click', function (e) {
        "use strict";
        var $this = $(this);
        var cur = $('#cur');
        cur.find('span.cur').text($this.find('span.cur').text());
    });
})($);