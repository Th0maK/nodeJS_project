import * as R from "ramda";
import fs from "fs-extra";

const main = async () => {
    const path = "./data/dictionnaire.txt";
    try {
        const dico = await fs.readFile(path, 'utf8');
        console.log("Hello World ! \n Voici ton dico :", dico);
    } catch (err) {
        console.error(err);
    }


    const toDefaultNumber = R.pipe(R.prop("doa"), R.length);

}

await main();