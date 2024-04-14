//Sudár Róbert - TS gyakorlás
// 1. feladat
function PrimEljaras() {
    var primEredmeny = document.querySelector("#PrimEredmeny");
    if (!primEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var inputElem = document.querySelector("#primInput");
    if (!inputElem || !inputElem.value) {
        primEredmeny.textContent = "Előbb adj meg egy számot!";
        return;
    }
    var szam = +inputElem.value;
    if (isNaN(szam) || szam <= 0) {
        primEredmeny.textContent = "Pozitív egész számot adj meg!";
        return;
    }
    var oszto = 0;
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        primEredmeny.textContent = "A megadott szám Prím!";
    }
    else {
        primEredmeny.textContent = "A megadott szám NEM Prím!";
    }
}
var f1EsemenyGomb = document.querySelector("#PrimBtn");
f1EsemenyGomb === null || f1EsemenyGomb === void 0 ? void 0 : f1EsemenyGomb.addEventListener("click", PrimEljaras);
// 2. Feladat
function Koordinata() {
    var coordEredmeny = document.querySelector("#coordEredmeny");
    if (!coordEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var x = document.querySelector("#xCord");
    var y = document.querySelector("#yCord");
    if ((!x || !x.value) && (!y || !y.value)) {
        coordEredmeny.textContent = "Adj meg a koordinátákat!";
        return;
    }
    else if (!x || !x.value) {
        coordEredmeny.textContent = "Adj meg egy X koordinátát!";
        return;
    }
    else if (!y || !y.value) {
        coordEredmeny.textContent = "Adj meg egy Y koordinátát!";
        return;
    }
    var xErtek = +x.value;
    var yErtek = +y.value;
    if (xErtek > 0 && yErtek > 0) {
        coordEredmeny.textContent = "A koordináta az első síknegyedben van.";
    }
    else if (xErtek < 0 && yErtek > 0) {
        coordEredmeny.textContent = "A koordináta a második síknegyedben van.";
    }
    else if (xErtek < 0 && yErtek < 0) {
        coordEredmeny.textContent = "A koordináta a harmadik síknegyedben van.";
    }
    else if (xErtek > 0 && yErtek < 0) {
        coordEredmeny.textContent = " A koordináta a negyedik síknegyedben van.";
    }
    else if (xErtek == 0 && yErtek == 0) {
        coordEredmeny.textContent = "A koordináta az origóban van.";
    }
    else if (xErtek == 0) {
        coordEredmeny.textContent = "A koordináta az y tengelyen van.";
    }
    else {
        coordEredmeny.textContent = "A koordináta az x tengelyen van.";
    }
}
var f2EsemenyGomb = document.querySelector("#CoordBtn");
f2EsemenyGomb === null || f2EsemenyGomb === void 0 ? void 0 : f2EsemenyGomb.addEventListener("click", Koordinata);
// 3. feladat
function MelyikANagyobb() {
    var szamokEredmeny = document.querySelector("#szamokEredmeny");
    if (!szamokEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var szamEgyInput = document.querySelector("#szamEgy");
    var szamKettoInput = document.querySelector("#szamKetto");
    var szamHaromInput = document.querySelector("#szamHarom");
    if ((!szamEgyInput || !szamEgyInput.value) && (!szamKettoInput || !szamKettoInput.value) && (!szamHaromInput || !szamHaromInput.value)) {
        szamokEredmeny.textContent = "Adj meg a számokat!";
        return;
    }
    else if (!szamEgyInput || !szamEgyInput.value) {
        szamokEredmeny.textContent = "Adj meg az első számot!";
        return;
    }
    else if (!szamKettoInput || !szamKettoInput.value) {
        szamokEredmeny.textContent = "Adj meg az második számot!";
        return;
    }
    else if (!szamHaromInput || !szamHaromInput.value) {
        szamokEredmeny.textContent = "Adj meg a harmadik számot!";
        return;
    }
    var szamEgy = Number(szamEgyInput.value);
    var szamKetto = Number(szamKettoInput.value);
    var szamHarom = Number(szamHaromInput.value);
    if (szamEgy >= szamKetto && szamEgy >= szamHarom) {
        szamokEredmeny.textContent = " Ezek közül a " + szamEgy + " a legnagyobb!";
    }
    else if (szamKetto >= szamEgy && szamKetto >= szamHarom) {
        szamokEredmeny.textContent = " Ezek közül a " + szamKetto + " a legnagyobb!";
    }
    else {
        szamokEredmeny.textContent = " Ezek közül a " + szamHarom + " a legnagyobb!";
    }
}
var f3EsemenyGomb = document.querySelector("#SzamBtn");
f3EsemenyGomb === null || f3EsemenyGomb === void 0 ? void 0 : f3EsemenyGomb.addEventListener("click", MelyikANagyobb);
//4. feladat
function SzorgalomSzovegesErtekeles() {
    var erdemjegyEredmeny = document.querySelector("#erdemjegyEredmeny");
    if (!erdemjegyEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var erdemjegyInput = document.querySelector("#erdemjegyInput");
    if (!erdemjegyInput || !erdemjegyInput.value) {
        erdemjegyEredmeny.textContent = "Adj meg az érdemjegyet!";
        return;
    }
    var jegy = Number(erdemjegyInput.value);
    if (isNaN(jegy) || jegy <= 1 || jegy > 5) {
        erdemjegyEredmeny.textContent = "2 és 5 közötti érdemjegy adható!";
        return;
    }
    if (jegy == 2) {
        erdemjegyEredmeny.textContent = "Az érdemjegy szöveges értékelése: HANYAG";
    }
    else if (jegy == 3) {
        erdemjegyEredmeny.textContent = "Az érdemjegy szöveges értékelése: VÁLTOZÓ";
    }
    else if (jegy == 4) {
        erdemjegyEredmeny.textContent = "Az érdemjegy szöveges értékelése: JÓ";
    }
    else {
        erdemjegyEredmeny.textContent = "Az érdemjegy szöveges értékelése: PÉLDÁS";
    }
}
var f4EsemenyGomb = document.querySelector("#ErdemjegyBtn");
f4EsemenyGomb === null || f4EsemenyGomb === void 0 ? void 0 : f4EsemenyGomb.addEventListener("click", SzorgalomSzovegesErtekeles);
//5. feladat
function TizennyolcPlusz() {
    var nagykoruEredmeny = document.querySelector("#nagykoruEredmeny");
    if (!nagykoruEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var nagykoruInput = document.querySelector("#nagykoruInput");
    if (!nagykoruInput || !nagykoruInput.value) {
        nagykoruEredmeny.textContent = "Add meg az illető életkorát!";
        return;
    }
    var kor = Number(nagykoruInput.value);
    if (isNaN(kor) || kor <= 0) {
        nagykoruEredmeny.textContent = "Érvényes életkort adj meg!";
        return;
    }
    if (kor < 18) {
        nagykoruEredmeny.textContent = "KISKORÚNAK tekinthető!";
    }
    else {
        nagykoruEredmeny.textContent = "Igen, NAGYKORÚNAK tekinthető!";
    }
}
var f5EsemenyGomb = document.querySelector("#nagykoruBtn");
f5EsemenyGomb === null || f5EsemenyGomb === void 0 ? void 0 : f5EsemenyGomb.addEventListener("click", TizennyolcPlusz);
// 6. feladat
function LNKO() {
    var lnkoEredmeny = document.querySelector("#lnkoEredmeny");
    if (!lnkoEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var elsoLnkoInput = document.querySelector("#elsoLnkoInput");
    var masodikLnkoInput = document.querySelector("#masodikLnkoInput");
    if ((!elsoLnkoInput || !elsoLnkoInput.value) && (!masodikLnkoInput || !masodikLnkoInput.value)) {
        lnkoEredmeny.textContent = "Add meg az összahasonlítandó számokat!";
        return;
    }
    else if (!elsoLnkoInput || !elsoLnkoInput.value) {
        lnkoEredmeny.textContent = "Add meg az első számot!";
        return;
    }
    else if (!masodikLnkoInput || !masodikLnkoInput.value) {
        lnkoEredmeny.textContent = "Add meg a második számot!";
        return;
    }
    //ÍGY ELVILEG KEZELI A MINUSZ SZÁMOKAT IS
    var szamEgy = Math.abs(Number(elsoLnkoInput.value));
    var szamKetto = Math.abs(Number(masodikLnkoInput.value));
    if (isNaN(szamEgy) || isNaN(szamKetto)) {
        lnkoEredmeny.textContent = "Érvényes számokat adj meg!";
        return;
    }
    var lnko = 1;
    for (var i = 2; i <= Math.min(szamEgy, szamKetto); i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    lnkoEredmeny.textContent = "A k\u00E9t sz\u00E1m  legnagyobb k\u00F6z\u00F6s oszt\u00F3ja: ".concat(lnko);
}
var f6EsemenyGomb = document.querySelector("#LnkoBtn");
f6EsemenyGomb === null || f6EsemenyGomb === void 0 ? void 0 : f6EsemenyGomb.addEventListener("click", LNKO);
//7. feladat
function SzamtaniSorozatGenerator() {
    var szamSorEredmeny = document.querySelector("#szamSorEredmeny");
    if (!szamSorEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var elemSzamInput = document.querySelector("#elemSzamInput");
    var elsoSzamInput = document.querySelector("#elsoSzamInput");
    var kulonbsegInput = document.querySelector("#kulonbsegInput");
    if ((!elemSzamInput || !elemSzamInput.value) && (!elsoSzamInput || !elsoSzamInput.value) && (!kulonbsegInput || !kulonbsegInput.value)) {
        szamSorEredmeny.textContent = "Add meg a kért értékeket!";
        return;
    }
    else if (!elemSzamInput || !elemSzamInput.value) {
        szamSorEredmeny.textContent = "Adj meg az elem számot!";
        return;
    }
    else if (!elsoSzamInput || !elsoSzamInput.value) {
        szamSorEredmeny.textContent = "Adj meg a sorozat első számát!";
        return;
    }
    else if (!kulonbsegInput || !kulonbsegInput.value) {
        szamSorEredmeny.textContent = "Adj meg az elemek közti különbséget!";
        return;
    }
    var elemSzam = Number(elemSzamInput.value);
    if (isNaN(elemSzam) || elemSzam <= 0) {
        szamSorEredmeny.textContent = "Pozitív elemszámot adj meg!";
        return;
    }
    var elsoElem = Number(elsoSzamInput.value);
    var kulonbseg = Number(kulonbsegInput.value);
    var sorozat = "";
    for (var i = 0; i < elemSzam; i++) {
        if (i > 0) {
            sorozat += ", ";
        }
        else {
            sorozat += "";
        }
        sorozat += elsoElem;
        elsoElem += kulonbseg;
    }
    szamSorEredmeny.textContent = sorozat;
}
var f7EsemenyGomb = document.querySelector("#SzamSorBtn");
f7EsemenyGomb === null || f7EsemenyGomb === void 0 ? void 0 : f7EsemenyGomb.addEventListener("click", SzamtaniSorozatGenerator);
/*
//8. feladat
function PrimFuggveny(vizsgaltSzam:number):any{
    let PrimE:Boolean;
    let oszto:number=0;
    for(let i=1;i<=vizsgaltSzam;i++){
        if(vizsgaltSzam%i==0){
            oszto++;
        }
    }
    if(oszto==2){
        PrimE=true;
        console.log(`A ${vizsgaltSzam} esetében a visszatérési érték:`)
    }
    else{
        PrimE=false;
        console.log(`A ${vizsgaltSzam} esetében a visszatérési érték`)
    }
    return PrimE;
}
console.log("8. feladat");
console.log(PrimFuggveny(7));
console.log(PrimFuggveny(15));

*/
//9.feladat
function ParosGenerator() {
    var parosEredmeny = document.querySelector("#parosEredmeny");
    if (!parosEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var alsoHatarInput = document.querySelector("#alsoHatarInput");
    var felsoHatarInput = document.querySelector("#felsoHatarInput");
    if ((!alsoHatarInput || !alsoHatarInput.value) && (!felsoHatarInput || !felsoHatarInput.value)) {
        parosEredmeny.textContent = "Add meg a kért értékeket!";
        return;
    }
    else if (!alsoHatarInput || !alsoHatarInput.value) {
        parosEredmeny.textContent = "Adj meg az alsó határt!";
        return;
    }
    else if (!felsoHatarInput || !felsoHatarInput.value) {
        parosEredmeny.textContent = "Adj meg a felső határt!";
        return;
    }
    var alsoHatar = Number(alsoHatarInput.value);
    var felsoHatar = Number(felsoHatarInput.value);
    var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    if (generaltSzam % 2 == 0) {
        parosEredmeny.textContent = "A kigener\u00E1lt p\u00E1ros sz\u00E1m: ".concat(generaltSzam);
    }
    else if (generaltSzam != felsoHatar) {
        parosEredmeny.textContent = "A kigener\u00E1lt p\u00E1ros sz\u00E1m: ".concat(generaltSzam + 1);
    }
    else {
        parosEredmeny.textContent = "A kigener\u00E1lt p\u00E1ros sz\u00E1m: ".concat(generaltSzam - 1);
    }
}
var f9EsemenyGomb = document.querySelector("#ParosBtn");
f9EsemenyGomb === null || f9EsemenyGomb === void 0 ? void 0 : f9EsemenyGomb.addEventListener("click", ParosGenerator);
//10. feladat
function KettoHatvanyai() {
    var hatvanyEredmeny = document.querySelector("#hatvanyEredmeny");
    if (!hatvanyEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var hatvanyElemInput = document.querySelector("#hatvanyElemInput");
    if (!hatvanyElemInput || !hatvanyElemInput.value) {
        hatvanyEredmeny.textContent = "Adj meg egy hatvány elemszámot!";
        return;
    }
    var elemSzam = Number(hatvanyElemInput.value);
    if (isNaN(elemSzam) || elemSzam < 1) {
        hatvanyEredmeny.textContent = "Adj meg egy pozitív egész számot!";
        return;
    }
    var eredmenySzoveg = "";
    for (var i = 0; i < elemSzam; i++) {
        if (i > 0) {
            eredmenySzoveg += ", ";
        }
        eredmenySzoveg += Math.pow(2, i);
    }
    hatvanyEredmeny.textContent = eredmenySzoveg;
}
var f10EsemenyGomb = document.querySelector("#HatvanyBtn");
f10EsemenyGomb === null || f10EsemenyGomb === void 0 ? void 0 : f10EsemenyGomb.addEventListener("click", KettoHatvanyai);
//11. feladat
function SzerkeszhetoHaromszog() {
    var haromszogEredmeny = document.querySelector("#haromszogEredmeny");
    if (!haromszogEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var aOldalInput = document.querySelector("#aOldalInput");
    var bOldalInput = document.querySelector("#bOldalInput");
    var cOldalInput = document.querySelector("#cOldalInput");
    if (!aOldalInput || !bOldalInput || !cOldalInput || !aOldalInput.value || !bOldalInput.value || !cOldalInput.value) {
        haromszogEredmeny.textContent = "Add meg az összes oldal hosszát!";
        return;
    }
    var aOldal = Number(aOldalInput.value);
    var bOldal = Number(bOldalInput.value);
    var cOldal = Number(cOldalInput.value);
    if (isNaN(aOldal) || aOldal <= 0 || isNaN(bOldal) || bOldal <= 0 || isNaN(cOldal) || cOldal <= 0) {
        haromszogEredmeny.textContent = "Minden oldal hosszának pozitívnak kell lennie!";
        return;
    }
    if (aOldal + bOldal > cOldal && aOldal + cOldal > bOldal && cOldal + bOldal > aOldal) {
        haromszogEredmeny.textContent = "A háromszög szerkeszthető!";
    }
    else {
        haromszogEredmeny.textContent = "A háromszög NEM szerkeszthető!";
    }
}
var f11EsemenyGomb = document.querySelector("#HaromszogBtn");
f11EsemenyGomb === null || f11EsemenyGomb === void 0 ? void 0 : f11EsemenyGomb.addEventListener("click", SzerkeszhetoHaromszog);
// 12. feladat
function NegyzetKeruletTerulet() {
    var negyzetEredmeny = document.querySelector("#negyzetEredmeny");
    if (!negyzetEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    var negyzetOldalInput = document.querySelector("#negyzetOldalInput");
    if (!negyzetOldalInput || !negyzetOldalInput.value) {
        negyzetEredmeny.textContent = "Add meg az oldal hosszát!";
        return;
    }
    var aOldal = Number(negyzetOldalInput.value);
    if (isNaN(aOldal) || aOldal <= 0) {
        negyzetEredmeny.textContent = "Az oldal hosszának pozitívnak kell lennie!";
        return;
    }
    var kerulet = aOldal * 4;
    var terulet = aOldal * aOldal;
    negyzetEredmeny.textContent = "Az ".concat(aOldal, " hossz\u00FAs\u00E1g\u00FA n\u00E9gyzet ker\u00FClete: ").concat(kerulet, ", ter\u00FClete: ").concat(terulet);
}
var f12EsemenyGomb = document.querySelector("#NegyzetBtn");
f12EsemenyGomb === null || f12EsemenyGomb === void 0 ? void 0 : f12EsemenyGomb.addEventListener("click", NegyzetKeruletTerulet);
