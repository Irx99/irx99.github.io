   
    //Averigua si tiene la clase "solido". Si la tiene devuelve true, sino false
    function classSolido(fila, columna){
		var lista = document.getElementById(fila+"-"+columna).className;
		var array = lista.split(" ")
		for(i=0;i<array.length;i++){
			if (array[i] == "solido"){
				return true;
				break;
			}
		}
    return false;
    }
   
    //Averigua si tiene la clase "roca", si la tiene devuelve true
    function classRoca(fila, columna){
		var casilla = document.getElementById(fila+"-"+columna).className;
		if(casilla == "roca"){
			return true;
		}
		return false;
    }
   
