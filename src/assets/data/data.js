

export const categoriesList = [
    { name:'Electronics', value:'electronics' },
    { name:'Fashion', value:'fashion' },
    { name:'Beauty & Health', value:'beauty_health' },
    { name:'Auto & Spare parts', value:'auto' },
    { name:'Home Decore', value:'home-decore' },
    { name:'Sport', value:'sport' },
]


export const uploadFields = {
    fields:[
        {name:'category', type:'select', holder:'Category', label:'Category', options:categoriesList, col:4},
        {name:'title', type:'text', holder:'Item Name', label:'Item Name', col:8},
        {name:'price', type:'text', holder:'0', label:'Set Price', col:'6'},
        {name:'currency', type:'select', holder:'0', label:'Currency', options:[{name:'USD', value:'USD'}, {name:'SSP', value:'SSP'}], col:'6 col-6'},
        {name:'description', type:'textarea', holder:'Item Name', label:'Item Name', col:12},
        {name:'image', type:'file', holder:'', label:'', col:6},
    ]
}