
	document.getElementById('superficies').addEventListener('click',show)
	document.getElementById('curvaturas').addEventListener('click',show)
	document.getElementById('parciales').addEventListener('click',show)
	document.getElementById('gradientes').addEventListener('click',show)
	document.getElementById('polares').addEventListener('click',show)
	document.getElementById('triples').addEventListener('click',show)
	document.getElementById('esfericas').addEventListener('click',show)
	document.getElementById('masas').addEventListener('click',show)
	document.getElementById('campos').addEventListener('click',show)
	document.getElementById('home').addEventListener('click',show)

	var query=window.matchMedia('(min-width:950px)');
	query.addListener(mediaq);
	function mediaq() {
		if (query.matches) {
			var img=document.getElementById('header');
			img.innerHTML="<img src='resources/0/bkd.png' >";
		}
		else{
			var img=document.getElementById('header');
			img.innerHTML="<img src='resources/0/bk3.png' >";
		}
	}
	mediaq();


	var $menubtn=document.getElementById('menubtn').addEventListener('click',function(){
		var $nav=document.getElementById('nav')
		$nav.classList.toggle('active')
	})
	var $menu=document.getElementById('menu').addEventListener('click',function(){
		var $nav=document.getElementById('nav')
		$nav.classList.toggle('active')
	})
	var $home=document.getElementById('home').addEventListener('click',function(){
		var $nav=document.getElementById('nav')
		$nav.classList.toggle('active')
		if ($nav.classList.value!="") {
			$nav.classList.toggle('active')
		}
	})
	var $body=document.body.addEventListener('swipeleft',function(){
		var $nav=document.getElementById('nav')
		$nav.classList.remove('active')
	})
	var $body=document.body.addEventListener('swiperight',function(){
		var $nav=document.getElementById('nav')
		$nav.classList.add('active')
	})





	var $helpbtn=document.getElementById('helpbtn').addEventListener('click',function(){
		var $references=document.getElementById('references')
		$references.classList.toggle('active2')
		console.log($references.classList)
	})
