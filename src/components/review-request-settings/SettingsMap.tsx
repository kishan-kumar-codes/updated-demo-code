import React from "react";

const Maps = () => {
  return (
    <div className=" flex flex-col gap-2 mt-5">
      <div className="flex  rounded-3xl min-h-[160px] justify-start px-5 py-3">
        <iframe
          className="rounded-3xl  pb-10"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3749.054785441388!2d73.68624676424913!3d20.006215227273458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGat%2036%2F2%2C%20Govardhan%20Village%2C%20Gangapur-Savargaon%20Rd%20Nashik%2C%20Maharastra%20422222!5e0!3m2!1sen!2sin!4v1611818175437!5m2!1sen!2sin"
          width="380px"
          height={600}
          frameBorder={0}
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex={0}></iframe>
      </div>
    </div>
  );
};

export default Maps;
