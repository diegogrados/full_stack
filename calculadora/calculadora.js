window.onload = function () {

	var botones = document.getElementById('botones');
	var limpiar = document.getElementById('limpiar');
	var resultado = document.getElementById('resultado');

	// clicking botones
	botones.addEventListener('click', function(e) {

		if (e.target.nodeName === 'LI') {
			
			var v = e.target.innerHTML;

			if (v === '=') {
				try {
					resultado.innerHTML = eval(resultado.innerHTML)
				}catch(e){
					console.log(e)
					resultado.innerHTML = e.message;
				}		
			} else { 
				resultado.innerHTML += v;
		}
	}
});
	// boton limpiar
	limpiar.addEventListener('click', function(){
			resultado.innerHTML = '';
	});


};