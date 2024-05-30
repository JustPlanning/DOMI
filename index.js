const images = [
    "https://zrr.kr/Vcqv",
    "https://zrr.kr/7wVw",
    "https://zrr.kr/lMtf",
    "https://zrr.kr/vOxl",

    "https://zrr.kr/tRL8",
    "https://zrr.kr/qPOj",
    "https://zrr.kr/rG5b",
    "https://zrr.kr/qwZb",
];



let currentIdx = 0;
let count = 0;

$(function() {
    $("body").click(function(e) {
        e.preventDefault(); 

        currentIdx ++;
        if (currentIdx >= images.length)
            currentIdx = 0;

        $("#cat").attr('src', images[currentIdx]);
        
        count ++;
        $("#count").text(count.toString().padStart(2, '0') );
    });
})

$(document).keydown(function(e)
{
    e.preventDefault(); 

    currentIdx ++;
    if (currentIdx >= images.length)
        currentIdx = 0;

    $("#cat").attr('src', images[currentIdx]);
    
    count ++;
    $("#count").text(count.toString().padStart(2, '0') );
})
    

