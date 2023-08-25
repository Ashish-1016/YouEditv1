import React from "react";




function History() {
  const getPaymentStatus = (status) => {
    if (status === "Paid")
      return <div className="badge badge-success">{status}</div>;
    if (status === "Pending")
      return <div className="badge badge-primary">{status}</div>;
    else return <div className="badge badge-ghost">{status}</div>;
  };

  return (
    <>
      <TitleCard title="Billing History" topMargin="mt-2">
        {/* Invoice list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Invoice No</th>
                <th>Invoice Generated On</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Invoice Paid On</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>{l.invoiceNo}</td>
                    <td>{l.generatedOn}</td>
                    <td>{l.description}</td>
                    <td>${l.amount}</td>
                    <td>{getPaymentStatus(l.status)}</td>
                    <td>{l.paidOn}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default History;
