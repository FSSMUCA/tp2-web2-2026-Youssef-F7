let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = { nom, age, ville, score, actif };
const defaut = "valeur par défaut";

console.log("--- Partie A (Coalescence nulle ??) ---");
for (let [cle, valeur] of Object.entries(variables)) {
    console.log(`${cle} ?? "${defaut}" -> ${valeur ?? defaut}`);
}


console.log("\n--- Partie B (OU logique ||) ---");
for (let [cle, valeur] of Object.entries(variables)) {
    console.log(`${cle} || "${defaut}" -> ${valeur || defaut}`);
}

console.log("\n--- Partie C (Comparaison des résultats) ---");
for (let [cle, valeur] of Object.entries(variables)) {
    const resA = valeur ?? defaut;
    const resB = valeur || defaut;
    const comparaison = (resA === resB) ? "même résultat" : "résultat différent";
    
    console.log(`${cle.padEnd(5)} : ?? et || -> ${comparaison}`);
}