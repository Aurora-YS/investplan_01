$(document).ready(function(){
    
    /* partnership.js */


    const $sec01_arr = [
        {
            $percent : `13%`,
            $title : `Commission for Partners`,
            $sub : `As an standard user, you are able to earn an incentive amount of 
            9% - 3% - 1% commission per invesment of your referrals. 
            Standard members are not required to have any active 
            investment, or account balance in order to be able to earn from 
            their referrals.`,
            $btn_txt : `Get Started Now`,
            $img : `partner.png`
        },
        {
            $percent : `19%`,
            $title : `Commission for Representatives`,
            $sub : `You are able to become a global representative from all over the 
            world and take advantages of 12% - 4% - 2% - 1% referral 
            commission. In particular, you do not need an active deposit to 
            register for a regional representative. Please fill out the form 
            below.`,
            $btn_txt : `Representative Form`,
            $img : `representative.png`
        },
    ];

    const $sec01_box = `
    <div class="box">
        <h3 class="title"><span></span>&nbsp;<span></span></h3>
        <p class="sub"></p>
        <div class="btn">
            <a href="#" onclick="return false;"></a>
        </div>
        <div class="bg_img"></div>
    </div>`;

    for(i in $sec01_arr){
        $("#section_01 .wrap .cont .bot_part").append($sec01_box);
    }

    $("#section_01 .wrap .cont .bot_part .box").each(function(n){
        $(this).find(".title > span:eq(0)").text($sec01_arr[n].$percent);
        $(this).find(".title > span:eq(1)").text($sec01_arr[n].$title);
        $(this).find(".sub").text($sec01_arr[n].$sub);
        $(this).find(".btn > a").text($sec01_arr[n].$btn_txt);
        $(this).find(".bg_img").css("background-image","url(./img/sub/"+$sec01_arr[n].$img+")");
    });


    ////////////// section_02 part //////////////
    const $sec02_box = `<a href="#" onclick="return false;"><img src="" alt=""></a>`;

    for(i=0; i<10; i++){
        $("#section_02 .wrap .represent").append($sec02_box);
        $("#section_02 .wrap .represent a").eq(i).find("img").attr("src", "./img/managers/m_0"+(i+1)+".jpg");
        if(i == 9){
            $("#section_02 .wrap .represent a").eq(i).find("img").attr("src", "./img/managers/m_"+(i+1)+".jpg");
        }
    }


    

});