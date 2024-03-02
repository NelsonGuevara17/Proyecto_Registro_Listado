export class Medicine {
    id: number;
    medicineName: string;
    description: string;
    date: string;
    quantity: number;
    price: number;

    constructor(){
        this.id = 0,
        this.medicineName = '';
        this.description = '';
        this.date = '';
        this.quantity= 0;
        this.price = 0;
    }
}