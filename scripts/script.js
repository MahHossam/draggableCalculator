$(document).ready(function () {

    
    /* Themes */

    $(".theme-1Btn").click(()=>{
        $("body").removeClass("theme-2");
        $("body").removeClass("theme-3");
        $("body").addClass("theme-1");
    });

    $(".theme-2Btn").click(()=>{
        $("body").removeClass("theme-1");
        $("body").removeClass("theme-3");
        $("body").addClass("theme-2");
    });

    $(".theme-3Btn").click(()=>{
        $("body").removeClass("theme-1");
        $("body").removeClass("theme-2");
        $("body").addClass("theme-3");
    });
    
    

    //make items draggable
    
    $(".dragCard").draggable({
        helper: "clone"
    });

    //Define droppable divs
    $(".input-card1").droppable({
        drop: (event, ui) => {
            let val = ui.draggable.text();
            let valWithoutSpaces = val.trim(); //rm white spaces
            $(".myinput1").attr("value", valWithoutSpaces);
            $(".input-card1").css("border", "2px dashed #ffc107");
        }
    });

    $(".input-card2").droppable({
        drop: (event, ui) => {
            let val = ui.draggable.text();
            let valWithoutSpaces = val.trim(); //rm white spaces
            $(".myinput2").attr("value", valWithoutSpaces);
            $(".input-card2").css("border", "2px dashed #ffc107");
        }
    });

    // Using Touch Punch to make drag & drop work on mobile
    $('#widget').draggable();


    /********************************************************************* */
    //Debug -- reupdate input value to new value & convert it to number
    
    /* $(".addBtn").click(() => {
        let val1 = Number($(".myinput1").val());
        let val2 = Number($(".myinput2").val());
        let result = val1+val2;
        $(".result").attr("value",result);
        $(".input-card3").css("border", "2px dashed #28a745");
    }); */
    /********************************************************************* */

    //operation btns

    $(".addBtn").click(() => {
        $(".eqBtn").click(()=>{
            let val1 = Number($(".myinput1").val());
            let val2 = Number($(".myinput2").val());
            let result = val1+val2;
            $(".result").attr("value",result);
            $(".input-card3").css("border", "2px dashed #28a745"); 
        });
    });

    $(".subBtn").click(() => {
        $(".eqBtn").click(()=>{
            let val1 = Number($(".myinput1").val());
            let val2 = Number($(".myinput2").val());
            let result = val1-val2;
            $(".result").attr("value",result);
            $(".input-card3").css("border", "2px dashed #28a745"); 
        });
    });

    //reset btn
    $(".resetBtn").click(()=>{
        $(".myinput1").attr("value", "");
        $(".myinput2").attr("value", "");
        $(".result").attr("value","");
        $(".input-card1").css("border", "2px dashed #fff");
        $(".input-card2").css("border", "2px dashed #fff");
        $(".input-card3").css("border", "2px dashed #fff"); 
    });




    
}); //end doc ready