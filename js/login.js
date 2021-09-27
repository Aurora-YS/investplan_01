$(document).ready(function(){
    
    /* login.js */

    $("#section_01 #signin_form .txt_box #signin_id").blur(function(){
        let $id_val = $(this).val();
        if($id_val.trim() == ""){
            $(this).siblings("p").show();
            return false;
        }else{
            $(this).siblings("p").hide();
        }
    });


    $("#section_01 #signin_form .txt_box #signin_pw").blur(function(){
        let $pw_val = $(this).val();
        if($pw_val.trim() == ""){
            $(this).siblings("p").show();
            return false;
        }else{
            $(this).siblings("p").hide();
        }
    });


});