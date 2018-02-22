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
			var contadordisplay;
			var num1;
			var num2;
			var operador;
			var tel;			
window.onload=function(){
						for(var i=0; i<teclas.length;i++){
							teclas[i].addEventListener("mousedown",crecer,false);
							teclas[i].addEventListener("mouseup",disminuir,false);		
							}
						for(var a=0; a<numeros.length;a++){
							numeros[a].addEventListener("click",escribir,false);
							numeros[a].addEventListener("click",funcioncontador,false);
							}
						for(var b=0; b<signos.length;b++){
							signos[b].addEventListener("click",operaciones,false);
							signos[b].addEventListener("click",funcioncontador,false);
							}
						};
			
function crecer(){this.style.transform = "scale(0.9)"}
function disminuir(){this.style.transform = "scale(1)"}
function quitar(){document.getElementById("display").innerHTML="";}
function reset(){num2=0;}
function funcioncontador(){contadordisplay=display.innerHTML;}
function signo(){
				var cambiosigno=contadordisplay*-1;
				document.getElementById("display").innerHTML= cambiosigno;
				reset();
				}   
function escribir(){
					 if(display.textContent === "0" || num2!=0){quitar();reset()}
					 if (this===on){document.getElementById("display").innerHTML="0"; reset();}
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
																	if ( display.textContent === "" ){document.getElementById("display").innerHTML="0.";}
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

function operaciones(){
						if (display.textContent!=0){	if(this===mas)
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
														else if(this===igual)
														{
															num2=contadordisplay;
															culminar();

														}
												  }
						}
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


					}

				}
						  

	



