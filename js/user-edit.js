$(function() {

  //////////
  // 解答 1

  $("#get_name").click(function () {
    $("#subject01_result")
      .text($("#yamada_name").text())
      .css({ fontSize: '30.998px' })
      .animate({ fontSize: '-=20px' }, 300);
  });

  //////////
  // 解答 2

  var list = function(id, content){
    return '<li id=\"' + id + '\">' + content + '</li>';
  },

  $sakurakoPusher = function () {
    var sakurakoLevel = 0;

    $('#member_list').append(list('sakurako', '櫻子'));
    $('#member_list > li').each(function (index, element) {
      if ('櫻子' === $(element).text()) {
        sakurakoLevel += 1;
      }
    });

    if (10 === sakurakoLevel) {
      $("#add_sakurako")
        .off('click', $sakurakoPusher)
        .css({ opacity: '0.5' })
        .popover({
          title: 'お知らせ',
          content: '<p style=\"height:64px;\"><img src=\"img\/thumb_sakurako_ahe.png\" width=\"64\" height=\"64\" style=\"border-radius:16px;float:left;margin-right:5px;\">櫻子はレベル ' + sakurakoLevel + ' になった！アヘアヘ。</p>'
        });
    }
  },

  $himawariPusher = function () {
    var himawariLevel = 0;

    $('#member_list').prepend(list('himawari', '向日葵'));
    $('#member_list > li').each(function (index, element) {
      if ('向日葵' === $(element).text()) {
        himawariLevel += 1;
      }
    });

    if (20 === himawariLevel) {
      $("#add_himawari")
        .off('click', $himawariPusher)
        .css({ opacity: '0.5' })
        .popover({
          title: 'お知らせ',
          content: '<p style=\"height:64px;\"><img src=\"img\/thumb_himawari.png\" width=\"64\" height=\"64\" style=\"border-radius:16px;float:left;margin-right:5px;\">向日葵はレベル ' + himawariLevel + ' になった！じゅるりっ。</p>'
        });
    }
  };

  $("#add_sakurako").on('click', $sakurakoPusher);
  $("#add_himawari").on('click', $himawariPusher);

  //////////
  // 解答 3

  var akariRemover = function () {
    $("#remove_akari").off('click', akariRemover).css({ opacity: '0.5' });
    $("#member_list_remove > #akari").remove();

    $("#remove_akari").popover({
      title: 'お知らせ',
      content: '<p style=\"height:64px;\"><img src=\"img\/thumb_akari.png\" width=\"64\" height=\"64\" style=\"border-radius:16px;float:left;margin-right:5px;\">あかりは、空気から虚無へレベルアップした！</p>'
    });
  };

  $("#remove_akari").on('click', akariRemover);

  //////////
  // 解答 4

  var evenClicker = function () {
    $('#change_visible_momo')
      .off('click', evenClicker).css({ opacity: '0.5' });
    $('#subject4').css({
      backgroundImage: 'url("img/stealthmomo.png")',
      backgroundPosition: '50%',
      backgroundSize: 'cover'
    });
    $("#stealth_momo")
      .css({ display: "block", opacity: '0' })
      .animate({ opacity: "+=1" }, 1000, function () {
        $('#change_visible_momo')
          .on('click', oddClicker).css({ opacity: '1' });
      });
  },

  oddClicker = function () {
    $('#change_visible_momo')
      .off('click', oddClicker).css({ opacity: '0.5' });
    $('#subject4').css({ backgroundImage: 'none' });
    $("#stealth_momo")
      .css({ opacity: "1" })
      .animate({ opacity: "-=1" }, 1000, function () {
        $('#change_visible_momo')
          .on('click', evenClicker).css({ opacity: '1' });
      });
  };

  $("#change_visible_momo").on('click', evenClicker);

  //////////
  // 解答 5

  var imageBracket = function () {
    var brackets = ['akari', 'chinatsu', 'himawari',
                    'kyoko', 'sakurako', 'yui'],
        character = brackets[Math.floor(Math.random() * 6)];

    return '<img src=\"img\/thumb_' + character + '.png\" alt=\"' + character + '\" width=\"32\" height=\"32\" style=\"border-radius:16px;box-shadow:0 0 6px #ccc;margin:0 6px;\">';
  },

  ordinalReplacer = function () {
    $("h2").each(function (index, element) {
      $(element).html($(element).text()
                        .replace(/([0-9ぁ-ヶ亜-黑、\s]*)/,
                                 imageBracket() + '$1' + imageBracket()));
    });
  },

  secondVirginReplacer = function () {
    $("#change_header_html").off('click', secondVirginReplacer);

    $("h2").each(function (index, element) {
      $(element).text($(element).text().slice(1, -1));
      $(element).html(imageBracket() + $(element).html() + imageBracket());
    });

    $("#change_header_html").on('click', ordinalReplacer);
  },

  virginReplacer = function () {
    $("#change_header_html").off('click', virginReplacer);

    $("h2").each(function (index, element) {
      $(element).text('【' + $(element).text() + '】');
    });

    $("#change_header_html").on('click', secondVirginReplacer);
  };

  $("#change_header_html").on('click', virginReplacer);

});
