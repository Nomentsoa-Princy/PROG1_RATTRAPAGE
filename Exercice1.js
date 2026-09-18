T = [3, -1, 0, 4, -2, 5, -3];

function NegatifPositif(T) {
    let gauche = 0;
    let droite = Tableau.length - 1;
    while (gauche <= droite) {
        if (Tableau[gauche] <= 0) {
            gauche++;
        }
        else if (Tableau[droite] > 0) {
            droite--;
        }
        else {
            let  tri= T[gauche];


            T[droite] = tri;
            T[gauche] = T[droite];
            gauche++;
            droite--;
        }
    }
    return T;
}














































































