module.exports = (function($) {
    "use strict";
    var slider = $('section.slider');

    slider.find('li.slide.active').removeClass('.active');
    $.fn.beCarousel = function () {
        var params = par || {},
            slider = this;
        
        function init(self) {
            this.slides = self.find('.slide')
        }
        return this;
    }
})($);