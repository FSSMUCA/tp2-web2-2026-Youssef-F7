let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
nombres.forEach(valeur => {
    let etiquette = "";

    if (Number.isNaN(valeur)) {
     
        etiquette = "INVALIDE";
    } else if (valeur === Infinity || valeur === -Infinity) {
        
        etiquette = "INFINI";
    } else if (valeur === 0 && (1 / valeur === -Infinity)) {
     
        etiquette = "ZERO NEGATIF";
    } else if (Number.isSafeInteger(valeur)) {
      
        etiquette = "ENTIER SUR";
    } else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
       
        etiquette = "ENTIER HORS LIMITES";
    } else {
        
        etiquette = "DECIMAL";
    }

    console.log(`${valeur} -> ${etiquette}`);
});