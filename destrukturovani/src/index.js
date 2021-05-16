import "./style.css";

// const [prezident, setPrezident] = useState('Standa');

// const poleHodnot = ['hrušky', 'jablka', 'švestky'];

// // const [prvniPrvek, druhyPrvek ] = poleHodnot;
// const [prvniPrvek, , tretiPrvek] = poleHodnot;
// const [ , , tretiPrvek] = poleHodnot;


// // const prvniPrvek = poleHodnot[0];
// // const druhyPrvek = poleHodnot[1];
// // const [prvniPrvek] = poleHodnot;

// const letenka = {
//     kam: "Tokyo",
//     odkud: "Praha",
//     cena: 15000
// };

// // const kam = letenka.kam;
// const {kam, odkud} = letenka;

let promennaA = 123;
let promennaB = 999;

let pomocnaPromenna = promennaA;
promennaA = promennaB;
promennaB = pomocnaPromenna;

[promennaA, promennaB] = [promennaB, promennaA];

// =========== UKOL 1, DESTRUKTUROVÁNÍ //
{

    const product = {
        name: "Toaster",
        brand: "Tefal",
        inStock: 34,
        price: "$25",
        colors: ["black", "red", "silver", "blue", "silver"],
    };

    /*
        === ÚKOLY ===
        1. Pomocí destrukturování získejte z objektu product jeho název a značku. Vypište je do konzole.
        2. Pomocí destrukturování získejte z objektu product pole barev. Uložte si jej do proměnné productColors.
        3. Z pole productColors si pomocí destrukturování vytáhněte první prvek do proměnné firstColor.
        4. Z pole productColors si pomocí destrukturování vytáhněte do nějakých proměnných druhý a čtvrtý prvek.
        5. Zkuste pomocí destrukturingu získat druhou a čtvrtou barvu přímo z objektu product.
    */
}
