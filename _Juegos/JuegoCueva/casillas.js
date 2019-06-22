   
    //Creacion del mapa
    document.write("<div id=\"contenedor\">")
    document.write("<table id=\"mapa\">");
    for(largoMapa=0;largoMapa<34;largoMapa++){
		document.write("<tr>");
	    for(anchoMapa=0;anchoMapa<39;anchoMapa++){
			document.write("<td id=\""+largoMapa+"-"+anchoMapa+"\" class=\"terreno\"></td>");
			}
		document.write("</tr>");
		}
    document.write("</table>");
    document.write("</div>")
   
    //Borde superior
    document.getElementById("0-0").className = "solido pared";
    for(i=3;i<39;i++){
		document.getElementById("0-"+i).className = "solido pared";
    }
	  
    //BordeIzquierdo	  
    for(i=0;i<34;i++){
		document.getElementById(i+"-0").className = "solido pared";
    }
	  
    //Borde Inferior
    for(i=0;i<39;i++){
		document.getElementById("33-"+i).className = "solido pared";
	}
	  
   //Borde Derecho
    for(i=0;i<34;i++){
		document.getElementById(i+"-38").className = "solido pared";
    }
	   
    //Inicio	  
    document.getElementById("1-3").className = "solido pared";//Atajo 4
    document.getElementById("2-3").className = "solido pared";
    document.getElementById("3-3").className = "solido pared";
    document.getElementById("4-3").className = "solido pared";
    document.getElementById("5-3").className = "solido pared";
    document.getElementById("5-4").className = "solido pared";
    document.getElementById("5-5").className = "solido pared";
    document.getElementById("2-5").className = "solido pared";
    document.getElementById("3-5").className = "solido pared";
    document.getElementById("4-5").className = "solido pared";
    
    //1a sala
    document.getElementById("6-5").className = "solido pared";
    document.getElementById("6-6").className = "solido pared";
    document.getElementById("6-7").className = "solido pared";//Atajo2
    document.getElementById("6-8").className = "solido pared";
    document.getElementById("6-9").className = "solido pared";
    document.getElementById("6-10").className = "solido pared";//Atajo
    document.getElementById("6-11").className = "solido pared";
    document.getElementById("1-11").className = "solido pared";
    document.getElementById("2-11").className = "solido pared";
    document.getElementById("3-11").className = "solido pared";
    document.getElementById("4-11").className = "solido pared";
    
    //Pasillo 1
    document.getElementById("6-12").className = "solido pared";
    document.getElementById("6-13").className = "solido pared";
    document.getElementById("6-14").className = "solido pared";
    document.getElementById("6-15").className = "solido pared";
    document.getElementById("4-15").className = "solido pared";
    document.getElementById("5-15").className = "solido pared";
    document.getElementById("4-12").className = "solido pared";
    document.getElementById("4-13").className = "solido pared";
    
    //Sala de la 1a "espada"
    document.getElementById("4-16").className = "solido pared";
    document.getElementById("4-17").className = "solido pared";
    document.getElementById("2-17").className = "solido pared";
    document.getElementById("3-17").className = "solido pared";
    document.getElementById("2-14").className = "espada1";//Espada
    
    //Terreno sala espada
    document.getElementById("4-14").className = "escaleraFrente";//escaleraFrente
    document.getElementById("1-17").className = "escaleraLateral";//escaleraLateral
    document.getElementById("3-12").className = "terreno2";
    document.getElementById("3-13").className = "terreno2";
    document.getElementById("3-14").className = "terreno2";
    document.getElementById("3-15").className = "terreno2";
    document.getElementById("3-16").className = "terreno2";
    document.getElementById("2-12").className = "terreno2";
    document.getElementById("2-13").className = "terreno2";
    document.getElementById("2-15").className = "terreno2";
    document.getElementById("2-16").className = "terreno2";
    document.getElementById("1-12").className = "terreno2";
    document.getElementById("1-13").className = "terreno2";
    document.getElementById("1-14").className = "terreno2";
    document.getElementById("1-15").className = "terreno2";
    document.getElementById("1-16").className = "terreno2";
    
    //1a Sala de puzzle
    document.getElementById("3-18").className = "solido pared";
    document.getElementById("4-18").className = "solido pared";
    document.getElementById("1-21").className = "solido pared";
    document.getElementById("2-21").className = "solido pared";
    document.getElementById("3-21").className = "solido pared";
    document.getElementById("4-21").className = "solido pared";
    document.getElementById("5-20").className = "solido pared";
    //Roca
    document.getElementById("2-20").className = "roca";
    //Caja
    document.getElementById("3-20").className = "terreno";
    //PreasurePlate
    document.getElementById("4-20").className = "pulsador";
    //Puerta
    document.getElementById("5-19").className = "solido puertaHC";
    
    
    //2a Sala
    document.getElementById("7-15").className = "solido pared";
    document.getElementById("8-15").className = "solido pared";
    document.getElementById("9-15").className = "solido pared";
    document.getElementById("10-15").className = "solido pared";
    document.getElementById("10-16").className = "solido pared";
    document.getElementById("10-17").className = "solido pared";
    document.getElementById("10-18").className = "solido pared";
    document.getElementById("10-19").className = "solido pared";
    document.getElementById("10-20").className = "solido pared";
    document.getElementById("10-21").className = "solido pared";
    document.getElementById("5-21").className = "solido pared";
    document.getElementById("5-18").className = "solido pared";
    document.getElementById("5-17").className = "solido pared";
    document.getElementById("5-16").className = "solido pared";
    document.getElementById("6-21").className = "solido pared";
    document.getElementById("7-21").className = "solido pared";
    document.getElementById("8-21").className = "solido pared";
    
    //3a Sala (1a Fuente)
    document.getElementById("8-22").className = "solido pared";
    document.getElementById("8-23").className = "solido pared";
    document.getElementById("8-24").className = "solido pared";
    document.getElementById("8-25").className = "solido pared";
    document.getElementById("8-26").className = "solido pared";
    document.getElementById("8-27").className = "solido pared";
    document.getElementById("10-22").className = "solido pared";
    document.getElementById("10-23").className = "solido pared";
    document.getElementById("11-23").className = "solido pared";
    document.getElementById("12-23").className = "solido pared";
    document.getElementById("12-24").className = "solido pared";
    document.getElementById("12-25").className = "solido pared";
    document.getElementById("12-26").className = "solido pared";
    document.getElementById("12-27").className = "solido pared";
    document.getElementById("12-28").className = "solido pared";
    document.getElementById("10-28").className = "solido pared";
    document.getElementById("11-28").className = "solido pared";
    document.getElementById("10-29").className = "solido pared";
    document.getElementById("8-29").className = "solido pared";
    document.getElementById("9-29").className = "solido pared";
    //Fuente
    document.getElementById("10-25").className = "fuenteTL";
    document.getElementById("10-26").className = "fuenteTR";
    document.getElementById("11-25").className = "solido fuenteBL";
    document.getElementById("11-26").className = "solido fuenteBR";
    
    //4a Sala (1er Boss)
    document.getElementById("1-29").className = "solido pared";
    document.getElementById("3-29").className = "solido pared";
    document.getElementById("4-29").className = "solido pared";
    document.getElementById("5-29").className = "solido pared";
    document.getElementById("6-29").className = "solido pared";
    document.getElementById("7-29").className = "solido pared";
    //Rocas
    document.getElementById("3-28").className = "roca";
    document.getElementById("4-28").className = "roca";
    document.getElementById("5-28").className = "roca";
    document.getElementById("6-28").className = "roca";
    document.getElementById("2-24").className = "roca";
    document.getElementById("2-25").className = "roca";
    document.getElementById("2-26").className = "roca";
    document.getElementById("6-23").className = "roca";
    
    //5a Sala (Laberinto)
    document.getElementById("10-30").className = "solido pared";
    document.getElementById("10-31").className = "solido pared";
    document.getElementById("10-32").className = "solido pared";
    document.getElementById("10-33").className = "solido pared";
    document.getElementById("10-34").className = "solido pared";
    document.getElementById("10-35").className = "solido pared";
    document.getElementById("10-36").className = "solido pared";
    for(i=30;i<38;i++){
		for(j=1;j<10;j++){
			document.getElementById(j+"-"+i).innerHTML = "<img src=\"imagenes/niebla.gif\"></img>";
		}
    }
    
    
    //Cementerio
    document.getElementById("13-27").className = "solido pared";
    document.getElementById("14-27").className = "solido pared";
    document.getElementById("14-26").className = "solido pared";
    document.getElementById("15-26").className = "solido pared";
    document.getElementById("16-26").className = "solido pared";
    document.getElementById("17-26").className = "solido pared";
    document.getElementById("18-26").className = "solido pared";
    document.getElementById("19-26").className = "solido pared";
    document.getElementById("24-26").className = "solido pared";
    document.getElementById("25-26").className = "solido pared";
    document.getElementById("26-26").className = "solido pared";
    document.getElementById("27-26").className = "solido pared";
    document.getElementById("28-26").className = "solido pared";
    document.getElementById("29-26").className = "solido pared";
    document.getElementById("29-27").className = "solido pared";
    document.getElementById("30-27").className = "solido pared";
    document.getElementById("31-27").className = "solido pared";
    document.getElementById("31-28").className = "solido pared";
    document.getElementById("32-28").className = "solido pared";
    //Tumbas
    document.getElementById("12-30").className = "solido lapida";
    document.getElementById("12-32").className = "solido lapida";
    document.getElementById("12-34").className = "solido lapida";
    document.getElementById("14-30").className = "solido lapida";
    document.getElementById("14-32").className = "solido lapida";
    document.getElementById("14-34").className = "solido lapida";
    document.getElementById("16-28").className = "solido lapida";
    document.getElementById("16-30").className = "solido lapida";
    document.getElementById("16-32").className = "solido lapida";
    document.getElementById("16-34").className = "solido lapida";
    document.getElementById("18-28").className = "solido lapida";
    document.getElementById("18-30").className = "solido lapida";
    document.getElementById("18-32").className = "solido lapida";
    document.getElementById("18-34").className = "solido lapida";
    //2obloque
    document.getElementById("31-30").className = "solido lapida";
    document.getElementById("31-32").className = "solido lapida";
    document.getElementById("31-34").className = "solido lapida";
    document.getElementById("29-30").className = "solido lapida";
    document.getElementById("29-32").className = "solido lapida";
    document.getElementById("29-34").className = "solido lapida";
    document.getElementById("27-28").className = "solido lapida";
    document.getElementById("27-30").className = "solido lapida";
    document.getElementById("27-32").className = "solido lapida";
    document.getElementById("27-34").className = "solido lapida";
    document.getElementById("25-28").className = "solido lapida";
    document.getElementById("25-30").className = "solido lapida";
    document.getElementById("25-32").className = "solido lapida";
    document.getElementById("25-34").className = "solido lapida";
    
    //Pasillo 2 (y huecos)
    document.getElementById("32-27").className = "solido pared";
    document.getElementById("32-26").className = "solido pared";
    document.getElementById("32-25").className = "solido pared";
    document.getElementById("32-24").className = "solido pared";
    document.getElementById("32-23").className = "solido pared";
    document.getElementById("31-23").className = "solido pared";
    document.getElementById("30-23").className = "solido pared";
    document.getElementById("29-23").className = "solido pared";
    document.getElementById("28-23").className = "solido pared";
    document.getElementById("27-23").className = "solido pared";
    document.getElementById("26-23").className = "solido pared";
    document.getElementById("25-23").className = "solido pared";
    document.getElementById("24-23").className = "solido pared";
    document.getElementById("23-23").className = "solido pared";
    document.getElementById("20-23").className = "solido pared";
    document.getElementById("19-23").className = "solido pared";
    document.getElementById("18-23").className = "solido pared";
    document.getElementById("17-23").className = "solido pared";
    document.getElementById("16-23").className = "solido pared";
    document.getElementById("15-23").className = "solido pared";
    document.getElementById("14-23").className = "solido pared";
    document.getElementById("13-23").className = "solido pared";
    document.getElementById("13-24").className = "solido pared";
    document.getElementById("13-25").className = "solido pared";
    document.getElementById("13-26").className = "solido pared";
    
    //Pasillo 3
    document.getElementById("23-22").className = "solido pared";
    document.getElementById("23-21").className = "solido pared";
    document.getElementById("23-20").className = "solido pared";
    document.getElementById("22-20").className = "solido pared";
    document.getElementById("21-20").className = "solido pared";
    document.getElementById("20-20").className = "solido pared";
    document.getElementById("19-20").className = "solido pared";
    document.getElementById("18-20").className = "solido pared";
    document.getElementById("17-20").className = "solido pared";
    document.getElementById("16-20").className = "solido pared";
    document.getElementById("15-20").className = "solido pared";
    document.getElementById("14-20").className = "solido pared";
    document.getElementById("13-20").className = "solido pared";
    document.getElementById("13-19").className = "solido pared";
    document.getElementById("13-18").className = "solido pared";
    document.getElementById("13-17").className = "solido pared";
    document.getElementById("13-16").className = "solido pared";
    document.getElementById("13-15").className = "solido pared";
    document.getElementById("13-14").className = "solido pared";
    document.getElementById("13-13").className = "solido pared";
    document.getElementById("12-13").className = "solido pared";
    document.getElementById("11-13").className = "solido pared";
    document.getElementById("10-13").className = "solido pared";
    document.getElementById("9-13").className = "solido pared";
    
    //Sala 6 (Cajas 2)
    document.getElementById("7-9").className = "solido pared";
    document.getElementById("7-5").className = "solido pared";
    document.getElementById("8-5").className = "solido pared";
    document.getElementById("8-4").className = "solido pared";
    document.getElementById("9-4").className = "solido pared";
    document.getElementById("10-4").className = "solido pared";
    document.getElementById("11-4").className = "solido pared";
    document.getElementById("12-4").className = "solido pared";
    document.getElementById("13-4").className = "solido pared";
    document.getElementById("14-4").className = "solido pared";
    document.getElementById("15-4").className = "solido pared";
    document.getElementById("16-4").className = "solido pared";
    document.getElementById("17-4").className = "solido pared";
    document.getElementById("18-4").className = "solido pared";
    document.getElementById("19-4").className = "solido pared";
    document.getElementById("19-5").className = "solido pared";
    document.getElementById("19-6").className = "solido pared";
    document.getElementById("19-7").className = "solido pared";
    document.getElementById("19-8").className = "solido pared";
    document.getElementById("19-9").className = "solido pared";
    document.getElementById("19-10").className = "solido pared";
    document.getElementById("19-11").className = "solido pared";
    document.getElementById("19-12").className = "solido pared";
    document.getElementById("19-13").className = "solido pared";
    document.getElementById("17-13").className = "solido pared";
    document.getElementById("16-13").className = "solido pared";
    document.getElementById("15-13").className = "solido pared";
    document.getElementById("14-13").className = "solido pared";
    document.getElementById("8-13").className = "solido pared";
    document.getElementById("12-12").className = "solido pared";
    document.getElementById("12-10").className = "solido pared";
    document.getElementById("12-9").className = "solido pared";
    document.getElementById("11-10").className = "solido pared";
    document.getElementById("12-7").className = "solido pared";//Atajo2
    document.getElementById("11-7").className = "solido pared";//Atajo2
    document.getElementById("10-7").className = "solido pared";//Atajo2
    document.getElementById("9-7").className = "solido pared";//Atajo2
    document.getElementById("9-8").className = "solido pared";
    document.getElementById("10-8").className = "solido pared";
    document.getElementById("14-7").className = "solido pared";//Atajo2
    document.getElementById("14-6").className = "solido pared";
    document.getElementById("14-5").className = "solido pared";
    document.getElementById("14-9").className = "solido pared";
    document.getElementById("14-10").className = "solido pared";
    document.getElementById("15-10").className = "solido pared";
    document.getElementById("16-10").className = "solido pared";
    document.getElementById("17-10").className = "solido pared";
    document.getElementById("18-10").className = "solido pared";
    //Cajas
    document.getElementById("9-6").className = "terreno";
    document.getElementById("12-6").className = "terreno";
    document.getElementById("13-7").className = "terreno";
    document.getElementById("8-9").className = "terreno";
    document.getElementById("8-10").className = "terreno";
    document.getElementById("10-10").className = "terreno";
    document.getElementById("8-11").className = "terreno";
    document.getElementById("10-11").className = "terreno";
    document.getElementById("13-11").className = "terreno";
    document.getElementById("16-11").className = "terreno";
    //Pulsadores
    document.getElementById("18-9").className = "pulsador";
    document.getElementById("18-8").className = "pulsador";
    document.getElementById("18-7").className = "pulsador";
    document.getElementById("18-6").className = "pulsador";
    document.getElementById("18-5").className = "pulsador";
    document.getElementById("17-9").className = "pulsador";
    document.getElementById("17-8").className = "pulsador";
    document.getElementById("17-7").className = "pulsador";
    document.getElementById("17-6").className = "pulsador";
    document.getElementById("17-5").className = "pulsador";
    //Puerta
    document.getElementById("18-13").className = "solido puertaVC";//Atajo3

   
    //Sala 7 (Teleports)
    document.getElementById("20-13").className = "solido pared";
    document.getElementById("21-13").className = "solido pared";
    document.getElementById("22-13").className = "solido pared";
    document.getElementById("24-13").className = "solido pared";
    document.getElementById("25-13").className = "solido pared";
    document.getElementById("27-13").className = "solido pared";
    document.getElementById("28-13").className = "solido pared";
    document.getElementById("29-13").className = "solido pared";
    document.getElementById("30-13").className = "solido pared";
    document.getElementById("31-13").className = "solido pared";
    document.getElementById("32-13").className = "solido pared";
    //Paredes Interiores
    document.getElementById("14-19").className = "solido pared";
    document.getElementById("15-14").className = "solido pared";
    document.getElementById("15-15").className = "solido pared";
    document.getElementById("15-16").className = "solido pared";
    document.getElementById("15-17").className = "solido pared";
    document.getElementById("15-18").className = "solido pared";
    document.getElementById("15-19").className = "solido pared";
    document.getElementById("16-14").className = "solido pared";
    document.getElementById("16-16").className = "solido pared"; 
    document.getElementById("16-17").className = "solido pared";
    document.getElementById("16-19").className = "solido pared";
    document.getElementById("17-14").className = "solido pared";
    document.getElementById("17-16").className = "solido pared";
    document.getElementById("17-17").className = "solido pared";
    document.getElementById("17-19").className = "solido pared";
    document.getElementById("18-16").className = "solido pared";
    document.getElementById("18-17").className = "solido pared";
    document.getElementById("18-19").className = "solido pared";
    document.getElementById("19-14").className = "solido pared";
    document.getElementById("19-16").className = "solido pared";
    document.getElementById("19-17").className = "solido pared";
    document.getElementById("19-19").className = "solido pared";
    document.getElementById("20-14").className = "solido pared";
    document.getElementById("20-16").className = "solido pared";
    document.getElementById("20-17").className = "solido pared";
    document.getElementById("20-19").className = "solido pared";
    document.getElementById("21-14").className = "solido pared";
    document.getElementById("21-15").className = "solido pared";
    document.getElementById("21-16").className = "solido pared"; 
    document.getElementById("21-17").className = "solido pared"; 
    document.getElementById("21-18").className = "solido pared";
    document.getElementById("21-19").className = "solido pared";
    document.getElementById("22-19").className = "solido pared";
    document.getElementById("23-13").className = "solido pared";
    document.getElementById("23-14").className = "solido pared";
    document.getElementById("23-15").className = "solido pared";
    document.getElementById("23-16").className = "solido pared";
    document.getElementById("23-17").className = "solido pared";
    document.getElementById("23-18").className = "solido pared";
    document.getElementById("23-19").className = "solido pared";
    document.getElementById("24-17").className = "solido pared";
    document.getElementById("24-19").className = "solido pared";
    document.getElementById("25-14").className = "solido pared";
    document.getElementById("25-15").className = "solido pared";
    document.getElementById("25-16").className = "solido pared";
    document.getElementById("25-17").className = "solido pared";
    document.getElementById("25-19").className = "solido pared";
    document.getElementById("26-16").className = "solido pared";
    document.getElementById("26-19").className = "solido pared";
    document.getElementById("27-14").className = "solido pared";
    document.getElementById("27-15").className = "solido pared";
    document.getElementById("27-16").className = "solido pared";
    document.getElementById("27-17").className = "solido pared";
    document.getElementById("27-18").className = "solido pared";
    document.getElementById("27-19").className = "solido pared";
    document.getElementById("27-20").className = "solido pared";
    document.getElementById("27-21").className = "solido pared";
    document.getElementById("27-22").className = "solido pared";
    document.getElementById("28-17").className = "solido pared";
    document.getElementById("28-18").className = "solido pared";
    document.getElementById("28-20").className = "solido pared";
    document.getElementById("28-21").className = "solido pared";
    document.getElementById("29-14").className = "solido pared";
    document.getElementById("29-15").className = "solido pared";
    document.getElementById("29-16").className = "solido pared";
    document.getElementById("29-17").className = "solido pared";
    document.getElementById("29-18").className = "solido pared";
    document.getElementById("29-20").className = "solido pared";
    document.getElementById("29-21").className = "solido pared";
    document.getElementById("30-17").className = "solido pared";
    document.getElementById("30-18").className = "solido pared";
    document.getElementById("31-17").className = "solido pared";
    document.getElementById("31-18").className = "solido pared";
    document.getElementById("32-14").className = "solido pared";   
    document.getElementById("32-17").className = "solido pared";
    document.getElementById("32-18").className = "solido pared";
    //Portales
    document.getElementById("14-14").className = "portal";
    document.getElementById("14-18").className = "portal";
    document.getElementById("16-15").className = "portal";
    document.getElementById("20-15").className = "portal";
    document.getElementById("16-18").className = "portal";
    document.getElementById("20-18").className = "portal";
    document.getElementById("22-14").className = "portal";
    document.getElementById("22-18").className = "portal";
    document.getElementById("24-14").className = "portal";
    document.getElementById("24-16").className = "portal";
    document.getElementById("24-18").className = "portal";
    document.getElementById("24-20").className = "portal";
    document.getElementById("24-22").className = "portal";
    document.getElementById("26-15").className = "portal";
    document.getElementById("26-17").className = "portal";
    document.getElementById("26-20").className = "portal";
    document.getElementById("26-22").className = "portal";
    document.getElementById("28-14").className = "portal";
    document.getElementById("28-16").className = "portal";
    document.getElementById("28-19").className = "portal";
    document.getElementById("28-22").className = "portal";
    document.getElementById("30-14").className = "portal";
    document.getElementById("30-16").className = "portal";
    document.getElementById("32-16").className = "portal";
    //Fuente
    document.getElementById("31-20").className = "fuenteTL";
    document.getElementById("31-21").className = "fuenteTR";
    document.getElementById("32-20").className = "solido fuenteBL";
    document.getElementById("32-21").className = "solido fuenteBR";
   
    //Sala 8 (Final Boss)
    document.getElementById("19-3").className = "solido pared";
    document.getElementById("19-2").className = "solido pared";
   
	//Pasillo 2 (Y Huecos)
	document.getElementById("18-2").className = "solido pared";
	document.getElementById("17-2").className = "solido pared";
	document.getElementById("16-2").className = "solido pared";
	document.getElementById("15-2").className = "solido pared";
	document.getElementById("14-2").className = "solido pared";
	document.getElementById("13-2").className = "solido pared";
	document.getElementById("12-2").className = "solido pared";
	document.getElementById("11-2").className = "solido pared";
	document.getElementById("10-2").className = "solido pared";
	document.getElementById("9-2").className = "solido pared";
	document.getElementById("8-2").className = "solido pared";
	document.getElementById("7-2").className = "solido pared";
	document.getElementById("18-3").className = "solido pared";
	document.getElementById("17-3").className = "solido pared";
	document.getElementById("16-3").className = "solido pared";
	document.getElementById("15-3").className = "solido pared";
	document.getElementById("14-3").className = "solido pared";
	document.getElementById("13-3").className = "solido pared";
	document.getElementById("12-3").className = "solido pared";
	document.getElementById("11-3").className = "solido pared";
	document.getElementById("10-3").className = "solido pared";
	document.getElementById("9-3").className = "solido pared";
	document.getElementById("8-3").className = "solido pared";
	document.getElementById("7-3").className = "solido pared";
	document.getElementById("6-3").className = "solido pared";
	document.getElementById("7-4").className = "solido pared";
	document.getElementById("6-4").className = "solido pared";
   
   
   
   
   
   
   
   
   
   
   
   
   