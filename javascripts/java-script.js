// первый экран : движение заднего плана 
$(document).ready(function() {
	$('body').mousemove(function(event) {
    $(document).mousemove(function(e) {
      $('.moveback2, .moveback2port').css({
        left: 10 - e.pageX / 9,
        top: 10 - e.pageY / 9
      })
    })
  })
  // по первой кнопке включаем 1ую секцию
    $(".button_sectionfirst").click(function(){
        $(".sectionfirst").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionmain").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
    });
    
    // по второй кнопке включаем 2ую секцию
    $(".button_sectionsecond").click(function(){
        $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionmain").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
    });

    // по третьей кнопке включаем 3ую секцию
    $(".button_sectionthird").click(function(){
        $(".sectionthird").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionmain").addClass("sectionnone").removeClass("sectionblock");
    });
    document.querySelector(".button_sectionfour").addEventListener('click', () => {
      document.querySelector(".NGC2392").pause()
    })
    $(".button_sectionfour").click(function(){
      $(".sectionmain").addClass("sectionblock").removeClass("sectionnone");
      $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
      $(".sectionfive").addClass("sectionnone").removeClass("sectionblock");
      $(".sectionsix").addClass("sectionnone").removeClass("sectionblock");
  });
  $(".button_sectionfour1").click(function(){
    $(".sectionmain").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
});

$(".info1").click(function(){
$(".tablet1").addClass("sectionblock").removeClass("sectionnone");
});
$(".no").click(function(){
  $(".tablet1").addClass("sectionnone").removeClass("sectionblock");
});

$(".info4").click(function(){
  $(".tablet2").addClass("sectionblock").removeClass("sectionnone");
  });
  $(".no2").click(function(){
    $(".tablet2").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".info5").click(function(){
    $(".tablet3").addClass("sectionblock").removeClass("sectionnone");
    });
    $(".no3").click(function(){
      $(".tablet3").addClass("sectionnone").removeClass("sectionblock");
    });
    
  
// смена музыки
  $(".button_sectionfive").click(function(){
    $(".sectionsix").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
})
$(".button_sectionsix").click(function(){
  $(".sectionfive").addClass("sectionblock").removeClass("sectionnone");
  $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
})
$(".button_sectionseven").click(function(){
  $(".sectionfirst").addClass("sectionblock").removeClass("sectionnone");
  $(".sectionfive").addClass("sectionnone").removeClass("sectionblock");
});
$(".button_sectioneight").click(function(){
  $(".sectionsix").addClass("sectionblock").removeClass("sectionnone");
  $(".sectionfive").addClass("sectionnone").removeClass("sectionblock");
});
$(".button_sectionnine").click(function(){
  $(".sectionfive").addClass("sectionblock").removeClass("sectionnone");
  $(".sectionsix").addClass("sectionnone").removeClass("sectionblock");
});
$(".button_sectionten").click(function(){
  $(".sectionfirst").addClass("sectionblock").removeClass("sectionnone");
  $(".sectionsix").addClass("sectionnone").removeClass("sectionblock");
});




$(".play").click(function () {
    $(".path1").toggleClass("fly1");
    $(".path2").toggleClass("fly2");
});  

  document.querySelector(".play").addEventListener('click', () => {
    document.querySelector(".NGC1300").play()
  })
  document.querySelector(".mute").addEventListener('click', () => {
    document.querySelector(".NGC1300").pause()
  })
  document.querySelector(".button_sectionfive").addEventListener('click', () => {
    document.querySelector(".NGC1300").pause()
  })
  document.querySelector(".button_sectionsix").addEventListener('click', () => {
    document.querySelector(".NGC1300").pause()
  })

$(".mute").click(function () {
    $(".path1").removeClass("fly1");
    $(".path2").removeClass("fly2");
});  



$(".play2").click(function () {
  $(".path1").toggleClass("fly1");
  $(".path2").toggleClass("fly2");
});  

document.querySelector(".play2").addEventListener('click', () => {
  document.querySelector(".NGC1569").play()
})
document.querySelector(".mute2").addEventListener('click', () => {
  document.querySelector(".NGC1569").pause()
})
document.querySelector(".button_sectionseven").addEventListener('click', () => {
  document.querySelector(".NGC1569").pause()
})
document.querySelector(".button_sectioneight").addEventListener('click', () => {
  document.querySelector(".NGC1569").pause()
})
document.querySelector(".button_sectionfour").addEventListener('click', () => {
  document.querySelector(".NGC1569").pause()
})
$(".mute2").click(function () {
  $(".path1").removeClass("fly1");
  $(".path2").removeClass("fly2");

});  


// NGC 2392 animation
$(".play3").click(function () {
  $(".path1").toggleClass("fly1");
  $(".path2").toggleClass("fly2");
}); 
$(".mute3").click(function () {
  $(".path1").removeClass("fly1");
  $(".path2").removeClass("fly2");
});   

// NGC 2392 music
document.querySelector(".play3").addEventListener('click', () => {
  document.querySelector(".NGC2392").play()
})
document.querySelector(".mute3").addEventListener('click', () => {
  document.querySelector(".NGC2392").pause()
})
document.querySelector(".button_sectionnine").addEventListener('click', () => {
  document.querySelector(".NGC2392").pause()
})
document.querySelector(".button_sectionten").addEventListener('click', () => {
  document.querySelector(".NGC2392").pause()
})

    //pictures move
    $('.moveup').draggable({
      axis: 'y',
      scroll: false,
      cursor:"n-resize",
});
$('.concreteup2').draggable({
  axis: 'y',
  scroll: false,
  cursor:"n-resize",
});
$('.concreteleft').draggable({
  axis: 'x',
  scroll: false,
  cursor:"w-resize",
});
$('.concreteright').draggable({
  axis: 'x',
  scroll: false,
  cursor:"e-resize",
});

// change photo

$('.cosmos').click(function(){
  var photos = $(this).find('img');
  var swipe = $('.swipe');
  swipe.volume = 0.2;
  
  if (photos.attr('src') === './img/cms1.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms2.png').fadeIn(100);
          swipe[0].play() ;
      });
  } else if (photos.attr('src') === './img/cms2.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms3.png').fadeIn(100);
          swipe[0].play() ;
      });
    } else if (photos.attr('src') === './img/cms3.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms4.png').fadeIn(100);
          swipe[0].play() ;
      });
    } else if (photos.attr('src') === './img/cms4.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms5.png').fadeIn(100);
          swipe[0].play() ;
      });
    } else if (photos.attr('src') === './img/cms5.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms6.png').fadeIn(100);
          swipe[0].play() ;
      });
    } else if (photos.attr('src') === './img/cms6.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms7.png').fadeIn(100);
          swipe[0].play() ;
      });
    } else if (photos.attr('src') === './img/cms7.png') {
      photos.fadeOut(100,function(){
          photos.attr('src', './img/cms8.png').fadeIn(100);
          swipe[0].play() ;
      });
  } else {
    $(".sectionmain").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
  }
});



});