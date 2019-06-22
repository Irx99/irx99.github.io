	
		function enemigo(tipo, minX, minY, maxX, maxY, posIniX, posIniY){
			alert("Objeto iniciado");
			
			this.tipo = tipo;
			
			this.minX = minX;
			this.minY = minY;
			this.maxX = maxX;
			this.maxY = maxY;
			
			this.posIniX = posIniX;
			this.posIniY = posIniY;
			
			alert("Objeto terminado");
		}
		
		function tipo(/*vida, ataque*/){
			/*this.vida = vida;
			this.ataque = ataque;*/
			
			enemigo.call(this);
		}
		
		tipo.prototype = new enemigo();
		
		tipo.prototype.constructor = tipo;
		
		tipo.prototype.sayDrunk = function(){
			alert ('hola, soy estudiante');
		}
		
		enemigo.prototype.sayHello = function()
			{
				alert ('Esto deberia ser la IA del enemigo');
			};