$(function(){
	// ham khoi tao.
	// sau nay tat ca cac ma lenh js viet theo thu vien JQ se nen nam trong ham nay
	// bat su kien click vao button click me ben HTML
	// $ === jQuery
	// tim phan button HTML
	// $('#btnClick')
	// document.getElementById('btnClick');
	// $('#btnClick').click(function(){});
	
	$('#btnClick').on('click', function(){

		//alert('ban vua bam manh vao toi');
		// $('img').attr('src', 'images/slide-01.jpg');
		// let valIdImg = $('img').prop('id');
		// console.log(valIdImg);
		
		// $('.image').removeAttr('width');
		// $('.image').removeAttr('height');
		/*
		if($('.content').hasClass('box')){
			// xoa bo no
			$('.content').removeClass('box');
		} else {
			// them class
			$('.content').addClass('box');
		}
		*/
		$('.content').toggleClass('box');
		//let contentInput = $('input[class|="input"]').val();
		//console.log(contentInput);
		$('input[class|="input"]').val('Dang hoc Jquery');
		$('.main').css({
			width: '300px',
			height: '300px',
			backgroundColor: 'red'
		});
		$('.main').css('border', '1px solid blue');
		$('.main').css('padding', '20px');

		$('.main').width(600); // thay doi gia tri kich thuoc
		$('.main').height(600);
		let w = $('.main').width(); // lay gia tri kich thuoc
		let h = $('.main').height();
		let iW = $('.main').innerWidth();
		let iH = $('.main').innerHeight();
		console.log(w, h, iW, iH);

		$('.data-content > p').eq(1).css('color', 'blue');
		if($('input[class="checkbox"]').is(':checked')) {
			// da tich chon
			console.log('ban da tich chon');
		} else {
			console.log('ban chua tich chon');
		}
		$('.data-content').find('p:first-child').next().css('color', 'yellow');
		$('.data-content > p').eq(2).prev().css('color', 'pink');

		let contentH1 = $('h1').text();
		let contentH2 = $('h1').html();
		console.log(contentH1, contentH2);
		$('h1').html("<h2><i> Sap het phan frontend roi may a ! </i></h2>");
		//$('h1').text("<h2><i> Sap het phan frontend roi may a ! </i></h2>");
	});

	// document.getElementById('btnClick').addEventListener('click', function(){
	// 	alert('ban vua bam manh vao toi');
	// });
});
/*
jQuery(document).ready(function($) {
	// ham khoi tao.
	// sau nay tat ca cac ma lenh js viet theo thu vien JQ se nen nam trong ham nay
});
*/