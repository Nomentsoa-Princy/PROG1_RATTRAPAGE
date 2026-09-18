function NombreUn(Tableau) {
    let i = 0;

    while (i < Tableau.length && Tableau[i] === 0) {
        i++;
    }

    return Tableau.length - i;
}