// $(function(){

//   $("a").click(function(event){
//     if (this.hash !== "") {
//       event.preventDefault();

//       var gato = this.hash;

//       $("html, body").animate({
//         scrollTop: $(gato).offset().top
//       }, 800, function(){
//         window.location.hash = gato;
//       });
//     }
//   });

//   $('[data-toggle="popover"]').popover();

// });

var popoverTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

var anclas = document.querySelectorAll('a');

anclas.forEach((a) => {
	if (a.hash !== '') {
		a.addEventListener('click', function (event) {
			event.preventDefault();

			var hash = document.querySelector(a.hash);

			window.scroll({
				top: hash.offsetTop,
				behavior: 'smooth',
			});
		});
	}
});
