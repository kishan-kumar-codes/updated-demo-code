import { FC, useState } from "react"

interface propsInterface {
    setBulkAction: (value: boolean) => void
}

const BulkActions: FC<propsInterface> = ({ setBulkAction }) => {
    const [showNewestFilter, setShowNewestFilter] = useState(false)

    return (
        <div className="h-[98px] w-full bg-white mt-[13px] mb-[8px] py-[5px] rounded-lg" >
            <h5 className="text-[22px] font-bold flex justify-between mr-[27px] items-baseline text-darkSilverColor ml-[68px]">Bulk Actions
                <span className="cursor-pointer" onClick={() => setBulkAction(false)}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7996 12.7998C12.2996 13.2998 11.2996 13.2998 10.7996 12.7998L6.59937 8.59961L2.39941 12.7998C1.89941 13.2998 0.899414 13.2998 0.399414 12.7998C-0.100586 12.2998 -0.100586 11.2998 0.399414 10.7998L4.59937 6.59961L0.399414 2.39941C-0.100586 1.89941 -0.100586 0.899414 0.399414 0.399414C0.899414 -0.100586 1.89941 -0.100586 2.39941 0.399414L6.59937 4.59961L10.7996 0.399414C11.2996 -0.100586 12.2996 -0.100586 12.7996 0.399414C13.2996 0.899414 13.2996 1.89941 12.7996 2.39941L8.59937 6.59961L12.7996 10.7998C13.3996 11.2998 13.3996 12.2998 12.7996 12.7998Z" fill="#6D6D6D" />
                </svg>
                </span>
            </h5>
            <div className="ml-[68px] flex">
                <h5 className="text-[20px] text-darkSilverColor flex items-center">Show  <span className="text-palatinatePurple mx-[3px]">all</span> <span className="ml-[4px]">
                    <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.40039 5.7998L0.900391 0.0996094H12.2004L6.40039 5.7998Z" fill="#6D6D6D" />
                    </svg>
                </span></h5>
                <h5 className="text-[20px] text-darkSilverColor ml-[12px] flex items-center">Interactions older than   <span className="text-palatinatePurple mx-[3px]">15 mins</span> <span className="ml-[4px]">
                    <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.40039 5.7998L0.900391 0.0996094H12.2004L6.40039 5.7998Z" fill="#6D6D6D" />
                    </svg>
                </span></h5>

            </div>
            <div className="flex justify-between">
                <div className="flex justify-center">
                    <input type="checkbox" className="ml-[37px] w-[16px] h-[16px]" />
                    <h5 className="text-[20px] font-bold text-darkSilverColor ml-[14px]">3 of 23</h5>
                </div>
                <div>
                    <div className="relative">
                        <h5 onClick={() => setShowNewestFilter(!showNewestFilter)} className="relative cursor-pointer text-[20px] text-darkSilverColor mr-[14px] font-bold flex items-center">
                            Actions <span className="ml-[7px]"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.27681 7.44058L12.3711 2.36734C12.7707 1.96944 12.6708 1.3726 12.3711 0.974695C11.9716 0.67627 11.3722 0.67627 11.0726 0.974695L6.67763 5.3516L2.28245 0.974695C1.88291 0.576794 1.28368 0.576794 0.884134 0.974695C0.484586 1.3726 0.484586 1.96944 0.884134 2.36734L5.97823 7.44058C6.27789 7.739 6.97714 7.739 7.27681 7.44058Z" fill="#631363" />
                            </svg>
                            </span>


                        </h5>
                        {
                            showNewestFilter &&
                            <div className="absolute w-[175px] flex flex-col justify-evenly pl-[19px]  bg-white border border-palatinatePurple right-0 z-30 top-7  rounded-3xl  h-[102px]">
                                <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Mark All As Read</h5>
                                <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Mark All As Unread</h5>
                                <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Bulk Actions</h5>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BulkActions