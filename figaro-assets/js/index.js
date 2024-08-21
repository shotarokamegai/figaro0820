$(function(){
	//Index
	var swipFlag;
	var spSwiper01;
	var spSwiper02;
	var spSwiper03;
	var spSwiper04;
	var spSwiper05;
	var spSwiper06;
	var spSwiper07;
	var spSwiper08;
	var spSwiper09;
	var option = {
		speed: 500,
		slidesPerView: 'auto',
		touchRatio: 1.5,
	}
	$(window).on('load resize',function(){
		var wW = $(window).width();
		if (wW < 813) {
			if (swipFlag) {
				return;
			} else {
				spSwiper01 = new Swiper('.swipeSlider01', option);
				spSwiper02 = new Swiper('.swipeSlider02', option);
				spSwiper03 = new Swiper('.swipeSlider03', option);
				spSwiper04 = new Swiper('.swipeSlider04', option);
				spSwiper05 = new Swiper('.swipeSlider05', option);
				spSwiper06 = new Swiper('.swipeSlider06', option);
				spSwiper07 = new Swiper('.swipeSlider07', option);
				spSwiper08 = new Swiper('.swipeSlider08', option);
				spSwiper09 = new Swiper('.swipeSlider09', option);
				swipFlag = true;
			}
		} else {
			if (swipFlag) {
				spSwiper01.destroy();
				spSwiper01 = undefined;
				spSwiper02.destroy();
				spSwiper02 = undefined;
				spSwiper03.destroy();
				spSwiper03 = undefined;
				spSwiper04.destroy();
				spSwiper04 = undefined;
				spSwiper05.destroy();
				spSwiper05 = undefined;
				spSwiper06.destroy();
				spSwiper06 = undefined;
				spSwiper07.destroy();
				spSwiper07 = undefined;
				spSwiper08.destroy();
				spSwiper08 = undefined;
				spSwiper09.destroy();
				spSwiper09 = undefined;
				swipFlag = false;
			}
		}
	});
});

//Index
(function() {
	var $header = $('#header');
	var $fvArea = $('#indexFv');
	var $fV = $('#indexFv .first .col');
	var thumbRand = ['color01', 'color02', 'color03', 'color04', 'color05', 'color06', 'color07', 'color08', 'color09', 'color10'];
	var ihH;

	function init(){
		setup();
		scroll();
	}

	function setup(){
		//Fv Color
		if ($fvArea.length) {
			for(var i = 0 ; i < $('#indexFv .col .image').length ; i++){
				var tg = $('#indexFv .col .image').eq(i);
				var t = Math.floor(Math.random() * thumbRand.length);
				tg.addClass(thumbRand[t]);
			}
		}

		ihH = $header.outerHeight();
	}

	function scroll(){
		var sT = $(window).scrollTop();
		var wW = $(window).width();
		var hH = $header.outerHeight();
		//First view
		if ($fvArea.length) {
			var fcH = $('#indexMv').height();
			var fT = $fvArea.offset().top;
			var fH = $fvArea.height();
			if (wW > 812) {
				if (sT + ihH + fcH >= fT + fH) {
					if (!$fV.hasClass('bottom')) {
						$fV.addClass('bottom');
					}
				} else {
					if ($fV.hasClass('bottom')) {
						$fV.removeClass('bottom');
					}
				}
				if (sT + ihH >= fT + fH + ihH - fcH) {
					if (!$header.hasClass('resize')) {
						$header.addClass('resize');
					}
				} else {
					if ($header.hasClass('resize')) {
						$header.removeClass('resize');
					}
				}
			} else {
				if (sT > ihH) {
					if (!$header.hasClass('resize')) {
						$header.addClass('resize');
					}
				} else {
					if ($header.hasClass('resize')) {
						$header.removeClass('resize');
					}
				}
			}
		}
	}

	$(window).on('load', init);
	$(window).on('scroll resize', scroll);
	document.addEventListener('touchmove', scroll);
})();

//setHeight
// $(window).on('load',function(){
// 	var hH = $('#header').outerHeight();
// 	var ww = $(window).width();
// 	var wh = window.innerHeight;
// 	var fW = $('#indexFv .first').width();

// 	//Index
// 	var $fV = $('#indexMv');
// 	if (ww > 812) {
// 		if (fW >= wh - hH) {
// 			$fV.css({'height': wh - hH});
// 		}
// 	}
// 	$(window).on('resize',function(){
// 		ww = $(window).width();
// 		wh = window.innerHeight;
// 		fW = $('#indexFv .first').width();
// 		if (ww > 812) {
// 			if (fW <= wh - hH) {
// 				$fV.css({'height': 'auto'});
// 			} else {
// 				$fV.css({'height': wh - hH});
// 			}
// 		} else {
// 			$fV.css({'height': 'auto'});
// 		}
// 		currentWidth = $(window).width();
// 	});
// });
