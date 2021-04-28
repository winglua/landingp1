// minimum two digits
function minTwoDigits(n) {
	return (n < 10 ? '0' : '') + n;
}

// ready
$(document).ready(function(){

// menu
(function(){
	const menu = $('.js-menu');

	$('[data-menu-open]').on('click', function(e){
		e.stopPropagation();
		menu.addClass('visible');
	});

	$('[data-menu-close]').on('click', function(){
		menu.removeClass('visible');
	});

	$(document).on('click', function(){
		menu.removeClass('visible');
	});

	menu.on('click', function(e){
		e.stopPropagation();
	});
}());

// sliders
(function(){
	slider('.js-hero-1');
	slider('.js-hero-2');
	slider('.js-hero-4');
	slider('.js-hero-5');
	slider('.js-hero-6');
	slider('.js-hero-7');
	
	slider('.js-extheader-8');

	slider('.js-text-7');

	slider('.js-reviews');

	function slider(className) {
		const el = $(className);
		if (el.length) {
			const slider = el.find(className + '-slider'),
						prevArrow = el.find(className + '-prev'),
						nextArrow = el.find(className + '-next'),
						current = el.find(className + '-current'),
						total = el.find(className + '-total'),
						dotsContainer = el.find(className + '-dots'),
						more = el.find(className + '-more'),
						play = el.find(className + '-play'),
						items = slider.find('> div');

			let dots = false;
			if (dotsContainer.length) {
				dots = true;
			}

			if (total.length) {
				total.text(minTwoDigits(items.length));
			}

			slider.slick({
				infinite: true,
				fade: true,
				prevArrow: prevArrow,
				nextArrow: nextArrow,
				dots: dots,
				appendDots: dotsContainer
			});

			if (more.length) {
				slider.on('afterChange', function(event, slick, currentSlide){
					more.attr('href', items.eq(currentSlide).data('more'));
				});
			}

			if (play.length) {
				slider.on('afterChange', function(event, slick, currentSlide){
					play.attr('href', items.eq(currentSlide).data('play'));
				});
			}

			if (current.length) {
				slider.on('afterChange', function(event, slick, currentSlide){
					let value = slider.slick('slickCurrentSlide') + 1;
					current.text(minTwoDigits(value));
				});
			}
		}
	}
}());

// hero 3
(function(){
	const hero = $('.js-hero-3');
	if (hero.length) {
		const slider = hero.find('.js-hero-3-slider'),
					prevArrow = hero.find('.js-hero-3-prev'),
					nextArrow = hero.find('.js-hero-3-next'),
					current = hero.find('.js-hero-3-current'),
					total = hero.find('.js-hero-3-total'),
					dots = hero.find('.js-hero-3-dots'),
					play = hero.find('.js-hero-3-play'),
					previews = hero.find('.js-hero-3-previews'),
					items = slider.find('> div');

		total.text(minTwoDigits(items.length));

		slider.slick({
			infinite: true,
			swipe: false,
			arrows: false,
			dots: true,
			appendDots: dots
		});

		previews.slick({
			infinite: true,
			swipe: false,
			arrows: false,
			initialSlide: 1
		});

		prevArrow.on('click', function(){
			slider.slick('slickPrev');
			previews.slick('slickPrev');
		});

		nextArrow.on('click', function(){
			slider.slick('slickNext');
			previews.slick('slickNext');
		});

		slider.on('afterChange', function(event, slick, currentSlide){
			play.attr('href', items.eq(currentSlide).data('play'));
		});
	}
}());

// text 9
(function(){
	const text = $('.js-text-9');
	if (text.length) {
		const slider = text.find('.js-text-9-slider'),
					prevArrow = text.find('.js-text-9-prev'),
					nextArrow = text.find('.js-text-9-next');

		slider.slick({
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			variableWidth: true
		});
	}
}());

// text 30
(function(){
	const text = $('.js-text-30');
	if (text.length) {
		const slider = text.find('.js-text-30-slider'),
					previews = text.find('.js-text-30-previews'),
					current = text.find('.js-text-30-current'),
					total = text.find('.js-text-30-total'),
					items = slider.find('> img').length;

		total.text(minTwoDigits(items));

		slider.slick({
			infinite: true,
			arrows: false
		});

		previews.slick({
			infinite: true,
			arrows: false,
			initialSlide: 1
		});

		previews.on('click', function(){
			slider.slick('slickNext');
			previews.slick('slickNext');
		});

		slider.on('afterChange', function(event, slick, currentSlide){
			let value = slider.slick('slickCurrentSlide') + 1;
			current.text(minTwoDigits(value));
		});
	}
}());

// gallery 2
(function(){
	const gallery = $('.js-gallery-2');
	if (gallery.length) {
		const slider = gallery.find('.js-gallery-2-slider'),
					position = gallery.find('.js-gallery-2-position'),
					current = gallery.find('.js-gallery-2-current'),
					total = gallery.find('.js-gallery-2-total'),
					items = slider.find('> div').length;

		position.width(1 / items * 100 + '%');

		total.text(minTwoDigits(items));

		slider.slick({
			variableWidth: true,
			arrows: false,
			infinite: false
		});

		slider.on('afterChange', function(event, slick, currentSlide){
			let value = slider.slick('slickCurrentSlide') + 1;
			current.text(minTwoDigits(value));

			position.width(value / items * 100 + '%');
		});
	}
}());

// gallery 6
(function(){
	const gallery = $('.js-gallery-6');
	if (gallery.length) {
		const slider = gallery.find('.js-gallery-6-slider'),
					previews = gallery.find('.js-gallery-6-previews'),
					next = gallery.find('.js-gallery-6-next'),
					total = gallery.find('.js-gallery-6-total'),
					dotsContainer = gallery.find('.js-gallery-6-dots'),
					items = slider.find('> div');

		total.text(minTwoDigits(items.length));

		slider.slick({
			infinite: true,
			dots: true,
			arrows: false,
			appendDots: dotsContainer,
			asNavFor: '.js-gallery-6-previews'
		});

		previews.slick({
			infinite: true,
			arrows: false,
			asNavFor: '.js-gallery-6-slider',
		});

		next.on('click', function(){
			slider.slick('slickNext');
			previews.slick('slickNext');
		});
	}
}());

// cards 9
(function(){
	const cards = $('.js-cards-9');
	if (cards.length) {
		const slider = cards.find('.js-cards-9-slider'),
					prevArrow = cards.find('.js-cards-9-prev'),
					nextArrow = cards.find('.js-cards-9-next');

		slider.slick({
			slidesToShow: 4,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						variableWidth: true
					}
				}
			]
		});
	}
}());

