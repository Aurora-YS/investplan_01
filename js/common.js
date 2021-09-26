$(document).ready(function(){
    
    /* common.js */
    

    ////////////// header part //////////////
    $("#header").load("./header.html", function(){
        let $hash = location.hash,
            $num = Number($hash.replace("#", ""));
        $("header nav li").removeClass("active");
        $("header nav li").eq($num).addClass("active");
    });

    $(window).scroll(function(){
        const $header = $('#header'),
              scroll = $(window).scrollTop();

        if(scroll >= 70){
            $header.addClass('fixed');
        }else{
            $header.removeClass('fixed');
        }
    });

    ////////////// cloud part //////////////
    setInterval(function $cloud(){
        $(".cloud").animate({"background-position-x":"100%"}, 30000, function(){
            $(".cloud").animate({"background-position-x":"0%"}, 30000);
        });
        return $cloud;
    }(), 60010);


    ////////////// footer part //////////////
    $("#footer").load("./footer.html", function(){

        function resizeEvt(){
            const w_height = $(window).height();
            
            if(w_height < $(document).height()){
                $("#section_01").css("min-height", "468px");
                $("#footer").removeClass("sticky");
            }else{
                $("#footer").addClass("sticky");
            }
        };
        resizeEvt();

        $(window).resize(function(){
            resizeEvt();
        });

    });



});
