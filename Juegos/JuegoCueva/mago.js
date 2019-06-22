	
	//Objeto Mago
	function Mago(){
		this.vida = 20;
		this.minX = 24;
		this.maxX = 28;
		this.minY = 4;
		this.maxY = 8;
		this.posX = 26;
		this.posY = 6;
		
		this.vivo = true;
		var trys;
	}
	
	function iaMago(obj){
		obj.trys = 0;
		if(contMago < 3){
			atacarMago(obj);
		}
		if(contMago >= 3){
			movimientoMago(mago);
		}
		contMago++;
		if(contMago == 6){
			contMago = 0;
		}
	}
	
	function movimientoMago(obj){
		switch(parseInt((Math.random()*4)+1)){
			//Arriba (posY-1)
			case 1:
				avanzarMago(obj,0,-1);
				break;
			//Derecha  (posX+1)
			case 2: 
				avanzarMago(obj,1,0);
				break;
			//Abajo  (posY+1)
			case 3:
				avanzarMago(obj,0,1);
				break;
			//Izquieda  (posX-1)
			case 4:
				avanzarMago(obj,-1,0);
				break;
			default:
				break;
		}
	}
	
	//Mueve al mago (o no)
	function avanzarMago(obj, posX, posY){
		if(//Si no puede avanzar
		classSolido(parseInt(obj.posX)+parseInt(posX), parseInt(obj.posY)+parseInt(posY)) || //Se encuentra con un bloque solido
		parseInt(obj.posX)+parseInt(posX) < obj.minX || //Se sale de sus limites
		parseInt(obj.posX)+parseInt(posX) > obj.maxX ||
		parseInt(obj.posY)+parseInt(posY) < obj.minY ||
		parseInt(obj.posY)+parseInt(posY) > obj.maxY ||
		obj.vida <= 0 ||
		(parseInt(obj.posX)+parseInt(posX) == fila && parseInt(obj.posY)+parseInt(posY) == columna)
		){
			if(obj.trys > 10){//Rompe el bucle
			}else{
				obj.trys++;
				movimientoMago(obj);//Intenta moverse a una direccion aleatoria un maximo de 10 veces 
			}
		}else{
			//Si no sucede nada de todo lo anterior avanza
			document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
			obj.posX = parseInt(obj.posX)+parseInt(posX);
			obj.posY = parseInt(obj.posY)+parseInt(posY);
			document.getElementById(mago.posX+"-"+mago.posY).innerHTML = "<img src=\"imagenes/mago.png\"/>";
		}
	}
	
	//Ataca creando bolas de fuego
	function atacarMago(obj){
		if(contMago == 0 || contMago == 2){
			creacionBola((obj.posX+1), (obj.posY+1), 1, 1);
			creacionBola((obj.posX+1), (obj.posY-1), 1, -1);
			creacionBola((obj.posX-1), (obj.posY+1), -1, 1);
			creacionBola((obj.posX-1), (obj.posY-1), -1, -1);
		}
		if(contMago == 1){
			creacionBola((obj.posX+1), (obj.posY), 1, 0);
			creacionBola((obj.posX-1), (obj.posY), -1, 0);
			creacionBola((obj.posX), (obj.posY+1), 0, 1);
			creacionBola((obj.posX), (obj.posY-1), 0, -1);
		}
	}
	
	function quitarVidaMago(){
		mago.vida = mago.vida - damage;
	}
	
	function destruirMago(){
		document.getElementById(mago.posX+"-"+mago.posY).innerHTML = "";
		mago.vivo = false;
		//Texto final
		if(ms[17] == false){
			document.getElementById("caja").innerHTML += "&nbsp;Personaje: <font color=\"48ff00\"><pre> Se acabo, alli se ve la salida</pre></font>";
			ms[17] = true;
		}
		//Para poder salir
		document.getElementById("19-1").className = "terreno";
	}

	