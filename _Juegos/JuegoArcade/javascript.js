	//Vida inicial
	var vidaVeigar = 15;
	var vidaHecarim = 8;
	var vidaMissFortune = 4;
	var vidaSona = 2;
			
	//Estado incial
	var estadoVeigar = "vivo";
	var estadoHecarim = "vivo";
	var estadoMissFortune = "vivo";
	var estadoSona = "vivo";
			
	//Control del turno
	var turnoJugador = true;
	var contadorTurnoCampeon = 1;
	var turnoUsado = false;
			
	//Variables de ataque
	var damageUpHecarim = false;
	var speedUpHecarim = false;
	var resistUpHecarim = false;
	var stunHecarim = false;
	var cargasQ_Hecarim = 0;
	var cargasE_Hecarim = 0;
	
	var R_MissFortune = false;
	var damageUpMissFortune = false;
	var speedUpMissFortune = false;
	var resistUpMissFortune = false;
	var stunMissFortune = false;
	var stateMissFortuneWBuffed = false;

	var damageUpSona = false;
	var speedUpSona = false;
	var resistUpSona = false;
	var stunSona = false;
	
	var tenazaVeigar = false;
	var stunVeigar = false;
	var heridasGravesVeigar = false;
	var fearVeigar = false;
	
	//CD
	var CD_RSona = 0;
	
	var CD_WHecarim = 0;
	var CD_EHecarim = 0;
	var CD_RHecarim = 0;
	
	var CD_WMissFortune = 0;
	var CD_EMissFortune = 0;
	var CD_RMissFortune = 0;
	
	var CD_EVeigar = 0;
	var CD_RVeigar = 0;
	
	//Controla el tiempo de espera mientras duran animaciones
	var delayVeigar = 0;
	var delayAtaqueVeigar = 0;
	
