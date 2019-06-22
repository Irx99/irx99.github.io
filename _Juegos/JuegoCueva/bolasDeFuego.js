	
	//Objeto BolaDeFuego
	function BolaDeFuego(posX, posY, direccX, direccY){	
		this.posX = posX;
		this.posY = posY;
		this.direccX = direccX;
		this.direccY = direccY;
	}
	
	function creacionBola(posX, posY, direccX, direccY){
		bola[numIdBol] = new BolaDeFuego(posX, posY, direccX, direccY);
		posicionarBolaDeFuego(bola[numIdBol]);
		numIdBol++;
	}
	
	function posicionarBolaDeFuego(obj){
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "<img src=\"imagenes/bolaDeFuego.png\"></img>";
		document.getElementById(obj.posX+"-"+obj.posY).enemyBolaDeFuego = true;
		if(fila == obj.posX && columna == obj.posY){//Si va hacia donde esta el personaje
				document.getElementById("caja").innerHTML += "<font color=\"a40000\"><pre> Eres da&#241;ado por una bola de fuego</pre></font>";
				document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "<img src=\"imagenes/personaje.png\"></img>";
				quitarVida(1);
				document.getElementById(obj.posX+"-"+obj.posY).enemyBolaDeFuego = true;
			}
	}
	
	function iaBolaDeFuego(obj){
		if(classSolido(parseInt(obj.posX+obj.direccX), parseInt(obj.posY+obj.direccY))){
			desaparecerBola(obj);
		}
		if(document.getElementById(obj.posX+"-"+obj.posY).enemyBolaDeFuego == true){
			document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
			if(fila == obj.posX && columna == obj.posY){//Si el personaje ha ido hacia donde estaba
				document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "<img src=\"imagenes/personaje.png\"></img>";
			}
			document.getElementById(obj.posX+"-"+obj.posY).enemyBolaDeFuego == false;
			obj.posX = parseInt(obj.posX) + parseInt(obj.direccX);
			obj.posY = parseInt(obj.posY) + parseInt(obj.direccY);
			if(obj.posX == fila && obj.posY == columna){
				document.getElementById("caja").innerHTML += "<font color=\"a40000\"><pre> Eres dañado por una bola de fuego</pre></font>";
				quitarVida(1);
				document.getElementById(obj.posX+"-"+obj.posY).enemyBolaDeFuego = false;
			}else{
				posicionarBolaDeFuego(obj);
			}
		}
	}
	
	function desaparecerBola(obj){
		document.getElementById(obj.posX+"-"+obj.posY).enemyBolaDeFuego = false;
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
	}