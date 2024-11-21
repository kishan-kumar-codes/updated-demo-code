import React, { useState, useEffect, useRef } from 'react';

interface Industry {
    id: string;
    name: string;
}

interface DropDownProps {
    selectedIndustry: string | null;
    setSelectedIndustry: React.Dispatch<React.SetStateAction<string | null>>;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const industries: Industry[] = [
    {
        id: 'restaurant',
        name: 'Restaurant',
    },
    {
        id: 'roofing',
        name: 'Roofing',
    },
    {
        id: 'tech',
        name: 'Tech',
    },
];

export default function DropDown({ selectedIndustry, setSelectedIndustry, searchTerm, setSearchTerm }: DropDownProps) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Create a ref to the dropdown container

    const filteredIndustries = industries.filter(industry =>
        industry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectClick = () => {
        setShowDropdown(!showDropdown);
        setIsActive(!isActive);  // Toggle active state when dropdown is clicked
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
                setIsActive(false); // Optional, if you want to deactivate the border when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <div onClick={handleSelectClick}
            className='text-darkSilverColor'
                 style={{
                   
                     padding: isActive ? '1px 4px' : '2px 5px',
                     cursor: 'pointer',
                     //display: 'inline-block',
                     display: 'flex',
                     alignItems: 'center',
                     backgroundColor: '#fff',
                     height: '33px',
                     //width: isActive ? '86px' : '88px',
                     //width: isActive ? '142px' : '144px',
                     width: '144px',
                     lineHeight: '19px',
                     fontSize: '13px',
                     borderRadius: '4px',
                     fontFamily: 'system-ui, sans-serif',
                     //fontWeight: 'bold'
                     fontWeight: 400
                 }}>
                <span style={{ flex: 1 }}> {/* Added to push the arrow to the right */}
                    {selectedIndustry || 'Select'}
                </span>
                <span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="12px" width="12px"
                         style={{ filter: 'brightness(0.5)' }}>
                        <g id="SVGRepo_bgCarrier" strokeWidth="5"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.9999 13.9394L17.4696 8.46973L18.5303 9.53039L11.9999 16.0607L5.46961 9.53039L6.53027 8.46973L11.9999 13.9394Z"
                                  fill="#000">
                            </path>
                        </g>
                    </svg>
                </span>
            </div>

            {showDropdown && (
                <div style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    position: 'absolute',
                    backgroundColor: '#fff',
                    zIndex: 1000,
                    //width: '120px'
                    width: '135px'
                }}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ width: '95%', marginBottom: '10px' }}
                        className='w-[221px] bg-white h-[33px]  text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg'

                    />

                    <ul style={{ padding: 0, listStyleType: 'none', margin: 0 }}>
                        {filteredIndustries.map(ind => (
                            <li key={ind.id}
                                onClick={() => {
                                    setSelectedIndustry(ind.name);
                                    setSearchTerm('');
                                    setShowDropdown(false);
                                    setIsActive(true);
                                }}
                                style={{ cursor: 'pointer', padding: '2px 0'}}
                            >
                                {ind.name}
                            </li>
                        ))}
                        <li onClick={() => {
                            setSelectedIndustry('Other');
                            setSearchTerm('');
                            setShowDropdown(false);
                            setIsActive(true);
                        }}
                            style={{ cursor: 'pointer', padding: '2px 0'}}
                        >
                            Other
                        </li>
                    </ul>
                </div>
            )}

            <div>
                {selectedIndustry === 'Other' && (
                    <input
                        type="text"
                        placeholder="Enter different industry"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ marginTop: '10px', width: '145.5px' }}
                        className='w-[221px] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg'

                    />
                )}
            </div>
        </div>
    );
}
