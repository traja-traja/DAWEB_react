import "./style.css";

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

    // 1

    const {name, brand} = product;
    console.log(name, 'name');
    console.log(brand, 'brand');

    // 2a
    const {colors: productColors} = product;
    console.log(productColors, 'productColors');

    // 2b (varianta)
    {
        const {colors} = product;
        const productColors = colors;
        console.log(productColors, 'productColors - varianta');
    }

    // 3
    const [firstColor] = productColors;
    console.log(firstColor, 'firstColor');

    // 4
    const [, second, , fourth] = productColors;
    console.log(second, fourth, 'druhy a ctvrty');

    // 5
    const {colors: [, druhy, , ctvrty]} = product;
    console.log(druhy, ctvrty, 'druhy a ctvrty přímo');

    // další možnosti k procvičování:
    // 1 [a, b, ...rest] = [10, 20, 30, 40, 50];
    // 2 {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
    // 3 jak byste prohodili dvě proměnné?
    // 4 default value
    // 5 dávat to do parametru funkce

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

}

// =========== UKOL 1, ČAS //
// > timeFromMinutes(91)
// [ 1, 31 ]
// > timeFromMinutes(195)
// [ 3, 15
// > timeFromMinutes(536)
// [ 8, 56 ]

// možné řešení s % a nebo s Math.floor
const timeFromMinutes = (minutes) => {
    const justMinutes = minutes % 60;
    const justHours = (minutes - justMinutes) / 60;
    return [justHours, justMinutes];
};

console.log(timeFromMinutes(91), '[ 1, 31 ]');

console.log(timeFromMinutes(195), '[ 3, 15 ]');

console.log(timeFromMinutes(536), '[ 8, 56 ]');
