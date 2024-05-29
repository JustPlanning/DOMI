const images = [
    "https://zrr.kr/Vcqv",
    "https://zrr.kr/7wVw",
    "https://zrr.kr/lMtf",
    "https://zrr.kr/vOxl"
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