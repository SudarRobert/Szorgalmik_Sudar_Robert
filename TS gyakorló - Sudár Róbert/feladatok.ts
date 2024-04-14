//Sudár Róbert - TS gyakorlás
// 1. feladat

function PrimEljaras():void{

    let primEredmeny=document.querySelector<HTMLParagraphElement>("#PrimEredmeny");
    if (!primEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

	let inputElem=document.querySelector<HTMLInputElement>("#primInput");
    if (!inputElem || !inputElem.value) {
        primEredmeny.textContent="Előbb adj meg egy számot!";
        return;
    }

    let szam:number= +inputElem.value;
    if (isNaN(szam) || szam <= 0) {
        primEredmeny.textContent = "Pozitív egész számot adj meg!";
        return;
    }

    let oszto:number=0;



    for(let i=1;i<=szam;i++){
    	if(szam%i==0){
        	oszto++;
        }
    }
    if(oszto==2){
    	primEredmeny.textContent= "A megadott szám Prím!";
    }
    else{
    	primEredmeny.textContent= "A megadott szám NEM Prím!";
    }    
}

let f1EsemenyGomb=document.querySelector<HTMLButtonElement>("#PrimBtn");
f1EsemenyGomb?.addEventListener("click", PrimEljaras);



// 2. Feladat
function Koordinata():void{

let coordEredmeny = document.querySelector<HTMLParagraphElement>("#coordEredmeny");
if (!coordEredmeny) {
    console.log("Eredmény megjelenítő elem nem található");
    return;
}

let x = document.querySelector<HTMLInputElement>("#xCord");
let y = document.querySelector<HTMLInputElement>("#yCord");

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


let xErtek=+x.value;
let yErtek=+y.value;

	if(xErtek>0 && yErtek>0){
    	coordEredmeny.textContent = "A koordináta az első síknegyedben van.";
    }
    else if(xErtek<0 && yErtek>0){
    	coordEredmeny.textContent=  "A koordináta a második síknegyedben van.";
    }
    else if(xErtek<0 && yErtek<0){
    	coordEredmeny.textContent=  "A koordináta a harmadik síknegyedben van.";
    }
    else if(xErtek>0 && yErtek<0){
    	coordEredmeny.textContent= " A koordináta a negyedik síknegyedben van.";
    }
    else if(xErtek==0 && yErtek==0){
    	coordEredmeny.textContent= "A koordináta az origóban van.";
    }
    else if(xErtek==0){
        coordEredmeny.textContent= "A koordináta az y tengelyen van.";
    }
    else{
    	coordEredmeny.textContent= "A koordináta az x tengelyen van.";
    }
}


let f2EsemenyGomb=document.querySelector<HTMLButtonElement>("#CoordBtn");
f2EsemenyGomb?.addEventListener("click", Koordinata);




// 3. feladat
function MelyikANagyobb():void{
    let szamokEredmeny = document.querySelector<HTMLParagraphElement>("#szamokEredmeny");
    if (!szamokEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }    
    let szamEgyInput = document.querySelector<HTMLInputElement>("#szamEgy");
    let szamKettoInput = document.querySelector<HTMLInputElement>("#szamKetto");
    let szamHaromInput= document.querySelector<HTMLInputElement>("#szamHarom");

    if ((!szamEgyInput|| !szamEgyInput.value) && (!szamKettoInput|| !szamKettoInput.value) && (!szamHaromInput|| !szamHaromInput.value)) {
        szamokEredmeny.textContent = "Adj meg a számokat!";
        return;
    }
    
    else if (!szamEgyInput || !szamEgyInput.value) {
        szamokEredmeny.textContent = "Adj meg az első számot!";
        return;
    }
    
    else if (!szamKettoInput|| !szamKettoInput.value) {
        szamokEredmeny.textContent = "Adj meg az második számot!";
        return;
    }
    else if (!szamHaromInput|| !szamHaromInput.value) {
        szamokEredmeny.textContent = "Adj meg a harmadik számot!";
        return;
    }
    
    let szamEgy = Number(szamEgyInput.value);
    let szamKetto = Number(szamKettoInput.value);
    let szamHarom = Number(szamHaromInput.value);


	if(szamEgy >= szamKetto && szamEgy >= szamHarom){
    	szamokEredmeny.textContent = " Ezek közül a " + szamEgy + " a legnagyobb!"
	}
	else if(szamKetto >= szamEgy && szamKetto >= szamHarom)
	{
    	szamokEredmeny.textContent = " Ezek közül a " + szamKetto + " a legnagyobb!"
	}
	else{
        szamokEredmeny.textContent = " Ezek közül a " + szamHarom + " a legnagyobb!"
	}
}
let f3EsemenyGomb=document.querySelector<HTMLButtonElement>("#SzamBtn");
f3EsemenyGomb?.addEventListener("click", MelyikANagyobb);



//4. feladat
function SzorgalomSzovegesErtekeles():void{
    let erdemjegyEredmeny = document.querySelector<HTMLParagraphElement>("#erdemjegyEredmeny");
    if (!erdemjegyEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }  

    let erdemjegyInput = document.querySelector<HTMLInputElement>("#erdemjegyInput");
    if (!erdemjegyInput || !erdemjegyInput.value) {
        erdemjegyEredmeny.textContent = "Adj meg az érdemjegyet!";
        return;
    }

    let jegy = Number(erdemjegyInput.value);
   if (isNaN(jegy) || jegy <= 1 || jegy > 5) {
        erdemjegyEredmeny.textContent = "2 és 5 közötti érdemjegy adható!";
        return;
    }

    if(jegy==2){
        erdemjegyEredmeny.textContent ="Az érdemjegy szöveges értékelése: HANYAG"
    }
    else if(jegy==3){
        erdemjegyEredmeny.textContent ="Az érdemjegy szöveges értékelése: VÁLTOZÓ"
    }
    else if(jegy==4){
        erdemjegyEredmeny.textContent ="Az érdemjegy szöveges értékelése: JÓ"
    }
    else {
        erdemjegyEredmeny.textContent ="Az érdemjegy szöveges értékelése: PÉLDÁS"
    }
}

let f4EsemenyGomb=document.querySelector<HTMLButtonElement>("#ErdemjegyBtn");
f4EsemenyGomb?.addEventListener("click", SzorgalomSzovegesErtekeles);



//5. feladat
function TizennyolcPlusz():void{
    let nagykoruEredmeny = document.querySelector<HTMLParagraphElement>("#nagykoruEredmeny");
    if (!nagykoruEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

    let nagykoruInput = document.querySelector<HTMLInputElement>("#nagykoruInput");
    if (!nagykoruInput || !nagykoruInput.value) {
        nagykoruEredmeny.textContent = "Add meg az illető életkorát!";
        return;
    }


    let kor = Number(nagykoruInput.value);
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

let f5EsemenyGomb=document.querySelector<HTMLButtonElement>("#nagykoruBtn");
f5EsemenyGomb?.addEventListener("click", TizennyolcPlusz);



// 6. feladat
function LNKO(): void {
    let lnkoEredmeny = document.querySelector<HTMLParagraphElement>("#lnkoEredmeny");
    if (!lnkoEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

    let elsoLnkoInput = document.querySelector<HTMLInputElement>("#elsoLnkoInput");
    let masodikLnkoInput = document.querySelector<HTMLInputElement>("#masodikLnkoInput");

    if ((!elsoLnkoInput || !elsoLnkoInput.value) && (!masodikLnkoInput || !masodikLnkoInput.value)) {
        lnkoEredmeny.textContent = "Add meg az összahasonlítandó számokat!";
        return;
    } else if (!elsoLnkoInput || !elsoLnkoInput.value) {
        lnkoEredmeny.textContent = "Add meg az első számot!";
        return;
    } else if (!masodikLnkoInput || !masodikLnkoInput.value) {
        lnkoEredmeny.textContent = "Add meg a második számot!";
        return;
    }
    //ÍGY ELVILEG KEZELI A MINUSZ SZÁMOKAT IS
    let szamEgy = Math.abs(Number(elsoLnkoInput.value));
    let szamKetto = Math.abs(Number(masodikLnkoInput.value));

    if (isNaN(szamEgy) || isNaN(szamKetto)) {
        lnkoEredmeny.textContent = "Érvényes számokat adj meg!";
        return;
    }

    let lnko: number = 1;
    for (let i = 2; i <= Math.min(szamEgy, szamKetto); i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    lnkoEredmeny.textContent = `A két szám  legnagyobb közös osztója: ${lnko}`;
}

let f6EsemenyGomb = document.querySelector<HTMLButtonElement>("#LnkoBtn");
f6EsemenyGomb?.addEventListener("click", LNKO);


//7. feladat
function SzamtaniSorozatGenerator():void{
    let szamSorEredmeny = document.querySelector<HTMLParagraphElement>("#szamSorEredmeny");
    if (!szamSorEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

    let elemSzamInput = document.querySelector<HTMLInputElement>("#elemSzamInput");
    let elsoSzamInput = document.querySelector<HTMLInputElement>("#elsoSzamInput");
    let kulonbsegInput= document.querySelector<HTMLInputElement>("#kulonbsegInput");

    if ((!elemSzamInput|| !elemSzamInput.value) && (!elsoSzamInput|| !elsoSzamInput.value) && (!kulonbsegInput|| !kulonbsegInput.value)) {
        szamSorEredmeny.textContent = "Add meg a kért értékeket!";
        return;
    }
    else if (!elemSzamInput || !elemSzamInput.value) {
        szamSorEredmeny.textContent = "Adj meg az elem számot!";
        return;
    }
    
    else if (!elsoSzamInput|| !elsoSzamInput.value) {
        szamSorEredmeny.textContent = "Adj meg a sorozat első számát!";
        return;
    }
    else if (!kulonbsegInput|| !kulonbsegInput.value) {
        szamSorEredmeny.textContent = "Adj meg az elemek közti különbséget!";
        return;
    }
    
    let elemSzam = Number(elemSzamInput.value);
    if (isNaN(elemSzam) || elemSzam <= 0) {
        szamSorEredmeny.textContent = "Pozitív elemszámot adj meg!";
         return;
     }
    let elsoElem = Number(elsoSzamInput.value);
    let kulonbseg = Number(kulonbsegInput.value);
    let sorozat = "";

    for(let i=0;i<elemSzam;i++){
        if (i > 0) {
            sorozat += ", ";
        } else {
            sorozat += "";
        }
        sorozat += elsoElem;
        elsoElem += kulonbseg;
    }
    szamSorEredmeny.textContent = sorozat;
}

let f7EsemenyGomb = document.querySelector<HTMLButtonElement>("#SzamSorBtn");
f7EsemenyGomb?.addEventListener("click", SzamtaniSorozatGenerator);

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


function ParosGenerator():void{
    let parosEredmeny = document.querySelector<HTMLParagraphElement>("#parosEredmeny");
    if (!parosEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }
    let alsoHatarInput = document.querySelector<HTMLInputElement>("#alsoHatarInput");
    let felsoHatarInput = document.querySelector<HTMLInputElement>("#felsoHatarInput");
    if ((!alsoHatarInput|| !alsoHatarInput.value) && (!felsoHatarInput|| !felsoHatarInput.value)) {
        parosEredmeny.textContent = "Add meg a kért értékeket!";
        return;
    }
    else if (!alsoHatarInput || !alsoHatarInput.value) {
        parosEredmeny.textContent = "Adj meg az alsó határt!";
        return;
    }
    
    else if (!felsoHatarInput|| !felsoHatarInput.value) {
        parosEredmeny.textContent = "Adj meg a felső határt!";
        return;
    }
    let alsoHatar = Number(alsoHatarInput.value);
    let felsoHatar = Number(felsoHatarInput.value);

	let generaltSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
	if(generaltSzam%2==0){
		parosEredmeny.textContent =`A kigenerált páros szám: ${generaltSzam}`;
	}
	else if(generaltSzam!=felsoHatar){
		parosEredmeny.textContent =`A kigenerált páros szám: ${generaltSzam+1}`; 
	}
	else{
		parosEredmeny.textContent =`A kigenerált páros szám: ${generaltSzam-1}`; 
	}
}

let f9EsemenyGomb = document.querySelector<HTMLButtonElement>("#ParosBtn");
f9EsemenyGomb?.addEventListener("click", ParosGenerator);




//10. feladat
function KettoHatvanyai():void{
    let hatvanyEredmeny = document.querySelector<HTMLParagraphElement>("#hatvanyEredmeny");
    if (!hatvanyEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

    let hatvanyElemInput = document.querySelector<HTMLInputElement>("#hatvanyElemInput");
    if (!hatvanyElemInput || !hatvanyElemInput.value) {
        hatvanyEredmeny.textContent="Adj meg egy hatvány elemszámot!";
        return;
    }

    let elemSzam = Number(hatvanyElemInput.value);
    if (isNaN(elemSzam) || elemSzam < 1) {
        hatvanyEredmeny.textContent = "Adj meg egy pozitív egész számot!";
        return;
    }

    let eredmenySzoveg = "";
    for (let i = 0; i < elemSzam; i++) {
        if (i > 0) {
            eredmenySzoveg += ", ";
        }
        eredmenySzoveg += 2 ** i;
    }
    hatvanyEredmeny.textContent = eredmenySzoveg;
}

let f10EsemenyGomb = document.querySelector<HTMLButtonElement>("#HatvanyBtn");
f10EsemenyGomb?.addEventListener("click", KettoHatvanyai);



//11. feladat


function SzerkeszhetoHaromszog(){
    let haromszogEredmeny = document.querySelector<HTMLParagraphElement>("#haromszogEredmeny");
    if (!haromszogEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

    let aOldalInput = document.querySelector<HTMLInputElement>("#aOldalInput");
    let bOldalInput = document.querySelector<HTMLInputElement>("#bOldalInput");
    let cOldalInput = document.querySelector<HTMLInputElement>("#cOldalInput");


    if (!aOldalInput || !bOldalInput || !cOldalInput || !aOldalInput.value || !bOldalInput.value || !cOldalInput.value) {
        haromszogEredmeny.textContent = "Add meg az összes oldal hosszát!";
        return;
    }

    let aOldal = Number(aOldalInput.value);
    let bOldal = Number(bOldalInput.value);
    let cOldal = Number(cOldalInput.value);

    if (isNaN(aOldal) || aOldal <= 0 || isNaN(bOldal) || bOldal <= 0 || isNaN(cOldal) || cOldal <= 0) {
        haromszogEredmeny.textContent = "Minden oldal hosszának pozitívnak kell lennie!";
        return;
    }


	if(aOldal+bOldal>cOldal && aOldal+cOldal>bOldal && cOldal+bOldal>aOldal){
        haromszogEredmeny.textContent ="A háromszög szerkeszthető!"
    }
    else{
    	haromszogEredmeny.textContent ="A háromszög NEM szerkeszthető!"
    }
}

let f11EsemenyGomb = document.querySelector<HTMLButtonElement>("#HaromszogBtn");
f11EsemenyGomb?.addEventListener("click", SzerkeszhetoHaromszog);





// 12. feladat

function NegyzetKeruletTerulet(){
    let negyzetEredmeny = document.querySelector<HTMLParagraphElement>("#negyzetEredmeny");
    if (!negyzetEredmeny) {
        console.log("Eredmény megjelenítő elem nem található");
        return;
    }

    let negyzetOldalInput = document.querySelector<HTMLInputElement>("#negyzetOldalInput");
    if (!negyzetOldalInput || !negyzetOldalInput.value) {
        negyzetEredmeny.textContent = "Add meg az oldal hosszát!";
        return;
    }

    let aOldal = Number(negyzetOldalInput.value);
    if (isNaN(aOldal) || aOldal <= 0){
        negyzetEredmeny.textContent = "Az oldal hosszának pozitívnak kell lennie!";
        return;
    }

    let kerulet = aOldal*4;
    let terulet = aOldal*aOldal;
    negyzetEredmeny.textContent = `Az ${aOldal} hosszúságú négyzet kerülete: ${kerulet}, területe: ${terulet}`

}

let f12EsemenyGomb = document.querySelector<HTMLButtonElement>("#NegyzetBtn");
f12EsemenyGomb?.addEventListener("click", NegyzetKeruletTerulet);