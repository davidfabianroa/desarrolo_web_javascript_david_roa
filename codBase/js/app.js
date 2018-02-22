			//se declaran las variables
			var cero=document.getElementById("0");
			var uno=document.getElementById("1");
			var dos=document.getElementById("2");
			var tres=document.getElementById("3");
			var cuatro=document.getElementById("4");
			var cinco=document.getElementById("5");
			var seis=document.getElementById("6");
			var siete=document.getElementById("7");
			var ocho=document.getElementById("8");
			var nueve=document.getElementById("9");
			var on=document.getElementById("on");
			var sign=document.getElementById("sign");
			var dividido=document.getElementById("dividido");
			var por=document.getElementById("por");
			var menos=document.getElementById("menos");
			var mas=document.getElementById("mas");
			var igual=document.getElementById("igual");
			var punto=document.getElementById("punto");
			var display=document.getElementById("display");
			var numeros=[cero,uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,on,punto,sign];
            var signos=[dividido,por,mas,menos,igual];
			var teclas=document.getElementsByClassName("tecla");
			var contadordisplay;//variable que almacena el inner del display
			var num1;
			var num2;
			var operador;//switch operaciones matematicas
			var tel;//variable que controla las operaciones matematicas
//ciclos que controlan la funcionalidad del codigo(aumentar de tamaño teclas, escribir en display, llamar a funciones que realizan las operaciones matematicas)
window.onload=function(){/*llama funciones para tamaño de teclas*/
						for(var i=0; i<teclas.length;i++){
							teclas[i].addEventListener("mousedown",crecer,false);
							teclas[i].addEventListener("mouseup",disminuir,false);		
							}/*llama funciones para escribir en el display*/
						for(var a=0; a<numeros.length;a++){
							numeros[a].addEventListener("click",escribir,false);
							numeros[a].addEventListener("click",funcioncontador,false);
							}/*llama funciones de operaciones matematicas*/
						for(var b=0; b<signos.length;b++){
							signos[b].addEventListener("click",operaciones,false);
							signos[b].addEventListener("click",funcioncontador,false);
							}
						};
			
function crecer(){this.style.transform = "scale(0.9)";}//aumenta tamaño de teclas
function disminuir(){this.style.transform = "scale(1)";}//retorna el tamaño de la tecla
function quitar(){document.getElementById("display").innerHTML="";}//elimina los numeros en el display
function reset(){num2=0;}
function funcioncontador(){contadordisplay=display.innerHTML;}//guarda lo que sale en el display
function signo(){/**/
				var cambiosigno=contadordisplay*-1;
				document.getElementById("display").innerHTML= cambiosigno;
				reset();
				}  //cambia de signo al numero en el display
/*funcion para escribir en la pantalla*/
function escribir(){
					 if(display.textContent === "0" || num2!==0 ){quitar();reset()}
					 if (this===on){document.getElementById("display").innerHTML="0"; reset();}/*,metodo boton on/c*/
					 if (display.textContent.length <= 7) 
														{
															if(this===uno)
																{
																	document.getElementById("display").innerHTML+="1";
																}
															else if (this===dos)
																{
																	document.getElementById("display").innerHTML+="2";
																}
																if(this===tres)
																{
																	document.getElementById("display").innerHTML+="3";
																}
															else if (this===cuatro)
																{
																	document.getElementById("display").innerHTML+="4";
																}
															if(this===cinco)
																{
																	document.getElementById("display").innerHTML+="5";
																}
															else if (this===seis)
																{
																	document.getElementById("display").innerHTML+="6";
																}
																if(this===siete)
																{
																	document.getElementById("display").innerHTML+="7";
																}
															else if (this===ocho)
																{
																	document.getElementById("display").innerHTML+="8";

																}
														else if (this===nueve)
																{
																	document.getElementById("display").innerHTML+="9";

																}
														 else if (this===on)
																{
																	document.getElementById("display").innerHTML="0";


																}
														 else if (this===punto)
																{
																	if ( display.textContent === "" )/*metodo tecla punto*/		{document.getElementById("display").innerHTML="0.";}
																	else if (contadordisplay.indexOf(".")== -1){document.getElementById("display").innerHTML+=".";}

																}
														 else if (this===on)
																{
																	document.getElementById("display").innerHTML="0";

																}
														 else if (this===cero)
																{
																	if ( display.textContent === "" ){document.getElementById("display").innerHTML="0";}
																	else if (display.textContent != "0"){document.getElementById("display").innerHTML+="0";}

																}
														 else if (this===sign)
																{

																	signo();	
																}

														}
					}
/*funcion para selecionar la operacion a realizar */
function operaciones(){
						if(this===mas)
						{
							num1=contadordisplay;
							quitar();
							operador="+";
						}
						else if(this===menos)
						{
							num1=contadordisplay;
							quitar();
							operador="-";
						}
						else if(this===por)
						{
							num1=contadordisplay;
							quitar();
							operador="*";
						}
						else if(this===dividido)
						{
							num1=contadordisplay;
							quitar();
							operador="/";
						}
						else if(this===igual && num2==0)/*metodo boton igual*/
						{
							num2=contadordisplay;
							culminar();

						}
					else if(this===igual && num2 !=0)
						{
							num2=contadordisplay;
							resetculminar();
						}
												  
						}
/*realiza las primeras operaciones cuando e inizilizala calculadora*/
function culminar(){
					if(num1!=0)
					{
						switch(operador)
						{
							case "+":
								tel= parseFloat (num1) + parseFloat (num2);
								break;
							case "-":
								tel= parseFloat (num1) - parseFloat (num2);
								break;
							case "*":
								tel= parseFloat (num1) * parseFloat (num2);
								break;
							case "/":
								tel= parseFloat (num1) / parseFloat (num2);
								break;
						}
						var loco = tel.toString().substring(0, 8);		
						document.getElementById("display").innerHTML= parseFloat(loco);
						num1=num2;
						num2=1;
					}
				}
/*realiza todas las operaciones depues que las variables toman un valor */
function resetculminar(){
					if(num1!=0)
					{
						switch(operador)
						{
							case "+":
								tel= parseFloat (num1) + parseFloat (num2);
								break;
							case "-":
								tel= parseFloat (num2) - parseFloat (num1);
								break;
							case "*":
								tel= parseFloat (num1) * parseFloat (num2);
								break;
							case "/":
								tel= parseFloat (num2) / parseFloat (num1);
								break;
						}
						var loco = tel.toString().substring(0, 8);		
						document.getElementById("display").innerHTML= parseFloat(loco);
					}
				}

						  

	



