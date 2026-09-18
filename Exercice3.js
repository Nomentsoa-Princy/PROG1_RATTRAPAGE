const M = [
    [1, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0]
];
function triLignes(M) {
    for (let i = 0; i < M.length - 1; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (NombreUn(M[i]) > NombreUn(M[j])) {
                Echanger(M, i, j);
            }
        }
    }
    return M;
}
console.log(triLignes(M));