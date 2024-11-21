import Link from "next/link"


const PreviewWidgetButton = () =>{
    return(
        <Link href='/demo-widget/widget'>
        <button
        className={`font-bold md:text-lg mt-0 md:mt-4 lg:text-[20px] border px-6 py-2 text-[10px] rounded-xl w-fit text-white text-center bg-[#631363]`}
      >
       
        Preview
        
      </button>
      </Link>
    )
}

export default PreviewWidgetButton