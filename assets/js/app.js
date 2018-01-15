var module = function() {

    var init = function() {
        slider();
        _setUpListeners();
        addActiveClass();
        hamburger();
        gallery();
        mail();
        scroll();

    };

    var scroll = function() {
      $("a.toForm").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        console.log($(top));
        $('body,html').animate({scrollTop: top}, 1500);
      });
    }

    var mail = function() {

      $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
        }).done(function() {
          alert("Thank you!");
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });


    }


    var addActiveClass = function() { // Когда страница загрузится
      $('a.menu__link').each(function () { // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href; // получаем адрес ссылки
        if(location == link) { // при совпадении адреса ссылки и адреса окна
          $(this).addClass('active'); //добавляем класс
        }
      });
    };

    var hamburger = function() {
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $(".left-block").toggleClass("menu-active");
        $(".main").toggleClass("main-active");
      });
    }

    var gallery = function() {
      $('.gallery').flipLightBox();
    }

    var slider = function() {

      var imgBody = $(".slideshow__box");
      var i = 0;
      var left = $(".slideshow__arrow_left");
      var right = $(".slideshow__arrow_right");
      var delay = 5000;
      var maxItem = 3;

      function next() {
        i++;
        if(i >= maxItem) {
          i = 0;
        }
        imgBody.eq(i-1).removeClass("slide-show");
        imgBody.eq(i).addClass("slide-show");
      };

      right.click(next);
      left.click(prev);

      function prev() {
        i--;
        if(i < 0) {
          i = maxItem - 1;
        }
        imgBody.eq(i+1).removeClass("slide-show");
        imgBody.eq(i).addClass("slide-show");
      };

      var timer = setInterval(next, delay);
      timer;

      imgBody.mouseenter(function() {
        clearInterval(timer);
      });

      right.mouseenter(function() {
        clearInterval(timer);
      });

      left.mouseenter(function() {
        clearInterval(timer);
      });

      imgBody.mouseleave(function() {
        timer = setInterval(next, delay);
      });

    };

  var _setUpListeners = function() {
    //    Тут прослушка событий
    console.log("Прослушка событий работает")

    $(window).on("scroll", function (){
      var scr = $(window).scrollTop();
      var about = $('.about').offset().top;
      if(scr > about){
          $('.about__svg').addClass("showed");
      };
      if(scr>100){
        $(".nav").addClass("fixed");
      }else {
        $(".nav").removeClass("fixed");
      }
      });
    };

    return {
        init: init
    }
}();

