/* global $*/
const hov = $("#js-box-hover")
const over = $("#js-box-over")

$(function(){
  $("#js-box-hover").hover(
  function () {
   $(this).css({'background-color': '#FF0000'});
  });
});

$(function(){
  $("#js-box-over").mouseover(function () {
  $(this).css({'background-color': '#FF0000'});
  });
});

$(function(){
  $("a[href^='https://']").attr("target","_blank");
});

$(function(){
  $('.sampleBox').click(function(){
    window.location=$(this).find("a").attr("href");
      return false;
  });
});

$(function () {
  $('.imgBox img').hide(); //ページ上の画像を隠す
});

var i = 0;
var int=0;
$(window).bind("load", function() {
  //ページコンテンツのロードが完了後、機能させる
  var int = setInterval("doThis()",500);
  //フェードするスピード
});

function doThis() {
  var images = $('img').length;//画像の数を数える
  if (i >= images) {// ループ
    clearInterval(int);//最後の画像までいくとループ終了
    }
    $('img:hidden').eq(0).fadeIn(500);//一つずつ表示する
    i++;
}

$(function(){
  $('.deleteBox .delete').on('click',function(){
    $(this).parents('.deleteBox').animate({
      opacity: "hide"},"slow");
  });
});

$(function () {
  $("form :input").focus(function() {
    $("label[for='" + this.id + "']").addClass("labelfocus");
  });

  $("form :input").blur(function() {
    $("label[for='" + this.id + "']").removeClass("labelfocus");
  });
});

$(function(){
  $(".focus").focus(function(){
    if(this.value == "キーワードを入力"){
      $(this).val("").css("color","#f39");
    }
  });
  $(".focus").blur(function(){
    if(this.value == ""){
      $(this).val("キーワードを入力").css("color","#969696");
    }
  });
});

$(function () {
  $("textarea").keyup(function(){
    var counter = $(this).val().length;
    $("#countUp").text(counter);
    
    if(counter == 0){
      $("#countUp").text("0");
    } 
    if(counter >= 10){
      $("#countUp").css("color","red");
    } else {
      $("#countUp").css("color","#666");
    }
  });
});
