import Image from "next/image";
import GroupImg from "@/assets/images/hubspark/Group.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#F4F4F4]">
      <div className="flex justify-end">
        <Image
          alt="GroupImage"
          src={GroupImg}
          width={178}
          height={133}
          priority
        />
      </div>
      <div>
        <div className="container flex flex-col mx-auto rounded-lg pt-4 my-2">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full lg:p-12">
              <form
                action={""}
                className="flex items-center w-[80%] md:w-[33%]">
                <div className="flex flex-col w-full h-full pb-6 text-center rounded-3xl">
                  <h3 className="mb-10 text-4xl font-semibold text-dark-grey-900  text-start text-[#631363] ">
                    Sign up
                  </h3>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="flex items-center w-full px-5 py-4 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="flex items-center w-full px-5 py-4 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    autoComplete=""
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <input
                    id="confirmpassword"
                    type="confirmpassword"
                    placeholder="Confirm Password"
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />

                  <div className="flex justify-end">
                    <button className="w-[40%]  px-4 py-3 mb-2 text-sm font-bold leading-none  transition duration-300 md:w-28 rounded-xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500 text-[#27272D] bg-[#40F440]">
                      Login
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed my-4 text-[#606060]">
                    Already have an account?{" "}
                    <Link href="/signin" className="font-bold text-[#631363]">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
