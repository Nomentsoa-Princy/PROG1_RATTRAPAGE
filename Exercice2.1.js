
function Echanger(Tableau, i, j) {

    let finalTableau = Tableau[i];
    Tableau[i] = Tableau[j];
    Tableau[j] = finalTableau;

    console.log(finalTableau);
}

