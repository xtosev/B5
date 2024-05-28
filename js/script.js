$('#s1').click(()=>{
    window.open("https://sr.wikipedia.org/wiki/Гитара");
})

$('#s2').click(()=>{
    window.open("https://sr.wikipedia.org/wiki/Виолина");
})

$('#s3').click(()=>{
    window.open("https://sr.wikipedia.org/wiki/Клавир");
})

$('#s4').click(()=>{
    window.open("https://sr.wikipedia.org/wiki/Бубњеви");
})

$('#s5').click(()=>{
    window.open("https://sr.wikipedia.org/wiki/Хармоника");
})

$('#s6').click(()=>{
    window.open("https://sr.wikipedia.org/wiki/Контрафагот");
})


var audio1 = new Audio('./audio/gitara.mp3');
$('#z1').mouseenter(()=>{
    audio1.play();
})

$('#z1').mouseleave(()=>{
    audio1.pause();
})

var audio2 = new Audio('./audio/violina.mp3');
$('#z2').mouseenter(()=>{
    audio2.play();
})

$('#z2').mouseleave(()=>{
    audio2.pause();
})

var audio3 = new Audio('./audio/klavir.mp3');
$('#z3').mouseenter(()=>{
    audio3.play();
})

$('#z3').mouseleave(()=>{
    audio3.pause();
})

var audio4 = new Audio('./audio/bubnjevi.mp3');
$('#z4').mouseenter(()=>{
    audio4.play();
})

$('#z4').mouseleave(()=>{
    audio4.pause();
})

var audio5 = new Audio('./audio/harmonika.mp3');
$('#z5').mouseenter(()=>{
    audio5.play();
})

$('#z5').mouseleave(()=>{
    audio5.pause();
})

var audio6 = new Audio('./audio/kontrafagot.mp3');
$('#z6').mouseenter(()=>{
    audio6.play();
})

$('#z6').mouseleave(()=>{
    audio6.pause();
})

