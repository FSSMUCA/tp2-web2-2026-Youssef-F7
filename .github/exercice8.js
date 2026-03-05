let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// 1. Correction du Nom (trim et gestion du vide)
let nomNettoye = nom.trim();
let rapportNom = nomNettoye === "" ? "Inconnu" : `"${nomNettoye}" (corrigé : espaces supprimés)`;

// 2. Age
let ageConv = parseInt(age);
let rapportAge = (isNaN(ageConv) || ageConv <= 0) ? "valeur invalide" : `${ageConv} (valide)`;

// 3. Email (vérification du @ et du . après le @)
let indexAt = email.indexOf("@");
let pointApresAt = email.indexOf(".", indexAt);
let rapportEmail = (indexAt !== -1 && pointApresAt !== -1) 
    ? `"${email}" (valide)` 
    : `"${email}" (invalide : pas de point après @)`;

// 4. Score Jeu (extraction numérique)
let scoreConv = parseInt(scoreJeu);
let scoreFinal = isNaN(scoreConv) ? 0 : scoreConv;
let rapportScore = `${scoreFinal} (extrait depuis "${scoreJeu}")`;

// 5. Admin (conversion manuelle sans Boolean())
let adminBool = (estAdmin === "true");
let rapportAdmin = `${adminBool} (attention : Boolean("false") = true, conversion manuelle requise)`;

// 6. Dernière Connexion (Opérateur ??)
let valeurConnexion = derniereConnexion ?? "Jamais connecté";
let rapportConnexion = `"${valeurConnexion}" (valeur par défaut via ??)`;

// 7. Nombre de Connexions
let nbConv = Number(nombreConnexions);
let rapportNb = (nbConv === 0) ? '"Aucune connexion" (0 après conversion)' : nbConv;

// AFFICHAGE DU RAPPORT
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom                : ${rapportNom}`);
console.log(`age                : ${rapportAge}`);
console.log(`email              : ${rapportEmail}`);
console.log(`scoreJeu           : ${rapportScore}`);
console.log(`estAdmin           : ${rapportAdmin}`);
console.log(`derniereConnexion  : ${rapportConnexion}`);
console.log(`nombreConnexions   : ${rapportNb}`);
console.log("===============================");