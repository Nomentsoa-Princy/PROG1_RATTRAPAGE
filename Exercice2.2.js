function Ranger(T) {
    let cotéGauche = 0;
    let cotéDroite = T.length - 1;

    while (cotéGauche < cotéDroite) {
        if (T[cotéGauche] === 0) {
            cotéGauche++;
        } else if (T[cotéDroite] === 1) {
            cotéDroite--;
        } else {
            Echanger(T, cotéGauche, cotéDroite);
            cotéGauche++;
            cotéDroite--;
        }
    }
    return T;
}