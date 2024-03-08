
function calculateMembershipCost(cost, friends) {
    let discount = 0;
    switch (friends) {
        case 1:
            discount = 0.05;
            break;
        case 2:
            discount = 0.1;
            break;
        case 3:
        case 4:
        case 5: 
            discount = 0.15;
            break;
        default:
            discount = 0;
            break;
    }
    return cost * (1 - discount);
}

module.exports = calculateMembershipCost;
