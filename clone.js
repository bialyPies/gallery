    $(document).ready(function ($) {
        $(window).resize(function() {
            if ( $(window).width() < 768 ) {
                $(".c3").appendTo("#first-col    ");
                $(".c4").appendTo("#second-col   ");
            }
            if ( $(window).width() > 768 ) {
                $(".c3").appendTo("#third-col");
                $(".c4").appendTo("#fourth-col");
            }
        });
    });
    $(document).ready(function ($) {
        if ( $(window).width() < 768 ) {
            $(".c3").appendTo("#first-col    ");
            $(".c4").appendTo("#second-col   ");
        }
        if ( $(window).width() > 768 ) {
            $(".c3").appendTo("#third-col");
            $(".c4").appendTo("#fourth-col");
        }
    });