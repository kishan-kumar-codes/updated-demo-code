import { FC } from "react"

interface propsInterface {
    hideDialogLocation: () => void
}

const NewFilter: FC<propsInterface> = ({ hideDialogLocation }) => {
    return (
        <div className="z-[222222]  flex justify-center items-center  fixed left-0 top-0 h-screen w-screen transparentBg  ">
            <div onClick={()=> hideDialogLocation()} className="w-full h-full transparentBg absolute z-10 " />
            <div className="w-[723px] h-[607px] rounded-3xl bg-cultured px-[36px] z-20 py-[47px] ">
                <div>
                    <h5 className="text-[24px] 2xl:text-[30px] font-bold text-darkSilverColor">Add To Another Location</h5>
                    <p className="text-[20px] 3xl:text-[24px] text-darkSilverColor mt-[15px]">Add a conversation with John Doe in a new location</p>
                </div>
                <div className="mt-[30px]">
                    <label className="text-[20px] 2xl:text-[26px] font-bold text-darkSilverColor" htmlFor="">Select a location</label>
                    <select className="w-full h-[50px] 2xl:h-[65px] bg-white outline-none rounded-lg" />
                </div>
                <div>
                    <h5 className="text-[20px] 2xl:text-[26px] mt-[23px]  font-bold text-darkSilverColor">Conversation history</h5>
                    <span className="ml-[33px] flex mt-[20px]">
                        <input className="h-[29px] w-[29px]" type="checkbox" />
                        <h5 className="text-[20px] 2xl:text-[26px] font-bold text-darkSilverColor ml-[13px]">Share the previous messages of this
                            conversation with the selected location</h5>
                    </span>
                 
                  

                </div>

              
                <div className="flex justify-end mt-[37px] ">
                    <button onClick={() => hideDialogLocation()} className="w-[200px] ml-[27px] h-[53px] 2xl:h-[73px] rounded-lg bg-palatinatePurple text-white text-[26px] 2xl:text-[36px]  font-bold flex justify-center items-center">Add</button>
                </div>
            </div>
        </div>
    )
}

export default NewFilter