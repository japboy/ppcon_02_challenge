$(function() {

  $("#get_name").click(function(){
    $("#subject01_result").html($("#yamada_name").html());

  });

  var $list = function(content){
    return '<li>' + content + '</li>';
  };

  $("#add_sakurako").click(function(){
    $('#member_list').prepend($list("櫻子"));
  });

  $("#add_himawari").click(function(){
    $('#member_list').prepend($list("向日葵"));
  });

  $("#remove_akari").click(function(){
    $("#member_list_remove > #akari").remove();
  });

  $("#change_visible_momo").toggle(function(){
    $("#stealth_momo").css({ display: "block" });
  }, function(){
    $("#stealth_momo").css({ display: "none" });
  });

  $("#change_header_html").click(function(){
    $("h2").each(function(index, element){
      $(element).text($(element).text().replace(/(.*)/, "【$1】"));
    });
  });

});
