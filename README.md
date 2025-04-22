# nodeJS projet : complétion de mot

Auteurs : Thomas Kusnierek & Benjamin Szurek

Après avoir copié le projet, vous pouvez le lancer via la commande :

`npm start`

Vous pouvez modifier les valeurs et les résultats dans le fichier index au niveau de : \
prefixe --> pour avoir le début du terme \
topLettre --> pour avoir le pourcentage des x lettres les plus élevés \
topMot --> pour avoir les x premiers mots qui correspondent au préfixe donné.

Notre projet en node js se divise en deux parties

## Déterminer la prochaine lettre

On renvoie la probabilité de la prochaine lettre d'un terme écrit dans le code :

Exemple :\
"mo" --> la probabilité d'avoir\
"t"=0.3,\
"n"=0.2,\
"i"=0.1,\
etc

## Déterminer le prochain mot

On renvoie le mot le plus court qui pourrait correspondre :

Exemple:
"pon" --> renvoie \
"pond" \
"pont" \
etc

