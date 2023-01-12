// main inputs
let operationsSalary = 0;
let overhead = 0;
let metalEquipmentCostPerMonth = 0;
let salesRepSalary = 0;
let teamLeadSalary = 0;
let profitMargin = 0;

// sales rep inputs and outputs
let salesReps = [];

class SalesRep {
  constructor(amountSold, overheadPercentRemoved, repShare) {
    this.amountSold = amountSold;
    this.overheadPercentRemoved = overheadPercentRemoved;
    this.repShare = repShare;
    this.salesRepCommission = (amountSold - (amountSold * overheadPercentRemoved)) * repShare;
    this.takeHome = (amountSold * profitMargin) - this.salesRepCommission;
  }

  static addSalesRep(amountSold, overheadPercentRemoved, repShare) {
    salesReps.push(new SalesRep(amountSold, overheadPercentRemoved, repShare));
  }
}

// main outputs
function calculateMonthlyCost() {
  let totalCost = operationsSalary + overhead + metalEquipmentCostPerMonth + salesRepSalary + teamLeadSalary;
  for (let rep of salesReps) {
    totalCost += rep.salesRepCommission;
  }
  return totalCost;
}

function calculateTakeHome() {
  let totalSales = 0;
  for (let rep of salesReps) {
    totalSales += rep.amountSold;
  }
  return totalSales * profitMargin - calculateMonthlyCost();
}
