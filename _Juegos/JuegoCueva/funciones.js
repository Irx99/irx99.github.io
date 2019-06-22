
   //Combate (Al chocar con un enemigo)
   function combate(fil,col){
   var lista = document.getElementById(fil+"-"+col).className;
   var array = lista.split(" ")
   for(i=0;i<array.length;i++){//Separas los nombres de la clase y buscas el enemigo
		if(array[i]=="M1"){
		    document.getElementById("caja").innerHTML += "&nbsp;Golpeas a un murcielago(1)</br></br>";
			vida_M1=vida_M1-damage;//Quita vida al enemigo
			document.getElementById("vida").innerHTML = vida;//Pone la vida q tienes
			if(vida_M1==0){//Si la vida del enemigo es 0 lo remueve del mapa
			     document.getElementById("caja").innerHTML += "&nbsp;<b>Has matado al murcielago(1)</b></br></br>";
				 document.getElementById(fila_M1+"-"+columna_M1).className = "terreno";
				 document.getElementById(fila_M1+"-"+columna_M1).innerHTML = "";
				}
			}
			
		if(array[i]=="M2"){
		    document.getElementById("caja").innerHTML += "&nbsp;Golpeas a un murcielago(2)</br></br>";
			vida_M2=vida_M2-damage;
			document.getElementById("vida").innerHTML = vida;
			if(vida_M2==0){
			     document.getElementById("caja").innerHTML += "&nbsp;<b>Has matado al murcielago(2)</b></br></br>";
				 document.getElementById(fila_M2+"-"+columna_M2).className = "terreno";
				 document.getElementById(fila_M2+"-"+columna_M2).innerHTML = "";
				}
			}

		if(array[i]=="M3"){
		    document.getElementById("caja").innerHTML += "&nbsp;Golpeas a un murcielago(3)</br></br>";
			vida_M3=vida_M3-damage;
			document.getElementById("vida").innerHTML = vida;
			if(vida_M3==0){
			     document.getElementById("caja").innerHTML += "&nbsp;<b>Has matado al murcielago(3)</b></br></br>";
				 document.getElementById(fila_M3+"-"+columna_M3).className = "terreno";
				 document.getElementById(fila_M3+"-"+columna_M3).innerHTML = "";
				}
			}
			
		if(array[i]=="R1"){
		    document.getElementById("caja").innerHTML += "&nbsp;Golpeas a una rata(1)</br></br>";
			vida_R1=vida_R1-damage;
			document.getElementById("vida").innerHTML = vida;
			if(vida_R1==0){
			     document.getElementById("caja").innerHTML += "&nbsp;<b>Has matado a la rata(1)</b></br></br>";
				 document.getElementById(fila_R1+"-"+columna_R1).className = "terreno";
				 document.getElementById(fila_R1+"-"+columna_R1).innerHTML = "";
				}
			}
		}
   }
   
   //Sistema de turnos
   function pasarTurno(){
	  turno++;
	  document.getElementById("turno").innerHTML = turno;
	  
	  //Movimiento del murcielago 1
	  switch(parseInt((Math.random()*4)+1)){//Para mover enemigos
	   case 1://Arriba
			if(false==classSolido(fila_M1 - 1, columna_M1) && false==classEnemigo(fila_M1 - 1, columna_M1) && vida_M1>0 && fila!=fila_M1-1){//si se encuentra con una pared, con otro enemigo, si esta muerto o si sale de su sala no se mueve
				fila_M1--;
				var casilla = document.getElementById(fila_M1+"-"+columna_M1);
				casilla.innerHTML="M";
				document.getElementById(fila_M1+1+"-"+columna_M1).innerHTML="";
				document.getElementById(fila_M1+1+"-"+columna_M1).className="terreno";
				document.getElementById(fila_M1+"-"+columna_M1).className = "enemigo terreno M1";
			}
			
			if(fila==fila_M1-1 && columna==columna_M1 && vida_M1>0){//Si un enemigo va hacia tu posicion
			    document.getElementById("caja").innerHTML += "&nbsp;El murcielago(1) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 2://Abajo
			if(classSolido(fila_M1 + 1, columna_M1) && false==classEnemigo(fila_M1 + 1, columna_M1) && vida_M1>0 && fila!=fila_M1+1){
				fila_M1++;
				var casilla =  document.getElementById(fila_M1+"-"+columna_M1);
				casilla.innerHTML="M";
				document.getElementById(fila_M1-1+"-"+columna_M1).innerHTML="";
				document.getElementById(fila_M1-1+"-"+columna_M1).className="terreno";
				document.getElementById(fila_M1+"-"+columna_M1).className = "enemigo terreno M1";
			}
			
			if(fila==fila_M1+1 && columna==columna_M1 && vida_M1>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(1) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 3://Izquierda
			if(classSolido(fila_M1, columna_M1 - 1) && false==classEnemigo(fila_M1, columna_M1 - 1) && vida_M1>0 && columna!=columna_M1-1 && columna_M1!=6){
				columna_M1--;
				var casilla =  document.getElementById(fila_M1+"-"+columna_M1);
				casilla.innerHTML="M";
				document.getElementById(fila_M1+"-"+(columna_M1+1)).innerHTML="";
				document.getElementById(fila_M1+"-"+(columna_M1+1)).className="terreno";
				document.getElementById(fila_M1+"-"+columna_M1).className = "enemigo terreno M1";
			}
			
			if(columna==columna_M1-1 && fila==fila_M1 && vida_M1>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(1) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 4://Derecha
			if(classSolido(fila_M1, columna_M1 + 1) && false==classEnemigo(fila_M1, columna_M1 + 1) && vida_M1>0 && columna!=columna_M1+1 && columna_M1!=10){
				columna_M1++;
				var casilla =  document.getElementById(fila_M1+"-"+columna_M1);
				casilla.innerHTML="M";
				document.getElementById(fila_M1+"-"+(columna_M1-1)).innerHTML="";
				document.getElementById(fila_M1+"-"+(columna_M1-1)).className="terreno";
				document.getElementById(fila_M1+"-"+columna_M1).className = "enemigo terreno M1";
			}
			
			if(columna==columna_M1+1 && fila==fila_M1 && vida_M1>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(1) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	  
	   default:
			alert("q mierdas has hecho?, ya lo has roto ¬¬");
			break;
			}
	
	//Movimiento del murcielago 2
	switch(parseInt((Math.random()*4)+1)){//Para mover enemigos
	   case 1://Arriba
			if(classSolido(fila_M2 - 1, columna_M2) && classEnemigo(fila_M2 - 1, columna_M2) && vida_M2>0 && fila!=fila_M2-1){
				fila_M2--;
				var casilla = document.getElementById(fila_M2+"-"+columna_M2);
				casilla.innerHTML="M";
				document.getElementById(fila_M2+1+"-"+columna_M2).innerHTML="";
				document.getElementById(fila_M2+1+"-"+columna_M2).className="terreno";
				document.getElementById(fila_M2+"-"+columna_M2).className = "enemigo terreno M2";
			}
			
			if(fila==fila_M2-1 && columna==columna_M2 && vida_M2>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(2) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 2://Abajo
			if(classSolido(fila_M2 + 1, columna_M2) && false==classEnemigo(fila_M2 + 1, columna_M2) && vida_M2>0 && fila!=fila_M2+1){
				fila_M2++;
				var casilla =  document.getElementById(fila_M2+"-"+columna_M2);
				casilla.innerHTML="M";
				document.getElementById(fila_M2-1+"-"+columna_M2).innerHTML="";
				document.getElementById(fila_M2-1+"-"+columna_M2).className="terreno";
				document.getElementById(fila_M2+"-"+columna_M2).className = "enemigo terreno M2";
			}
			
			if(fila==fila_M2+1 && columna==columna_M2 && vida_M2>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(2) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 3://Izquierda
			if(classSolido(fila_M2, columna_M2 - 1) && false==classEnemigo(fila_M2, columna_M2 - 1) && vida_M2>0 && columna!=columna_M2-1 && columna_M2!=6){
				columna_M2--;
				var casilla =  document.getElementById(fila_M2+"-"+columna_M2);
				casilla.innerHTML="M";
				document.getElementById(fila_M2+"-"+(columna_M2+1)).innerHTML="";
				document.getElementById(fila_M2+"-"+(columna_M2+1)).className="terreno";
				document.getElementById(fila_M2+"-"+columna_M2).className = "enemigo terreno M2";
			}

			if(columna==columna_M2-1 && fila==fila_M1 && vida_M2>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(2) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 4://Derecha
			if(classSolido(fila_M2, columna_M2 + 1) && false==classEnemigo(fila_M2, columna_M2 + 1) && vida_M2>0 && columna!=columna_M2+1 && columna_M2!=10){
				columna_M2++;
				var casilla =  document.getElementById(fila_M2+"-"+columna_M2);
				casilla.innerHTML="M";
				document.getElementById(fila_M2+"-"+(columna_M2-1)).innerHTML="";
				document.getElementById(fila_M2+"-"+(columna_M2-1)).className="terreno";
				document.getElementById(fila_M2+"-"+columna_M2).className = "enemigo terreno M2";
			}
			
			if(columna==columna_M2+1 && fila==fila_M1 && vida_M2>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(2) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	  
	   default:
			alert("q mierdas has hecho?, ya lo has roto ¬¬");
			break;
	  }
	  
	//Movimiento del murcielago 3
	switch(parseInt((Math.random()*4)+1)){//Para mover enemigos
	   case 1://Arriba
			if(classSolido(fila_M3 - 1, columna_M3) && false==classEnemigo(fila_M3 - 1, columna_M3) && vida_M3>0 && fila!=fila_M3-1 && fila_M3!=6){
				fila_M3--;
				var casilla = document.getElementById(fila_M3+"-"+columna_M3);
				casilla.innerHTML="M";
				document.getElementById(fila_M3+1+"-"+columna_M3).innerHTML="";
				document.getElementById(fila_M3+1+"-"+columna_M3).className="terreno";
				document.getElementById(fila_M3+"-"+columna_M3).className = "enemigo terreno M3";
			}
			
			if(fila==fila_M3-1 && columna==columna_M3 && vida_M3>0){//Si un enemigo va hacia tu posicion
			    document.getElementById("caja").innerHTML += "&nbsp;El murcielago(3) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}

			break;
	   
	   case 2://Abajo
				if(classSolido(fila_M3 + 1, columna_M3) && false==classEnemigo(fila_M3 + 1, columna_M3) && vida_M3>0 && fila!=fila_M3+1){
				fila_M3++;
				var casilla =  document.getElementById(fila_M3+"-"+columna_M3);
				casilla.innerHTML="M";
				document.getElementById(fila_M3-1+"-"+columna_M3).innerHTML="";
				document.getElementById(fila_M3-1+"-"+columna_M3).className="terreno";
				document.getElementById(fila_M3+"-"+columna_M3).className = "enemigo terreno M3";
			}
			
			if(fila==fila_M3+1 && columna==columna_M3 && vida_M3>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(3) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
		
			break;
	   
	   case 3://Izquierda
			if(classSolido(fila_M3, columna_M3 - 1) && false==classEnemigo(fila_M3, columna_M3 - 1) && vida_M3>0 && columna!=columna_M3-1){
				columna_M3--;
				var casilla =  document.getElementById(fila_M3+"-"+columna_M3);
				casilla.innerHTML="M";
				document.getElementById(fila_M3+"-"+(columna_M3+1)).innerHTML="";
				document.getElementById(fila_M3+"-"+(columna_M3+1)).className="terreno";
				document.getElementById(fila_M3+"-"+columna_M3).className = "enemigo terreno M3";
			}
			
			if(columna==columna_M3-1 && fila==fila_M3 && vida_M3>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(3) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 4://Derecha
			if(classSolido(fila_M3, columna_M3 + 1) && false==classEnemigo(fila_M3, columna_M3 + 1) && vida_M3>0 && columna!=columna_M3+1 && columna_M3!=20){
				columna_M3++;
				var casilla =  document.getElementById(fila_M3+"-"+columna_M3);
				casilla.innerHTML="M";
				document.getElementById(fila_M3+"-"+(columna_M3-1)).innerHTML="";
				document.getElementById(fila_M3+"-"+(columna_M3-1)).className="terreno";
				document.getElementById(fila_M3+"-"+columna_M3).className = "enemigo terreno M3";
			}
			
			if(columna==columna_M3+1 && fila==fila_M3 && vida_M3>0){
				document.getElementById("caja").innerHTML += "&nbsp;El murcielago(3) te ha golpeado</br></br>";
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
			default:
			alert("q mierdas has hecho?, ya lo has roto ¬¬");
			break;
	  }
			
	//Movimiento de la rata 1
	switch(parseInt((Math.random()*4)+1)){//Para mover enemigos
	   case 1://Arriba
			if(classSolido(fila_R1 - 1, columna_R1) && false==classEnemigo(fila_R1 - 1, columna_R1) && vida_R1>0 && fila!=fila_R1-1 && fila_R1!=6){
				fila_R1--;
				var casilla = document.getElementById(fila_R1+"-"+columna_R1);
				casilla.innerHTML="R";
				document.getElementById(fila_R1+1+"-"+columna_R1).innerHTML="";
				document.getElementById(fila_R1+1+"-"+columna_R1).className="terreno";
				document.getElementById(fila_R1+"-"+columna_R1).className = "enemigo terreno R1";
			}
			
			if(fila==fila_R1-1 && columna==columna_R1 && vida_R1>0){//Si un enemigo va hacia tu posicion
			    document.getElementById("caja").innerHTML += "&nbsp;La rata(1) te ha golpeado</br></br>";
				vida--;
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}

			break;
	   
	   case 2://Abajo
				if(classSolido(fila_R1 + 1, columna_R1) && false==classEnemigo(fila_R1 + 1, columna_R1) && vida_R1>0 && fila!=fila_R1+1){
				fila_R1++;
				var casilla =  document.getElementById(fila_R1+"-"+columna_R1);
				casilla.innerHTML="R";
				document.getElementById(fila_R1-1+"-"+columna_R1).innerHTML="";
				document.getElementById(fila_R1-1+"-"+columna_R1).className="terreno";
				document.getElementById(fila_R1+"-"+columna_R1).className = "enemigo terreno R1";
			}
			
			if(fila==fila_R1+1 && columna==columna_R1 && vida_R1>0){
				document.getElementById("caja").innerHTML += "&nbsp;La rata(1) te ha golpeado</br></br>";
				vida--;
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
		
			break;
	   
	   case 3://Izquierda
			if(classSolido(fila_R1, columna_R1 - 1) && false==classEnemigo(fila_R1, columna_R1 - 1) && vida_R1>0 && columna!=columna_R1-1){
				columna_R1--;
				var casilla =  document.getElementById(fila_R1+"-"+columna_R1);
				casilla.innerHTML="R";
				document.getElementById(fila_R1+"-"+(columna_R1+1)).innerHTML="";
				document.getElementById(fila_R1+"-"+(columna_R1+1)).className="terreno";
				document.getElementById(fila_R1+"-"+columna_R1).className = "enemigo terreno R1";
			}
			
			if(columna==columna_R1-1 && fila==fila_R1 && vida_R1>0){
				document.getElementById("caja").innerHTML += "&nbsp;La rata(1) te ha golpeado</br></br>";
				vida--;
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
			
			break;
	   
	   case 4://Derecha
			if(classSolido(fila_R1, columna_R1 + 1) && false==classEnemigo(fila_R1, columna_R1 + 1) && vida_R1>0 && columna!=columna_R1+1 && columna_R1!=20){
				columna_R1++;
				var casilla =  document.getElementById(fila_R1+"-"+columna_R1);
				casilla.innerHTML="R";
				document.getElementById(fila_R1+"-"+(columna_R1-1)).innerHTML="";
				document.getElementById(fila_R1+"-"+(columna_R1-1)).className="terreno";
				document.getElementById(fila_R1+"-"+columna_R1).className = "enemigo terreno R1";
			}
			
			break;
			
			if(columna==columna_R1+1 && fila==fila_R1 && vida_R1>0){
				document.getElementById("caja").innerHTML += "&nbsp;La rata(1) te ha golpeado</br></br>";
				vida--;
				vida--;
				document.getElementById("vida").innerHTML = vida;
			}
	  
	   default:
			alert("q mierdas has hecho?, ya lo has roto ¬¬");
			break;
	  }
	  
	  //Movimiento del "Boss 1"
	  var B1= document.getElementById("4-25");
	  var fuego = new Array();
	  var fuego2 = new Array();
	  if((turno-1)%4==0){
			B1.innerHTML = "<img src=\"imagenes/lanzaFuego.png\"></img>";
			//Movimiento del fuego
			fuego[0] = document.getElementById("4-26");
			fuego[1] = document.getElementById("4-27");
			fuego[2] = document.getElementById("4-28");
			fuego[3] = document.getElementById("4-24");
			fuego[4] = document.getElementById("4-23");
			fuego[5] = document.getElementById("4-22");
			fuego[6] = document.getElementById("3-25");
			fuego[7] = document.getElementById("2-25");
			fuego[8] = document.getElementById("1-25");
			fuego[9] = document.getElementById("5-25");
			fuego[10] = document.getElementById("6-25");
			fuego[11] = document.getElementById("7-25");
			
			fuego2[0] = document.getElementById("5-26");
			fuego2[1] = document.getElementById("5-27");
			fuego2[2] = document.getElementById("6-28");
			fuego2[3] = document.getElementById("5-24");
			fuego2[4] = document.getElementById("6-24");
			fuego2[5] = document.getElementById("7-23");
			fuego2[6] = document.getElementById("3-24");
			fuego2[7] = document.getElementById("3-23");
			fuego2[8] = document.getElementById("2-22");
			fuego2[9] = document.getElementById("3-26");
			fuego2[10] = document.getElementById("2-26");
			fuego2[11] = document.getElementById("1-27");
			
			for(i=0;i<fuego.length;i++){
			fuego[i].innerHTML = "";
			fuego2[i].innerHTML = "<img src=\"imagenes/fuego.gif\"></img>";
		}
		
			if(fila == 5 && columna == 26 ||
			   fila == 5 && columna == 27 ||
			   fila == 6 && columna == 28 ||
			   fila == 5 && columna == 24 ||
			   fila == 6 && columna == 24 ||
			   fila == 7 && columna == 23 ||
			   fila == 3 && columna == 24 ||
			   fila == 3 && columna == 23 ||
			   fila == 3 && columna == 22 ||
			   fila == 3 && columna == 26 ||
			   fila == 2 && columna == 26 ||
			   fila == 1 && columna == 27){derrota();}
	  
	  }else if((turno-2)%4==0){
			B1.innerHTML = "<img src=\"imagenes/lanzaFuego2.png\"></img>";
			//Movimiento del fuego
			fuego[0] = document.getElementById("5-26");
			fuego[1] = document.getElementById("5-27");
			fuego[2] = document.getElementById("6-28");
			fuego[3] = document.getElementById("5-24");
			fuego[4] = document.getElementById("6-24");
			fuego[5] = document.getElementById("7-23");
			fuego[6] = document.getElementById("3-24");
			fuego[7] = document.getElementById("3-23");
			fuego[8] = document.getElementById("2-22");
			fuego[9] = document.getElementById("4-26");
			fuego[10] = document.getElementById("2-26");
			fuego[11] = document.getElementById("1-27");
			
			fuego2[0] = document.getElementById("5-26");
			fuego2[1] = document.getElementById("6-27");
			fuego2[2] = document.getElementById("7-28");
			fuego2[3] = document.getElementById("5-24");
			fuego2[4] = document.getElementById("6-23");
			fuego2[5] = document.getElementById("7-22");
			fuego2[6] = document.getElementById("3-26");
			fuego2[7] = document.getElementById("2-27");
			fuego2[8] = document.getElementById("1-28");
			fuego2[9] = document.getElementById("3-24");
			fuego2[10] = document.getElementById("2-23");
			fuego2[11] = document.getElementById("1-22");
			
			for(i=0;i<fuego.length;i++){
			fuego[i].innerHTML = "";
			fuego2[i].innerHTML = "<img src=\"imagenes/fuego.gif\"></img>";
			}
			
			if(fila == 5 && columna == 26 ||
			   fila == 6 && columna == 27 ||
			   fila == 7 && columna == 28 ||
			   fila == 5 && columna == 24 ||
			   fila == 6 && columna == 23 ||
			   fila == 7 && columna == 22 ||
			   fila == 3 && columna == 26 ||
			   fila == 2 && columna == 27 ||
			   fila == 1 && columna == 28 ||
			   fila == 3 && columna == 24 ||
			   fila == 2 && columna == 23 ||
			   fila == 1 && columna == 22){derrota();}
		
	  }else if((turno-3)%4==0){
			B1.innerHTML = "<img src=\"imagenes/lanzaFuego2.png\"></img>";
			//Movimiento del fuego
			fuego[0] = document.getElementById("5-26");
			fuego[1] = document.getElementById("6-27");
			fuego[2] = document.getElementById("7-28");
			fuego[3] = document.getElementById("5-24");
			fuego[4] = document.getElementById("6-23");
			fuego[5] = document.getElementById("7-22");
			fuego[6] = document.getElementById("0-0");
			fuego[7] = document.getElementById("2-27");
			fuego[8] = document.getElementById("1-28");
			fuego[9] = document.getElementById("0-0");
			fuego[10] = document.getElementById("2-23");
			fuego[11] = document.getElementById("1-22");
			
			fuego2[0] = document.getElementById("5-26");
			fuego2[1] = document.getElementById("6-26");
			fuego2[2] = document.getElementById("7-27");
			fuego2[3] = document.getElementById("3-26");
			fuego2[4] = document.getElementById("3-27");
			fuego2[5] = document.getElementById("2-28");
			fuego2[6] = document.getElementById("3-24");
			fuego2[7] = document.getElementById("2-24");
			fuego2[8] = document.getElementById("1-23");
			fuego2[9] = document.getElementById("5-24");
			fuego2[10] = document.getElementById("5-23");
			fuego2[11] = document.getElementById("6-22");
			
			for(i=0;i<fuego.length;i++){
			fuego[i].innerHTML = "";
			fuego2[i].innerHTML = "<img src=\"imagenes/fuego.gif\"></img>";
		}
		
		    if(fila == 5 && columna == 26 ||
			   fila == 6 && columna == 26 ||
			   fila == 7 && columna == 27 ||
			   fila == 3 && columna == 26 ||
			   fila == 3 && columna == 27 ||
			   fila == 2 && columna == 28 ||
			   fila == 3 && columna == 24 ||
			   fila == 2 && columna == 24 ||
			   fila == 1 && columna == 23 ||
			   fila == 5 && columna == 24 ||
			   fila == 5 && columna == 23 ||
			   fila == 6 && columna == 22){derrota();}
	  }else{
			B1.innerHTML = "<img src=\"imagenes/lanzaFuego.png\"></img>";
			//Movimiento del fuego
			fuego[0] = document.getElementById("5-26");
			fuego[1] = document.getElementById("6-26");
			fuego[2] = document.getElementById("7-27");
			fuego[3] = document.getElementById("3-26");
			fuego[4] = document.getElementById("3-27");
			fuego[5] = document.getElementById("2-28");
			fuego[6] = document.getElementById("3-24");
			fuego[7] = document.getElementById("2-24");
			fuego[8] = document.getElementById("1-23");
			fuego[9] = document.getElementById("5-24");
			fuego[10] = document.getElementById("5-23");
			fuego[11] = document.getElementById("6-22");
			
			fuego2[0] = document.getElementById("5-25");
			fuego2[1] = document.getElementById("6-25");
			fuego2[2] = document.getElementById("7-25");
			fuego2[3] = document.getElementById("4-26");
			fuego2[4] = document.getElementById("4-27");
			fuego2[5] = document.getElementById("4-28");
			fuego2[6] = document.getElementById("3-25");
			fuego2[7] = document.getElementById("2-25");
			fuego2[8] = document.getElementById("1-25");
			fuego2[9] = document.getElementById("4-24");
			fuego2[10] = document.getElementById("4-23");
			fuego2[11] = document.getElementById("4-22");
			
			for(i=0;i<fuego.length;i++){
			fuego[i].innerHTML = "";
			fuego2[i].innerHTML = "<img src=\"imagenes/fuego.gif\"></img>";
			}
			
			if(fila == 5 && columna == 25 ||
			   fila == 6 && columna == 25 ||
			   fila == 7 && columna == 25 ||
			   fila == 4 && columna == 26 ||
			   fila == 4 && columna == 27 ||
			   fila == 4 && columna == 28 ||
			   fila == 3 && columna == 25 ||
			   fila == 2 && columna == 25 ||
			   fila == 1 && columna == 25 ||
			   fila == 4 && columna == 24 ||
			   fila == 4 && columna == 23 ||
			   fila == 4 && columna == 22){derrota();}
		}
   }