$(function() {

	/*filter */
	let filter = $("[data-filter]");

	filter.on("click", function(event){
		event.preventDefault();

		let cat = $(this).data('filter');

		if(cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function() {
				let workCat = $(this).data('cat');
				if(workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			})
		}

	});

	/*modal*/

	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on("click", function(event) {

		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$("body").addClass('no-scrill');
	});

	modalClose.on("click", function(event) {
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.removeClass('show');
		$("body").removeClass('no-scrill');
	});

	$(".modal").on("click", function(event) {
		$(this).removeClass('show');
		$("body").removeClass('no-scrill');
	});

	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});

});