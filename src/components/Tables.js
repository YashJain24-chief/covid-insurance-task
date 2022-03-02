import React from "react";

export default function Tables() {
  return (
    <div className="insurance-table">
      <div className="insurance-table-div">
        <table className="insurance-table-main">
          <tbody>
            <tr>
              <td>
                <strong>Insurance Companies</strong>
              </td>
              <td>
                <strong>Sum Insured (Rs.)</strong>
              </td>
              <td>
                <strong>Incurred Claim Ratio</strong>
              </td>
              <td>
                <strong>Network Hospitals</strong>
              </td>
            </tr>
            <tr>
              <td>Aditya Birla Health Insurance</td>
              <td>
                <p>Min – 2 Lakh</p>
                <p>Max – 2 Crore</p>
              </td>
              <td>59%</td>
              <td>6000+</td>
            </tr>
            <tr>
              <td>Bajaj Allianz Health Insurance</td>
              <td>
                <p>Min – 1.5 Lakh</p>
                <p>Max – 50 Lakh</p>
              </td>
              <td>85%</td>
              <td>6500+</td>
            </tr>
            <tr>
              <td>Bharti AXA Health Insurance</td>
              <td>
                <p>Min – 3 Lakh</p>
                <p>Max – 5 Lakh</p>
              </td>
              <td>89%</td>
              <td>4300+</td>
            </tr>
            <tr>
              <td>
                <span>Care Health Insurance</span>
              </td>
              <td>
                <p>Min – 4 Lakh</p>
                <p>Max – 6 Crore</p>
              </td>
              <td>55%</td>
              <td>7400+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
