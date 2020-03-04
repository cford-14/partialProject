let practiceList = [
    {item: 'milk',
    quantity: '1',
    notes: 'skim',
    stores:  ['Publix', 'Whole Foods']},
    {item: 'bread',
    quantity: '2',
    notes: 'wheat',
    stores: ['Publix', '7-11']},
    {item: 'cheese',
    quantity: '3',
    notes: 'swiss',
    stores: ['Whole Foods']},
    {item: 'cherries',
    quantity: '100',
    notes: 'organic',
    stores: ['Whole Foods', 'Publix']},
    {item: 'carrots',
    quantity: '1',
    notes: 'baby carrots',
    stores: ['Publix']}
];

const storesArray = ['Publix', 'Walmart', 'WinnDixie', 'SAMS'];

storesArray.map(store => {
    console.log(typeof store);
});


