export const toCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
}).format;