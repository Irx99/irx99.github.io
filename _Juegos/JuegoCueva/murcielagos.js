
	//Objeto murcielago
	function Murcielago(minX, minY, maxX, maxY, posX, posY){
	
		this.id = numIdMur;
		this.vida = 2;
		this.minX = minX;
		this.maxX = maxX;
		this.minY = minY;
		this.maxY = maxY;
		this.posX = posX;
		this.posY = posY;
		
		var trys;
	}
	
	function crearMurcielago(minX, mixY, maxX, maxY, posX, posY){
		murcielago[numIdMur] = new Murcielago(minX, mixY, maxX, maxY, posX, posY);
		posicionarMurcielago(murcielago[numIdMur]);
		document.getElementById(murcielago[numIdMur].posX+"-"+murcielago[numIdMur].posY).enemyMurcielago = true;
		numIdMur++;
	}
	
	function posicionarMurcielago(obj){
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "<img src=\"imagenes/Murcielago.png\"/>";
		document.getElementById(obj.posX+"-"+obj.posY).enemyMurcielago = true;
	}

	function iaMurcielago(obj){	
		obj.trys = 0;
		movimientoMurcielago(obj);
	}
	
	function movimientoMurcielago(obj){
		switch(parseInt((Math.random()*4)+1)){
			//Arriba (posY-1)
			case 1:
				avanzarMurcielago(obj,0,-1);
				break;
			//Derecha  (posX+1)
			case 2: 
				avanzarMurcielago(obj,1,0);
				break;
			//Abajo  (posY+1)
			case 3:
				avanzarMurcielago(obj,0,1);
				break;
			//Izquieda  (posX-1)
			case 4:
				avanzarMurcielago(obj,-1,0);
				break;
			default:
				break;
		}
	}
	
	//Mueve al murcielago (o no)
	function avanzarMurcielago(obj, posX, posY){
		if(//Si no puede avanzar
		classSolido(parseInt(obj.posX)+parseInt(posX), parseInt(obj.posY)+parseInt(posY)) || //Se encuentra con un bloque solido
		parseInt(obj.posX)+parseInt(posX) < obj.minX || //Se sale de sus limites
		parseInt(obj.posX)+parseInt(posX) > obj.maxX ||
		parseInt(obj.posY)+parseInt(posY) < obj.minY ||
		parseInt(obj.posY)+parseInt(posY) > obj.maxY ||
		obj.vida <= 0 || //Si su vida es menor o igual que 0
		document.getElementById((parseInt(obj.posX)+parseInt(posX))+"-"+(parseInt(obj.posY)+parseInt(posY))).enemyMurcielago == true  || //Si se encuentra con otro Murcielago
		classRoca((parseInt(obj.posX)+parseInt(posX)), (parseInt(obj.posY)+parseInt(posY))) //Si se encuentra con una roca
		){
			if(obj.trys > 10 || document.getElementById(obj.posX+"-"+obj.posY).enemyMurcielago == false){//Rompe el bucle
				
			}else{
				obj.trys++;
				movimientoMurcielago(obj);//Intenta moverse a una direccion aleatoria un maximo de 10 veces 
			}
		}else{
			if(obj.posX+posX == fila && obj.posY+posY == columna){//Si se mueve hacia ti te hace daño
				document.getElementById("caja").innerHTML += "<font color=\"a40000\"><pre> El murcielago te golpea<br><pre><font>";
				quitarVida(1);
			}else{//Si no sucede nada de todo lo anterior avanza
				document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
				document.getElementById(obj.posX+"-"+obj.posY).enemyMurcielago = false;
				obj.posX = parseInt(obj.posX)+parseInt(posX);
				obj.posY = parseInt(obj.posY)+parseInt(posY);
				posicionarMurcielago(obj);
			}
		}
	}
	
	//El murcielago desaparece del mapa
	function destruyeMurcielago(obj){
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
		document.getElementById(obj.posX+"-"+obj.posY).enemyMurcielago = "false";
	}
	