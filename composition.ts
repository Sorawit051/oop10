class Engine{
    constructor(private type : string){};
    start(): void{
        console.log(`เครื่่องยนต์ ${this.type} เริ่มทำงาน`);
    }
    stop(): void{
        console.log(`เครื่่องยนต์ ${this.type} หยุดทำงาน`);
    }

    get type(){
        return this.type;
    }
}
class Battery{
    constructor(private capacity : number){};
    charge(): void{
        console.log(`ขณะนี้แบตเตอรี่มีอยู่ ${this.capacity}`);
        this.capacity = 100;
        console.log(`ชาร์จแบตเตอรี่เรียบร้อยแล้ว ขณะนี้มีแบตเตอรี่ ${this.capacity}`);
    }
    showStatus(){
        console.log(`ขณะนี้มีแบตเตอรี่ ${this.capacity}`);
    }
}

class Car{
    private engine : Engine;
    private battery : Battery;
    constructor(type : string , capacity : number){
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startcar(): void{
        this.engine.start();
    }
    stopcar(): void{
        this.engine.stop();
    }
    showCarInfo(): void{
        console.log(`ข้อมูลรถ : เครื่องยนต์ชนิด ${this.engine.type}`);
        this.battery.showStatus();
    }
    chargebattery(): void{
        this.battery.charge();
    }
}

const car1 = new Car("V6",10);
car1.startcar();
car1.showCarInfo();
car1.chargebattery();
car1.stopcar();