$(document).ready(function(){
  module.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vZHVsZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2xpZGVyKCk7XHJcbiAgICAgICAgX3NldFVwTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3MoKTtcclxuICAgICAgICBoYW1idXJnZXIoKTtcclxuICAgICAgICBnYWxsZXJ5KCk7XHJcbiAgICAgICAgbWFpbCgpO1xyXG4gICAgICAgIHNjcm9sbCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiYS50b0Zvcm1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodG9wKSk7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxNTAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1haWwgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHsgLy9DaGFuZ2VcclxuICAgICAgICB2YXIgdGggPSAkKHRoaXMpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCJtYWlsLnBocFwiLCAvL0NoYW5nZVxyXG4gICAgICAgICAgZGF0YTogdGguc2VyaWFsaXplKClcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgYWxlcnQoXCJUaGFuayB5b3UhXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRG9uZSBGdW5jdGlvbnNcclxuICAgICAgICAgICAgdGgudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgYWRkQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbigpIHsgLy8g0JrQvtCz0LTQsCDRgdGC0YDQsNC90LjRhtCwINC30LDQs9GA0YPQt9C40YLRgdGPXHJcbiAgICAgICQoJ2EubWVudV9fbGluaycpLmVhY2goZnVuY3Rpb24gKCkgeyAvLyDQv9C+0LvRg9GH0LDQtdC8INCy0YHQtSDQvdGD0LbQvdGL0LUg0L3QsNC8INGB0YHRi9C70LrQuFxyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmOyAvLyDQv9C+0LvRg9GH0LDQtdC8INCw0LTRgNC10YEg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgIHZhciBsaW5rID0gdGhpcy5ocmVmOyAvLyDQv9C+0LvRg9GH0LDQtdC8INCw0LTRgNC10YEg0YHRgdGL0LvQutC4XHJcbiAgICAgICAgaWYobG9jYXRpb24gPT0gbGluaykgeyAvLyDQv9GA0Lgg0YHQvtCy0L/QsNC00LXQvdC40Lgg0LDQtNGA0LXRgdCwINGB0YHRi9C70LrQuCDQuCDQsNC00YDQtdGB0LAg0L7QutC90LBcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvL9C00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbWJ1cmdlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiLmhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIi5sZWZ0LWJsb2NrXCIpLnRvZ2dsZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIi5tYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnYWxsZXJ5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5nYWxsZXJ5JykuZmxpcExpZ2h0Qm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgdmFyIGltZ0JvZHkgPSAkKFwiLnNsaWRlc2hvd19fYm94XCIpO1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciBsZWZ0ID0gJChcIi5zbGlkZXNob3dfX2Fycm93X2xlZnRcIik7XHJcbiAgICAgIHZhciByaWdodCA9ICQoXCIuc2xpZGVzaG93X19hcnJvd19yaWdodFwiKTtcclxuICAgICAgdmFyIGRlbGF5ID0gNTAwMDtcclxuICAgICAgdmFyIG1heEl0ZW0gPSAzO1xyXG5cclxuICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICBpKys7XHJcbiAgICAgICAgaWYoaSA+PSBtYXhJdGVtKSB7XHJcbiAgICAgICAgICBpID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nQm9keS5lcShpLTEpLnJlbW92ZUNsYXNzKFwic2xpZGUtc2hvd1wiKTtcclxuICAgICAgICBpbWdCb2R5LmVxKGkpLmFkZENsYXNzKFwic2xpZGUtc2hvd1wiKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJpZ2h0LmNsaWNrKG5leHQpO1xyXG4gICAgICBsZWZ0LmNsaWNrKHByZXYpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcHJldigpIHtcclxuICAgICAgICBpLS07XHJcbiAgICAgICAgaWYoaSA8IDApIHtcclxuICAgICAgICAgIGkgPSBtYXhJdGVtIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nQm9keS5lcShpKzEpLnJlbW92ZUNsYXNzKFwic2xpZGUtc2hvd1wiKTtcclxuICAgICAgICBpbWdCb2R5LmVxKGkpLmFkZENsYXNzKFwic2xpZGUtc2hvd1wiKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKG5leHQsIGRlbGF5KTtcclxuICAgICAgdGltZXI7XHJcblxyXG4gICAgICBpbWdCb2R5Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmlnaHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZWZ0Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW1nQm9keS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwobmV4dCwgZGVsYXkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICB2YXIgX3NldFVwTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICDQotGD0YIg0L/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNC5XHJcbiAgICBjb25zb2xlLmxvZyhcItCf0YDQvtGB0LvRg9GI0LrQsCDRgdC+0LHRi9GC0LjQuSDRgNCw0LHQvtGC0LDQtdGCXCIpXHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpe1xyXG4gICAgICB2YXIgc2NyID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICB2YXIgYWJvdXQgPSAkKCcuYWJvdXQnKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgIGlmKHNjciA+IGFib3V0KXtcclxuICAgICAgICAgICQoJy5hYm91dF9fc3ZnJykuYWRkQ2xhc3MoXCJzaG93ZWRcIik7XHJcbiAgICAgIH07XHJcbiAgICAgIGlmKHNjcj4xMDApe1xyXG4gICAgICAgICQoXCIubmF2XCIpLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICAkKFwiLm5hdlwiKS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXRcclxuICAgIH1cclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBtb2R1bGUuaW5pdCgpO1xyXG59KTsiXX0=
