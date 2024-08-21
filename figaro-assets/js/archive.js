(function() {
	var colorRand = ['color01', 'color02', 'color03', 'color04', 'color05', 'color06', 'color07', 'color08', 'color09', 'color10'];

	$('#seriesMore').on('click', function(e){
		e.preventDefault();
		seriesSeek();
	});

	$('#postsMore').on('click', function(e){
		e.preventDefault();
		postsSeek();
	});

	function seriesSeek(){
		var addhtml = '';
		var total = 5;
		for(var i=0; i<total; i++){
			var j = Math.floor(Math.random() * colorRand.length);
			var t = Math.floor(Math.random() * colorRand.length);
			addhtml += '' +
			'<article class="archiveCol apscrl is-hidden">' +
			'<div class="visual">' +
			'<a href="#dummy">' +
			'<div class="title">' +
			'<h3 class="hdg"><span class="m">いぬパリ</span>' +
			'<span class="s">見出しいぬパリ見出しいぬパリ。</span></h3>' +
			'</div>' +
			'<div class="image colorThumb '+colorRand[j]+' bg"><span style="background-image: url(/assets/images/dummy/dummy_articleall05.jpg);"></span></div>' +
			'</a>' +
			'</div>' +
			'<div class="detail">' +
			'<div class="seriesContent">' +
			'<div class="column">' +
			'<a href="#dummy">' +
			'<div class="in">' +
			'<p class="title"><span>いぬパリ</span></p>' +
			'<p class="text">パリ在住のフォトグラファー・吉田パンダが撮るパリの街角、犬のいる風景。</p>' +
			'</div>' +
			'</a>' +
			'</div>' +
			'<div class="toAll">' +
			'<a href="#dummy">' +
			'<div class="in">' +
			'<p class="n fontCrimson"><span class="num">5</span>' +
			'<span class="t">Articles</span></p>' +
			'</div>' +
			'</a>' +
			'</div>' +
			'</div>' +
			'<div class="post apscrl is-hidden">' +
			'<a href="#dummy">' +
			'<div class="image colorThumb '+colorRand[t]+' bg"><span style="background-image: url(/assets/images/dummy/dummy_thumb01.jpg);"></span></div>' +
			'<div class="data">' +
			'<p class="title"><span>レオノール・ボラック、30歳のエトワールが思うこと。</span></p>' +
			'<p class="deta fontCrimson">2021.05.09</p>' +
			'</div>' +
			'</a>' +
			'</div>' +
			'</div>' +
			'</article>';
		}
		$('#seriesContent').append(addhtml);
		setTimeout(function(){
			scrollShow();
		},100);
	}

	function postsSeek(){
		var addhtml = '';
		var total = 6;
		for(var i=0; i<total; i++){
			var t = Math.floor(Math.random() * colorRand.length);
			addhtml += '' +
			'<article class="col apscrl is-hidden">' +
			'<a href="#dummy">' +
			'<div class="image colorThumb '+colorRand[t]+' bg"><span style="background-image: url(/assets/images/dummy/dummy_thumb01.jpg);"></span></div>' +
			'<div class="data">' +
			'<p class="title"><span>25Wアートなスタイルで輝くノリエムのクリエイション。</span></p>' +
			'<p class="date fontCrimson">2021.05.09</p>' +
			'</div>' +
			'</a>' +
			'</article>';
		}
		$('#articleContent').append(addhtml);
		setTimeout(function(){
			scrollShow();
		},100);
	}

	function scrollShow(){
		var $elems = $('.apscrl');
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

	$(window).on('scroll resize', scrollShow);
	document.addEventListener('touchmove', scrollShow);
})();