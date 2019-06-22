//Animaciones Hecarim
function animacionQHecarim(){
	if(cargasQ_Hecarim < 2){
		setTimeout(function(){document.getElementById("Animado1_Q_Hecarim").style.visibility = "visible";},300);
		setTimeout(function(){
			document.getElementById("Animado2_Q_Hecarim").style.visibility = "visible";
			document.getElementById("Animado1_Q_Hecarim").style.visibility = "hidden";
		},600);
		setTimeout(function(){
			document.getElementById("Animado3_Q_Hecarim").style.visibility = "visible";
			document.getElementById("Animado2_Q_Hecarim").style.visibility = "hidden";
		},900);
		setTimeout(function(){
			document.getElementById("Animado4_Q_Hecarim").style.visibility = "visible";
			document.getElementById("Animado3_Q_Hecarim").style.visibility = "hidden";
		},1800);
		setTimeout(function(){
			document.getElementById("Animado5_Q_Hecarim").style.visibility = "visible";
			document.getElementById("Animado4_Q_Hecarim").style.visibility = "hidden";
		},1900);
		setTimeout(function(){document.getElementById("Animado5_Q_Hecarim").style.visibility = "hidden";},2000);
	}else{
		document.getElementById("hecarim_QBuffed").style.visibility = "visible";
		setTimeout(function(){document.getElementById("Animado1_Q_HecarimBuffed").style.visibility = "visible";},300);
		setTimeout(function(){
			document.getElementById("Animado2_Q_HecarimBuffed").style.visibility = "visible";
			document.getElementById("Animado1_Q_HecarimBuffed").style.visibility = "hidden";
		},600);
		setTimeout(function(){
			document.getElementById("Animado3_Q_HecarimBuffed").style.visibility = "visible";
			document.getElementById("Animado2_Q_HecarimBuffed").style.visibility = "hidden";
		},900);
		setTimeout(function(){
			document.getElementById("Animado4_Q_HecarimBuffed").style.visibility = "visible";
			document.getElementById("Animado3_Q_HecarimBuffed").style.visibility = "hidden";
		},1800);
		setTimeout(function(){
			document.getElementById("Animado5_Q_HecarimBuffed").style.visibility = "visible";
			document.getElementById("Animado4_Q_HecarimBuffed").style.visibility = "hidden";
		},1900);
		setTimeout(function(){document.getElementById("Animado5_Q_HecarimBuffed").style.visibility = "hidden";},2000);
	}
	
	if(cargasE_Hecarim > 1){
		animacionEHecarim();
	}
	delayVeigar = 2000;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

function animacionWHecarim(){
	//Aura
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "visible";},350);
	setTimeout(function(){
		document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "hidden";
		document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "visible";
	},700);
	setTimeout(function(){
		document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "hidden";
	},1050);
	setTimeout(function(){
		document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "hidden";
		document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "visible";
	},1400);
	setTimeout(function(){
		document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "hidden";
	},1750);
	setTimeout(function(){
		document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "hidden";
		document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "visible";
	},2100);
	setTimeout(function(){
		document.getElementById("Animado_W_Hecarim_Under1").style.visibility = "hidden";
		document.getElementById("Animado_W_Hecarim_Under2").style.visibility = "hidden";
	},2400);
	
	//Corazon
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon1").style.visibility = "visible";},300);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon2").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Corazon1").style.visibility = "hidden";
		},600);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon3").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Corazon2").style.visibility = "hidden";
		},900);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon4").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Corazon3").style.visibility = "hidden";
		},1200);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon5").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Corazon4").style.visibility = "hidden";
		},1500);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon6").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Corazon5").style.visibility = "hidden";
		},1800);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon7").style.visibility = "visible";
		document.getElementById("Animado_W_Hecarim_Corazon6").style.visibility = "hidden";
		},2100);
	setTimeout(function(){document.getElementById("Animado_W_Hecarim_Corazon7").style.visibility = "hidden";},2400);
		
	if(cargasE_Hecarim > 1){
		animacionEHecarim();
	}
	delayVeigar = 2400;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

