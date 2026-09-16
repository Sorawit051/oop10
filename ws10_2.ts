export{};
class CPU {
    constructor(private brand : string , private cores : number ){}
    process(): void{
        console.log(`CPU : ${this.brand} Cores : ${this.cores}`);
    }
    showInfo(): void{
        console.log(`CPU info ${this.brand} Cores info ${this.cores}`);
    }
}

class RAM{
    constructor(private capacity : number){}
    load(): void{
        console.log(`RAM : ${this.capacity} GB`);
    }
    showInfo(): void{
        console.log(`RAM info : ${this.capacity} GB`);
    }
}

class Storage{
    constructor(private type : string, private capacity : number){}
    readData(): void{
        console.log(`Storage : ${this.type} ${this.capacity}`);
    }
    showInfo(): void{
        console.log(`Storage Info : ${this.type} ${this.capacity}`);
    }
}

class Computer{
    private cpu : CPU;
    private ram : RAM;
    private storage : Storage;

    constructor(cpuBrand: string, cpuCores: number, ramCapacity: number, storageType: string, storageCapacity: number){
        this.cpu = new CPU(cpuBrand, cpuCores);
        this.ram = new RAM(ramCapacity);
        this.storage = new Storage(storageType, storageCapacity);
    }

    boot(): void{
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log("computer บูทเรียบร้อยแล้ว พร้อมทำงานได้");
    }
    showComputerInfo(): void{
        console.log("Computer Information");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}

const computer1 = new Computer("Intel", 8, 16, "SSD", 512);
computer1.boot();
computer1.showComputerInfo();