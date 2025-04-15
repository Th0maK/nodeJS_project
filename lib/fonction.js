import * as R from "ramda";

const motsCommencentPar = (debut) =>
  R.filter(R.pipe(R.toLower, R.startsWith(debut.toLowerCase())));

const lettreApresPrefixe = (debut) => (mot) => mot[debut.length] || "";

const regrouperLettreSuivante = (debut, mots) =>
  R.pipe(motsCommencentPar(debut), R.groupBy(lettreApresPrefixe(debut)))(mots);

const compterMotsAvecPrefixe = (debut, mots) =>
  R.pipe(motsCommencentPar(debut), R.length)(mots);

const probasLettreSuivante = (debut, mots, firstN = Infinity) => {
  const groupes = regrouperLettreSuivante(debut, mots);
  const total = compterMotsAvecPrefixe(debut, mots);

  return R.pipe(
    R.map(R.pipe(R.length, (count) => count / total)),
    R.toPairs,
    R.map(([lettre, proba]) => [lettre, Number(proba.toFixed(3))]),
    R.sort(R.descend(R.prop(1))),
    R.take(firstN),
    R.fromPairs,
  )(groupes);
};
const motPlusProbable = (debut, mots, firstN = 1) => {
  return R.pipe(
    motsCommencentPar(debut),
    R.sortBy(R.identity),
    R.sortBy(R.length),
    R.take(firstN),
  )(mots);
};

export {
  motsCommencentPar,
  lettreApresPrefixe,
  regrouperLettreSuivante,
  compterMotsAvecPrefixe,
  probasLettreSuivante,
  motPlusProbable,
};
