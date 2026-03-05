let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


const sousTotal = prix * quantite;
console.log(`Sous-total : ${sousTotal} MAD`);

const aPromotion = (codePromo ?? null) !== null && estMembre === true;
const reduction = aPromotion ? (sousTotal * reductionPourcentage / 100) : 0;
console.log(`Réduction : ${reduction} MAD`);


const total = sousTotal - reduction;
console.log(`Total final : ${total} MAD`);

const paiementAccepte = soldeCompte >= total;
const statut = paiementAccepte ? "Paiement accepté" : "Solde insuffisant";
console.log(statut);

let nouveauSolde = soldeCompte;
if (paiementAccepte) {
    nouveauSolde = soldeCompte - total;
    console.log(`Nouveau solde : ${nouveauSolde} MAD`);
}

console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit    : ${nomProduit}`);
console.log(`Quantité   : ${quantite}`);
console.log(`Prix unit. : ${prix} MAD`);
console.log(`Sous-total : ${sousTotal.toFixed(2)} MAD`);
console.log(`Réduction  : ${reduction.toFixed(3)} MAD`);
console.log(`Total      : ${total.toFixed(3)} MAD`);
console.log(`Statut     : ${statut}`);
console.log(`Solde      : ${nouveauSolde.toFixed(3)} MAD`);
console.log("==========================");