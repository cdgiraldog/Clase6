console.log("Hola mundo");
/*Imprime información por consola*/

var numero1=52.5;
/*Crear una variable*/

var numero2=45;
console.log(numero1+numero2);
/*Para definir una variable debo usar la palabra reservada var */

var nombre='Christian';
var apellido='Giraldo';

console.log(nombre);
console.log(apellido);

var tiene_mascota=true;
tiene_mascota=false;

var frutas=['manzana', 'pera','lulo',25,true];
console.log(frutas[3]);

var persona={
	nombre:"Christian",
	edad:31,
	tiene_mascota:true,
	mascota:{
		raza:'Pastor Alemán',
		nombre:'Icaro'
	}
};

console.log(persona['nombre']);
console.log(persona.edad);
console.log(persona.mascota.raza);

var fecha=new Date();
console.log(fecha);

console.log(!true); //negación
console.log(true && false); //and
console.log(false || true); //or

console.log(5%4); //matemática, división
console.log(3>6); //mayor que
console.log(3<6); //menor que
console.log(6==6); //igualdad
console.log(6!=6); //diferencia

var edad=15;
if(edad>=18){
	console.log("Eres mayor de edad");
}
else{
	console.log("No eres mayor de edad");
}

for(var i=0;i<5;i++){
	console.log(i);
}	

var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
	for(var i=0;i<7;i++){
		console.log(dias[i]);
	}

function suma(n1,n2){
	var res=n1+n2;
	return res;
} 

//alert(suma(1523,4032));

function iva(n3){
	var pro=0.19;
	var resultado=n3*pro;
	return resultado;
}

console.log(iva(10000));

function calcular_iva(precio_producto){
	var resultado=precio_producto*0.19;
	return resultado
}

console.log(calcular_iva(100000));

var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
	for(var i=0;i<7;i++){
		console.log(dias[i]);
		if(i==5){
			break;
		}
	}