class Product{
    constructor(
        public name : string,
        public price : number,
        public quantity :  number
    ){}
    getSubtotal():number{
        return this.price * this.quantity;
    }
}

class Order{
    private products: Product[] = []
    addProduct(product: Product): void {
        this.products.push(product);
    }
    calculateTotal(): number {
        let total = 0;
        for (let product of this.products) {
            total += product.getSubtotal();
        }
        return total;
    }
    calculateDiscount(percent: number): number {
        return this.calculateTotal() * percent / 100;
    }
    calculateNetTotal(percent: number): number {
        return this.calculateTotal() - this.calculateDiscount(percent);
    }
}

const order = new Order();
const prod1 = new Product("Labtop",25000,2);
const prod2 = new Product("Mouse",700,2);
const prod3 = new Product("Scanner",12000,2);
order.addProduct(prod1);
order.addProduct(prod2);
order.addProduct(prod3);
const calculateDiscount = 10;
console.log(`รวมเงินทั้งหมด ${order.calculateTotal()} บาท`);
console.log(`ส่วนลด ${calculateDiscount}%  เป็นเงิน ${order.calculateDiscount(calculateDiscount)}`);
console.log(`ชำระเงินสุทธิ ${order.calculateNetTotal(calculateDiscount)} บาท`);


