$(document).ready(function(){
    console.log("안녕하세요")

    $('.bx-wrapper').slick({
        dots:true,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 3000
    })
    $('.list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows:false
      });

    $('.menu-right a').on('click',function(e){
        e.preventDefault();
    })

    //공지사항 텍스트 롤링
     function news(){
         $('.txtWrap li:first').slideUp(function(){
             $(this).appendTo($('.txtWrap')).slideDown()
         });
     }

     setInterval(function(){news()},4000)


    //리스트 클릭시 메뉴 이미지 교체
    $(".menu-gnb li a").on("click", function(e) {
        e.preventDefault();
        
        var i = $(this).parent().index();
        console.log(i)
        $(".list").eq(i).fadeIn().siblings().fadeOut();
        $(".list").slick('setPosition')
        $(this).parent().addClass("on").siblings().removeClass("on"); 
    })
     
    //m-box 매장/주소 버튼 클릭시 텍스트 각각 교체
    $('.m-box').on('click',function(){
        $(this).addClass("on").siblings().removeClass("on");

        var i = $(this).index();
        console.log(i)

        if(i == 0) {
            $('.map-search input').attr('placeholder', '매장명을 입력하세요.')
        } else if(i==1) {
            $('.map-search input').attr('placeholder', '장소 또는 주소를 입력하세요.')
        }
    })


    //header 쪽에서 top버튼 숨기기
    $(".return-top").hide();
    var scrTop;

    $(window).on('scroll',function(){
        scrTop = $(this).scrollTop();

        console.log(scrTop);

        if(scrTop >= 100) {
            $('.return-top').fadeIn();
        } else {
            $('.return-top').fadeOut();
        };

		if(scrTop >= 100) {
			$('header').addClass("minH")
		} else if(scrTop == 0) {
			$('header').removeClass("minH")
        }

    })
    
    //top메뉴 이동
    $('.return-top').click(function () {
        $('body,html').animate({
            scrollTop: 0    
        }, 800); 
        return false;
    });


    //서브페이지 nav
    $('.nav-item').click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    })

    //서브페이지 영상영역 / 이미지 클릭시 html 변경
    $('.mv-sub').eq(0).click(function(){
        $('.M-top').text('오감만족 도넛교실 현장 스케치')
        $('.M-sub').text('크리스피크림 고객님들과 함께 진행한 행복한 도넛 만들기교실! 그 활기찬 현장을 영상으로 만나보세요. ')
        $('.mv-main iframe').attr("src","https://www.youtube.com/embed/1K7VG67pAbg")
     })

    $('.mv-sub').eq(1).click(function(){
        $('.M-top').text('전북도청점 오픈현장 스케치')
        $('.M-sub').text('한국에서 100호점! 아시아에서 300호점! 설레는 OPEN을 준비하는 직원들과 고객님들의 이야기를 담았습니다. ')
        $('.mv-frame').attr("src","https://www.youtube.com/embed/sEbUaYPal0g")
     })

     $('.mv-sub').eq(2).click(function(){
        $('.M-top').text('할로윈 파티 현장 스케치')
        $('.M-sub').text('매월 10월 31일은 할로윈데이! 5일동안 전국을 돌아다니며 고객님들을 위해 준비한 특별한 이벤트를 만나보세요.')
        $('.mv-frame').attr("src","https://www.youtube.com/embed/E07KeW7YZ10")
     })

     $('.mv-sub').eq(3).click(function(){
        $('.M-top').text('뮤지컬 프리실라 고객 초청 이벤트')
        $('.M-sub').text('오늘은 크리스피크림과 엔제리너스가 특별한 선물을 준비했습니다!')
        $('.mv-frame').attr("src","https://www.youtube.com/embed/WFd5E9Jw7To")
     })

     $('.mv-sub').eq(4).click(function(){
        $('.M-top').text('오리지널 글레이즈드 도넛편')
        $('.M-sub').text('함께하면 더욱 즐거운 크리스피크림 도넛을 만나보세요!')
        $('.mv-frame').attr("src","https://www.youtube.com/embed/F71LqbRv8EM")
     })
});
