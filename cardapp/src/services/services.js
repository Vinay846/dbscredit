// Function to generate dummy transaction data for a specific period (e.g., '7days', '1month', '1year')
export const generateTransactionsForPeriod = (period = '1month', count = 20) => {
    const merchants = [
        { name: "Amazon", category: "E-Commerce", merchant_id: "mch_amzn_9912" },
        { name: "Starbucks", category: "Food & Beverage", merchant_id: "mch_sbux_4021" },
        { name: "Target", category: "Retail", merchant_id: "mch_trgt_8834" },
        { name: "Delta Air Lines", category: "Travel", merchant_id: "mch_dal_1092" },
        { name: "Best Buy", category: "Electronics", merchant_id: "mch_bby_7741" },
        { name: "Walmart", category: "Retail", merchant_id: "mch_wmt_1122" },
        { name: "Netflix", category: "Entertainment", merchant_id: "mch_nf_3344" }
    ];
    const paymentMethods = ["online", "contactless", "chip_and_pin", "swipe"];
    
    const transactions = [];
    const now = new Date();

    for (let i = 0; i < count; i++) {
        const date = new Date(now);
        if (period === '7days') {
            date.setDate(now.getDate() - Math.floor(Math.random() * 7));
        } else if (period === '1month' || period === 'month') {
            date.setDate(now.getDate() - Math.floor(Math.random() * 30));
        } else if (period === '1year' || period === 'year') {
            date.setDate(now.getDate() - Math.floor(Math.random() * 365));
        } else {
            date.setDate(now.getDate() - Math.floor(Math.random() * 60));
        }

        const merchant = merchants[Math.floor(Math.random() * merchants.length)];
        const amount = parseFloat((Math.random() * 250 + 5).toFixed(2));
        const payment_method = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];

        transactions.push({
            transaction_id: `txn_${Math.random().toString(36).substring(2, 15)}`,
            card_id: "cc_9a8f3b2e-1c4d-4e5f-8a7b-6c5d4e3f2a1b",
            timestamp: date.toISOString(),
            merchant,
            amount,
            currency: "USD",
            transaction_type: "purchase",
            status: "completed",
            payment_method,
            location: {
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        });
    }

    return transactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};

export const getCardDeatils = async () => {
    try {
        const response = await fetch('/card.json');
        if (!response.ok) throw new Error('Failed to load card.json');
        return await response.json();
    } catch (err) {
        console.error('Error fetching card details:', err);
        return [];
    }
};

export const getTransactionData = async () => {
    try {
        const response = await fetch('/transaction.json');
        if (!response.ok) throw new Error('Failed to load transaction.json');
        const baseData = await response.json();
        const yearData = generateTransactionsForPeriod('1year', 30);
        return [...baseData, ...yearData];
    } catch (err) {
        console.error('Error fetching transactions:', err);
        return generateTransactionsForPeriod('1year', 30);
    }
};
