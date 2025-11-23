import { useState } from "react";

export function Calculator() {
  const [baseSalary, setBaseSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [tax, setTax] = useState("");

  const calculateGross = () => {
    const base = Number(baseSalary);
    const b = Number(bonus);

    if (isNaN(base) || isNaN(b)) return 0;

    return base + (base * b / 100);
  };

  const calculateNet = () => {
    const gross = calculateGross();
    const t = Number(tax);

    if (isNaN(gross) || isNaN(t)) return 0;

    return gross - (gross * t / 100);
  };

  const canCalculate =
    baseSalary.trim() !== "" &&
    bonus.trim() !== "" &&
    tax.trim() !== "";

  return (
    <div>
      <input
        value={baseSalary}
        type="number"
        onChange={(e) => setBaseSalary(e.target.value)}
        placeholder="Enter base salary"
      />

      <input
        value={bonus}
        type="number"
        onChange={(e) => setBonus(e.target.value)}
        placeholder="Enter bonus %"
      />

      <input
        value={tax}
        type="number"
        onChange={(e) => setTax(e.target.value)}
        placeholder="Enter tax %"
      />

      {canCalculate && (
        <div>
          <p>Gross Salary : {calculateGross().toFixed(2)}</p>
          <p>Net Salary : {calculateNet().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
