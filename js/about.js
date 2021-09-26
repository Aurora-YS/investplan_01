$(document).ready(function(){
    
    /* about.js */
    

    ////////////// section_01 part //////////////
    const $sec01_arr = [
        {
            $img : "plant.png",
            $sub : `"InvestPlan LTD" Company was registered in March 9th, 2017 in Great Britain (registration number #10660714) and works according to the legislation of this jurisdiction.\n
            InvestPlan LTD fulfills energy saving functions and works in compliance with the normative, legislative and legal enactments. Our goal is to develop new areas, increase the share of the company participation in international projects in energy saving and ecology.\n
            Why have we chosen a traditional nuclear power industry for investing rather than alternative (natural) energy?\n
            The nuclear sector provides 17% of all power consumed by mankind. In industrially developed countries (France, Lithuania, Germany, and Sweden) where there is a deficit of natural power resources (oil, natural gas, coal), the production of electrical power is from 50 to 76%.\n
            According to experts, in the nearest future the development of nuclear energy is forecasted in countries of the Asia-Pacific region (China, India), some countries of the Eastern Europe (the Czech Republic, Slovakia), and countries of the former CIS (Kazakhstan, Russia).\n
            InvestPlan LTD Company has established a number of branches in the countries where the nuclear power industry is the main one for producing electric power. Besides, we actively participate in projects on energy saving on the regional level, take part in ecological programs and invest in scientific developments of technologies for nuclear energy.`
        },
        {
            $img : "certificate.png",
            $sub : `Professional circuit installers, planning engineers, technologists, marketing experts and specialists on power saving work for our company.\n
            We specialize in supplying equipment for nuclear energy and modernizing stations. In particular, in the Russian Federation we participated in modernizing three nuclear reactors. As a result, the total amount of power production was increased by 19%.\n
            Modern nuclear energy is being actively developed thanks to essentially new technologies on ecology and safety, as well as from implementing new perspective innovational solutions.\n
            We conclude agreements with ecological organizations and receive funds financed by the companies implementing innovational technologies to minimize the waste of nuclear reactors.\n
            As of 2017, our investment portfolio has orders for more than twenty projects on reducing power consumption. Some projects are being already implemented, and some of them are planned. The total amount of the orders is about one million US dollars. Our partners are satisfied with our relatively inexpensive and safe technological solutions.\n
            You can feel safe about your investments because the InvestPlan LTD Company works on the state and international level which guarantees stable work and profits.`
        },
    ];

    const $sec01_box = `
    <div class="box">
        <div class="img_part inbox"><img src="" alt=""></div>
        <p class="txt_part inbox"></p>
    </div>`;

    for(i in $sec01_arr){
        $("#section_01 .wrap .cont").append($sec01_box);
    }
    
    $("#section_01 .wrap .cont .box").each(function(n){
        $(this).find("img").attr("src","./img/sub/"+$sec01_arr[n].$img);
        let $sub = $(this).find(".txt_part").text($sec01_arr[n].$sub);
        $sub .html($sub.html().replace(/\n/g, '<br/>'));
    });



});