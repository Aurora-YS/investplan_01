$(document).ready(function(){
    
    /* news.js */


    ////////////// section_01 part //////////////
    const $sec01_arr = [
        {
            $img : `news_01.jpg`,
            $title : `Uranium market not yet ready for Cameco restarts, says CEO`,
            $sub : `Although uranium market challenges are easing, Cameco CEO Tim Gitzel says there is still far to go before the Canadian uranium company restarts operations at McArthur River/Key Lake. Gitzel made the comment during the presentation of its second quarter results yesterday...`,
            $date : `Jul-29-2019 03:32:55 PM`
        },
        {
            $img : `news_02.jpg`,
            $title : `Nuclear remains UK’s main low-carbon energy source, despite outages`,
            $sub : `The UK obtained 19% of its primary energy from low-carbon sources last year, with 39% of this from nuclear power, but this was 7% lower than in 2017 due to outages at Dungeness B and Hunterston B towards the end of 2018, official statistics published today show. Nuclear capacity was broadly the same as in 2017, at 9.3 GW...`,
            $date : `Jul-26-2019 06:54:26 PM`
        },
        {
            $img : `news_03.jpg`,
            $title : `Ohio clean energy bill becomes law`,
            $sub : `Ohio's House of Representatives passed House Bill 6 yesterday at a session held earlier than the 1 August date that had been expected, and it was signed into law by Governor Mike DeWine. The law will provide clean energy credits to zero-emission power producers, including nuclear power plants...`,
            $date : `Jul-26-2019 06:54:26 PM`
        },
        {
            $img : `news_04.jpg`,
            $title : `Olkiluoto faces further delay to July 2020`,
            $sub : `Commissioning of the EPR at Olkiluoto in Finland has been delayed again, this time by six months to July 2020, utility Teollisuuden Voima Oyj (TVO) said yesterday. The new date was given in an updated schedule for the OL3 EPR plant unit from the plant supplier Areva-Siemens Consortium...`,
            $date : `Jul-22-2019 11:29:24 AM`
        },
        {
            $img : `news_05.jpg`,
            $title : `Welcome to InvestPlan LTD!`,
            $sub : `Dear clients, We are glad to welcome you to our investment service. We started our company with a great idea for long cooperation. Energy Invest Corporation LTD investment service totally prepared for a long-term and mutually beneficial service for our clients...`,
            $date : `Jul-16-2019 05:55:40 AM`
        },
    ];

    const $sec01_box = `
    <div class="box">
        <div class="left_img"></div>
        <div class="right_txt">
            <div class="top_txt">
                <h3 class="title regular"></h3>
                <p class="sub regular"></p>
            </div>
            <p class="date"></p>
        </div>
    </div>`;

    for(i in $sec01_arr){
        $("#section_01 .wrap .cont").append($sec01_box);
    }

    $("#section_01 .wrap .cont .box").each(function(n){
        $(this).find(".left_img").css("background-image","url(./img/sub/"+$sec01_arr[n].$img+")");
        $(this).find(".title").text($sec01_arr[n].$title);
        $(this).find(".sub").text($sec01_arr[n].$sub);
        $(this).find(".date").text($sec01_arr[n].$date);
    });

});