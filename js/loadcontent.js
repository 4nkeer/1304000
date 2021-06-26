
$('#object').click(function () {
    $('.content').load('./content/object.html');
});

$('#spheres').click(function () {
    $('.content').load('./content/spheres.html')
});

$('#skills').click(function () {
    $('.content').load('./content/skills.html')
});

$('#deadlines').click(function () {
    $('.content').load('./content/deadlines.html')
});

$('#zaochnoe').click(function () {
    $('.info').load('./content/zaochnoe.html')
});

$('#ochnoe').click(function () {
    $('.info').load('./content/ochnoe.html')
});

$("#buttonemail").on("click", function(){
    $("h4").toggleClass("show")
})

$("#buttonsale").on("click", function(){
  $("h5").toggleClass("show2")
})