function show(who)
{
 	/*list=[33,31,29,44,39,40,49,27,18]*/
 	largeTittle=who.target.textContent.length;
 	tittle=who.target.textContent;
 	console.log(largeTittle);

 	content=document.getElementById('content')
 	references=document.getElementById('references')
	if(largeTittle==33){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p><span class='titulop'>Superficies Cuádricas:</span><br><br>"+
		"Una superficie cuádrica <b>es la gráfica de una ecuación</b> de segundo"+
		" grado en tres variables: X, Y y Z; La ecuación más general es: <br><br>"+
		"<img class='formula' src='resources/1/ecug.png' ><br><br>"+
		"Donde A, B, C...J son constantes, aunque por traslación y rotación se puede "+
		"llevar a una de las formas estándar: <br><br>"+
		"<img class='formula' src='resources/1/ecus.png' ><br><br></p>"+
		
		
		"<p><span class='titulop'>Cilindros:</span><br><br>"+
		"Un cilindro es una superficie que consiste de"+
		" <span style='color:#CA2A51;'><i>todas las líneas rectas (llamadas generatrices)</i></span> que son"+
		" <b>paralelas </b>a <span style='color:#FF9A00;'><i>una recta dada</i></span> y pasan por <span style='color:#5930AD; '><i>"+
		"una curva plana dada</i></span>.<br><br>"+
		"<img class='little' src='resources/1/xcuadrado.png'/>"+
		"<img class='little' src='resources/1/circulo.png'/><br><br></p>"+
		
		
		"<p><span class='titulop'>Trazas:</span><br><br>"+
		"Las trazas en los planos verticales X=K son las parábolas que abren hacia arriba"+
		",  las trazas en Y=K son las parábolas que abren hacia abajo y las trazas "+
		"horizontales son (y^2-X^2=K) una familia de hipérbolas:<br><br>"+
		"<img class='little' src='resources/1/trazax.png'/>"+
		"<img class='little' src='resources/1/trazax2.png'/>"+
		"<img class='little' src='resources/1/trazay.png'/>"+	
		"<img class='little' src='resources/1/trazay2.png'/>"+
		"<img class='little' src='resources/1/trazaz.png'/>"+
		"<img class='little' src='resources/1/trazaz2.png'/>"+
		"<img src='resources/1/silla.png'/></p>"+
		

		"<p><span class='titulop'>Principales superficies cuádricas</span><br><br>"+
		"<img src='resources/1/tabla.png'/><br><br>"+
		"<img class='little' src='resources/1/elipsoide2.png'/>"+
		"<img class='little' src='resources/1/paraboloideeliptico2.png'/>"+
		"<img class='little' src='resources/1/silla2.png'/>"+	
		"<img class='little' src='resources/1/cono2.png'/>"+
		"<img class='little' src='resources/1/hiperboloide1hoja2.png'/>"+
		"<img class='little' src='resources/1/hiperboloide2hojas2.png'/></p><hr>";
		
		
		//PARA LAS REFERENCIAS
		references.innerHTML="<div class='top'><h2>Actividades y Ejemplos</h2></div>"+
		"<ul><h4>EJEMPLOS</h4><li><h5>Reconociendo patrones de superficies</h5><iframe width='560' height='315' src='https://www.youtube.com/embed/SbOw4eiBF6I' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/849ryoz3LaU' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/_d1SyjVGVpk' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>"+
		
		"<ul><h4>ACTIVIDAD</h4><li><h5>1</h5><img src='resources/1/1/01.png'></li>"+
		"<li><h5>2</h5><img src='resources/1/1/02.png'></li><li><h5>3</h5><img src='resources/1/1/03.png'></li></ul>"+
		
		"<ul><h4>RESPUESTAS</h4><li><h5>1</h5><img src='resources/1/1/01.png'></li><li><h5>2</h5><img src='resources/1/1/02.png'></li>"+
		"<li><h5>3</h5><img src='resources/1/1/03.png'></li></ul>";
	 }
	else if(largeTittle==44){
		
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p><span class='titulop'>Funciones Vectoriales:</span><br><br>"+
	 	"En general una función es una regla que asigna a cada elemento del dominio, un"+
	 	" elemento del rango. Una <b>función con valores vectoriales </b>, es decir :"+
	 	"<br>Una función vectorial, <b>es simplemente una función cuyo dominio"+
	    " es el conjunto de los números reales y cuyos rango es un conjunto de vectores.</b>"+
	 	" El interés se centró más en funciones vectoriales r cuyos valores son "+
	 	"vectores tridimensionales.<br><br><img src='resources"+
	 	"/2/vectortrayectoria.png'/><br><br>"+
	 	"<span style='color:#EF008C;'>Esto significa que para cada número <i>t</i>"+
	 	" en el dominio <b>r</b></span> <span style='color:#00AEEF;'>hay un vector único en V3 que se denota con "+
	 	"<b>r(t)</b></span>. Si <i>f(t),g(t) y h(t)</i> son las componentes del vector <b>r(t)</b>"+
	 	", entonces <i>f, g y h</i> son funciones de valores reales llamadas<b>"+
	 	" funciones componentes </b>de <b>r</b> y podemos escribir:<br><br>"+
	 	"<img  src='resources/2/funcioncomponente.png'/></p>"+
	 	
	 	"<p><span class='titulop'>Dominio:</span><br><br>"+
	 	"Consiste en la <b>INTRESECCIÓN</b> de todos los dominios presentes <i>t</i>"+
	 	" en  cada componente <b>f(t),g(t),h(t) </b>de dicho vector. <b>r(t)</b><br><br>"+
	 	"<img src='resources/2/dominio.png'/></p>"+
	 	
	 	"<p><span class='titulop'>Límite:</span><br><br>"+
	 	"El límite de una función vectorial r se define obteniendo los límites de sus "+
	 	"funciones componentes:<br><br>"+
	 	"<img  src='resources/2/limite.png'/><br><br>"+
	 	"Siempre que existan los límites de las funciones componentes.</p>"+
	 	
	 	"<p> <span class='titulop'>Curvas en el Espacio</span><br><br>"+
		"Hay una estrecha relación entre funciones vectoriales continuas y curvas "+
		"en el espacio. Supongamos que f, g y h son funciones continuas de valores reales "+
		"sobre un intervalo I. Entonces el conjunto C de todos los puntos (x, y, z) en el "+
		"espacio, donde: X=f(t) Y=g(t) Z=h(t) y t varia en el intervalo I, se llama curva en "+
		"el espacio.</ p>"+
		
		"<p> <span class='titulop'>Ecuaciones Paramétricas</span><br><br>"+
		"Entonces las ecuaciones en C reciben el nombre de ecuaciones paramétricas "+
		"de todos los puntos (x, y, z) en el espacio, y t se llama parámetro.<br></p>"+
		
		
		"<p><span class='titulop'>Gráficas</span><br><br>"+
		"Las curvas en el espacio son inherentemente más difíciles de trazar a mano "+
		"que las curvas en el plano. Si queremos conseguir una representación exacta "+
		"necesitamos recurrir a los adelantos técnicos.<br>"+
		"Aun cuando se utiliza una computadora para trazar una curva en el espacio, "+
		"es difícil obtener la ilusión óptica que logra una buena impresión de cómo "+
		"se ve la curva en realidad:<br><br>"+
		"<img  src='resources/2/coordenada.png'/><br><br>"+
		"Por tanto es mejor encerrar una curva o superficie en una caja en lugar "+
		"de mostrar los ejes coordenados; Cuando se ve la misma curva en una caja "+
		"se tiene mucho más clara la imagen de la curva:<br>"+
		"<img class='little' src='resources/2/caja1.png'/>"+
		"<img class='little' src='resources/2/caja2.png'/><br><br>"+
		"Otro método para representar es darse cuenta que se puede ver la curva "+
		"de intersección de los cilindros:<br><br>"+
		"<img  src='resources/2/colision.png'/><br><br>"+
		"DEBIDO AL SOFTWARE QUE VAMOS A UTILIZAR DURANTE TODO EL "+
		"PROCESO, ESTE ÚLTIMO SERÁ EL MÉTODO AL CUAL DEBEMOS "+
		"FAMILIARIZARNOS PARA LA INTERPRETACIÓN DE FUTUROS TEMAS.</p><hr>";


		//PARA LAS REFERENCIAS
		references.innerHTML="<div class='top'><h2>Actividades y Ejemplos</h2></div>"+
		"<ul><h4>EJEMPLOS</h4><li><h5>Reconociendo patrones de superficies</h5><iframe width='560' height='315' src='https://www.youtube.com/embed/o2TnHTUfp9Y' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/ZRErx9AYxZc' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/CqsNjPWC8XA' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></ul></li>"+
		
		"<ul><h4>ACTIVIDAD</h4><li><h5>1</h5><img src='resources/2/1/01.png'></li>"+
		"<li><h5>2</h5><img src='resources/2/1/02.png'></li><li><h5>3</h5><img src='resources/2/1/03.png'></li>"+
		"<li><h5>4</h5><img src='resources/2/1/04.png'></li><li><h5>5</h5><img src='resources/2/1/05a.png'><img src='resources/2/1/05b.png'></li></ul>"+
		
		"<ul><h4>RESPUESTAS</h4><li><h5>1</h5><img src='resources/2/1/01.png'></li><li><h5>2</h5><img src='resources/2/1/02.png'></li>"+
		"<li><h5>3</h5><img src='resources/2/1/03.png'></li>"+
		"<li><h5>4</h5><img src='resources/2/1/04.png'></li><li><h5>5</h5><img src='resources/2/1/05a.png'></li></ul>";
	}
	else if(largeTittle==47){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>Derivación</span><br><br>"+
		"El teorema siguiente muestra que las fórmulas de derivación para funciones de valores"+
		"reales tienen su equivalente para las funciones de valor vectorial.<br><br>"+
		"<img  src='resources/3/teorema.png'/><br><br></ p>"+

		"<p> <span class='titulop'>Integración</span><br><br>"+
		"La integral definida de una función vectorial continua r(t) se puede definir casi de la misma manera que para las funciones de valores"+
		" reales, excepto que la integral es un vector. Entonces podemos expresar la integral de r en términos de las integrales de sus funciones"+
		" componentes f, t y h.<br><br>"+
		"<img  src='resources/3/integracion.png'/><br><br></ p>"+

		"<p> <span class='titulop'>Longitud de Arco</span><br><br>"+
		" Suponga que de forma paramétrica x=f(t), y=t(t), z=h(t), donde f´, t´ y h´ son continuas. Si la curva se recorre exactamente una vez cuando t "+
		"se incrementa desde a hasta b, entonces se puede demostrar que su longitud es:<br><br>"+
		"<img  src='resources/3/longitud.png'/><br><br>Observe que ambas fórmulas de la longitud del arco y se pueden expresar en una forma más compacta:<br><br>"+
		"<img  src='resources/3/longitudb.png'/><br><br><img  src='resources/3/figura.png'/><br><br> </p>"+
		
		"<p> <span class='titulop'>Curvatura</span><br><br>Una parametrización r(t) es llamada suave sobre un intervalo I si r´ es continua y sobre I. "+
		"Una curva se llama suave si tiene una parametrización suave. Una curva suave no tiene puntos agudos o cúspides; cuando gira el vector tangente, "+
		"lo hace en forma continua. Si C es una curva suave definida por la función vectorial r, recuerde que el vector tangente unitario T(t) está dado por:<br><br>"+
		"<img class='little' src='resources/3/vtangente.png'/><br><br>e indica la dirección de la curva.<br><br>"+
		"<img  src='resources/3/curvatura.png'/><br><br>De acuerdo con la figura puede verse que T(t) cambia de dirección muy lentamente cuando C es casi recta, "+
		"pero su dirección se modifica con mayor rapidez cuando C se flexiona o gira más abruptamente. La curvatura de C en un punto dado es una medida de qué "+
		"tan rápido cambia la curva de dirección en ese punto. Específicamente, se define como la magnitud de la razón de cambio del vector tangente unitario "+
		"respecto a la longitud de arco. (Se usa la longitud de arco de tal manera que la curvatura sea independiente de la parametrización.)<br><br>"+
		"<img class='little' src='resources/3/curvaturab.png'/><br><br>Con frecuencia es más conveniente aplicar la fórmula dada por el siguiente teorema.<br><br>"+
		"<img  src='resources/3/curvaturac.png'/><br><br></p><hr>"+

		"<p> <span class='titulop'>Vectores normales y binormales</span><br><br>En un punto dado de una curva suave r(t) en el espacio, hay muchos vectores que son "+
		"ortogonales al vector tangente unitario T(t). Podemos elegir uno de ellos al observar que, puesto que |T(t)| = 1 para toda t, se tiene T(t)*T´(t) = 0, de modo que "+
		"T´(t) es ortogonal a T(t). Note que T´(t) en sí mismo no es un vector unitario. Pero en cualquier punto donde k != 0, podemos definir el vector normal "+
		"unitario principal N(t), o simplemente unitario normal, como:<br><br><img class='little' src='resources/3/normal.png'/><br><br>El vector B(t) X T(t) ) N(t) se llama "+
		"vector binormal. Es perpendicular a T y N y también es un vector unitario.<br><br><img class='little' src='resources/3/binormal.png'/><br><br>"+
		" En general, los vectores T, N y B, cuyo inicio se encuentra en varios puntos de la curva, forman un conjunto de vectores ortogonales, que se llama esquema TNB "+
		"y se desplaza a lo largo de la curva a medida que t varía. Este esquema TNB desempeña una función importante en la rama de la matemática que se conoce como"+
		" geometría diferencial y en sus aplicaciones al movimiento de vehículos espaciales.<br><br>"+
		"<img class='little' src='resources/3/tnb.png'/><img class='little' src='resources/3/unitarios.png'/><br><br></p><hr>";



		//PARA LAS REFERENCIAS
		references.innerHTML="<div class='top'><h2>Actividades y Ejemplos</h2></div>"+
		"<ul><h4>EJEMPLOS</h4><li><h5>Reconociendo patrones de superficies</h5><iframe width='560' height='315' src='https://www.youtube.com/embed/DFJeh3QZt50' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/aaxoJKHBhCs' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/H3Ydr96kbUA' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/q2iUO-Wgn6w' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/fIqsglIFntI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/30yPzN3PkEE' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>"+
		
		"<ul><h4>ACTIVIDAD</h4><li><h5>1</h5><img src='resources/3/1/01.png'></li><li><h5>2</h5><img src='resources/3/1/02.png'>"+
		"</li><li><h5>3</h5><img src='resources/3/1/03.png'></li><li><h5>4</h5><img src='resources/3/1/04.png'></li><li><h5>5</h5><img src='resources/3/1/05.png'></li>"+
		"<li><h5>6</h5><img src='resources/3/1/06.png'></li>"+
		"<li><h5>7</h5><img src='resources/3/1/07.png'></li><li><h5>8</h5><img src='resources/3/1/08.png'></li>"+
		"<li><h5>9</h5><img src='resources/3/1/09.png'></li><li><h5>10</h5><img src='resources/3/1/10.png'></li></ul>"+
		
		"<ul><h4>RESPUESTAS</h4><li><h5>1</h5><img src='resources/3/1/01.png'></li><li><h5>2</h5><img src='resources/3/1/02.png'></li>"+
		"<li><h5>3</h5><img src='resources/3/1/03.png'></li><li><h5>4</h5><img src='resources/3/1/04.png'></li><li><h5>5</h5><img src='resources/3/1/05.png'></li>"+
		"<li><h5>6</h5><img src='resources/3/1/06.png'></li><li><h5>7</h5><img src='resources/3/1/07.png'></li>"+
		"<li><h5>8</h5><img src='resources/3/1/08.png'></li>"+
		"<li><h5>9</h5><img src='resources/3/1/09.png'></li><li><h5>10</h5><img src='resources/3/1/10.png'></li></ul>";
	}
	else if(largeTittle==29){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>Funciones de dos variables</span><br><br>"+
		"Una función f de dos variables es una regla que asigna a cada par ordenado de números reales (x, y) de un conjunto D, un único número real que se denota "+
		"con f(x, y). El conjunto D es el dominio de f y su rango es el conjunto de valores que toma f. A menudo, escribimos z = f(x, y) para hacer explícito el "+
		"valor que toma f en el punto (x, y). Las variables x y y son variables independientes y z es la variable dependiente."+
		"Por ejemplo, si f(x, y) representa la temperatura en un punto (x, y) en una placa metálica plana con la forma de D, podemos considerar al eje z como un "+
		"termómetro que va mostrando el registro de temperaturas. Si una función f está dada por una fórmula y no se especifica dominio alguno, entonces"+
		" se entiende que el dominio de f será el conjunto de parejas (x, y) para el cual la expresión dada es un número bien definido.<br><br>"+
		"Otro modo de visualizar el comportamiento de una función de dos variables es considerar su gráfica Si f es una función de dos variables con dominio D, "+
		"entonces la gráfica de f es el conjunto de todos los puntos (x, y, z) en R3 tal que z = f(x, y) y (x, y) está en D."+
		"Así como la gráfica de una función f de una variable es una curva C con ecuación y = f (x), la gráfica de una función f de dos variables es una "+
		"superficie S cuya ecuación es z = f(x, y). Podemos visualizar la gráfica S de f directamente sobre o abajo de su do minio D en el plano xy.<br><br>"+
		"<img  src='resources/4/2variables.png'/><br><br>La gráfica de f tiene la ecuación z = 6-3x-2y, o 3x+2y+z = 6, quere presenta un plano. Para graficar el plano, "+
		"primero obtenemos las intersecciones con los ejes. Hacemos y = z = 0 en la ecuación y obtenemos x = 2 como la intersección con el eje x. Con el mismo procedimiento "+
		"obtenemos la intersección con el eje y, que es 3, y la del eje z, que es 6. Ya con esto puede trazar la parte de la gráfica que está en el primer octante:<br><br>"+
		"<img  src='resources/4/plano.png'/><br><br>Hay programas para computadora con los que se pueden obtener las gráficas de funciones de dos variables. En la mayoría "+
		"de dichos programas las trazas en los planos verticales x = k Y y = k se dibujan para valores de k separados regularmente, y se eliminan algunas partes de la "+
		"gráfica usando alguna función que elimine líneas ocultas. Se ilustran gráficas de varias funciones generadas mediante una computadora. Observe que se consigue "+
		"una imagen especialmente buena de una función cuando se usa la rotación para tener diferentes puntos de vista.<br><br>"+
		"<img class='little' src='resources/4/grafica1.png'/><img class='little' src='resources/4/grafica2.png'/><br><br>"+
		"<img class='little' src='resources/4/grafica3.png'/><img class='little' src='resources/4/grafica4.png'/><br><br></p>"+

		"<p> <span class='titulop'>Funciones de tres o más variables</span><br><br>"+
		"Una función de tres variables, f, es una regla que asigna a cada terna ordenada (x, y, z) en un dominio D en R3 un único número real denotado por f (x, y, z). "+
		"Por ejemplo, la temperatura T en un punto sobre la superficie de la Tierra depende de la longitud x, latitud y del punto y del tiempo t, de modo que puede "+
		"escribir T ! f(x, y, t).<br><br>Es muy difícil imaginar una función f de tres variables mediante su gráfica, ya que se localizaría en un espacio de cuatro "+
		"dimensiones. No obstante, es posible saber más de f examinando sus superficies de nivel, las cuales son las superficies cuyas ecuaciones son f(x, y, z) = k, "+
		"donde k es una constante. Si el punto (x, y, z) se desplaza por una superficie de nivel, el valor de f(x, y, z) sigue estando fijo.<br><br>"+
		"<img  src='resources/4/superficienivel.png'/></p>"+

		"<p> <span class='titulop'>Límites y continuidad</span><br><br>"+
		"En el caso de funciones de una sola variable, cuando hacemos que x tienda a a, hay sólo dos posibles direcciones de aproximación, por la izquierda o por la derecha. "+
		"En el caso de funciones de dos variables, la situación no es tan sencilla, porque puede hacer que (x, y) tiendan a (a, b) desde un infinito de direcciones de cualquier"+
		" manera siempre que (x, y) permanezca dentro del dominio de f. La definición 1 establece que la distancia entre f(x, y) y L se puede hacer arbitrariamente pequeña, "+
		"haciendo la distancia desde (x, y) a (a, b) suficientemente pequeña, pero no cero. La definición se refiere sólo a la distancia entre (x, y) y (a, b). No se refiere "+
		"a la dirección de aproximación. Por consiguiente, si existe el límite, entonces f (x, y) tiene que aproximarse al mismo límite sin que importe cómo (x, y) se aproxima "+
		"a (a, b). Por lo tanto, si encontramos dos trayectorias distintas de aproximación a lo largo de las cuales la función f(x, y) tiene diferentes límites, entonces se "+
		"infiere que el límite no existe.<br><br><img  src='resources/4/limite.png'/><br><br>"+
		"Observe ahora los límites que sí existen. Justo como en el caso de las funciones de una variable, el cálculo de límites de las funciones de dos variables se puede "+
		"simplificar en gran medida mediante el uso de las propiedades de los límites. Las leyes de los límites se pueden generalizar a las funciones de dos variables: "+
		"el límite de una suma es la suma de los límites, el límite de un producto es el producto de los límites, y así sucesivamente. En particular, las ecuaciones siguientes "+
		"son válidas<br><br><img  src='resources/4/limiteb.png'/><br><br>Las funciones continuas de dos variables se definen también por medio de la propiedad de sustitución.<br><br>"+
		"<img  src='resources/4/continuidad.png'/><br><br>El significado intuitivo de continuidad es que si el punto (x, y) cambia una pequeña cantidad, entonces el valor de f (x, y)"+
		" cambia una pequeña cantidad. Esto significa que una superficie que es la gráfica de una función continua no tiene agujeros ni grietas. Al aplicar las propiedades de "+
		"los límites, podemos ver que las sumas, diferencias, produc tos y cocientes de funciones continuas son continuas sobre sus dominios. Se usa este hecho para dar ejemplos"+
		" de funciones continuas.Si usamos la notación vectorial, entonces podemos escribir la definición de límite para funciones de dos o tres variables en una sola forma "+
		"compacta como sigue.<br><br><img  src='resources/4/compacta.png'/><br><br></p><hr>";
		
		//PARA LAS REFERENCIAS
		references.innerHTML="<div class='top'><h2>Actividades y Ejemplos</h2></div>"+
		"<ul><h4>EJEMPLOS</h4><li><h5>Diagramas en Funciones Vectoriales</h5><iframe width='560' height='315' src='https://www.youtube.com/embed/uLGVVznAZhM' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li>"+
		"<li><iframe width='560' height='315' src='https://www.youtube.com/embed/b_Affw5ArMY' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></li></ul>"+
		
		"<ul><h4>ACTIVIDAD</h4><li><h5>1</h5><img src='resources/4/1/01.png'></li><li><h5>2</h5><img src='resources/4/1/02.png'>"+
		"</li><li><h5>3</h5><img src='resources/4/1/03.png'></li><li><h5>4</h5><img src='resources/4/1/04a.png'><img src='resources/4/1/04b.png'></li>"+
		"</li><li><h5>5</h5><img src='resources/4/1/05.png'></li>"+

		"<ul><h4>RESPUESTAS</h4><li><h5>1</h5><img src='resources/4/1/01.png'></li><li><h5>2</h5><img src='resources/4/1/02.png'></li>"+
		"<li><h5>3</h5><img src='resources/3/1/03.png'></li><li><h5>4</h5><img src='resources/4/1/04b.png'></li><li><h5>5</h5><img src='resources/4/1/05.png'></li></ul>";
		
	}
	else if(largeTittle==39){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/6t.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p><hr>";
	}
	else if(largeTittle==40){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/6t.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p><hr>";
	}
	else if(largeTittle==49){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/7/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p><hr>";
	}
	else if(largeTittle==27){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/8/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p><hr>";
	}
	else if(largeTittle==18){
		content.innerHTML="<div class='top'><h1>"+tittle+"</h1></div>"+
		"<p> <span class='titulop'>EN CONSTRUCCION</span><br><br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura,"+
		"le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase."+
		"<br><img src='resources/9/bk2.png' ><i>f(x,y)=sen(x)·cos(y)</i><br>"+
		"<br>La anterior figura es una de muchas superficies que podremos observar"+
		"y construir, a través de los objetivos planteados para la asignatura </p><hr>";
	}
	else if(largeTittle==11||largeTittle==10||largeTittle==0){
		content.innerHTML="<div class='top'><h1>Matemáticas III</h1></div><p><span class='titulop'>Bienvenidos</span><br><br>"+
		"En esta sección podrá encontrar basta información que le permitirá comprender y trabajar de una forma empírica los conceptos olvidados en clase.<br>"+
		"Utilizando las guías elaboradas para cada tópico de la asignatura.<br><br><img src='resources/0/bk.png' ><br><i>f(x,y)=sen(x)·cos(y)</i><br><br>"+
		"La anterior figura es una de muchas superficies que podremos observar y construir, a través de los objetivos planteados para la asignatura.</p><hr>";
		
		//PARA LAS REFERENCIAS
		references.innerHTML="<div class='top'><h2>Actividades y Ejemplos</h2></div><ul><h4>EJEMPLOS</h4><li>En esta sección podrá encontrar videos relacionados con la temática seleccionada.</li>"+
		"<li>También podrá encontrar algunos enlaces a sitios web	que le brindarán más información.</li></ul><ul><h4>ACTIVIDAD</h4>"+
		"<li>En esta sección podrá encontrar ejercicios relacionados	con la temática seleccionada que le permitirá practicar y mejorar los temas aprendidos.</li>"+
		"<li>También podrá encontrar las respuestas a cada ejercicio con el objetivo de motivar al estudiante a un buen desarrollo práctico.</li></ul>";
	}
	
	
	
}