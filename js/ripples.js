$(document).ready(function() {
	$('.section-top').ripples({ //波紋をつける要素を指定
		resolution: 300, //波紋が広がる速さ
		dropRadius: 20, //波紋の大きさ
		perturbance: 0.01 //波紋の揺れの量
	});
});