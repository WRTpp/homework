/**
 * 
 * Created by Administrator on 2017/7/20.
 */

$(function () {
    $('#down1').click(function () {
        $('#select1').show()
        $("#icon").removeClass()
        $("#icon").addClass("fa fa-caret-up")
    });
    $("#select1 li").click(function () {
       $("#change").html($(this).children($('span')).html());
        $("#icon").removeClass()
        $("#icon").addClass("fa fa-caret-down")
        $('#select1').hide()
    });
    $('#down2').click(function () {
        $('#select2').show()
        $("#icon1").removeClass()
        $("#icon1").addClass("fa fa-caret-up")
    });
    $("#select2 li").click(function () {
       $("#change2").text($(this).children($('span')).html());
       $("#change3").text($(this).children("i").text());
        $("#icon1").removeClass()
        $("#icon1").addClass("fa fa-caret-down")
        $('#select2').hide()
    })
})

