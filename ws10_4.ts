class Doctor{
    constructor(
        private doctorID : string,
        private name : string,
        private specialty : string
    ){}
    showInfo():string{
        return `หมอ รหัส ${this.doctorID} ชื่อ ${this.name} ความเชี่ยวชาญ ${this.specialty}`;
    }
    examine(patient : Patient): void{
        console.log(`${this.showInfo()} ตรวจผู้ป่วย ${patient.showInfo()}`);
    }
    diagnose(patient: Patient, diagnose: string):void{
        console.log(`หมอ ${this.name} วินิจฉัย ${patient.showInfo()} เป็นโรค ${diagnose}`);
    }
    prescribeMedicine(patient: Patient, medicine: string): void{
        console.log(`หมอ ${this.name} จ่ายยา ${medicine} ให้กับ ${patient.showInfo()}`);
    }
    calculateTreatmentCost(patient : Patient, fee : number ,medFee : number): void{
        console.log(`หมอ ${this.name} รักษา ${patient.showInfo()} \n ค่ารักษา ${fee} บาท ค่ายา ${medFee} บาท`);
    }

}

class Patient{
    constructor(
        private patientID : string,
        private name : string,
        private age : number
    ){}
    showInfo():string{
        return `ผู้ป่วย รหัส ${this.patientID} ชื่อ ${this.name} อายุ ${this.age}`;
    }

}

const p1 = new Patient(`P001`,`sorawit`,20);
const d1 = new Doctor(`D001`,`suvichai`,`หัวใจ`);
d1.examine(p1);
d1.diagnose(p1,"หัวใจเต้นผิดปกติ");
d1.prescribeMedicine(p1, "ยาลดความดัน");
d1.calculateTreatmentCost(p1, 1000, 500);