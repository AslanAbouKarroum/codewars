// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

// My Solution
function getOrder(input) {
    let str = '';
    str = ' Burger'.repeat(input.split('burger').length-1)
    str = str + ' Fries'.repeat(input.split('fries').length-1)
    str = str + ' Chicken'.repeat(input.split('chicken').length-1)
    str = str + ' Pizza'.repeat(input.split('pizza').length-1)
    str = str + ' Sandwich'.repeat(input.split('sandwich').length-1)
    str = str + ' Onionrings'.repeat(input.split('onionrings').length-1)
    str = str + ' Milkshake'.repeat(input.split('milkshake').length-1)
    str = str + ' Coke'.repeat(input.split('coke').length-1)
    return str.slice(1)
};