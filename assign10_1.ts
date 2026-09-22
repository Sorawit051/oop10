class BonusCalculator {
  calculateBonus(salary: number): number {
    if (salary < 20000) return salary * 0.05;
    if (salary < 40000) return salary * 0.08;
    return salary * 0.10;
  }
}

class TaxCalculator {
  calculateTax(income: number): number {
    if (income <= 20000) return 0;
    if (income <= 40000) return income * 0.05;
    return income * 0.10;
  }
}

class Employee {
  name: string;
  basicSalary: number;
  private bonusCalculator: BonusCalculator;
  private taxCalculator: TaxCalculator;

  constructor(name: string, basicSalary: number) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.bonusCalculator = new BonusCalculator();
    this.taxCalculator = new TaxCalculator();
  }

  calculateGrossSalary(): number {
    return this.basicSalary + this.bonusCalculator.calculateBonus(this.basicSalary);
  }

  calculateNetSalary(): number {
    const gross = this.calculateGrossSalary();
    return gross - this.taxCalculator.calculateTax(gross);
  }
}

const emp = new Employee("Sorawit", 30000);
console.log(`Basic Salary of ${emp.name}: $${emp.basicSalary}`);
console.log(`Bonus: $${emp.bonusCalculator.calculateBonus(emp.basicSalary)}`);
console.log(`Gross Salary: $${emp.calculateGrossSalary()}`);
console.log(`Tax: $${emp.taxCalculator.calculateTax(emp.calculateGrossSalary())}`);
console.log(`Net Salary: $${emp.calculateNetSalary()}`);