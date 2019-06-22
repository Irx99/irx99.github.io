	
	//Al pasar un turno
	function pasarTurno(){
		
		//IA de los murcielagos
		for(e1=0;e1<murcielago.length;e1++){
			iaMurcielago(murcielago[e1]);
		}	
		
		//IA de los zombies
		for(e3=0;e3<zombie.length;e3++){
			if(zombie[e3].vida > 0){
				iaZombie(zombie[e3]);
			}
		}
		
		//Si te encuentras en una fuente
		fuente();
		
		//IA de sus ataques
			for(e4=0;e4<bola.length;e4++){
				if(document.getElementById(bola[e4].posX+"-"+bola[e4].posY).enemyBolaDeFuego == true){
					iaBolaDeFuego(bola[e4]);
				}
			}
			
		//Comprueba que exista el mago (sino da error)
		if(typeof mago != "undefined"){
			if(mago.vivo == true){	
				//IA del mago
				iaMago(mago);
			}
		}
		
		//Comprueba y adapta los corazones
		estadoVida();
		
		//Adapata el scroll al ultimo mensaje
		document.getElementById("scrollTexto").scrollTop = document.getElementById("scrollTexto").scrollHeight;
		
		
		//Aumenta en 1 el contador de turnos
		turno++;
		document.getElementById("turno").innerHTML = turno;
	}
	
	//Fuente
	function fuente(){
		if(
		fila == 10 && columna == 25 || fila == 10 && columna == 26 ||
		fila == 31 && columna == 20 || fila == 31 && columna == 21 
		){
			if(vida < 10){
				vida++;
			}
		}
	}
	
	//Todas las opciones posibles en las que puede estar la vida
	function estadoVida(){
		document.getElementById("corazon1").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon2").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon3").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon4").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon5").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon6").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon7").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon8").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon9").src = "imagenes/corazonLleno.png";
		document.getElementById("corazon10").src = "imagenes/corazonLleno.png";
		if(vida < 10){
			document.getElementById("corazon10").src = "imagenes/corazonVacio.png";
			if(vida < 9){
				document.getElementById("corazon9").src = "imagenes/corazonVacio.png";
				if(vida < 8){
					document.getElementById("corazon8").src = "imagenes/corazonVacio.png";
					if(vida < 7){
						document.getElementById("corazon7").src = "imagenes/corazonVacio.png";
						if(vida < 6){
							document.getElementById("corazon6").src = "imagenes/corazonVacio.png";
							if(vida < 5){
								document.getElementById("corazon5").src = "imagenes/corazonVacio.png";
								if(vida < 4){
									document.getElementById("corazon4").src = "imagenes/corazonVacio.png";
									if(vida < 3){
										document.getElementById("corazon3").src = "imagenes/corazonVacio.png";
										if(vida < 2){
											document.getElementById("corazon2").src = "imagenes/corazonVacio.png";
											if(vida < 1){
												document.getElementById("corazon1").src = "imagenes/corazonVacio.png";
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}