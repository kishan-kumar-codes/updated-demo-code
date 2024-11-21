import React, { useState } from 'react';
import HeadBar from '../citations-builder/HeadBar';
import { CreateBrandTooltip } from './CreateBrandTooltip';
import { LockSvg } from '@/svgs/Onboarding-Campaign-TCR/svgs';

interface Field {
  label: string;
  type: string;
  name: string;
  info?: boolean;
  message?: string;
  optional?: boolean;
  options?: string[];
  selected?: string;
  lock?:boolean
}

const CreateNewBrand = () => {
  const [fields, setFields] = useState<Field[]>([
    { label: 'DBA or Brand name', type: 'text', name: 'brandName', info: true, message: "Brand/Marketing/DBA name of the business." },
    { label: 'Company Name', type: 'text', name: 'companyName', info: true, message: "The legal name of the business." },
    { label: 'Tax Number/ID/EIN', type: 'text', name: 'taxId', info: true, message: "Tax ID of the business." },
    { label: 'Country Code', type: 'text', name: 'countryCode', info: true, message: "2 letter ISO-2 country code of Tax ID issuing country. E.g. US, CA" },
    { label: 'Alternate business ID ', type: 'text', name: 'businessId', optional: true },
    { label: 'Alternate business ID type ', type: 'select', name: 'businessIdType', options: ['DUNS', 'LEI', 'GIIN'], optional: true, selected: '' },
    { label: 'First Name', type: 'text', name: 'firstName' },
    { label: 'Last Name', type: 'text', name: 'lastName' },
    { label: 'Phone ', type: 'tel', name: 'phone' },
    { label: 'Mobile Phone', type: 'tel', name: 'mobilePhone' },
    { label: 'Street', type: 'text', name: 'street' },
    { label: 'City', type: 'text', name: 'city' },
    { label: 'State', type: 'text', name: 'state' },
    { label: 'Postal Code', type: 'text', name: 'postalCode' },
    { label: 'Country', type: 'text', name: 'country' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Stock Symbol', type: 'text', name: 'stockSymbol' , lock:true},
    { label: 'Stock Exchange', type: 'text', name: 'stockExchange' , lock:true},
    { label: 'Website ', type: 'url', name: 'website', optional: true },
    { label: 'Brand Relationship', type: 'text', name: 'brandRelationship' },
    { label: 'Vertical', type: 'text', name: 'vertical' }
  ]);

  const Dropdown = ({ options, selected, onSelect }: { options: string[], selected: string, onSelect: (selected: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
      onSelect(option);
      setIsOpen(false); 
    };

    return (
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="w-full h-[33px] border border-[#631363] rounded-lg text-[#631363] font-[700] focus:outline-none focus:ring-0 bg-white px-3 cursor-pointer flex items-center justify-between"
        >
          <span>{selected || "Select"}</span>
          <span className="text-[#631363]">&#9662;</span>
        </div>
        {isOpen && (
          <div className="absolute w-full bg-white border border-[#631363] -mt-8 rounded-lg shadow-lg z-10">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="text-black px-3 py-2 text-[14px] font-[700] hover:text-[#631363] cursor-pointer h-[34px]"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const handleDropdownSelect = (index: number, selected: string) => {
    const updatedFields = [...fields];
    updatedFields[index].selected = selected;
    setFields(updatedFields);
  };

  return (
    <>
      <HeadBar title="Create New Brand" />
      <div className='w-full px-5 py-4 '>
        <form className="space-y-4 flex flex-col items-center w-full ">
          {fields.map((field, index) => (
            <div key={index} className='w-full'>
              <label className="flex text-[#6D6D6D] text-[14px] leading-4 font-[700] mb-1 gap-1">
                {field.label}
                {field.message && (<CreateBrandTooltip tooltipMessage={field.message} />)}
                {field.optional && (<p className='text-[#631363] text-[16px] font-[400]'>(optional)</p>)}
              </label>
              {field.type === 'select' ? (
                <Dropdown
                  options={field.options!}
                  selected={field.selected || ""}
                  onSelect={(selected) => handleDropdownSelect(index, selected)}
                />
              ) : (
                <div className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    className={`w-full h-[33px] border rounded-xl focus:outline-none focus:ring focus:border-blue-300 ${['stockSymbol', 'stockExchange'].includes(field.name) ? 'pr-10' : ''}`}
                  />
                  {field.lock && (
                    <span className="absolute inset-y-0 right-3 flex items-center">
                     <LockSvg/>
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default CreateNewBrand;
