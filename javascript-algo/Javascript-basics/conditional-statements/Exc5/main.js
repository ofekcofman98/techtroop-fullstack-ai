let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

const VIP_DISCOUNT = 20;

const PREMIUM_WEEKEND_DISCOUNT = 15;
const PREMIUM_WEEKDAY_DISCOUNT = 10;

const REGULAR_HIGH_DISCOUNT = 10;
const REGULAR_MEDIUM_DISCOUNT = 5;

const HIGH_PURCHASE_AMOUNT = 100;
const MEDIUM_PURCHASE_AMOUNT = 50;

let discount = 0;

if (customerType === "vip") {
    discount = VIP_DISCOUNT;
}
else if (customerType === "premium") {
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    if (isWeekend) {
        discount = PREMIUM_WEEKEND_DISCOUNT;
    }
    else {
        discount = PREMIUM_WEEKDAY_DISCOUNT;
    }
}
else if (customerType === "regular") {
    if (purchaseAmount > HIGH_PURCHASE_AMOUNT) {
        discount = REGULAR_HIGH_DISCOUNT;
    }
    else if (purchaseAmount > MEDIUM_PURCHASE_AMOUNT) {
        discount = REGULAR_MEDIUM_DISCOUNT;
    }
}

console.log(`Discount: ${discount}%`);