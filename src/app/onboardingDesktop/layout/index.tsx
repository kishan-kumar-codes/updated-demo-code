import React from 'react'
import Header from './header';
import BottomBar from "./bottomBar"

interface layoutProps {
    Childrens: React.ReactNode
    hHeading: string,
}

const index: React.FC<layoutProps> = ({ Childrens, hHeading }) => {
    function showDrawer() {
        
    }
    
    return (
        <div className='h-screen w-screen flex flex-col bg-cultured'>
            <Header module='Account Setup' />
            <div className='flex-1 overflow-x-hidden'>
                {Childrens}
            </div>
            {/* <BottomBar /> */}
        </div>
    )
}

export default index