function animacionEHecarim(){
	switch(cargasE_Hecarim){
		case 1:
			setTimeout(function(){document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";},0);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},100);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},200);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},300);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},400);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},500);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},600);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},700);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},800);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},900);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},1000);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},1100);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},1200);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},1300);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},1400);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},1500);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},1600);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
			},1700);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("Animado_E_Hecarim_Under1_Pos1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under1_Pos2").style.visibility = "hidden";
			},1800);
			
			delayVeigar = 1800;
			if(R_MissFortune == true){
				delayVeigar = 2900;
			}
			break;
		case 2:
			setTimeout(function(){
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
			},0);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},100);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},200);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},300);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},400);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},500);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},600);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},700);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},800);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},900);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},1000);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},1100);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},1200);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},1300);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},1400);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},1500);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},1600);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
			},1700);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos1_2").style.visibility = "hidden";
				
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under2_Pos2_2").style.visibility = "hidden";
			},1800);
			delayVeigar = 1800;
			if(R_MissFortune == true){
				delayVeigar = 2900;
			}
			break;
		case 3:
			setTimeout(function(){
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "visible";
			},0);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "80px";
				document.getElementById("hecarim").style.left = "12px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "hidden";
			},100);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "70px";
				document.getElementById("hecarim").style.left = "8px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "hidden";
			},200);
			setTimeout(function(){				
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "hidden";
			},300);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "72px";
				document.getElementById("hecarim").style.left = "40px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "hidden";
			},400);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "68px";
				document.getElementById("hecarim").style.left = "80px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_2").style.visibility = "hidden";
			},500);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "64px";
				document.getElementById("hecarim").style.left = "110px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_2").style.visibility = "hidden";
			},600);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "60px";
				document.getElementById("hecarim").style.left = "150px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_2").style.visibility = "hidden";
			},700);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "56px";
				document.getElementById("hecarim").style.left = "200px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "hidden";
			},800);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "52px";
				document.getElementById("hecarim").style.left = "260px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "hidden";
			},900);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "48px";
				document.getElementById("hecarim").style.left = "330px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "hidden";
			},1000);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "44px";
				document.getElementById("hecarim").style.left = "410px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "hidden";
			},1100);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "40px";
				document.getElementById("hecarim").style.left = "500px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_2").style.visibility = "hidden";
			},1200);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "70px";
				document.getElementById("hecarim").style.left = "-284px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos6_2").style.visibility = "hidden";
			},1300);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "74px";
				document.getElementById("hecarim").style.left = "-142px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos7_2").style.visibility = "hidden";
			},1400);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "78px";
				document.getElementById("hecarim").style.left = "-71px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos1_2").style.visibility = "hidden";
			},1500);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "82px";
				document.getElementById("hecarim").style.left = "-30px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos2_2").style.visibility = "hidden";
			},1600);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "86px";
				document.getElementById("hecarim").style.left = "8px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "visible";
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "visible";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos3_2").style.visibility = "hidden";
			},1700);
			setTimeout(function(){
				document.getElementById("hecarim").style.top = "90px";
				document.getElementById("hecarim").style.left = "16px";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos5_2").style.visibility = "hidden";
				
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_1").style.visibility = "hidden";
				document.getElementById("Animado_E_Hecarim_Under3_Pos4_2").style.visibility = "hidden";
			},1800);
			delayVeigar = 1800;
			if(R_MissFortune == true){
				delayVeigar = 2900;
			}
			break;
		default:
			alert("Wtf? This should not have happened");
	}
}

