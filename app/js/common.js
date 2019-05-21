$(function () {

	$(document).ready(function () {
		$('.owl-carousel').owlCarousel({
			items: 1,
			autoHeight: true,
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			navContainer: '#customNav',
			responsive: {
				// breakpoint from 0 up
				0: {
					dots: false
				},
				// breakpoint from 480 up
				480: {
					dots: false
				},
				// breakpoint from 768 up
				768: {

				}
			}
		});

		dotcount = 1;
		$('.owl-dot').each(function () {
			$(this).addClass('dotnumber' + dotcount);
			$(this).attr('data-info', dotcount);
			dotcount = dotcount + 1;
		});

		slidecount = 1;
		$('.owl-item').not('.cloned').each(function () {
			$(this).addClass('slidenumber' + slidecount);
			slidecount = slidecount + 1;
			if ($(document).width() >= 992) {
				width_img = $('.owl-item').width() / 2;
				$('.owl-item .img').css('width', '45%');
				$('.owl-item .desc').css('width', '55%');
			}
		});

		$('.owl-dot').each(function () {
			grab = $(this).data('info');
			slidegrab = $('.slidenumber' + grab + ' img').attr('src');
			$(this).css('background-image', 'url(' + slidegrab + ')');
		});

		amount = $('.owl-dot').length;
		width = 100 / (amount + 1);
		margin = width / (amount * 2);
		$('.owl-dot').css('width', width + '%');
		height = $('.owl-dot').width() / 1.33;
		$('.owl-dot').css('height', height + 'px');
		$('.owl-dots').css('height', height + height / 3 + 'px');

	});

});