import Link from "next/link";
import React, { FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

interface MenuGroupProps {
  group: {
    mainGroup: string;
    subGroup: {
      group: string;
      menus: string[];
    };
  };
}

const MenuGroup: FC<MenuGroupProps> = ({ group }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const removeDmParam = () => {
    const updatedParams = new URLSearchParams(searchParams?.toString());
    updatedParams.delete("dm");
    router.push(`${pathname}?${updatedParams.toString()}`);
  };

  return (
    <ul className="text-PhilippineGray font-bold w-full mt-3">
      <h5 className="text-[16px] font-bold text-palatinatePurple">
        {group.mainGroup}
      </h5>
      <span className="block">{group.subGroup.group}</span>
      {group.subGroup.menus.map((menu, ind) => (
        <li
          key={ind}
          className={`ripple cursor-pointer text-[16px] mt-[8px] pb-0 font-normal flex justify-between ${searchParams?.get("dm") === menu && "bg-white rounded-lg p-0.5"} `}>
          {menu === "Instagram" ? (
            <Link
              className="z-50"
              href={{
                pathname: "/inbox",
                query: {
                  name: "All Messages",
                  dm: menu,
                },
              }}>
              <span className="flex relative">
                <span className=" absolute ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0996 19.9998C4.69961 19.9998 0.299561 15.5995 0.299561 10.1995C0.299561 4.79946 4.69961 0.399658 10.0996 0.399658C15.4996 0.399658 19.8997 4.79946 19.8997 10.1995C19.9997 15.5995 15.5996 19.9998 10.0996 19.9998Z"
                      fill="url(#paint0_linear_1_6198)"
                    />
                    <path
                      d="M10.0996 4.59937C11.8996 4.59937 12.0996 4.59937 12.7996 4.59937C13.4996 4.59937 13.7996 4.69956 13.9996 4.79956C14.2996 4.89956 14.4996 5.09956 14.7996 5.29956C14.9996 5.49956 15.1996 5.79937 15.2996 6.09937C15.3996 6.29937 15.4996 6.69956 15.4996 7.29956C15.4996 7.99956 15.4996 8.19976 15.4996 9.99976C15.4996 11.7998 15.4996 11.9995 15.4996 12.6995C15.4996 13.3995 15.3996 13.6997 15.2996 13.8997C15.1996 14.1997 14.9996 14.3995 14.7996 14.6995C14.5996 14.8995 14.2996 15.0995 13.9996 15.1995C13.7996 15.2995 13.3996 15.3997 12.7996 15.3997C12.0996 15.3997 11.8996 15.3997 10.0996 15.3997C8.29961 15.3997 8.09966 15.3997 7.39966 15.3997C6.69966 15.3997 6.39959 15.2995 6.19958 15.1995C5.89959 15.0995 5.69966 14.8995 5.39966 14.6995C5.19966 14.4995 4.99966 14.1997 4.89966 13.8997C4.79966 13.6997 4.69958 13.2995 4.69958 12.6995C4.69958 11.9995 4.69958 11.7998 4.69958 9.99976C4.69958 8.19976 4.69958 7.99956 4.69958 7.29956C4.69958 6.59956 4.79966 6.29937 4.89966 6.09937C4.99966 5.79937 5.19966 5.59956 5.39966 5.29956C5.59966 5.09956 5.89959 4.89956 6.19958 4.79956C6.39959 4.69956 6.79966 4.59937 7.39966 4.59937C8.09966 4.59937 8.29961 4.59937 10.0996 4.59937ZM10.0996 3.39966C8.29961 3.39966 7.99956 3.39966 7.29956 3.39966C6.59956 3.39966 6.09959 3.49946 5.69958 3.69946C5.29958 3.89946 4.89963 4.09976 4.49963 4.49976C4.09963 4.89976 3.89958 5.19946 3.69958 5.69946C3.49958 6.09946 3.39966 6.59956 3.39966 7.29956C3.39966 7.99956 3.39966 8.19937 3.39966 10.0994C3.39966 11.9994 3.39966 12.1997 3.39966 12.8997C3.39966 13.5997 3.49958 14.0998 3.69958 14.4998C3.89958 14.8998 4.09963 15.2995 4.49963 15.6995C4.89963 16.0995 5.19958 16.2998 5.69958 16.4998C6.09959 16.6998 6.59956 16.7996 7.29956 16.7996C7.99956 16.7996 8.19961 16.7996 10.0996 16.7996C11.9996 16.7996 12.1997 16.7996 12.8997 16.7996C13.5997 16.7996 14.0996 16.6998 14.4996 16.4998C14.8996 16.2998 15.2996 16.0995 15.6996 15.6995C16.0996 15.2995 16.2996 14.9998 16.4996 14.4998C16.6996 14.0998 16.7996 13.5997 16.7996 12.8997C16.7996 12.1997 16.7996 11.9994 16.7996 10.0994C16.7996 8.29937 16.7996 7.99956 16.7996 7.29956C16.7996 6.59956 16.6996 6.09946 16.4996 5.69946C16.2996 5.29946 16.0996 4.89976 15.6996 4.49976C15.2996 4.09976 14.9996 3.89946 14.4996 3.69946C14.0996 3.49946 13.5997 3.39966 12.8997 3.39966C12.1997 3.39966 11.8996 3.39966 10.0996 3.39966Z"
                      fill="white"
                    />
                    <path
                      d="M10.0996 6.69946C8.19961 6.69946 6.69958 8.19937 6.69958 10.0994C6.69958 11.9994 8.19961 13.4998 10.0996 13.4998C11.9996 13.4998 13.4996 11.9994 13.4996 10.0994C13.4996 8.19937 11.9996 6.69946 10.0996 6.69946ZM10.0996 12.3997C8.89961 12.3997 7.89966 11.3995 7.89966 10.1995C7.89966 8.99946 8.89961 7.99976 10.0996 7.99976C11.2996 7.99976 12.2996 8.99946 12.2996 10.1995C12.2996 11.3995 11.3996 12.3997 10.0996 12.3997Z"
                      fill="white"
                    />
                    <path
                      d="M13.6996 7.39966C14.1414 7.39966 14.4996 7.04119 14.4996 6.59937C14.4996 6.15754 14.1414 5.79956 13.6996 5.79956C13.2578 5.79956 12.8997 6.15754 12.8997 6.59937C12.8997 7.04119 13.2578 7.39966 13.6996 7.39966Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_6198"
                        x1="3.23988"
                        y1="17.1443"
                        x2="17.1492"
                        y2="3.23507"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD521" />
                        <stop offset="0.0551048" stop-color="#FFD020" />
                        <stop offset="0.1241" stop-color="#FEC01E" />
                        <stop offset="0.2004" stop-color="#FCA71B" />
                        <stop offset="0.2821" stop-color="#FA8316" />
                        <stop offset="0.3681" stop-color="#F85510" />
                        <stop offset="0.4563" stop-color="#F51E09" />
                        <stop offset="0.5" stop-color="#F30005" />
                        <stop offset="0.5035" stop-color="#F20007" />
                        <stop offset="0.5966" stop-color="#E1003B" />
                        <stop offset="0.6879" stop-color="#D30067" />
                        <stop offset="0.7757" stop-color="#C70088" />
                        <stop offset="0.8589" stop-color="#BF00A0" />
                        <stop offset="0.9357" stop-color="#BB00AF" />
                        <stop offset="1" stop-color="#B900B4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                <span className="ml-6">{menu}</span>
                {searchParams?.get("dm") === menu && (
                  <button
                    onClick={removeDmParam}
                    className="ml-2 p-1 z-50 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label="Remove filter">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </span>
            </Link>
          ) : menu === "Messenger" ? (
            <Link
              className="z-50"
              href={{
                pathname: "/inbox",
                query: {
                  name: "All Messages",
                  dm: menu,
                },
              }}>
              <span className="flex relative">
                <span className=" absolute ">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="messenger">
                    <path
                      fill="#1E88E5"
                      d="M8 0C3.582 0 0 3.316 0 7.407c0 2.331 1.163 4.41 2.981 5.768V16l2.724-1.495c.727.201 1.497.31 2.295.31 4.418 0 8-3.316 8-7.407C16 3.316 12.418 0 8 0z"></path>
                    <path
                      fill="#FAFAFA"
                      d="M8.795 9.975 6.758 7.802 2.783 9.975l4.372-4.642 2.087 2.173 3.926-2.173z"></path>
                  </svg>
                </span>

                <span className="ml-6">{menu}</span>
                {searchParams?.get("dm") === menu && (
                  <button
                    onClick={removeDmParam}
                    className="ml-2 p-1 z-50 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label="Remove filter">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </span>
            </Link>
          ) : menu === "Google" ? (
            <Link
              className="z-50"
              href={{
                pathname: "/inbox",
                query: {
                  name: "All Messages",
                  dm: menu,
                },
              }}>
              <span className="flex relative">
                <span className=" absolute ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    id="google">
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                  </svg>
                </span>

                <span className="ml-6">{menu}</span>
                {searchParams?.get("dm") === menu && (
                  <button
                    onClick={removeDmParam}
                    className="ml-2 p-1 z-50 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label="Remove filter">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </span>
            </Link>
          ) : menu === "Yelp" ? (
            <span className="flex relative">
              <span className=" absolute ">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="yelp">
                  <g fill="#f44336">
                    <path d="M12.062 17.662c.038-.934-1.266-1.395-1.829-.671-1.214 1.466-3.493 4.129-3.624 4.457-.347 1 1.28 1.638 2.312 2.024 1.121.42 1.919.591 2.392.51.342-.071.562-.248.67-.533.089-.245.08-5.568.079-5.787zM11.522.642c-.08-.31-.295-.51-.647-.6-1.037-.272-4.966.838-5.698 1.624-.234.238-.318.515-.248.828l4.985 8c1.018 1.628 2.298 1.139 2.214-.681h-.001c-.066-1.199-.544-8.775-.605-9.171zM9.413 15.237c.942-.29.872-1.671.07-1.995-2.139-.881-5.06-2.114-5.285-2.114-.876-.052-1.045 1.201-1.134 2.096-.08.81-.084 1.552-.014 2.229.066.714.221 1.443.933 1.485.309-.001 5.383-1.686 5.43-1.701zM20.514 12.052c.403-.281.342-.7.347-.838-.108-1.024-1.83-3.61-2.692-4.029-.328-.152-.614-.143-.858.029-.323.219-3.24 4.444-3.413 4.619-.567.767.244 1.871 1.092 1.648l-.014.029c.341-.115 5.274-1.282 5.538-1.458zM15.321 15.586c-.881-.315-1.712.81-1.2 1.581.145.247 2.809 4.705 3.043 4.871.225.191.507.219.83.095.905-.362 2.865-2.876 2.992-3.857.051-.348-.042-.619-.286-.814-.197-.176-5.379-1.876-5.379-1.876z"></path>
                  </g>
                </svg>
              </span>
              <Link
                href={{
                  pathname: "/inbox",
                  query: {
                    name: "All Messages",
                    dm: menu,
                  },
                }}>
                <span className="ml-6">{menu}</span>
              </Link>
              {searchParams?.get("dm") === menu && (
                <button
                  onClick={removeDmParam}
                  className="ml-2 p-1 z-50 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  aria-label="Remove filter">
                  <X className="h-4 w-4" />
                </button>
              )}
            </span>
          ) : (
            <span
              className={`${
                group.mainGroup === "DIRECT MESSAGES" ? "ml-6" : "ml-[10px]"
              }`}>
              {menu}
            </span>
          )}
          <span className="mr-[9px]">54</span>
        </li>
      ))}
      <div className="h-[6px] w-[95%] mt-[15px] bg-palatinatePurple" />
    </ul>
  );
};

export default MenuGroup;
