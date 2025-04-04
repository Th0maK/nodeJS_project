import * as R from "ramda";
import fs from "node:fs";

const main = () => {
    const path = "./data/dictionnaire.txt";
    try {
        const dico = fs.readFileSync(path, 'utf8');
        console.log(dico);
    } catch (err) {
        console.error(err);
    }
    //console.log("Hello World ! \n Voici ton dico :", dico);

    const toDefaultNumber = R.pipe(R.prop("doa"), R.length);
}

main();