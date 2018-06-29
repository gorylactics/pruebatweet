$(document).ready(function(){
	// aca va todo el codigo 

	$('.box__heart').click(function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		$(this).toggleClass('box__heart--red');
	})

	$('#photo-upload').change(function(){
		var file = $(this).get(0).files[0];
		console.log(file);

		var reader = new FileReader();
		reader.onload = function (e) {
			$('#avatar').attr('src', e.target.result);
		};
		reader.readAsDataURL(file);
	});

	$('#uploader').submit(function(e){
		e.preventDefault();

		var image = $('#avatar').attr('src');
		var message = $('#text__box').val();


		var post = `<div class="row">
						<div class="main col-sd-7 col-md-7">
							<div class="box__profile col-md7">
								<h2 class="box__name">
								<img src="${image}" class="box__avatar col-md-6">
								<br class="box__avatar col-md-6">Monkyman:
								</h2>
								<p class="box__posteo col-md-12">${message}
								</p>
								<i class="fas fa-heart box__heart">
								<span> 0
								</span>
								</i>
								<i class="fas fa-trash-alt box__trash">
								<span> Borrar
								</span>
								</i>
							</div>
						</div>
					</div>`

		$('.container-fluid.box').prepend(post);


	});





}); //aca termina todo el javascript