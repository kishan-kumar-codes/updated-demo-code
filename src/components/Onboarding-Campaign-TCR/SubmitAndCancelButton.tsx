import React from 'react'
import { Button } from '../ui/button'

const SubmitAndCancelButton = () => {
    return (
        <>
            <div className='w-full flex justify-between'>
                <Button className="   text-[#FFFFFF] bg-[#631363] py-3 w-[137px] h-[34px] font-[600] text-[18px]  rounded-lg">
                    Continue
                </Button>
                <Button className="bg-[#40F440] text-[#27272D] py-3 w-[137px] h-[34px] font-[600] text-[18px] rounded-lg ">
                    Support
                </Button>
            </div>
        </>
    )
}

export default SubmitAndCancelButton
