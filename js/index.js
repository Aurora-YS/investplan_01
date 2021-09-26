$(document).ready(function(){
    
    /* index.js */


    ////////////// section_01 part //////////////
    const $sec01_arr = [
        {
            $img : "if_vector_65_02_473778.png",
            $title : "What’s “InvestPlan”?",
            $sub : "A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."
        },
        {
            $img : "if_vector_65_07_473788.png",
            $title : "Breaking down “InvestPlan”",
            $sub : "These groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."
        },
        {
            $img : "if_vector_65_14_473802.png",
            $title : "Incredible Strategy & Analisys",
            $sub : "In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."
        },
    ];

    const $sec01_box = `
    <div class="box">
        <img src="" alt="">
        <h3 class="title"></h3>
        <p class="sub"></p>
    </div>`;

    for(i in $sec01_arr){
        $("#section_01 .wrap .cont").append($sec01_box);
    }

    $("#section_01 .wrap .cont .box").each(function(n){
        $(this).find("img").attr("src","./img/"+$sec01_arr[n].$img);
        $(this).find(".title").text($sec01_arr[n].$title);
        $(this).find(".sub").text($sec01_arr[n].$sub);
    });

    ////////////// section_03 part //////////////
    const $sec03_arr = [
        {
            $img : "invest-01.jpg",
            $title : "Newyork in USA",
            $sub : "Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security."
        },
        {
            $img : "invest-02.jpg",
            $title : "Tokyo in Japan",
            $sub : "Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for..."
        },
        {
            $img : "invest-03.jpg",
            $title : "Sydney in Australia",
            $sub : "The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ..."
        },
        {
            $img : "invest-04.jpg",
            $title : "Istanbul in Turkey",
            $sub : "If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be."
        },
    ];

    const $sec03_box = `
    <div class="box">
        <div class="t_img"><img src="./img/arrow_right.png" alt=""></div>
        <h3 class="title"></h3>
        <p class="sub"></p>
        <div class="arrow">
            <a href="#" onclick="return false;"><img src="./img/arrow_right.png" alt=""></a>
        </div>
    </div>`;

    for(i in $sec03_arr){
        $("#section_03 .wrap .cont").append($sec03_box);
    }

    $("#section_03 .wrap .cont .box").each(function(n){
        $(this).find(".t_img img").attr("src","./img/"+$sec03_arr[n].$img);
        $(this).find(".title").text($sec03_arr[n].$title);
        $(this).find(".sub").text($sec03_arr[n].$sub);
    });


    ////////////// section_04 part //////////////
    const $sec04_box = `<a href="#" onclick="return false;"><img src="" alt=""></a>`;

    for(i=0; i<10; i++){
        $("#section_04 .wrap .managers").append($sec04_box);
        $("#section_04 .wrap .managers a").eq(i).find("img").attr("src", "./img/managers/m_0"+(i+1)+".jpg");
        if(i == 9){
            $("#section_04 .wrap .managers a").eq(i).find("img").attr("src", "./img/managers/m_"+(i+1)+".jpg");
        }
    }


});