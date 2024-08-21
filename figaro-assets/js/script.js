/*--------------------------
	Get Browser Version
--------------------------*/
(function($, window, document, undefined) {

	var getBrowser = function() {

		var ua = navigator.userAgent.toLowerCase();
		var ver = navigator.appVersion.toLowerCase();
		var browser = 'unknown';

		if (ua.indexOf("msie") != -1){
			if (ver.indexOf("msie 6.") != -1){
				name = 'ie6';
			} else if (ver.indexOf("msie 7.") != -1) {
				name = 'ie7';
			} else if (ver.indexOf("msie 8.") != -1) {
				name = 'ie8';
			} else if (ver.indexOf("msie 9.") != -1) {
				name = 'ie9';
			} else if (ver.indexOf("msie 10.") != -1) {
				name = 'ie10';
			} else {
				name = 'ie';
			}
		} else if (ua.indexOf('trident/7') != -1) {
			name = 'ie11';
		} else if (ua.indexOf('chrome') != -1) {
			name = 'chrome';
		} else if (ua.indexOf('safari') != -1) {
			name = 'safari';
		} else if (ua.indexOf('opera') != -1) {
			name = 'opera';
		} else if (ua.indexOf('firefox') != -1) {
			name = 'firefox';
		}

		return name;

	}

	window.getBrowser = getBrowser;

})(jQuery, window, document);

var $rwd = $('#navBtn');

$(function(){
	var state = false;
	var scrollpos;

	//anchor
	$('.anc').on('click', function(e){
		e.preventDefault();
		var speed = 800;
		var target = $(this).attr('href');
		var hH = $('#header').height();
		var position = $(target).offset().top;
		position = position - hH - 15;
		if ($('#sideMenu').length && $('#sideMenu').is(':visible')) {
			if ($rwd.is(':visible')) {
				$('#sideMenu').hide();
			}
		}
		$('body,html').animate({scrollTop:position},speed,'easeInOutQuart');
		return false;
	});

	//nav
	$rwd.on('click', function(e){
		var $nav = $('#navBody');
		if ($nav.is(':hidden')) {
			$(this).addClass('open');
			$nav.fadeIn(600, function(){
				scrollFixed();
			});
		}
	});

	$('#navClose').on('click', function(e){
		var $nav = $('#navBody');
		$rwd.removeClass('open');
		$('#navBody').fadeOut(600, function(){
			scrollFixed();
		});
	});

	$('.inNav').on('click', function(e){
		e.preventDefault();
		var $target = $(this).next('.innerNav');
		if ($target.is(':hidden')) {
			$(this).addClass('open');
			$target.slideDown();
		} else {
			$(this).removeClass('open');
			$target.slideUp();
		}
	});

	//tab
	$('#ranking a').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		if ($(target).is(':hidden')) {
			$(this).parent().siblings().find('a.current').removeClass('current');
			$(this).addClass('current');
			$('#rankBody .pnl:visible').fadeOut('fast', function(){
				$(target).fadeIn(600);
			});
		}
	});

	//select
	$('.selectDate').on('change', function(){
		var current = $(this).next('.current');
		var val = $(this).val();
		current.text(val);
	});

	function scrollFixed(){
		if(state == false) {
			scrollpos = $(window).scrollTop();
			$('body').css({'overflow-y': 'scroll'});
			$('#wrapper').addClass('fixed').css({'top': -scrollpos});
			state = true;
		} else {
			$('body').removeAttr('style');
			$('#wrapper').removeClass('fixed').removeAttr('style');
			window.scrollTo(0 , scrollpos);
			state = false;
		}
	}

	var $weekly = $('#weeklyLink');
	var $badge = $('#badge');
	$weekly.on('mouseenter', function(e){
		if (!$badge.hasClass('on')) {
			$badge.addClass('on');
		}
	});
	$weekly.on('mouseleave', function(e){
		if ($badge.hasClass('on')) {
			$badge.removeClass('on');
		}
	});
});

