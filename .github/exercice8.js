let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomNettoye = nom.trim();
let rapportNom = nomNettoye === "" ? "Inconnu" : `"${nomNettoye}" (corrigé : espaces supprimés)`;

let ageConv = parseInt(age);
let rapportAge = (isNaN(ageConv) || ageConv <= 0) ? "valeur invalide" : `${ageConv} (valide)`;

let indexAt = email.indexOf("@");
let pointApresAt = email.indexOf(".", indexAt);
let rapportEmail = (indexAt !== -1 && pointApresAt !== -1) 
    ? `"${email}" (valide)` 
    : `"${email}" (invalide : pas de point après @)`;

let scoreConv = parseInt(scoreJeu);
let scoreFinal = isNaN(scoreConv) ? 0 : scoreConv;
let rapportScore = `${scoreFinal} (extrait depuis "${scoreJeu}")`;

let adminBool = (estAdmin === "true");
let rapportAdmin = `${adminBool} (attention : Boolean("false") = true, conversion manuelle requise)`;

let valeurConnexion = derniereConnexion ?? "Jamais connecté";
let rapportConnexion = `"${valeurConnexion}" (valeur par défaut via ??)`;

let nbConv = Number(nombreConnexions);
let rapportNb = (nbConv === 0) ? '"Aucune connexion" (0 après conversion)' : nbConv;

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom                : ${rapportNom}`);
console.log(`age                : ${rapportAge}`);
console.log(`email              : ${rapportEmail}`);
console.log(`scoreJeu           : ${rapportScore}`);
console.log(`estAdmin           : ${rapportAdmin}`);
console.log(`derniereConnexion  : ${rapportConnexion}`);
console.log(`nombreConnexions   : ${rapportNb}`);
console.log("===============================");