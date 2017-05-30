

var maquinas=[];
var mecanicos=[];

maquinas.push(303);
maquinas.push(208);
maquinas.push(190);

mecanicos.push("jose");
mecanicos.push("joel");
mecanicos.push("Sebas");


/*function esVacia(arreglo)

 * DEVUELVE SI EL ARREGLO ES VACIO (TRUE) O NO (FALSE)


{
	
/*if (arreglo.length==0)
	return true; 
else
	return false;


}

esVacia(maquinas)
esVacia(mecanicos)

*/

	
	
	function esVacia(arreglo)
	/*
	 * DEVUELVE SI EL ARREGLO ES VACIO (TRUE) O NO (FALSE)
	 */

	{
		
		return (arreglo.length==0); 
	/* esta es la misma forma de invocar a la funcion pero abreviado */
			
	}
	
	
	
	function asignar()
	{
		
	var nromaquina=maquinas.shift();
	var nummecanico=mecanicos.pop();
	document.write(nromaquinas+"-"+nummecanicos);
	document.write("<br>"); /*retorna el carro*/
	}
	
	while(!esVacia(maquinas) && !esVacia(mecanicos)) /* repite la accion hasta terminar*/
		{
	asignar();
		}
	