function animacionRHecarim(){
	document.getElementById("Animado_R_Hecarim").style.top = "68px";
	document.getElementById("Animado_R_Hecarim").style.left = "144px";
	
	document.getElementById("Animado_R_Hecarim2").style.top = "68px";
	document.getElementById("Animado_R_Hecarim2").style.left = "144px";
	
	document.getElementById("Animado_R_Hecarim3").style.top = "68px";
	document.getElementById("Animado_R_Hecarim3").style.left = "144px";

	document.getElementById("Animado_R_Hecarim").style.visibility = "visible";
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "64px";
		document.getElementById("Animado_R_Hecarim").style.left = "160px";
	},100);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "60px";
		document.getElementById("Animado_R_Hecarim").style.left = "180px";
	},200);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "56px";
		document.getElementById("Animado_R_Hecarim").style.left = "210px";
	},300);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "52px";
		document.getElementById("Animado_R_Hecarim").style.left = "250px";
	},400);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "48px";
		document.getElementById("Animado_R_Hecarim").style.left = "300px";
	},500);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "44px";
		document.getElementById("Animado_R_Hecarim").style.left = "360px";
		
		document.getElementById("Animado_R_Hecarim2").style.visibility = "visible";
	},600);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "40px";
		document.getElementById("Animado_R_Hecarim").style.left = "430px";
		
		document.getElementById("Animado_R_Hecarim2").style.top = "64px";
		document.getElementById("Animado_R_Hecarim2").style.left = "160px";
	},700);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "36px";
		document.getElementById("Animado_R_Hecarim").style.left = "510px";
		
		document.getElementById("Animado_R_Hecarim2").style.top = "60px";
		document.getElementById("Animado_R_Hecarim2").style.left = "180px";
	},800);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "32px";
		document.getElementById("Animado_R_Hecarim").style.left = "600px";
		
		document.getElementById("Animado_R_Hecarim2").style.top = "56px";
		document.getElementById("Animado_R_Hecarim2").style.left = "210px";
	},900);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "28px";
		document.getElementById("Animado_R_Hecarim").style.left = "610px";
		
		document.getElementById("Animado_R_Hecarim2").style.top = "52px";
		document.getElementById("Animado_R_Hecarim2").style.left = "250px";
		
		document.getElementById("Animado_R_Hecarim3").style.visibility = "visible";
	},1000);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim").style.top = "24px";
		document.getElementById("Animado_R_Hecarim").style.left = "730px";
		
		document.getElementById("Animado_R_Hecarim2").style.top = "48px";
		document.getElementById("Animado_R_Hecarim2").style.left = "300px";
		
		document.getElementById("Animado_R_Hecarim3").style.top = "64px";
		document.getElementById("Animado_R_Hecarim3").style.left = "160px";
	},1100);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim2").style.top = "44px";
		document.getElementById("Animado_R_Hecarim2").style.left = "360px";	
		
		document.getElementById("Animado_R_Hecarim3").style.top = "60px";
		document.getElementById("Animado_R_Hecarim3").style.left = "180px";
	},1200);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim2").style.top = "40px";
		document.getElementById("Animado_R_Hecarim2").style.left = "430px";
		
		document.getElementById("Animado_R_Hecarim3").style.top = "56px";
		document.getElementById("Animado_R_Hecarim3").style.left = "210px";
	},1300);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim2").style.top = "36px";
		document.getElementById("Animado_R_Hecarim2").style.left = "510px";
		
		document.getElementById("Animado_R_Hecarim3").style.top = "52px";
		document.getElementById("Animado_R_Hecarim3").style.left = "250px";
	},1400);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim2").style.top = "32px";
		document.getElementById("Animado_R_Hecarim2").style.left = "600px";
		
		document.getElementById("Animado_R_Hecarim3").style.top = "48px";
		document.getElementById("Animado_R_Hecarim3").style.left = "300px";
	},1500);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim2").style.top = "28px";
		document.getElementById("Animado_R_Hecarim2").style.left = "610px";
		
		document.getElementById("Animado_R_Hecarim3").style.top = "44px";
		document.getElementById("Animado_R_Hecarim3").style.left = "360px";	
	},1600);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim2").style.top = "24px";
		document.getElementById("Animado_R_Hecarim2").style.left = "730px";
		
		document.getElementById("Animado_R_Hecarim3").style.top = "40px";
		document.getElementById("Animado_R_Hecarim3").style.left = "430px";
	},1700);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim3").style.top = "36px";
		document.getElementById("Animado_R_Hecarim3").style.left = "510px";
	},1800);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim3").style.top = "32px";
		document.getElementById("Animado_R_Hecarim3").style.left = "600px";
	},1900);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim3").style.top = "28px";
		document.getElementById("Animado_R_Hecarim3").style.left = "610px";
	},2000);
	setTimeout(function(){
		document.getElementById("Animado_R_Hecarim3").style.top = "24px";
		document.getElementById("Animado_R_Hecarim3").style.left = "730px";
	},2100);
	
	delayVeigar = 2100;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