function onload(){	
	document.getElementById("body").style.visibility = "visible";
	
	//Invisibilidad inicial de los turnos
	document.getElementById("turnoSona").style.visibility = "hidden";
	document.getElementById("turnoHecarim").style.visibility = "hidden";
	document.getElementById("turnoMissFortune").style.visibility = "hidden";
	
	//Invisibilidad inicial de las habilidades
	document.getElementById("Q_Hecarim").style.visibility = "hidden";
	document.getElementById("W_Hecarim").style.visibility = "hidden";
	document.getElementById("E_Hecarim").style.visibility = "hidden";
	document.getElementById("R_Hecarim").style.visibility = "hidden";
	
	document.getElementById("Q_Sona").style.visibility = "hidden";
	document.getElementById("W_Sona").style.visibility = "hidden";
	document.getElementById("E_Sona").style.visibility = "hidden";
	document.getElementById("R_Sona").style.visibility = "hidden";
	
	document.getElementById("Q_MissFortune").style.visibility = "hidden";
	document.getElementById("W_MissFortune").style.visibility = "hidden";
	document.getElementById("E_MissFortune").style.visibility = "hidden";
	document.getElementById("R_MissFortune").style.visibility = "hidden";
	
	document.getElementById("barraNivelHabilidades").style.visibility = "hidden";
	
	//Invisibilidad Inicial de los CDs 
	document.getElementById("Q_CD_1sec").style.visibility = "hidden";
	document.getElementById("Q_CD_2sec").style.visibility = "hidden";
	document.getElementById("Q_CD_3sec").style.visibility = "hidden";
	
	document.getElementById("W_CD_1sec").style.visibility = "hidden";
	document.getElementById("W_CD_2sec").style.visibility = "hidden";
	document.getElementById("W_CD_3sec").style.visibility = "hidden";
	
	document.getElementById("E_CD_1sec").style.visibility = "hidden";
	document.getElementById("E_CD_2sec").style.visibility = "hidden";
	document.getElementById("E_CD_3sec").style.visibility = "hidden";
	
	document.getElementById("R_CD_1sec").style.visibility = "hidden";
	document.getElementById("R_CD_2sec").style.visibility = "hidden";
	document.getElementById("R_CD_3sec").style.visibility = "hidden";
	
	//Invisibilidad de las animaciones
	//Q de Sona
	document.getElementById("Animado1_Q_Sona").style.visibility = "hidden";
	document.getElementById("Animado2_Q_Sona").style.visibility = "hidden";
	document.getElementById("Animado3_Q_Sona").style.visibility = "hidden";
	document.getElementById("Animado4_Q_Sona").style.visibility = "hidden";
	
	document.getElementById("Animado_Q_Sona_Under").style.visibility = "hidden";
	//W de Sona
	document.getElementById("Animado1_W_Sona").style.visibility = "hidden";
	document.getElementById("Animado2_W_Sona").style.visibility = "hidden";
	document.getElementById("Animado3_W_Sona").style.visibility = "hidden";
	document.getElementById("Animado4_W_Sona").style.visibility = "hidden";
	document.getElementById("Animado5_W_Sona").style.visibility = "hidden";
	
	document.getElementById("Animado_W_Sona_Under").style.visibility = "hidden";
	//E de Sona
	document.getElementById("Animado1_E_Sona").style.visibility = "hidden";
	document.getElementById("Animado2_E_Sona").style.visibility = "hidden";
	document.getElementById("Animado3_E_Sona").style.visibility = "hidden";
	document.getElementById("Animado4_E_Sona").style.visibility = "hidden";
	document.getElementById("Animado5_E_Sona").style.visibility = "hidden";
	
	document.getElementById("Animado_E_Sona_Under").style.visibility = "hidden";
	//R de Sona
	document.getElementById("Animado1_R_Sona").style.visibility = "hidden";
	document.getElementById("Animado2_R_Sona").style.visibility = "hidden";
	document.getElementById("Animado3_R_Sona").style.visibility = "hidden";
	document.getElementById("Animado4_R_Sona").style.visibility = "hidden";
	
	//Q de Hecarim
	document.getElementById("Animado1_Q_Hecarim").style.visibility = "hidden";
	document.getElementById("Animado2_Q_Hecarim").style.visibility = "hidden";
	document.getElementById("Animado3_Q_Hecarim").style.visibility = "hidden";
	document.getElementById("Animado4_Q_Hecarim").style.visibility = "hidden";
	document.getElementById("Animado5_Q_Hecarim").style.visibility = "hidden";
	
	document.getElementById("hecarim_QBuffed").style.visibility = "hidden";
	
	document.getElementById("Animado1_Q_HecarimBuffed").style.visibility = "hidden";
	document.getElementById("Animado2_Q_HecarimBuffed").style.visibility = "hidden";
	document.getElementById("Animado3_Q_HecarimBuffed").style.visibility = "hidden";
	document.getElementById("Animado4_Q_HecarimBuffed").style.visibility = "hidden";
	document.getElementById("Animado5_Q_HecarimBuffed").style.visibility = "hidden";
	//W de Hecarim
	document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "hidden";
	
	document.getElementById("Animado_W_Hecarim_Corazon1").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Corazon2").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Corazon3").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Corazon4").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Corazon5").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Corazon6").style.visibility = "hidden";
	document.getElementById("Animado_W_Hecarim_Corazon7").style.visibility = "hidden";
	//E de Hecarim
	document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
	
	document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
	
	document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
	
	document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos5_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos6_1").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos7_1").style.visibility = "hidden";
	
	document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos5_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos6_2").style.visibility = "hidden";
	document.getElementById("Animado_E_Hecarim_Under3_Pos7_2").style.visibility = "hidden";
	//R de Hecarim
	document.getElementById("Animado_R_Hecarim").style.visibility = "hidden";
	document.getElementById("Animado_R_Hecarim2").style.visibility = "hidden";
	document.getElementById("Animado_R_Hecarim3").style.visibility = "hidden";
	//Q de Miss Fortune
	document.getElementById("Animado1_MissFortune_Q").style.visibility = "hidden";
	document.getElementById("Animado2_MissFortune_Q").style.visibility = "hidden";
	document.getElementById("Animado3_MissFortune_Q").style.visibility = "hidden";
	document.getElementById("Animado4_MissFortune_Q").style.visibility = "hidden";
	//W de Miss Fortune
	document.getElementById("missFortune_WBuffed").style.visibility = "hidden";
	//E de Miss Fortune
	document.getElementById("Animado1_MissFortune_E").style.visibility = "hidden";
	document.getElementById("Animado2_MissFortune_E").style.visibility = "hidden";
	document.getElementById("Animado3_MissFortune_E").style.visibility = "hidden";
	document.getElementById("Animado4_MissFortune_E").style.visibility = "hidden";
	//R de Miss Fortune
	document.getElementById("Animado1_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado2_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado3_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado4_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado5_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado6_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado7_MissFortune_R").style.visibility = "hidden";
	document.getElementById("Animado8_MissFortune_R").style.visibility = "hidden";
	
	//Otros Veigar
	document.getElementById("Animado_Q_Basico").style.visibility = "hidden";
	document.getElementById("Animado_R_Basico").style.visibility = "hidden";
	//Q de Veigar hacia Sona
	document.getElementById("Animado_Q_toSona1").style.visibility = "hidden";
	document.getElementById("Animado_Q_toSona2").style.visibility = "hidden";
	document.getElementById("Animado_Q_toSona3").style.visibility = "hidden";
	document.getElementById("Animado_Q_toSona4").style.visibility = "hidden";
	//R de Veigar hacia Sona
	document.getElementById("Animado_R_toSona1").style.visibility = "hidden";
	document.getElementById("Animado_R_toSona2").style.visibility = "hidden";
	document.getElementById("Animado_R_toSona3").style.visibility = "hidden";
	document.getElementById("Animado_R_toSona4").style.visibility = "hidden";
	
	//Q de Veigar hacia Hecarim
	document.getElementById("Animado_Q_toHecarim1").style.visibility = "hidden";
	document.getElementById("Animado_Q_toHecarim2").style.visibility = "hidden";
	document.getElementById("Animado_Q_toHecarim3").style.visibility = "hidden";
	document.getElementById("Animado_Q_toHecarim4").style.visibility = "hidden";
	//R de Veigar hacia Hecarim
	document.getElementById("Animado_R_toHecarim1").style.visibility = "hidden";
	document.getElementById("Animado_R_toHecarim2").style.visibility = "hidden";
	document.getElementById("Animado_R_toHecarim3").style.visibility = "hidden";
	document.getElementById("Animado_R_toHecarim4").style.visibility = "hidden";
	
	//Q de Veigar hacia Miss Fortune
	document.getElementById("Animado_Q_toMissFortune1").style.visibility = "hidden";
	document.getElementById("Animado_Q_toMissFortune2").style.visibility = "hidden";
	document.getElementById("Animado_Q_toMissFortune3").style.visibility = "hidden";
	document.getElementById("Animado_Q_toMissFortune4").style.visibility = "hidden";
	//R de Veigar hacia Miss Fortune
	document.getElementById("Animado_R_toMissFortune1").style.visibility = "hidden";
	document.getElementById("Animado_R_toMissFortune2").style.visibility = "hidden";
	document.getElementById("Animado_R_toMissFortune3").style.visibility = "hidden";
	document.getElementById("Animado_R_toMissFortune4").style.visibility = "hidden";
	
	//W y E de Veigar
	document.getElementById("Animado_Veigar_E").style.visibility = "hidden";
		
	document.getElementById("Animado_Veigar_W_Under1").style.visibility = "hidden";
	document.getElementById("Animado_Veigar_W_Under2").style.visibility = "hidden";
	document.getElementById("Animado_Veigar_W_Cube1").style.visibility = "hidden";
	document.getElementById("Animado_Veigar_W_Cube2").style.visibility = "hidden";
	
	//Victoria - Derrota
	document.getElementById("victoria").style.visibility = "hidden";
	document.getElementById("derrota").style.visibility = "hidden";
	document.getElementById("continuar").style.visibility = "hidden";
	
	//El juego como tal			
	comprobarBuffos();				
	turno();
}

