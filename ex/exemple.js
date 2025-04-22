import * as R from "ramda";

const mots = [
  "montagne",
  "monde",
  "moment",
  "mobile",
  "motif",
  "moteur",
  "moniteur",
  "modèle",
  "motion",
];

function calculerProbabilitesProchaineLettre(prefixe, dictionnaire) {
  const stats = {};

  // Cherche les mots qui commencent par le préfixe
  for (const mot of dictionnaire) {
    if (mot.startsWith(prefixe) && mot.length > prefixe.length) {
      const prochaineLettre = mot[prefixe.length];
      stats[prochaineLettre] = (stats[prochaineLettre] || 0) + 1;
    }
  }

  // Calcul des probabilités
  const total = Object.values(stats).reduce((a, b) => a + b, 0);
  const probabilites = {};

  for (const lettre in stats) {
    probabilites[lettre] = (stats[lettre] / total).toFixed(2);
  }

  return probabilites;
}

const prefixe = "mo";
const resultat = calculerProbabilitesProchaineLettre(prefixe, mots);

console.log(`Probabilités pour le préfixe "${prefixe}":`);
//console.log(resultat);

const motsTries = mots.sort();

console.log(motsTries);

const motsCommencentPar = (debut) =>
  R.filter(R.pipe(R.toLower, R.startsWith(debut.toLowerCase())));

const lettreApresPrefixe = (debut) => (mot) => mot[debut.length] || "";

// Fonction principale
const regrouperParLettre = (debut) =>
  R.pipe(R.groupBy(lettreApresPrefixe(debut)))(mots);

const motsListeDebut = motsCommencentPar(prefixe);
const regroupLettre = regrouperParLettre(motsListeDebut);
// Test

console.log(motsListeDebut, motsListeDebut.length);
console.log(regroupLettre);
