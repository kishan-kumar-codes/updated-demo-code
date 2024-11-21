"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import LayoutView from "../calendar/layout/page";

interface ContactFormData {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2: string;
  background: string;
  avatar: File | null;
  tag: string;
}

const Calendar10 = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    email: "",
    phoneNumber1: "",
    phoneNumber2: "",
    background: "",
    avatar: null,
    tag: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        avatar: e.target.files && e.target.files[0],
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here, e.g., sending to an API
  };

  return (
    <LayoutView
      Childrens={
        <div className="relative pb-[30px] w-full h-full bg-cultured">
          <div className="mx-[18px]  mt-[19px] bg-chinesWhite rounded-xl">
            <div className="bg-palatinatePurple flex pl-[16px] py-[11px] text-[16px] font-bold rounded-xl text-white">
              <h4>New Contact</h4>
            </div>
            <form
              className="px-[15px] py-[21px]   rounded-lg shadow-md space-y-4"
              onSubmit={handleSubmit}>
              <div className="w-full">
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label
                      className="text-[12px] font-bold text-darkSilverColor"
                      htmlFor="">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder=""
                      className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label
                      className="text-[12px] font-bold text-darkSilverColor"
                      htmlFor="">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder=""
                      className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label
                      className="text-[12px] font-bold text-darkSilverColor"
                      htmlFor="">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder=""
                      className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label
                      className="text-[12px] font-bold text-darkSilverColor"
                      htmlFor="">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder=""
                      className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="text-[12px] font-bold text-darkSilverColor"
                    htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder=""
                    className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Phone Number 1 */}
                  <div>
                    <label
                      className="text-[12px] font-bold text-darkSilverColor"
                      htmlFor="">
                      Phone Number 1
                    </label>
                    <input
                      type="text"
                      name="phoneNumber1"
                      placeholder=""
                      className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                      value={formData.phoneNumber1}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Phone Number 2 */}
                  <div>
                    <label
                      className="text-[12px] font-bold text-darkSilverColor"
                      htmlFor="">
                      Phone Number 2
                    </label>
                    <input
                      type="text"
                      name="phoneNumber2"
                      placeholder=""
                      className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                      value={formData.phoneNumber2}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Background */}
                <div>
                  <label
                    className="text-[12px] font-bold text-darkSilverColor"
                    htmlFor="">
                    Background
                  </label>
                  <input
                    type="text"
                    name="background"
                    placeholder=""
                    className="p-2 outline-none  text-[12px] bg-[#f4f4f4] text-darkSilverColor rounded-lg w-full  h-[27px] "
                    value={formData.background}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Avatar */}
              <div className="mt-4">
                <label className="text-[12px] font-bold text-darkSilverColor">
                  Avatar
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full outline-none  bg-[#F4F4F4] rounded-lg md:h-[50px] h-[44px] md:text-[20px] text-[12px] px-3 py-1 file:mr-5 file:py-1 file:px-3 file:rounded-full file:bg-[#6D6D6D] file:text-white file:text-sm file:font-medium italic"
                />
              </div>

              {/* Tag */}
              <div className="flex flex-col">
                <label
                  className="text-[12px] font-bold text-darkSilverColor"
                  htmlFor="">
                  Tag
                </label>
                <input
                  type="text"
                  name="tag"
                  placeholder=""
                  className=" p-2 outline-none  bg-[#f4f4f4] text-[12px] text-darkSilverColor rounded-lg w-[50%]  h-[27px] "
                  value={formData.tag}
                  onChange={handleInputChange}
                />
              </div>
              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[70px] bg-limeGreen text-[16px] font-bold  py-[5px] px-[16px] rounded-lg mt-2">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    />
  );
};

export default Calendar10;
