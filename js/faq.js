$(document).ready(function(){
    
    /* faq.js */


    ////////////// section_01 part //////////////
    const $sec01_arr = [
        {
            $title : `HOW CAN I BECOME AN INVESTOR OF THE INVESTPLAN LTD?`,
            $sub : `Firstly, you must register. Fill out the registration form. We recommend you to specify only true data. Create a login, a password and specify your email. After confirming your registration, you can log in your profile and use all services of the website: to specify payment details, credit the account, choose the investment plan, make a deposit, etc "Registration".`
        },
        {
            $title : `What electronic payment systems can I use for financial operations?`,
            $sub : `We work with the following electronic payment systems: Perfect Money, Payeer, Bitcoin, Ethereum, Litecoin, Dash and Dogecoin.
            If you do not have a wallet in these systems, you can create it by using the following links
            Perfect Money: perfectmoney.is.
            Payeer: payeer.com
            Visa or Mastercard: visa.com & mastercard.com
            Bitcoin: bitcoin.com
            Ethereum: www.ethereum.org
            Litecoin: litecoin.com
            Dash: dash.org
            Dogecoin: dogecoin.com`
        },
        {
            $title : `CAN I CHANGE MY PASSWORD, PAYMENT DETAILS AND EMAIL?`,
            $sub : `You can change your password yourself in your profile. You can also change payment wallet you use to make payments only through the project administrator by making a request via one of the contacts specified on the website. However, you can not change your email.`
        },
        {
            $title : `HOW CAN I WITHDRAW MY PROFIT?`,
            $sub : `Depending on the investment plan you chose, the profit is formed from the accrual percent and deposit. As soon as funds are credited to your personal account, you can request to withdraw them or create a new deposit by using your personal account. The money will be immediately sent to your wallet of the electronic payment system you used to make a deposit. The funds accrued according to the affiliate program are available for immediate withdrawal "Withdraw Funds".`
        },
        {
            $title : `HOW MUCH TIME DOES IT TAKE TO CREDIT THE ACCOUNT?`,
            $sub : `Accounts are credited immediately and you can use the funds to start your investment activity at once.`
        },
        {
            $title : `DO YOU CHARGE ANY HIDDEN FEES FROM DEPOSIT?`,
            $sub : `No, we don't charge any hidden fees.`
        },
        {
            $title : `WHAT ARE THE MINIMUM AND MAXIMUM DEPOSIT AMOUNT?`,
            $sub : `The minimum deposit amount is $50. Maximum - $100,000.`
        },
        {
            $title : `DO YOU CHARGE ANY HIDDEN FEES FROM WITHDRAWALS?`,
            $sub : `Some payment processors charge some fees:
            - PerfectMoney: 0.5%
            - Payeer: 0.95%
            - Cryptocurrencies: 0.9%`
        },
    ];

    const $sec01_box = `
    <div class="box">
        <h2 class="title regular"></h2>
        <p class="sub regular"></p>
    </div>`;

    for(i in $sec01_arr){
        $("#section_01 .wrap .cont").append($sec01_box);
    }

    $("#section_01 .wrap .cont .box").each(function(n){
        $(this).find(".title").text($sec01_arr[n].$title);
        let $sub = $(this).find(".sub").text($sec01_arr[n].$sub);
        $sub.html($sub.html().replace(/\n/g, '<br/>'));
    });

    

});