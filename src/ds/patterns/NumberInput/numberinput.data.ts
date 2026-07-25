/* 01 — Accessories cart, quantity per line item */

export const cartLines = [
    { id: "n-cart-1", name: "Aria Pro 2 pil paketi (312)", price: "₺240", value: 2, min: 1, max: 12 },
    { id: "n-cart-2", name: "Kulak ucu seti, orta boy", price: "₺95", value: 1, min: 1, max: 8 },
    { id: "n-cart-3", name: "Temizleme kiti", price: "₺135", value: 3, min: 1, max: 5 }
];

/* 02 — Admin dashboard config, invalid state */

export const configFields = [
    {
        id: "n-timeout",
        label: "Session timeout",
        unit: "minutes",
        value: 15,
        min: 5,
        max: 120,
        invalid: false
    },
    {
        id: "n-retries",
        label: "Max retry attempts",
        unit: "attempts",
        value: 12,
        min: 1,
        max: 10,
        invalid: true,
        note: "Must be between 1 and 10"
    }
];

/* 03 — Recipe serving size adjuster, dark, one disabled */

export const recipeServings = [
    { id: "n-serve", label: "Servings", value: 4, min: 1, max: 24, disabled: false },
    { id: "n-batch", label: "Batch multiplier", value: 1, min: 1, max: 1, disabled: true }
];

/* 04 — Clinic session booking form */

export const bookingFields = [
    { id: "n-sessions", label: "Number of sessions", value: 3, min: 1, max: 10 },
    { id: "n-ears", label: "Ears to be fitted", value: 2, min: 1, max: 2 }
];

/* 05 — Budget planner, required currency fields */

export const budgetLines = [
    { id: "n-marketing", label: "Marketing", value: 8000, min: 0, max: 100000, step: 500 },
    { id: "n-support", label: "Customer support", value: 4500, min: 0, max: 100000, step: 500 },
    { id: "n-rd", label: "R&D", value: 12000, min: 0, max: 100000, step: 500 }
];
