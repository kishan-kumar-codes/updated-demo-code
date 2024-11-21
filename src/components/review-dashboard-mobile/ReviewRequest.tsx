import React from "react";

/**
 * ReviewRequest component to display a table of review requests.
 *
 * @returns {JSX.Element} The rendered ReviewRequest component.
 */
const typography: React.CSSProperties = {
  color: "#E0E0E0",
  fontFamily: "Arial",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const styles = {
  table: {
    color: "#BCBCBC",
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  } as React.CSSProperties,
  header: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "10px",
  } as React.CSSProperties,
  button: {
    backgroundColor: "#631363",
    color: "#FFFFFF",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: 700,
    cursor: "pointer",
  } as React.CSSProperties,
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px 0",
    borderBottom: "1px solid #E0E0E0",
  } as React.CSSProperties,
};

interface TableRowProps {
  customerName: string;
  requestedDate: string;
  requestedBy: string;
  status?: string;
}

const TableRow: React.FC<TableRowProps> = ({
  customerName,
  requestedDate,
  requestedBy,
  status,
}) => (
  <div style={styles.row}>
    <span
      // style={styles.table}
      className="flex flex-1 w-full text-xs md:text-sm text-center font-semibold text-[#6D6D6D] justify-center items-center">
      {customerName}
    </span>
    <span
      // style={styles.table}
      className="flex flex-1 w-full text-xs md:text-sm text-center  font-semibold text-[#6D6D6D] justify-center items-center">
      {requestedDate}
    </span>
    <span
      // style={styles.table}
      className="flex flex-1 w-full text-xs md:text-sm text-center font-semibold text-[#6D6D6D] justify-center items-center">
      {requestedBy}
    </span>
    {status ? (
      <span
        // style={styles.table}
        className="flex flex-1 w-full text-xs md:text-sm text-center font-semibold text-[#6D6D6D] justify-center items-center">
        {status}
      </span>
    ) : (
      <div className="flex flex-1 text-xs md:text-sm text-center justify-center ">
        <button
          // style={styles.button}
          className="flex items-center bg-[#631363]  w-fit text-wrap py-1 md:py-2 px-1  md:px-3 text-center justify-center rounded-md text-xs  text-white ">
          Resend Invitation
        </button>
      </div>
    )}
  </div>
);

const ReviewRequestMobile: React.FC = () => {
  const requests: TableRowProps[] = [
    {
      customerName: "Joyce Hoffman",
      requestedDate: "01.12.2024",
      requestedBy: "Melissa Hudson",
      status: "01.12.2024",
    },
    {
      customerName: "Isabella Patrick",
      requestedDate: "12.30.2023",
      requestedBy: "Melissa Hudson",
    },
    {
      customerName: "Joyce Hoffman",
      requestedDate: "01.12.2024",
      requestedBy: "Melissa Hudson",
      status: "01.12.2024",
    },
    {
      customerName: "Isabella Patrick",
      requestedDate: "12.30.2023",
      requestedBy: "Melissa Hudson",
    },
    {
      customerName: "Joyce Hoffman",
      requestedDate: "01.12.2024",
      requestedBy: "Melissa Hudson",
      status: "01.12.2024",
    },
    {
      customerName: "Isabella Patrick",
      requestedDate: "12.30.2023",
      requestedBy: "Melissa Hudson",
    },
    // Add more requests as needed
  ];

  return (
    <div className="pt-4 pb-2 w-full">
      <div className="flex flex-col w-full rounded-2xl bg-[#F4F4f4]  md:px-8 px-0">
        <div className="flex w-full text-center justify-center h-full md:rounded-t-2xl  md:rounded-b-2xl rounded-b-none rounded-2xl bg-[#631363] font-normal md:font-semibold text-xs md:text-base text-white">
          <span
            style={styles.header}
            className="flex md:font-normal font-semibold flex-1 w-full text-center justify-center items-center">
            Customer Name
          </span>
          <span
            style={styles.header}
            className="flex flex-1 md:font-normal font-semibold w-full text-center justify-center items-center border-l-2 md:border-l-0 border-[#E0E0E0]">
            Requested Date
          </span>
          <span
            style={styles.header}
            className="flex flex-1 md:font-normal font-semibold w-full text-center justify-center items-center border-l-2 md:border-0 border-[#E0E0E0]">
            Requested By
          </span>
          <span
            style={styles.header}
            className="flex w-full md:font-normal font-semibold text-center justify-center items-center flex-1 border-l-2 md:border-0 border-[#E0E0E0]">
            Status
          </span>
        </div>
        <div className="flex flex-col w-full h-full px-1 my-0 md:my-4  rounded-b-2xl  md:rounded-2xl  bg-[#E0E0E0] ">
          {requests.map((request, index) => (
            <React.Fragment key={index}>
              <TableRow {...request} />
              {index < requests.length - 1 && (
                <hr className="border flex w-full border-[#6D6D6D] px-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-7 md:mt-2 md:px-8  px-0 w-full items-end">
        <button
          className="bg-[#631363] rounded-3xl md:rounded-xl py-3  px-4"
          style={typography}>
          Request Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewRequestMobile;