function turno(){
	//Se actualiza la vida de los campeones
	actualizarVidaVeigar();
	actualizarVidaHecarim();
	actualizarVidaMissFortune();
	actualizarVidaSona();
	
	//Se comprueba si ha muerto alguien
	if(vidaVeigar <= 0){
		estadoVeigar = "muerto";
	}
		
	if(vidaHecarim <= 0){
		estadoHecarim = "muerto";
	}
	
	if(vidaMissFortune <= 0){
		estadoMissFortune = "muerto";
	}
	
	if(vidaSona <= 0){
		estadoSona = "muerto";
	}
	
	//Si se dan las condiciones de victoria o derrota
	if(estadoSona == "muerto" && estadoHecarim == "muerto" && estadoMissFortune == "muerto"){
		derrota();
		return;
	}
	
	if(estadoVeigar == "muerto"){
		victoria();
		return;
	}
	
	//Turnos
	while(turnoUsado == false){
		if(estadoSona == "vivo" && contadorTurnoCampeon == 1 && turnoJugador == true){
			document.getElementById("turnoSona").style.visibility = "visible";
			//Habilidades de Sona
			document.getElementById("Q_Sona").style.visibility = "visible";
			document.getElementById("W_Sona").style.visibility = "visible";
			document.getElementById("E_Sona").style.visibility = "visible";
			document.getElementById("R_Sona").style.visibility = "visible";
			
			document.getElementById("barraNivelHabilidades").style.visibility = "visible";
			//CD
			document.getElementById("Q_CD_1sec").style.visibility = "hidden";
			document.getElementById("Q_CD_2sec").style.visibility = "hidden";
			document.getElementById("Q_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("W_CD_1sec").style.visibility = "hidden";
			document.getElementById("W_CD_2sec").style.visibility = "hidden";
			document.getElementById("W_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("E_CD_1sec").style.visibility = "hidden";
			document.getElementById("E_CD_2sec").style.visibility = "hidden";
			document.getElementById("E_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("R_CD_1sec").style.visibility = "hidden";
			document.getElementById("R_CD_2sec").style.visibility = "hidden";
			document.getElementById("R_CD_3sec").style.visibility = "hidden";
	
			if(CD_RSona > 0){
				CD_RSona--;
			}
			
			switch(CD_RSona){
				case 3:
					document.getElementById("R_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("R_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("R_CD_1sec").style.visibility = "visible";
					break;
			}
			
			turnoUsado = true;
		}else if(estadoSona == "muerto" && contadorTurnoCampeon == 1 && turnoJugador == true){
			contadorTurnoCampeon = 2;
		}
		
		if(estadoHecarim == "vivo" && contadorTurnoCampeon == 2 && turnoJugador == true){
			//Espera a que terminen las animaciones
			setTimeout(function(){
				document.getElementById("turnoHecarim").style.visibility = "visible";
				//Habilidades Hecarim
				document.getElementById("Q_Hecarim").style.visibility = "visible";
				document.getElementById("W_Hecarim").style.visibility = "visible";
				document.getElementById("E_Hecarim").style.visibility = "visible";
				document.getElementById("R_Hecarim").style.visibility = "visible";
				
				document.getElementById("barraNivelHabilidades").style.visibility = "visible";
			},200);

			//CD
			document.getElementById("Q_CD_1sec").style.visibility = "hidden";
			document.getElementById("Q_CD_2sec").style.visibility = "hidden";
			document.getElementById("Q_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("W_CD_1sec").style.visibility = "hidden";
			document.getElementById("W_CD_2sec").style.visibility = "hidden";
			document.getElementById("W_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("E_CD_1sec").style.visibility = "hidden";
			document.getElementById("E_CD_2sec").style.visibility = "hidden";
			document.getElementById("E_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("R_CD_1sec").style.visibility = "hidden";
			document.getElementById("R_CD_2sec").style.visibility = "hidden";
			document.getElementById("R_CD_3sec").style.visibility = "hidden";
	
			if(CD_WHecarim > 0){
				CD_WHecarim--;
			}
			
			switch(CD_WHecarim){
				case 3:
					document.getElementById("W_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("W_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("W_CD_1sec").style.visibility = "visible";
					break;
			}
			
			if(CD_EHecarim > 0){
				CD_EHecarim--;
			}
			
			switch(CD_EHecarim){
				case 3:
					document.getElementById("E_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("E_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("E_CD_1sec").style.visibility = "visible";
					break;
			}
			
			if(CD_RHecarim > 0){
				CD_RHecarim--;
			}
			
			switch(CD_RHecarim){
				case 3:
					document.getElementById("R_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("R_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("R_CD_1sec").style.visibility = "visible";
					break;
			}
			
			turnoUsado = true;
		}else if(estadoHecarim == "muerto" && contadorTurnoCampeon == 2 && turnoJugador == true){
			contadorTurnoCampeon = 3;
		}
		
		if(estadoMissFortune == "vivo" && contadorTurnoCampeon == 3 && turnoJugador == true){
			document.getElementById("turnoMissFortune").style.visibility = "visible";
			//Habilidades Miss Fortune
			document.getElementById("Q_MissFortune").style.visibility = "visible";
			document.getElementById("W_MissFortune").style.visibility = "visible";
			document.getElementById("E_MissFortune").style.visibility = "visible";
			document.getElementById("R_MissFortune").style.visibility = "visible";
			
			document.getElementById("barraNivelHabilidades").style.visibility = "visible";
			//CD
			document.getElementById("Q_CD_1sec").style.visibility = "hidden";
			document.getElementById("Q_CD_2sec").style.visibility = "hidden";
			document.getElementById("Q_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("W_CD_1sec").style.visibility = "hidden";
			document.getElementById("W_CD_2sec").style.visibility = "hidden";
			document.getElementById("W_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("E_CD_1sec").style.visibility = "hidden";
			document.getElementById("E_CD_2sec").style.visibility = "hidden";
			document.getElementById("E_CD_3sec").style.visibility = "hidden";
			
			document.getElementById("R_CD_1sec").style.visibility = "hidden";
			document.getElementById("R_CD_2sec").style.visibility = "hidden";
			document.getElementById("R_CD_3sec").style.visibility = "hidden";
			
			if(CD_WMissFortune > 0){
				CD_WMissFortune--;
			}
			
			switch(CD_WMissFortune){
				case 3:
					document.getElementById("W_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("W_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("W_CD_1sec").style.visibility = "visible";
					break;
			}
			
			if(CD_EMissFortune > 0){
				CD_EMissFortune--;
			}
			
			switch(CD_EMissFortune){
				case 3:
					document.getElementById("E_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("E_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("E_CD_1sec").style.visibility = "visible";
					break;
			}
			
			if(CD_RMissFortune > 0){
				CD_RMissFortune--;
			}
			
			switch(CD_RMissFortune){
				case 3:
					document.getElementById("R_CD_3sec").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("R_CD_2sec").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("R_CD_1sec").style.visibility = "visible";
					break;
			}
			
			turnoUsado = true;
		}else if(estadoMissFortune == "muerto" && contadorTurnoCampeon == 3 && turnoJugador == true){
			contadorTurnoCampeon = 1;
		}	
	}
		
	if(estadoVeigar == "vivo" && turnoJugador == false){
		delayVeigar = delayVeigar + 500;
		setTimeout(function(){ataqueVeigar();},delayVeigar);
	}
	
}

function actualizarVidaVeigar(){
	if(vidaVeigar <= 0){
		vidaVeigar = 0;
	}
	if(vidaVeigar <= 5){
		tenazaVeigar = true;
	}
	document.getElementById("vidaVeigar").style.width = 10*vidaVeigar+"px";
	//Numeros
	document.getElementById("numero_0X").style.visibility = "hidden";
	document.getElementById("numero_1X").style.visibility = "hidden";
		//
	document.getElementById("numero_0").style.visibility = "hidden";
	document.getElementById("numero_1").style.visibility = "hidden";
	document.getElementById("numero_2").style.visibility = "hidden";
	document.getElementById("numero_3").style.visibility = "hidden";
	document.getElementById("numero_4").style.visibility = "hidden";
	document.getElementById("numero_5").style.visibility = "hidden";
	document.getElementById("numero_6").style.visibility = "hidden";
	document.getElementById("numero_7").style.visibility = "hidden";
	document.getElementById("numero_8").style.visibility = "hidden";
	document.getElementById("numero_9").style.visibility = "hidden";
	
	switch(vidaVeigar){
		case 0:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_0").style.visibility = "visible";
			break;
		case 1:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_1").style.visibility = "visible";
			break;
		case 2:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_2").style.visibility = "visible";
			break;
		case 3:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_3").style.visibility = "visible";
			break;
		case 4:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_4").style.visibility = "visible";
			break;
		case 5:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_5").style.visibility = "visible";
			break;
		case 6:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_6").style.visibility = "visible";
			break;
		case 7:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_7").style.visibility = "visible";
			break;
		case 8:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_8").style.visibility = "visible";
			break;
		case 9:
			document.getElementById("numero_0X").style.visibility = "visible";
			document.getElementById("numero_9").style.visibility = "visible";
			break;
		case 10:
			document.getElementById("numero_1X").style.visibility = "visible";
			document.getElementById("numero_0").style.visibility = "visible";
			break;
		case 11:
			document.getElementById("numero_1X").style.visibility = "visible";
			document.getElementById("numero_1").style.visibility = "visible";
			break;
		case 12:
			document.getElementById("numero_1X").style.visibility = "visible";
			document.getElementById("numero_2").style.visibility = "visible";
			break;
		case 13:
			document.getElementById("numero_1X").style.visibility = "visible";
			document.getElementById("numero_3").style.visibility = "visible";
			break;
		case 14:
			document.getElementById("numero_1X").style.visibility = "visible";
			document.getElementById("numero_4").style.visibility = "visible";
			break;
		case 15:
			document.getElementById("numero_1X").style.visibility = "visible";
			document.getElementById("numero_5").style.visibility = "visible";
			break;
		default:
			break;
	}
}

function actualizarVidaHecarim(){
	if(vidaHecarim <= 0){
		vidaHecarim = 0;
		
		damageUpHecarim = false;
		speedUpHecarim = false;
		resistUpHecarim = false;
		stunHecarim = false;
		cargasQ_Hecarim = 0;
		cargasE_Hecarim = 0;
		
		comprobarBuffos();
	}
	document.getElementById("vidaHecarim").style.width = (29.5*vidaHecarim)+"px";
}

function actualizarVidaMissFortune(){
	if(vidaMissFortune <= 0){
		vidaMissFortune = 0;
		
		document.getElementById("missFortune_WBuffed").style.visibility = "hidden";
		
		damageUpMissFortune = false;
		speedUpMissFortune = false;
		resistUpMissFortune = false;
		stunMissFortune = false;
		stateMissFortuneWBuffed = false;
		R_MissFortune = false;
		
		comprobarBuffos();
	}
	document.getElementById("vidaMissFortune").style.width = (59.5*vidaMissFortune)+"px";

		comprobarBuffos();
}

function actualizarVidaSona(){
	if(vidaSona <= 0){
		vidaSona = 0;
		
		damageUpSona = false;
		speedUpSona = false;
		resistUpSona = false;
		stunSona = false;
	}
	document.getElementById("vidaSona").style.width = (119*vidaSona)+"px";
}

//IA Veigar
function ataqueVeigar(){
	//Stun o Fear
	if(vidaVeigar > 0){
		if(stunVeigar == false && fearVeigar == false){
	
		if(vidaSona > 0){
			habilidadVeigar("R","Sona");
		}else{
			if(vidaMissFortune > 0){
				switch(vidaMissFortune){
					case 1:
						habilidadVeigar("Q","MissFortune");
						break;
					case 2:
						if(CD_RVeigar == 0){
							habilidadVeigar("R","MissFortune");
						}else{
							if((cargasE_Hecarim > 0 || R_MissFortune == true)&&(CD_EVeigar == 0)){
								habilidadVeigar("WE");
								cargasE_Hecarim = 0;
								R_MissFortune = false;
							}else{
								habilidadVeigar("Q","MissFortune");
							}
						}
						break;
					case 3:
						if(CD_RVeigar == 0){
							habilidadVeigar("R","MissFortune");
						}else{
							if((cargasE_Hecarim > 0 || R_MissFortune == true)&&(CD_EVeigar == 0)){
								habilidadVeigar("WE");
								cargasE_Hecarim = 0;
								R_MissFortune = false;
							}else{
								habilidadVeigar("Q","MissFortune");
							}
						}
						break;
					case 4:
						if((cargasE_Hecarim > 0 || R_MissFortune == true)&&(CD_EVeigar == 0)){
								habilidadVeigar("WE");
								cargasE_Hecarim = 0;
								R_MissFortune = false;
							}else{
								if(CD_RVeigar == 0){
									habilidadVeigar("R","MissFortune");
								}else{
									habilidadVeigar("Q","MissFortune");
								}
							}
						break;
					default:
						alert("How much HP have Miss Fortune? .-.");
						break;
				}
			}else{
				if(vidaHecarim > 0){
					switch(vidaHecarim){
						case 1:
							habilidadVeigar("Q","Hecarim");
							break;
						case 2:
							if(CD_RVeigar == 0){
								habilidadVeigar("R","Hecarim");
							}else{
								if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
									cargasE_Hecarim = 0;
								}else{
									habilidadVeigar("Q","Hecarim");
								}
							}
							break;
						case 3:
							if(CD_RVeigar == 0){
								habilidadVeigar("R","Hecarim");
							}else{
								if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
									cargasE_Hecarim = 0;
								}else{
									habilidadVeigar("Q","Hecarim");
								}
							}
							break;
						case 4:
							if(CD_RVeigar == 0 && vidaVeigar <= 5){
								habilidadVeigar("R","Hecarim");
							}else{
								if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
								}else{
									habilidadVeigar("Q","Hecarim");
									cargasE_Hecarim = 0;
								}
							}
							break;
						case 5:
							if(CD_RVeigar == 0 && vidaVeigar <= 5){
								habilidadVeigar("R","Hecarim");
							}else{
								if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
								}else{
									habilidadVeigar("Q","Hecarim");
									cargasE_Hecarim = 0;
								}
							}
							break;
						case 6:
							if(CD_RVeigar == 0 && vidaVeigar <= 5){
								habilidadVeigar("R","Hecarim");
							}else{
								if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
								}else{
									habilidadVeigar("Q","Hecarim");
									cargasE_Hecarim = 0;
								}
							}
							break;
						case 7:
							if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
								}else{
									habilidadVeigar("Q","Hecarim");
									cargasE_Hecarim = 0;
								}
							break;
						case 8:
							if(cargasE_Hecarim > 0 && CD_EVeigar == 0){
									habilidadVeigar("WE");
									cargasE_Hecarim = 0;
								}else{
									habilidadVeigar("Q","Hecarim");
								}
							break;
					}
				}
			}
		}
		
		
		
	}else{
		setTimeout(function(){
			stunVeigar = false;
			fearVeigar = false;
			comprobarBuffos();
		},300);
	}
	}
	
	turnoJugador = true;
	turnoUsado = false;			
	
	setTimeout(function(){
		turno();
		actualizarVidaMissFortune();
		actualizarVidaHecarim();
		actualizarVidaSona();
	},delayAtaqueVeigar+500);
}

function habilidadVeigar(opcion,objetivo){
	switch(opcion){
		case "Q":
			animacionQVeigar(objetivo);
			break;
		case "WE":
			animacionWEVeigar();
			CD_EVeigar = 2;
			comprobarBuffos();
			break;
		case "R":
			animacionRVeigar(objetivo);
			CD_RVeigar = 4;
			break;
	}
	if(CD_EVeigar > 0){
		CD_EVeigar--;
	}
	if(CD_RVeigar > 0){
		CD_RVeigar--;
	}
}

//Eleccion de ataque
function habilidad(eleccion){
	switch(contadorTurnoCampeon){
		//Habilidades Sona
		case 1:
			if(R_MissFortune == true && stunMissFortune == false){
				animacionRMissFortune();
				setTimeout(function(){
					if(damageUpMissFortune == true){
						damageUpMissFortune = false;
						comprobarBuffos();
						vidaVeigar--;
					}
					if(stateMissFortuneWBuffed == true){
						vidaVeigar--;
					}
					vidaVeigar--;
					actualizarVidaVeigar();
				},1600);
			}
			
			damageUpHecarim = false;
			speedUpHecarim = false;
			resistUpHecarim = false;

			damageUpMissFortune = false;
			speedUpMissFortune = false;
			resistUpMissFortune = false;
			
			damageUpSona = false;
			speedUpSona = false;
			resistUpSona = false;
			
			stunVeigar = false;

			comprobarBuffos();
			
			if(stunSona == false){
				switch(eleccion){
					case "Q":
						animacionQSona();
						damageUpSona = true;
						comprobarBuffos();
						setTimeout(function(){
							damageUpSona = true;
							damageUpHecarim = true;
							damageUpMissFortune = true;
							actualizarVidaVeigar();
							comprobarBuffos();
						},200);
						setTimeout(function(){
							if(damageUpSona == true){
								damageUpSona = false;
								vidaVeigar = vidaVeigar - 2;
							}else{
								vidaVeigar--;
							}
							actualizarVidaVeigar();
							comprobarBuffos();
						},1000);	
						turnoJugador = false;
						break;
					case "W":
						animacionWSona();
						resistUpSona = true;
						comprobarBuffos();
						setTimeout(function(){
							resistUpHecarim = true;
							actualizarVidaVeigar();
							comprobarBuffos();
						},400);
						setTimeout(function(){
							resistUpMissFortune = true;
							actualizarVidaVeigar();
							comprobarBuffos();
						},1000);
						if(vidaHecarim < 8){
							vidaHecarim++;
						}
						if(vidaMissFortune < 4){
							vidaMissFortune++;
						}
						if(vidaSona < 2){
							vidaSona++;
						}
						
						turnoJugador = false;
						break;
					case "E":
						animacionESona();
						speedUpSona = true;
						comprobarBuffos();
						setTimeout(function(){
							speedUpHecarim = true;
							actualizarVidaVeigar();
							comprobarBuffos();
						},400);
						setTimeout(function(){
							speedUpMissFortune = true;
							actualizarVidaVeigar();
							comprobarBuffos();
						},1000);
						turnoJugador = false;
						break;
					case "R":
						animacionRSona();
						setTimeout(function(){
							vidaVeigar--;
							actualizarVidaVeigar();
							CD_RSona = 4;
						},600);
						stunVeigar = true;
						comprobarBuffos();
						turnoJugador = false;
						break;
					}
				}else{
					R_MissFortune = false;
					stunSona = false;
					stunHecarim = false;
					stunMissFortune = false;
				}
				
			document.getElementById("Q_Sona").style.visibility = "hidden";
			document.getElementById("W_Sona").style.visibility = "hidden";
			document.getElementById("E_Sona").style.visibility = "hidden";
			document.getElementById("R_Sona").style.visibility = "hidden";
			
			document.getElementById("barraNivelHabilidades").style.visibility = "hidden";
	
			contadorTurnoCampeon = 2;
			document.getElementById("turnoSona").style.visibility = "hidden";
	
			turno();
			break;
		//Habilidades Hecarim
		case 2:
			if(R_MissFortune == true && stunMissFortune == false){
				animacionRMissFortune();
				setTimeout(function(){
					if(damageUpMissFortune == true){
						vidaVeigar--;
						damageUpMissFortune = false;
						comprobarBuffos();
					}
					if(stateMissFortuneWBuffed == true){
						vidaVeigar--;
					}
					vidaVeigar--;
					actualizarVidaVeigar();
				},1600);
			}
			if(stunHecarim == false){
				if(cargasE_Hecarim > 0){
					cargasE_Hecarim++;
				}
				if(cargasE_Hecarim == 3){
					animacionEHecarim();
						setTimeout(function(){
						if(speedUpHecarim == true){
							vidaVeigar--;
							speedUpHecarim = false;
						}
						if(damageUpHecarim == true){
							vidaVeigar--;
							damageUpHecarim = false;
						}
						vidaVeigar--;
						actualizarVidaVeigar();
					},1100);
					cargasE_Hecarim = 0;
				}
				switch(eleccion){
					case "Q":
						animacionQHecarim();
						setTimeout(function(){
							if(speedUpHecarim == true){
								vidaVeigar--;
								speedUpHecarim = false;
							}
							if(damageUpHecarim == true){
								vidaVeigar--;
								damageUpHecarim = false;
							}
							if(cargasQ_Hecarim == 2){
								vidaVeigar--;
							}else{
								cargasQ_Hecarim++;
							}
							if(cargasE_Hecarim == 2){
								vidaVeigar--;
							}
							vidaVeigar--;
							actualizarVidaVeigar();
							comprobarBuffos();
						},1800);
						turnoJugador = false;
						break;
					case "W":
						animacionWHecarim();
						CD_WHecarim = 2;
						if(vidaHecarim < 8){
							vidaHecarim++;
						}
						cargasQ_Hecarim = 0;
						document.getElementById("hecarim_QBuffed").style.visibility = "hidden";
						vidaVeigar--;
						turnoJugador = false;
						break;
					case "E":
						cargasE_Hecarim = 1;
						animacionEHecarim(cargasE_Hecarim);
						CD_EHecarim = 4;
						cargasQ_Hecarim = 0;
						document.getElementById("hecarim_QBuffed").style.visibility = "hidden";
						turnoJugador = false;
						break;
					case "R":
						animacionRHecarim();
							setTimeout(function(){
							if(speedUpHecarim == true){
								vidaVeigar--;
								speedUpHecarim = false;
							}
							if(damageUpHecarim == true){
								vidaVeigar--;
								damageUpHecarim = false;
							}
							vidaVeigar--;
							actualizarVidaVeigar();
						},900);
						fearVeigar = true;
						comprobarBuffos();
						CD_RHecarim = 4;
						cargasQ_Hecarim = 0;
						cargasE_Hecarim = 0;
						document.getElementById("hecarim_QBuffed").style.visibility = "hidden";
						turnoJugador = false;
						break;
				}
			}else{
				R_MissFortune = false;
				stunSona = false;
				stunHecarim = false;
				stunMissFortune = false;
			}
			document.getElementById("Q_Hecarim").style.visibility = "hidden";
			document.getElementById("W_Hecarim").style.visibility = "hidden";
			document.getElementById("E_Hecarim").style.visibility = "hidden";
			document.getElementById("R_Hecarim").style.visibility = "hidden";
			
			document.getElementById("barraNivelHabilidades").style.visibility = "hidden";
	
			contadorTurnoCampeon = 3;
			document.getElementById("turnoHecarim").style.visibility = "hidden";
			
			turno();
			break;
		//Habilidades Miss Fortune
		case 3:
			if(stunMissFortune == false){
				R_MissFortune = false;
				switch(eleccion){
					case "Q":
						animacionQMissFortune();
						setTimeout(function(){
							if(damageUpMissFortune == true){
								damageUpMissFortune = false;
								vidaVeigar--;
								if(stateMissFortuneWBuffed == true){
									vidaVeigar--;
								}
							}
							if(stateMissFortuneWBuffed == true){
								vidaVeigar--;
							}
							vidaVeigar--;
							actualizarVidaVeigar();
							comprobarBuffos();
							stateMissFortuneWBuffed = false;
						},600);
						document.getElementById("missFortune_WBuffed").style.visibility = "hidden";
						turnoJugador = false;
						break;
					case "W":
						stateMissFortuneWBuffed = true;
						animacionWMissFortune();
						CD_WMissFortune = 2;
						comprobarBuffos();
						turnoJugador = false;
						break;
					case "E":
						animacionEMissFortune();
						setTimeout(function(){
							if(damageUpMissFortune == true){
								damageUpMissFortune = false;
								vidaVeigar--;
							}
							vidaVeigar--;
							actualizarVidaVeigar();
							heridasGravesVeigar = true;
							comprobarBuffos();
						},600);
						CD_EMissFortune = 2;
						turnoJugador = false;
						stateMissFortuneWBuffed = false;
						document.getElementById("missFortune_WBuffed").style.visibility = "hidden";
						break;
					case "R":
						animacionRMissFortune();
						setTimeout(function(){
							if(damageUpMissFortune == true){
								damageUpMissFortune = false;
								vidaVeigar--;
								if(stateMissFortuneWBuffed == true){
									vidaVeigar--;
								}
								if(stateMissFortuneWBuffed == true){
								vidaVeigar--;
								}
							}
							vidaVeigar = vidaVeigar-2;
							actualizarVidaVeigar();
							comprobarBuffos();
						},1600);
						CD_RMissFortune = 4;
						R_MissFortune = true;
						comprobarBuffos();
						turnoJugador = false;
						break;
				}
			}else{
				R_MissFortune = false;
				stunSona = false;
				stunHecarim = false;
				stunMissFortune = false;
			}
			document.getElementById("Q_MissFortune").style.visibility = "hidden";
			document.getElementById("W_MissFortune").style.visibility = "hidden";
			document.getElementById("E_MissFortune").style.visibility = "hidden";
			document.getElementById("R_MissFortune").style.visibility = "hidden";
			
			document.getElementById("barraNivelHabilidades").style.visibility = "hidden";
	
			contadorTurnoCampeon = 1;
			document.getElementById("turnoMissFortune").style.visibility = "hidden";
			
			turno();
			break;
		default:
			alert("You have found Kha'Zix");
	}
}

function comprobarBuffos(){
	//Veigar
	//Tenaza
	if(vidaVeigar <= 5){
		document.getElementById("DFG").style.visibility = "visible";
	}else{
		document.getElementById("DFG").style.visibility = "hidden";
	}
	//Stun
	if(stunVeigar == true){
		setTimeout(function(){document.getElementById("stunVeigar").style.visibility = "visible";},800);
	}else{
		document.getElementById("stunVeigar").style.visibility = "hidden";
	}
	//Quemar
	if(heridasGravesVeigar == true){
		document.getElementById("quemarVeigar").style.visibility = "visible";
	}else{
			document.getElementById("quemarVeigar").style.visibility = "hidden";
	}
	//Fear
	if(fearVeigar == true){
		document.getElementById("fearVeigar").style.visibility = "visible";
	}else{
		document.getElementById("fearVeigar").style.visibility = "hidden";
	}
		
	//Hecarim
	//DMG
	if(damageUpHecarim == true){
		document.getElementById("DMG_Hecarim").style.visibility = "visible";
	}else{
		document.getElementById("DMG_Hecarim").style.visibility = "hidden";
	}
	//SPD
	if(speedUpHecarim == true){
		document.getElementById("SPD_Hecarim").style.visibility = "visible";
	}else{
		document.getElementById("SPD_Hecarim").style.visibility = "hidden";
	}
	//RST
	if(resistUpHecarim == true){
		document.getElementById("RST_Hecarim").style.visibility = "visible";
	}else{
		document.getElementById("RST_Hecarim").style.visibility = "hidden";
	}
	//STUN
	if(stunHecarim == true){
		document.getElementById("stunHecarim").style.visibility = "visible";
	}else{
		document.getElementById("stunHecarim").style.visibility = "hidden";
	}
	
	//Miss Fortune
	//DMG
	if(damageUpMissFortune == true){
		document.getElementById("DMG_MissFortune").style.visibility = "visible";
	}else{
		document.getElementById("DMG_MissFortune").style.visibility = "hidden";
	}
	//SPD
	if(speedUpMissFortune == true){
		document.getElementById("SPD_MissFortune").style.visibility = "visible";
	}else{
		document.getElementById("SPD_MissFortune").style.visibility = "hidden";
	}
	//RST
	if(resistUpMissFortune == true){
		document.getElementById("RST_MissFortune").style.visibility = "visible";
	}else{
		document.getElementById("RST_MissFortune").style.visibility = "hidden";
	}
	//STUN
	if(stunMissFortune == true){
		document.getElementById("stunMissFortune").style.visibility = "visible";
	}else{
		document.getElementById("stunMissFortune").style.visibility = "hidden";
	}
	
	//Sona
	//DMG
	if(damageUpSona == true){
		document.getElementById("DMG_Sona").style.visibility = "visible";
	}else{
		document.getElementById("DMG_Sona").style.visibility = "hidden";
	}
	//SPD
	if(speedUpSona == true){
		document.getElementById("SPD_Sona").style.visibility = "visible";
	}else{
		document.getElementById("SPD_Sona").style.visibility = "hidden";
	}
	//RST
	if(resistUpSona == true){
		document.getElementById("RST_Sona").style.visibility = "visible";
	}else{
		document.getElementById("RST_Sona").style.visibility = "hidden";
	}
	//STUN
	if(stunSona == true){
		document.getElementById("stunSona").style.visibility = "visible";
	}else{
		document.getElementById("stunSona").style.visibility = "hidden";
	}
}

//Derrota
function derrota(){
	document.getElementById("derrota").style.opacity = "0.0";
	document.getElementById("continuar").style.opacity = "0.0";
	document.getElementById("derrota").style.visibility = "visible";
	document.getElementById("continuar").style.visibility = "visible";
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.1";
		document.getElementById("continuar").style.opacity = "0.1";
	},100);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.2";
		document.getElementById("continuar").style.opacity = "0.2";
	},200);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.3";
		document.getElementById("continuar").style.opacity = "0.3";
	},300);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.4";
		document.getElementById("continuar").style.opacity = "0.4";
	},400);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.5";
		document.getElementById("continuar").style.opacity = "0.5";
	},500);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.6";
		document.getElementById("continuar").style.opacity = "0.6";
	},600);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.7";
		document.getElementById("continuar").style.opacity = "0.7";
	},700);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.8";
		document.getElementById("continuar").style.opacity = "0.8";
	},800);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "0.9";
		document.getElementById("continuar").style.opacity = "0.9";
	},900);
	setTimeout(function(){
		document.getElementById("derrota").style.opacity = "1";
		document.getElementById("continuar").style.opacity = "1";
	},1000);
}
			
//Victoria
function victoria(){
	document.getElementById("victoria").style.opacity = "0.0";
	document.getElementById("continuar").style.opacity = "0.0";
	document.getElementById("victoria").style.visibility = "visible";
	document.getElementById("continuar").style.visibility = "visible";
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.1";
		document.getElementById("continuar").style.opacity = "0.1";
	},100);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.2";
		document.getElementById("continuar").style.opacity = "0.2";
	},200);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.3";
		document.getElementById("continuar").style.opacity = "0.3";
	},300);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.4";
		document.getElementById("continuar").style.opacity = "0.4";
	},400);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.5";
		document.getElementById("continuar").style.opacity = "0.5";
	},500);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.6";
		document.getElementById("continuar").style.opacity = "0.6";
	},600);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.7";
		document.getElementById("continuar").style.opacity = "0.7";
	},700);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.8";
		document.getElementById("continuar").style.opacity = "0.8";
	},800);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "0.9";
		document.getElementById("continuar").style.opacity = "0.9";
	},900);
	setTimeout(function(){
		document.getElementById("victoria").style.opacity = "1";
		document.getElementById("continuar").style.opacity = "1";
	},1000);
}

function F_continuar(){
	location.reload(); 
}