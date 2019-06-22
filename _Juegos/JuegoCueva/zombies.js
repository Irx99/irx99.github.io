
	//Objeto zombie
	function Zombie(minX, minY, maxX, maxY, posX, posY){
	
		this.id = numIdZom;
		this.vida = 4;
		this.minX = minX;
		this.maxX = maxX;
		this.minY = minY;
		this.maxY = maxY;
		this.posX = posX;
		this.posY = posY;
		
		var trys;
	}
	
	function crearZombie(posX, posY){
			zombie[numIdZom] = new Zombie("11", "27", "32", "39", posX, posY);
			posicionarZombie(zombie[numIdZom]);
			document.getElementById(zombie[numIdZom].posX+"-"+zombie[numIdZom].posY).enemyZombie = true;
			numIdZom++;
	}
	
	//Posicionar Zombies
	function posicionarZombie(obj){
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "<img src=\"imagenes/zombie.png\"/>";
		document.getElementById(obj.posX+"-"+obj.posY).enemyZombie = true;
	}
	
	//IA de los zombies (van hacia el personaje)
	function iaZombie(obj){
		obj.trys = 0;
		
		var moduloX, moduloY;
		var totalX, totalY;
		
		moduloX = fila - obj.posX;
		moduloY = columna - obj.posY;
		
		totalX = moduloX;
		totalY = moduloY;
		
		if(moduloX < 0){
			totalX = moduloX * (-1);
		}
		if(moduloY < 0){
			totalY = moduloY * (-1);
		}
		
		if(totalX >= totalY){
			if(moduloX >= 0){
					valor = 3;
				//alert(obj.id+": Abajo");
			}else{
				valor = 1;
				//alert(obj.id+": Arriba");
			}	
		}else{
			if(moduloY >= 0){
				valor = 2;
				//alert(obj.id+": Derecha");
			}else{
				valor = 4;
				//alert(obj.id+": Izquierda");
			}
		}
		moverZombie(obj, valor);
	}
	
	//Movimiento aleatorio
	function moverZombieRandom(obj1){
		switch(parseInt((Math.random()*4)+1)){
			//Arriba (posY-1)
			case 1:
				avanzarZombie(obj1,0,-1);
				break;
			//Derecha  (posX+1)
			case 2: 
				avanzarZombie(obj1,1,0);
				break;
			//Abajo  (posY+1)
			case 3:
				avanzarZombie(obj1,0,1);
				break;
			//Izquieda  (posX-1)
			case 4:
				avanzarZombie(obj1,-1,0);
				break;
			default:
				break;
		}
	}
	
	//Movimiento hacia el personaje
	function moverZombie(obj, valor){
		switch(valor){
			//Arriba (posY-1)
			case 1:
				avanzarZombie(obj,-1,0);
				break;
			//Derecha  (posX+1)
			case 2: 
				avanzarZombie(obj,0,1);
				break;
			//Abajo  (posY+1)
			case 3:
				avanzarZombie(obj,1,0);
				break;
			//Izquieda  (posX-1)
			case 4:
				avanzarZombie(obj,0,-1);
				break;
			default:
				break;
		}
	}
	
	//Mueve al zombie (o no)
	function avanzarZombie(obj, posX, posY){
		if(//Si no puede avanzar
		classSolido(parseInt(obj.posX)+parseInt(posX), parseInt(obj.posY)+parseInt(posY)) || //Se encuentra con un bloque solido
		parseInt(obj.posX)+parseInt(posX) < obj.minX || //Se sale de sus limites
		parseInt(obj.posX)+parseInt(posX) > obj.maxX ||
		parseInt(obj.posY)+parseInt(posY) < obj.minY ||
		parseInt(obj.posY)+parseInt(posY) > obj.maxY ||
		obj.vida <= 0 || //Si su vida es menor o igual que 0
		document.getElementById((parseInt(obj.posX)+parseInt(posX))+"-"+(parseInt(obj.posY)+parseInt(posY))).enemyZombie == true  || //Si se encuentra con otro Zombie
		document.getElementById((parseInt(obj.posX)+parseInt(posX))+"-"+(parseInt(obj.posY)+parseInt(posY))).enemyZombie == "dead"	 //Si se encuentra con el cadaver de otro Zombie
		){
			if(obj.trys > 10 || document.getElementById(obj.posX+"-"+obj.posY).enemyZombie == false || document.getElementById(obj.posX+"-"+obj.posY).enemyZombie == "dead"){//Rompe el bucle
			
			}else{
				obj.trys++;
				moverZombieRandom(obj);//Intenta moverse a una direccion aleatoria un maximo de 10 veces 
			}
		}else{
			if(obj.posX+posX == fila && obj.posY+posY == columna){//Si se mueve hacia ti te hace daño
				document.getElementById("caja").innerHTML += "<pre><font color=\"a40000\"> El zombie te golpea</pre></font>";
				quitarVida(1);
			}else{//Si no sucede nada de todo lo anterior avanza
				document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
				document.getElementById(obj.posX+"-"+obj.posY).enemyZombie = false;
				obj.posX = parseInt(obj.posX)+parseInt(posX);
				obj.posY = parseInt(obj.posY)+parseInt(posY);
				posicionarZombie(obj);
			}
		}
	}

	//El zombie pasa a estar muerto
	function muereZombie(obj){
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "<img src=\"imagenes/zombieMuerto.png\"/>";
		document.getElementById(obj.posX+"-"+obj.posY).enemyZombie = "dead";
	}
	
	//El zombie desaparece del mapa
	function destruyeZombie(obj){
		document.getElementById(obj.posX+"-"+obj.posY).innerHTML = "";
		document.getElementById(obj.posX+"-"+obj.posY).enemyZombie = "false";
	}