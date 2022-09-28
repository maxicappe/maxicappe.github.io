const padre = document.getElementById('ul-to-put-nodes')








const funcionAgregar_1 = function agg_1(){

	const li_resultado = document.createElement('li')
	const prompt_resultado = prompt('Cual fue tu resultado');
	const text = document.createTextNode(prompt_resultado);
	li_resultado.appendChild(text)
	padre.appendChild(li_resultado);

	localStorage.setItem( "resultado_1", prompt_resultado );


}


const resultadoFinal = localStorage.getItem('resultado_1');

	const li_resultado = document.createElement('li')
	const text = document.createTextNode(resultadoFinal);
	li_resultado.appendChild(text)
	padre.appendChild(li_resultado);










const funcionAgregar_2 = function agg_2(){

	const li_resultado_2 = document.createElement('li')
	const prompt_resultado_2 = prompt('Cual fue tu resultado');
	const text_2 = document.createTextNode(prompt_resultado_2);
	li_resultado_2.appendChild(text_2)
	padre.appendChild(li_resultado_2);

	localStorage.setItem( "resultado_2", prompt_resultado_2 );


}


const resultadoFinal_2 = localStorage.getItem('resultado_2');

	const li_resultado_2 = document.createElement('li')
	const text_2 = document.createTextNode(resultadoFinal_2);
	li_resultado_2.appendChild(text_2)
	padre.appendChild(li_resultado_2);










const funcionAgregar_3 = function agg_3(){

	const li_resultado_3 = document.createElement('li')
	const prompt_resultado_3 = prompt('Cual fue tu resultado');
	const text_3 = document.createTextNode(prompt_resultado_3);
	li_resultado_3.appendChild(text_3)
	padre.appendChild(li_resultado_3);

	localStorage.setItem( "resultado_3", prompt_resultado_3 );

	}




const resultadoFinal_3 = localStorage.getItem('resultado_3');

	const li_resultado_3 = document.createElement('li')
	const text_3 = document.createTextNode(resultadoFinal_3);
	li_resultado_3.appendChild(text_3)
	padre.appendChild(li_resultado_3);









const funcionAgregar_4 = function agg_4(){

	const li_resultado_4 = document.createElement('li')
	const prompt_resultado_4 = prompt('Cual fue tu resultado');
	const text_4 = document.createTextNode(prompt_resultado_4);
	li_resultado_4.appendChild(text_4)
	padre.appendChild(li_resultado_4);

	localStorage.setItem( "resultado_4", prompt_resultado_4 );


}


const resultadoFinal_4 = localStorage.getItem('resultado_4');

	const li_resultado_4 = document.createElement('li')
	const text_4 = document.createTextNode(resultadoFinal_4);
	li_resultado_4.appendChild(text_4)
	padre.appendChild(li_resultado_4);
