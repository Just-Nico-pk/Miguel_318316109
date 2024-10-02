function horizontal(){
    let x = "x\n"
    let columna = 3;
    while(columna !=0){
        x =x  + "x \n";
        columna --;
    }
    return x;
}
console.log(horizontal())





function vertical(){
    let x = "x"
    let columna = 3;
    while(columna !=0){
        x =x  + "x";
        columna --;
    }
    return x;
}
console.log(vertical())

function tabla(){
    for(m1 = 1 ; m1 <= 10; m1 ++){
        for(m2 = 1; m2<= 10; m2++){
            console.log(m1 + " X " + m2 + " = " + m1 * m2);
        }
        console.log("-----------")
    }
}
console.log(tabla())


let frutas = ["manzana", 'platano',"pera","uva"];

frutas.forEach((fruta, index) => {
    console.log( index + ".- " + fruta);
});