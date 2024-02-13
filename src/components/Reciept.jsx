import SingleEntity from "./SingleEntity";

export const Reciept = () => {
  return (
    <div className="w-[450px] rounded-lg shadow-xl p-5 border">
      <h5>JUJA ECOMATT SUPERMARKET</h5>
      <h5>P.O BOX 1060 - 00232 RUIRU</h5>
      <h5>THIKA ROAD</h5>
      <h5>0722821102</h5>
      <h5>jujaecomattltd@gmail.com</h5>
      <h5>Bar Code</h5>
      <h6>serial number</h6>
      <h4>CASH SALE</h4>
      <h6>20 JANUARY 2024 02:00 PM</h6>
      <table className="mt-5 text-start uppercase">
        <thead>
          <tr className="dashed-border-top dashed-border-bottom">
            <td>
              <h5>ITEM</h5>
            </td>
            <td>
              <h5>QTY</h5>
            </td>
            <td>
              <h5>PRICE</h5>
            </td>
            <td>
              <h5>TOTAL</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <SingleEntity
            name={"ECOMATT SUGAR 1KG"}
            quantity={1}
            price={170}
            isTaxable={"A"}
          />
          <SingleEntity
            name={"KENSALT 500g"}
            quantity={3}
            price={20}
            isTaxable={"A"}
          />
          <SingleEntity
            name={"EXE ALL PURPOSE 1KG"}
            quantity={4}
            price={85}
            isTaxable={"E"}
          />
        </tbody>
        <tfoot>
          {/* first section  */}
          <tr className=" border-t border-dashed border-black">
            <td colSpan={3}>
              <h5>AMOUNT:</h5>
            </td>
            <td colSpan={1}>
              <h5>1145</h5>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h6>TENDERED:</h6>
            </td>
            <td colSpan={1}>
              <h6>1145</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h6>change:</h6>
            </td>
            <td colSpan={1}>
              <h6>1145</h6>
            </td>
          </tr>
          {/* section  */}
          <tr className="dashed-border-top">
            <td colSpan={3}>
              <h6>[A] vatable</h6>
            </td>
            <td colSpan={1}>
              <h6>737</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h6>[V] vat (16.00%)</h6>
            </td>
            <td colSpan={1}>
              <h6>117</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h6>[E] exempted</h6>
            </td>
            <td colSpan={1}>
              <h6>290</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h6>[Z] zero rated</h6>
            </td>
            <td colSpan={1}>
              <h6>0</h6>
            </td>
          </tr>
          {/* section  */}
          <tr className="dashed-border-top">
            <td colSpan={4}>
              <h6>payment modes</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h6>mpesa details</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h6>customer name: Kevin Kibet</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h6>phone number: 0757******11</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h6>transcaction code: neaskhdfi</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h6>mpesa amount:</h6>
            </td>
            <td colSpan={1}>
              <h6>1145</h6>
            </td>
          </tr>
          {/* section  */}
          <tr className="dashed-border-top normal-case">
            <td colSpan={4}>
              <h6 className="text-center">You were served by Mwangi</h6>
            </td>
          </tr>
          {/* section  */}
          <tr className="dashed-border-top normal-case">
            <td colSpan={4} className="text-center">
              <h6 className="">software details & contacts visit</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="text-center">
              <h6 className="uppercase">
                prices include vat inclusive where applicable
              </h6>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="text-center">
              <h5>Goods once sold are non refundable. Thank you!</h5>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