// cards 15
(function(){
	const cards = $('.js-cards-15');
	if (cards.length) {
		const slider = cards.find('.js-cards-15-slider'),
					prevArrow = cards.find('.js-cards-15-prev'),
					nextArrow = cards.find('.js-cards-15-next');

		slider.slick({
			slidesToShow: 4,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						variableWidth: true
					}
				}
			]
		});
	}
}());

// slider dots
(function(){
	const carousel = $('.js-carousel');
	if (carousel.length) {
		carousel.slick({
			arrows: false,
			dots: true
		});
	}
}());

// extended header 5
(function(){
	const extheader = $('.js-extheader-5');
	if (extheader.length) {
		const slider = extheader.find('.js-extheader-5-slider'),
					thumbs = extheader.find('.js-extheader-5-thumbs'),
					thumb = extheader.find('.js-extheader-5-thumb'),
					plus = extheader.find('.js-extheader-5-plus'),
					prevArrow = extheader.find('.js-extheader-5-prev'),
					nextArrow = extheader.find('.js-extheader-5-next'),
					total = extheader.find('.js-extheader-5-total'),
					dotsContainer = extheader.find('.js-extheader-5-dots'),
					items = slider.find('> div');

		total.text(minTwoDigits(items.length));
		plus.text('+' + (items.length - 3));
		if (items.length <= 3) {
			plus.hide();
		}

		thumbs.slick({
			infinite: true,
			arrows: false,
			slidesToShow: 3,
			asNavFor: '.js-extheader-5-slider',
			focusOnSelect: true
		});

		slider.slick({
			infinite: true,
			fade: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			dots: true,
			appendDots: dotsContainer,
			asNavFor: '.js-extheader-5-thumbs'
		});
	}
}());

// extended header 6
(function(){
	const extheader = $('.js-extheader-6');
	if (extheader.length) {
		const slider = extheader.find('.js-extheader-6-slider'),
					thumbs = extheader.find('.js-extheader-6-thumbs'),
					thumb = extheader.find('.js-extheader-6-thumb'),
					plus = extheader.find('.js-extheader-6-plus'),
					items = slider.find('> div');

		plus.text('+' + (items.length - 3));
		if (items.length <= 3) {
			plus.hide();
		}

		thumbs.slick({
			infinite: true,
			arrows: false,
			slidesToShow: 3,
			asNavFor: '.js-extheader-6-slider',
			focusOnSelect: true
		});

		slider.slick({
			infinite: true,
			arrows: false,
			fade: true,
			asNavFor: '.js-extheader-6-thumbs'
		});
	}
}());

// video
(function(){
	const body = $('body');

	$('[data-video]').on('click', function(e){
		e.preventDefault();

		body.append(`
			<div class="modal js-modal">
				<div class="modal__container js-modal-container">
					<button class="modal__close js-modal-close">
						<svg class="icon icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
							<path d="M13.4.6a1 1 0 0 1 0 1.4l-5 5 5 5c.4.4.4.9.1 1.3v.1a1 1 0 0 1-1.4 0l-5-5-5 5c-.4.4-.9.4-1.3.1H.6a1 1 0 0 1 0-1.4l5-5-5-5C.3 1.7.2 1.1.6.7V.6A1 1 0 0 1 2 .6l5 5 5-5c.4-.4.9-.4 1.3-.1h.1z"/>
						</svg>
					</button>
					<div class="modal__body">
						<div class="modal__video">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data('video')}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		`);

		setTimeout(function(){
			body.find('.js-modal').addClass('visible');
		}, 10);

		body.on('click', '.js-modal', function(){
			const _this = $(this);
			_this.removeClass('visible');
			setTimeout(function(){
				_this.remove();
			}, 300);
		});

		body.on('click', '.js-modal-container', function(e){
			e.stopPropagation();
		});
	});

	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			body.find('.js-modal').trigger('click');
		}
	});
}());















// closing ready
});