const padre_m = document.getElementById('div-dia-hoy-m')
const limite_m = document.getElementById('div-dia-mañana-m')


const funcionAgregar_m = function agg(){

	const resultado_m = document.createElement('h4')

	const resultadoPrompt_m = prompt('Cual fue tu resultado');
	const text_m = document.createTextNode(resultadoPrompt_m)

	resultado_m.appendChild(text_m)
	padre_m.appendChild(resultado_m)
}






const padre_e = document.getElementById('div-dia-hoy-e')
const limite_e = document.getElementById('div-dia-mañana-e')


const funcionAgregar_e = function agg(){

	const resultado_e = document.createElement('h4')

	const resultadoPrompt_e = prompt('Cual fue tu resultado');
	const text_e = document.createTextNode(resultadoPrompt_e)

	resultado_e.appendChild(text_e)
	padre_e.appendChild(resultado_e)
}

