import fs from "fs-extra";
import { motPlusProbable, probasLettreSuivante } from "./lib/fonction.js";

// PARTIE MODIFIABLE POUR CHANGER LES VALEURS

const prefixe = "pon";
const topLettre = 5;
const topMot = 1;

// FIN PARTIE MODIFABLE

const main = async () => {
  const path = "./data/dictionnaire.txt";
  try {
    const dico = await fs.readFile(path, "utf8");
    const motsChaos = dico
      .split("\n")
      .map((m) => m.trim())
      .filter(Boolean);
    const mots = motsChaos.sort();

    const result = probasLettreSuivante(prefixe, mots, topLettre);
    console.log(
      `Les ${topLettre} lettres les plus probable après ${prefixe} sont : `,
      result,
    );

    const suggestion = motPlusProbable(prefixe, mots, topMot);
    console.log(
      `Le mot le plus probable est (roulement de tambour) : ${suggestion} `,
    );
  } catch (err) {
    console.error(err);
  }
};

await main();
