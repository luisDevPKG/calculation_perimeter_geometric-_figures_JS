// codigo cuadrado
console.group("cuadrado");

// const ladocuadrado = 5;
// console.log("los lados del cuadrado miden " + ladocuadrado , "centimetros");

// const perimetro = ladocuadrado*4;
// console.log("El perimetro del cuadrado es de " + perimetro , "centimetros");

// *** CON FUNCION ***

function perimetroCuadrado(ladocuadrado) {
    return ladocuadrado * 4;
}
perimetroCuadrado();

// const area = ladocuadrado*ladocuadrado;
// console.log("El area del cuadrado es de " + area , "centimetros cuadrados");

function areaCuadrado(ladocuadrado) {
    return ladocuadrado * ladocuadrado;
}
areaCuadrado();

console.groupEnd();


// código triangulo
console.group("triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("los lados del triangulo miden " + ladoTriangulo1 , "centimetros y " + ladoTriangulo2 , "centimetros, la base mide " + baseTriangulo , "centimetros");
// console.log("la altura del triangulo mide " + alturaTriangulo , "centimetros");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es de " + perimetroTriangulo , "centimetros");

// *** CON FUNCION ***
function permietroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
permietroTriangulo();


// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
// console.log("El area del triangulo es de " + areaTriangulo , "centimetros cuadrados");

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo)/2;
}
areaTriangulo();


console.groupEnd();


// código circulo
console.group("circulo");
// const radio = 4;
// const diametro = radio*2;

// *** CON FUNCION ***
function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();

const pi = Math.PI;
// const circunferencia = diametro*pi;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
perimetroCirculo();

// console.log("El radio del circulo es: " + radio, "centimetros");
// console.log("El diametro del circulo es: " + diametro, "centimetros");
// console.log("El perimetro o circunferencia del circulo es: " + circunferencia, "centimetros");

// const areaCirculo = (radio*radio)*pi;
function areaCirculo(radio) {
    return (radio * radio) * pi;
}
areaCirculo();
// console.log("El area del circulo es de: " + areaCirculo, "centimetros cuadrados");

console.groupEnd();


// INTERACCION CON HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// TRIANGULO
function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const value = Number(input.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = Number(input3.value);

    const perimetroT = permietroTriangulo(value, value2, value3);
    alert(perimetroT);
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = Number(input3.value);

    const input4 = document.getElementById("inputTriangulo4");
    const value4 = Number(input4.value);

    const areaT = areaTriangulo(value3,value4);
    alert(areaT);
}

// CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetroC = perimetroCirculo(value);
    alert(perimetroC);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetroC = areaCirculo(value);
    alert(perimetroC);
}