//Index
(function() {
	var $header = $('#header');
	var $ad = $('#adBnr');
	var $fV = $('#indexFv .first .col');
	var $feature = $('#feature');
	var $footerCover = $('#footerCover');
	var $fortune = $('.fortuneBlock');
	var $thumbnail = $('.colorThumb');
	var thumbRand = ['color01', 'color02', 'color03', 'color04', 'color05', 'color06', 'color07', 'color08', 'color09', 'color10'];
	var $bnrArea = $('#bnrArea');
	var $sideArea = $('#sideWrap');
	var $sideBnr = $('#sideBnr');
	var $share = $('#fixedShare');
	var ihH;

	function init(){
		setup();
		scroll();
	}

	function setup(){
		//Thumbnail Color
		if ($thumbnail.length) {
			for(var i = 0 ; i < $thumbnail.length ; i++){
				var tg = $thumbnail.eq(i);
				var t = Math.floor(Math.random() * thumbRand.length);
				tg.addClass(thumbRand[t]);
			}
		}

		//AD
		if ($ad.is(':visible')) {
			$header.addClass('fixed');
			if ($fV.length) {
				$fV.addClass('fixed');
			}
		}

		ihH = $header.outerHeight();
	}

	function scroll(){
		var sT = $(window).scrollTop();
		var wW = $(window).width();
		var winH = window.innerHeight;
		var hH = $header.outerHeight();

		//AD side
		if ($sideBnr.length) {
			var sideT = $sideArea.offset().top;
			var sideH = $bnrArea.height();
			var bnrH = $sideBnr.height();
			var bnrW = $sideArea.width();
			if (wW > 812) {
				if (sT + hH >= sideT && sT + hH + bnrH < sideT + sideH) {
					if (!$sideBnr.hasClass('fixed')) {
						$sideBnr.addClass('fixed').css('width', bnrW);
					} else {
						$sideBnr.css('width', bnrW)
					}
					if ($sideBnr.hasClass('bottom')) {
						$sideBnr.removeClass('bottom').removeAttr('style').css('width', bnrW);
					}
				} else if (sT + hH + bnrH >= sideT + sideH) {
					var topPos = sideH - bnrH;
					if (!$sideBnr.hasClass('bottom')) {
						$sideBnr.addClass('bottom').css({'width': bnrW, 'top': topPos});
					} else {
						$sideBnr.css({'width': bnrW, 'top': topPos});
					}
				} else {
					if ($sideBnr.hasClass('fixed')) {
						$sideBnr.removeClass('fixed').removeAttr('style');
					}
				}
			} else {
				$sideBnr.removeClass('fixed bottom').removeAttr('style');
			}
		}

		//AD
		var mT = $('#main').offset().top;
		if ($ad.is(':visible')) {
			if (sT >= mT) {
				$header.removeClass('fixed');
				if ($fV.length) {
					$fV.removeClass('fixed');
				}
			} else {
				$header.addClass('fixed');
				if ($fV.length) {
					$fV.addClass('fixed');
				}
			}
		}

		//Feature
		var featureT = $feature.offset().top;
		var featureH = $feature.height();
		var featureB = featureT + featureH;
		if (sT > featureT - winH && sT < featureB) {
			var num = sT + winH - featureT;
			num = (-num*0.06);
			$feature.find('.image').css({'transform': 'translate3d(0,'+num+'px,0'});
		}

		//Header size
		if (!$('#indexFv').length) {
			if (sT > (ihH / 2)) {
				if (!$header.hasClass('resize')) {
					$header.addClass('resize');
				}
				if ($share.length && !$share.hasClass('show')) {
					$share.addClass('show');
				}
				if (sT + (winH / 2) > featureT) {
					if ($share.length && $share.hasClass('show')) {
						$share.removeClass('show');
					}
				}
			} else {
				if ($header.hasClass('resize')) {
					$header.removeClass('resize');
				}
				if ($share.length && $share.hasClass('show')) {
					$share.removeClass('show');
				}
			}
		}

		//Footer bg
		var cT = $footerCover.offset().top;
		var winHerf = winH / 2;
		if (sT + (winHerf / 2) >= cT) {
			$('#wrapper').addClass('black');
		} else {
			$('#wrapper').removeClass('black');
		}

		//Fortune
		if ($fortune.length) {
			for(var i = 0 ; i < $fortune.length ; i++){
				var tg = $fortune.eq(i);
				var getTop = tg.offset().top;
				var getHeight = tg.outerHeight();
				if (sT + (winH / 2) >= getTop - getHeight && sT + (winH / 2) <= getTop + (getHeight * 2)) {
					tg.addClass('roll');
				} else {
					tg.removeClass('roll');
				}
			}
		}
	}

	$(window).on('load', init);
	$(window).on('scroll resize', scroll);
	document.addEventListener('touchmove', scroll);
})();

//scroll Effect
(function() {
	var $elems = $('.scrEff');

	function init(){
		setup();
		scroll();
	}

	function setup(){
		if ($elems.length) {
			for(var i = 0 ; i < $elems.length ; i++){
				var tg = $elems.eq(i);
				tg.addClass('is-hidden');
			}
		}
	}

	function scroll(){
		var sT = $(window).scrollTop();
		var winH = window.innerHeight;
		if ($elems.length) {
			for(var i = 0 ; i < $elems.length ; i++){
				var tg = $elems.eq(i);
				var getTop = tg.offset().top;
				if (sT + winH >= getTop) {
					tg.removeClass('is-hidden');
				}
			}
		}
	}

	$(window).on('load', init);
	$(window).on('scroll resize', scroll);
	document.addEventListener('touchmove', scroll);
})();

//loading
(function () {
	var $loading = $('#loading');
	var $index = $('#indexFv');
	$('body').css({ 'overflow-y': 'scroll' });
	$('#wrapper').addClass('fixed');
	if ($index.length) {
		$index.addClass('is-hidden');
	}

	$(window).on('load', function (e) {
		setTimeout(function(){
			$loading.addClass('load');
			$loading.fadeOut(1000, 'easeOutQuad', function () {
				$loading.remove();
				$('#wrapper').removeClass('fixed');
				$('body').removeAttr('style');
			});
			if ($index.length) {
				setTimeout(function(){
					$index.removeClass('is-hidden');
				},100);
			}
		},500);
	});
})();