//Animaciones Sona
function animacionQSona(){
	document.getElementById("Animado1_Q_Sona").style.visibility = "visible";
	document.getElementById("Animado_Q_Sona_Under").style.visibility = "visible";
	setTimeout(function(){document.getElementById("Animado2_Q_Sona").style.visibility = "visible";},200);
	setTimeout(function(){document.getElementById("Animado3_Q_Sona").style.visibility = "visible";},400);
	setTimeout(function(){document.getElementById("Animado4_Q_Sona").style.visibility = "visible";},600);
	
	setTimeout(function(){document.getElementById("Animado1_Q_Sona").style.visibility = "hidden";},800);
	setTimeout(function(){document.getElementById("Animado2_Q_Sona").style.visibility = "hidden";},1000);
	setTimeout(function(){document.getElementById("Animado3_Q_Sona").style.visibility = "hidden";},1200);
	setTimeout(function(){
		document.getElementById("Animado4_Q_Sona").style.visibility = "hidden";
		document.getElementById("Animado_Q_Sona_Under").style.visibility = "hidden";
	},1400);
	
	delayVeigar = 1400;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

function animacionWSona(){
	document.getElementById("Animado1_W_Sona").style.visibility = "visible";
	document.getElementById("Animado_W_Sona_Under").style.visibility = "visible";
	setTimeout(function(){document.getElementById("Animado2_W_Sona").style.visibility = "visible";},200);
	setTimeout(function(){document.getElementById("Animado3_W_Sona").style.visibility = "visible";},400);
	setTimeout(function(){document.getElementById("Animado4_W_Sona").style.visibility = "visible";},600);
	setTimeout(function(){document.getElementById("Animado5_W_Sona").style.visibility = "visible";},800);
	
	setTimeout(function(){document.getElementById("Animado1_W_Sona").style.visibility = "hidden";},1000);
	setTimeout(function(){document.getElementById("Animado2_W_Sona").style.visibility = "hidden";},1200);
	setTimeout(function(){document.getElementById("Animado3_W_Sona").style.visibility = "hidden";},1400);
	setTimeout(function(){document.getElementById("Animado4_W_Sona").style.visibility = "hidden";},1600);
	setTimeout(function(){
		document.getElementById("Animado5_W_Sona").style.visibility = "hidden";
		document.getElementById("Animado_W_Sona_Under").style.visibility = "hidden";
	},1800);
	
	delayVeigar = 1800;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

function animacionESona(){
	document.getElementById("Animado1_E_Sona").style.visibility = "visible";
	document.getElementById("Animado_E_Sona_Under").style.visibility = "visible";
	setTimeout(function(){document.getElementById("Animado2_E_Sona").style.visibility = "visible";},200);
	setTimeout(function(){document.getElementById("Animado3_E_Sona").style.visibility = "visible";},400);
	setTimeout(function(){document.getElementById("Animado4_E_Sona").style.visibility = "visible";},600);
	setTimeout(function(){document.getElementById("Animado5_E_Sona").style.visibility = "visible";},800);
	
	setTimeout(function(){document.getElementById("Animado1_E_Sona").style.visibility = "hidden";},1000);
	setTimeout(function(){document.getElementById("Animado2_E_Sona").style.visibility = "hidden";},1200);
	setTimeout(function(){document.getElementById("Animado3_E_Sona").style.visibility = "hidden";},1400);
	setTimeout(function(){document.getElementById("Animado4_E_Sona").style.visibility = "hidden";},1600);
	setTimeout(function(){
		document.getElementById("Animado5_E_Sona").style.visibility = "hidden";
		document.getElementById("Animado_E_Sona_Under").style.visibility = "hidden";
	},1800);
	
	delayVeigar = 1800;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

function animacionRSona(){
	document.getElementById("Animado1_R_Sona").style.visibility = "visible";
	setTimeout(function(){document.getElementById("Animado2_R_Sona").style.visibility = "visible";},200);
	setTimeout(function(){document.getElementById("Animado3_R_Sona").style.visibility = "visible";},400);
	setTimeout(function(){document.getElementById("Animado4_R_Sona").style.visibility = "visible";},600);
	
	setTimeout(function(){document.getElementById("Animado1_R_Sona").style.visibility = "hidden";},800);
	setTimeout(function(){document.getElementById("Animado2_R_Sona").style.visibility = "hidden";},1000);
	setTimeout(function(){document.getElementById("Animado3_R_Sona").style.visibility = "hidden";},1200);
	setTimeout(function(){document.getElementById("Animado4_R_Sona").style.visibility = "hidden";},1400);
	
	delayVeigar = 1400;
	if(R_MissFortune == true){
		delayVeigar = 2900;
	}
}

//Animaciones Miss Fortune
function animacionQMissFortune(){
	document.getElementById("Animado1_MissFortune_Q").style.visibility = "visible";
	setTimeout(function(){
		document.getElementById("Animado1_MissFortune_Q").style.visibility = "hidden";
		document.getElementById("Animado2_MissFortune_Q").style.visibility = "visible";
	},200);
	setTimeout(function(){
		document.getElementById("Animado2_MissFortune_Q").style.visibility = "hidden";
		document.getElementById("Animado3_MissFortune_Q").style.visibility = "visible";
	},400);
	setTimeout(function(){
		document.getElementById("Animado3_MissFortune_Q").style.visibility = "hidden";
		document.getElementById("Animado4_MissFortune_Q").style.visibility = "visible";
	},600);
	setTimeout(function(){document.getElementById("Animado4_MissFortune_Q").style.visibility = "hidden";},800);
	
	delayVeigar = 800;
}

function animacionWMissFortune(){
	document.getElementById("missFortune_WBuffed").style.visibility = "visible";
	
	delayVeigar = 0;
}

function animacionEMissFortune(){
	document.getElementById("Animado1_MissFortune_E").style.visibility = "visible";
	setTimeout(function(){
		document.getElementById("Animado1_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado2_MissFortune_E").style.visibility = "visible";
	},200);
	setTimeout(function(){
		document.getElementById("Animado2_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado3_MissFortune_E").style.visibility = "visible";
	},400);
	setTimeout(function(){
		document.getElementById("Animado3_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado4_MissFortune_E").style.visibility = "visible";
	},600);
	setTimeout(function(){
		document.getElementById("Animado4_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado1_MissFortune_E").style.visibility = "visible";
	},800);
	setTimeout(function(){
		document.getElementById("Animado1_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado2_MissFortune_E").style.visibility = "visible";
	},1000);
	setTimeout(function(){
		document.getElementById("Animado2_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado3_MissFortune_E").style.visibility = "visible";
	},1200);
	setTimeout(function(){
		document.getElementById("Animado3_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado4_MissFortune_E").style.visibility = "visible";
	},1400);
	setTimeout(function(){
		document.getElementById("Animado4_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado1_MissFortune_E").style.visibility = "visible";
	},1600);
	setTimeout(function(){
		document.getElementById("Animado1_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado2_MissFortune_E").style.visibility = "visible";
	},1800);
	setTimeout(function(){
		document.getElementById("Animado2_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado3_MissFortune_E").style.visibility = "visible";
	},2000);
	setTimeout(function(){
		document.getElementById("Animado3_MissFortune_E").style.visibility = "hidden";
		document.getElementById("Animado4_MissFortune_E").style.visibility = "visible";
	},2200);
	setTimeout(function(){document.getElementById("Animado4_MissFortune_E").style.visibility = "hidden";},2400);
	
	delayVeigar = 2400;
}

function animacionRMissFortune(){
	oleadaRMissFortune(0);
	oleadaRMissFortune(300);
	oleadaRMissFortune(600);
	oleadaRMissFortune(900);
	oleadaRMissFortune(1200);
	oleadaRMissFortune(1500);
	oleadaRMissFortune(1800);
	oleadaRMissFortune(2100);
	
	delayVeigar = 2900;
}

function oleadaRMissFortune(delay){
	setTimeout(function(){
		document.getElementById("Animado1_MissFortune_R").style.visibility = "visible";
	},0+delay);
	setTimeout(function(){
		document.getElementById("Animado1_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado2_MissFortune_R").style.visibility = "visible";
	},100+delay);
	setTimeout(function(){
		document.getElementById("Animado2_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado3_MissFortune_R").style.visibility = "visible";
	},200+delay);
	setTimeout(function(){
		document.getElementById("Animado3_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado4_MissFortune_R").style.visibility = "visible";
	},300+delay);
	setTimeout(function(){
		document.getElementById("Animado4_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado5_MissFortune_R").style.visibility = "visible";
	},400+delay);
	setTimeout(function(){
		document.getElementById("Animado5_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado6_MissFortune_R").style.visibility = "visible";
	},500+delay);
	setTimeout(function(){
		document.getElementById("Animado6_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado7_MissFortune_R").style.visibility = "visible";
	},600+delay);
	setTimeout(function(){
		document.getElementById("Animado7_MissFortune_R").style.visibility = "hidden";
		document.getElementById("Animado8_MissFortune_R").style.visibility = "visible";
	},700+delay);
	setTimeout(function(){
		document.getElementById("Animado8_MissFortune_R").style.visibility = "hidden";
	},800+delay);
}

//Veigar
function animacionQVeigar(objetivo){
		switch(objetivo){
			case "MissFortune":
				animacionQVeigar_to(objetivo);
				setTimeout(function(){
					if(resistUpMissFortune == false){
						vidaMissFortune--;
					}else{
						resistUpMissFortune = false;
					}
					if(tenazaVeigar == true){
						vidaMissFortune--;
					}
					actualizarVidaMissFortune();
				},1000);
				break;
			case "Hecarim":
				animacionQVeigar_to(objetivo);
				setTimeout(function(){
					if(resistUpHecarim == false){
						vidaHecarim--;
					}else{
						resistUpHecarim = false;
					}
					if(tenazaVeigar == true){
						vidaHecarim--;
					}
					actualizarVidaHecarim();
				},1000);
				break;
			case "Sona":
				animacionQVeigar_to(objetivo);
				setTimeout(function(){
					if(resistUpSona == false){
						vidaSona--;
					}else{
						resistUpSona = false;
					}
					if(tenazaVeigar == true){
						vidaSona--;
					}
					actualizarVidaSona();
				},1000);
				break;
			default:
				alert("Bug bug bug bug");
				break;
		}
	delayAtaqueVeigar = 1000;
}

function animacionQVeigar_to(objetivo){
	setTimeout(function(){
		document.getElementById("Animado_Q_Basico").style.visibility = "visible";
	},0);
	setTimeout(function(){
		document.getElementById("Animado_Q_Basico").style.visibility = "hidden";
		document.getElementById("Animado_Q_to"+objetivo+"1").style.visibility = "visible";
	},200);
	setTimeout(function(){
		document.getElementById("Animado_Q_to"+objetivo+"1").style.visibility = "hidden";
		document.getElementById("Animado_Q_to"+objetivo+"2").style.visibility = "visible";
	},400);
	setTimeout(function(){
		document.getElementById("Animado_Q_to"+objetivo+"2").style.visibility = "hidden";
		document.getElementById("Animado_Q_to"+objetivo+"3").style.visibility = "visible";
	},600);
		setTimeout(function(){
		document.getElementById("Animado_Q_to"+objetivo+"3").style.visibility = "hidden";
		document.getElementById("Animado_Q_to"+objetivo+"4").style.visibility = "visible";
	},800);
	setTimeout(function(){
		document.getElementById("Animado_Q_to"+objetivo+"4").style.visibility = "hidden";
	},1000);
}

function animacionWEVeigar(){
	setTimeout(function(){
		document.getElementById("Animado_Veigar_E").style.visibility = "visible";
		stunSona = true;
		stunHecarim = true;
		stunMissFortune = true;
		R_MissFortune == false;
		cargasE_Hecarim = 0;
		comprobarBuffos();
	},100);
	setTimeout(function(){
		document.getElementById("Animado_Veigar_W_Cube1").style.visibility = "visible";
	},1500);
	setTimeout(function(){
		document.getElementById("Animado_Veigar_W_Cube1").style.visibility = "hidden";
		document.getElementById("Animado_Veigar_W_Cube2").style.visibility = "visible";
	},1600);
	setTimeout(function(){
		document.getElementById("Animado_Veigar_W_Under1").style.visibility = "visible";
		document.getElementById("Animado_Veigar_W_Under2").style.visibility = "visible";
	},1700);
	setTimeout(function(){
		document.getElementById("Animado_Veigar_W_Cube2").style.visibility = "hidden";
		document.getElementById("Animado_Veigar_W_Under1").style.visibility = "hidden";
		if(resistUpMissFortune == false){
			vidaMissFortune--;
		}else{
			resistUpMissFortune = false;
		}
		if(tenazaVeigar == true){
			vidaMissFortune--;
		}
		actualizarVidaMissFortune();
		if(resistUpHecarim == false){
			vidaHecarim--;
		}else{
			resistUpHecarim = false;
		}
		if(tenazaVeigar == true){
			vidaHecarim--;
		}
		actualizarVidaHecarim();
		if(resistUpSona == false){
			vidaSona--;
		}else{
			resistUpSona = false;
		}
		if(tenazaVeigar == true){
			vidaSona--;
		}
		actualizarVidaSona();
	},1800);
	setTimeout(function(){
		document.getElementById("Animado_Veigar_W_Under2").style.visibility = "hidden";
	},2000);
	setTimeout(function(){
		document.getElementById("Animado_Veigar_E").style.visibility = "hidden";
	},2000);
	setTimeout(function(){
		stunSona = false;
		stunHecarim = false;
		stunMissFortune = false;
		comprobarBuffos();
	},2500);
}

//Veigar
function animacionRVeigar(objetivo){
		switch(objetivo){
			case "MissFortune":
				animacionRVeigar_to(objetivo);
				setTimeout(function(){
					vidaMissFortune--;
					vidaMissFortune--;
					if(resistUpMissFortune == false){
						vidaMissFortune--;
					}else{
						resistUpMissFortune = false;
					}
					if(tenazaVeigar == true){
						vidaMissFortune--;
						vidaMissFortune--;
						vidaMissFortune--;
					}
					actualizarVidaMissFortune();
				},1000);
				break;
			case "Hecarim":
				animacionRVeigar_to(objetivo);
				setTimeout(function(){
					vidaHecarim--;
					vidaHecarim--;
					if(resistUpHecarim == false){
						vidaHecarim--;
					}else{
						resistUpHecarim = false;
					}
					if(tenazaVeigar == true){
						vidaHecarim--;
						vidaHecarim--;
						vidaHecarim--;
					}
					actualizarVidaHecarim();
				},1000);
				break;
			case "Sona":
				animacionRVeigar_to(objetivo);
				setTimeout(function(){
					vidaSona--;
					vidaSona--;
					if(resistUpSona == false){
						vidaSona--;
					}else{
						resistUpSona = false;
					}
					if(tenazaVeigar == true){
						vidaSona--;
						vidaSona--;
						vidaSona--;
					}
					actualizarVidaSona();
				},1000);
				break;
			default:
				alert("Bug bug bug bug");
				break;
		}
	delayAtaqueVeigar = 1000;
}

function animacionRVeigar_to(objetivo){
	setTimeout(function(){
		document.getElementById("Animado_R_Basico").style.visibility = "visible";
	},0);
	setTimeout(function(){
		document.getElementById("Animado_R_Basico").style.visibility = "hidden";
		document.getElementById("Animado_R_to"+objetivo+"1").style.visibility = "visible";
	},200);
	setTimeout(function(){
		document.getElementById("Animado_R_to"+objetivo+"1").style.visibility = "hidden";
		document.getElementById("Animado_R_to"+objetivo+"2").style.visibility = "visible";
	},400);
	setTimeout(function(){
		document.getElementById("Animado_R_to"+objetivo+"2").style.visibility = "hidden";
		document.getElementById("Animado_R_to"+objetivo+"3").style.visibility = "visible";
	},600);
		setTimeout(function(){
		document.getElementById("Animado_R_to"+objetivo+"3").style.visibility = "hidden";
		document.getElementById("Animado_R_to"+objetivo+"4").style.visibility = "visible";
	},800);
	setTimeout(function(){
		document.getElementById("Animado_R_to"+objetivo+"4").style.visibility = "hidden";
	},1000);
}