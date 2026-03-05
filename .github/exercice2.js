const valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let element = valeurs[i];
    let affichage;

    if (element === "") {
        affichage = "(chaine vide)";
    } else {
        affichage = String(element);
    }

    let resultat = element ? "truthy" : "falsy";

    console.log(affichage + " -> " + resultat);
}