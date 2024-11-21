import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useContext,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MyContext } from "../../utils/MyContext";
// import Layout from "@/pages/onboarding/layout";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

interface GooglePrediction {
  description: string;
}

interface GoogleAutocompleteService {
  getPlacePredictions: (
    options: object,
    callback: (predictions: GooglePrediction[]) => void
  ) => void;
}

interface GoogleWindow extends Window {
  google?: any;
  initGoogleMaps?: () => void;
}

declare let window: GoogleWindow;

export default function AutoComplete() {
  const context = useContext(MyContext);
  // const { contextData, updateContextData } = context;
  const { data } = useSession();
  const [inputValue, setInputValue] = useState("");
  const [dropdownItems, setDropdownItems] = useState<string[]>([]);
  const [showAutoDropdown, setShowAutoDropdown] = useState(false);
  const [showManualDropdown, setShowManualDropdown] = useState(false);
  const [showEnterManually, setShowEnterManually] = useState(false);
  const [manualInputValue, setManualInputValue] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualDropdownItems, setManualDropdownItems] = useState<string[]>([]);
  const autoCompleteRef = useRef<HTMLInputElement>(null);
  const autocompleteServiceRef = useRef<GoogleAutocompleteService | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedManualValue, setSelectedManualValue] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [zip, setZip] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("United States");

  // Ref for the container of the component to handle clicks outside of it
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to handle outside click
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      // Add null check for containerRef.current
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowAutoDropdown(false);
        setShowManualDropdown(false);
      }
    };

    // Add the outside click handler
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the outside click handler on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const loadScript = (url: string, callback: () => void) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = callback;
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);

      return () => {
        document.getElementsByTagName("head")[0].removeChild(script);
      };
    };

    const handleScriptLoad = () => {
      if (window.google) {
        autocompleteServiceRef.current =
          new window.google.maps.places.AutocompleteService();
      }
    };

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      // loadScript(
      //   `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&libraries=places&callback=initGoogleMaps`,
      //   handleScriptLoad
      // );
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&libraries=places&callback=initGoogleMaps`,
        handleScriptLoad
      ); 
    }, 500); // 500ms delay

    window.initGoogleMaps = handleScriptLoad;

    return () => {
      // Cleanup callback function
      delete window.initGoogleMaps;
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      setShowEnterManually(true);
      if (autocompleteServiceRef.current) {
        autocompleteServiceRef.current.getPlacePredictions(
          {
            input: event.target.value,
            types: ["establishment"],
          },
          (predictions) => {
            const items = predictions?.map((item) => item.description) || [];
            setDropdownItems(items);
            setShowAutoDropdown(items.length > 0);
          }
        );
      }
    } else {
      setDropdownItems([]);
      setShowAutoDropdown(false);
      setShowEnterManually(false);
    }

    // If the manual dropdown is open, close it.
    if (manualDropdownItems.length > 0) {
      setManualDropdownItems([]);
      setShowManualInput(false);
      setShowManualDropdown(false);
    }
  };

  const handleEnterManuallyClick = () => {
    setInputValue("");
    setManualInputValue("");
    setShowEnterManually(false);
    setShowAutoDropdown(false); // closes the auto dropdown
    setShowManualInput(true); // opens the manual input field
  };

  const handleManualInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setManualInputValue(event.target.value);
    if (event.target.value && autocompleteServiceRef.current) {
      autocompleteServiceRef.current.getPlacePredictions(
        {
          input: event.target.value,
          types: ["address"],
        },
        (predictions) => {
          const items = predictions?.map((item) => item.description) || [];
          setManualDropdownItems(items);
          setShowManualDropdown(items.length > 0);
        }
      );
    } else {
      setManualDropdownItems([]);
      setShowManualDropdown(false);
    }

    // If the original dropdown is open, close it.
    if (dropdownItems.length > 0) {
      setDropdownItems([]);
      setShowAutoDropdown(false);
    }
  };

  const handleDropdownItemClick = (item: string) => {
    setInputValue(item);
    setSelectedValue(item);
    setShowAutoDropdown(false);
  };

  const handleMagnifyingClick = () => {
    setShowAutoDropdown(false);
  };

  const handleManualDropdownItemClick = (item: string) => {
    setManualInputValue(item);
    setSelectedManualValue(item);
    setShowManualDropdown(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowAutoDropdown(false);
      setShowManualDropdown(false);
    }
  };

  const handleSuiteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSuite(event.target.value);
  };
  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedState(event.target.value);
  };
  const handleZipChange = (event: ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const router = useRouter();

  const handleContinueClick = async () => {
    let output = showManualInput
      ? {
          manualInput: manualInputValue,
          suite: suite,
          city: city,
          state: selectedState,
          zip: zip,
          country: selectedCountry,
        }
      : { selected: selectedValue };
    const contextValue = showManualInput
      ? `${manualInputValue}, ${suite}, ${city}, ${selectedState}, ${selectedCountry}`
      : selectedValue;

    // updateContextData({ businessInfo: contextValue });
    if (context) {
      context.updateContextData({ businessInfo: contextValue });
    }

    // data.user.businessInfo = output;

    // router
    //   .push("/onboarding/trials/input-phone-number")
    //   .then((success) => {
    //     if (success) {
    //     } else {
    //     }
    //   })
    //   .catch((error) =>
    //     console.error("An error occurred during navigation:", error)
    //   );
    try {
      await router.push("/onboarding/trials/input-phone-number");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <div
      className="w-full flex relative items-center flex-col px-[43px]"
      ref={containerRef}
      style={{ position: "relative" }}>
      <div className="relative w-full flex justify-center h-[44px]">
        <input
          ref={autoCompleteRef}
          type="text"
          placeholder="Business Name"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-[289px] bg-white h-[33px]  mt-[13px]  text-[12px] text-darkSilverColor pl-8 py-[10px]  rounded-2xl md:mt-20 md:w-[594px] md:h-[68px] md:text-[26px] lg:text-[30px] "
          style={{
            // paddingLeft: "25px", // make room for the magnifying glass icon
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23666' d='M14.7 13.3l-3-3a6.5 6.5 0 10-.9.9l3 3a.7.7 0 101-1zM1 6.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "15px 15px",
            backgroundPosition: "5px center",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "6px",
            height: "15px",
            width: "15px", // area to cover the magnifying glass
            cursor: "pointer",
          }}
          onClick={handleMagnifyingClick}></div>
      </div>

      {showAutoDropdown && (
        <div
        className="w-[289px] px-6 top-[50px] md:w-[594px] md:top-[152px] h-[200px] md:h-[416px] md:px-[50px]"
          style={{
            position: "absolute",
            // top: 50,
            zIndex: 1,
            background: "#fff",
            border: "2px solid #ccc",
            marginTop: "0px",
            // width: "300px",
            overflowY: "auto",
            // maxHeight: "200px", // maxHeight to enable scroll
          }}>
          {showEnterManually && (
            <div
           
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                borderBottom: "2px solid transparent",
                // padding: '4px 4px 4px 0px',
                fontSize: "0.8em", // Decrease font size
              }}>
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  //textOverflow: 'ellipsis',
                }}>
                <div
                 className='text-[10px] md:text-[18px]'
                style={{ marginRight: "0px" }}>
                  Don&apos;t see your business?
                </div>
              </div>
              <button
                onClick={handleEnterManuallyClick}
                style={{
                  //textDecoration: 'underline',
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  paddingLeft: "4px",
                  fontSize: "0.85em",
                  paddingTop: "2px",
                }}>
                <span
                className='text-[10px] md:text-[18px]'
                style={{ color: "#007bff" }}>Enter it manually</span>
                <span>.</span>
              </button>
            </div>
          )}
          {dropdownItems.map((item, index) => {
            const [name, ...rest] = item.split(","); // split the string at each comma
            return (
              <div
                key={index}
                onClick={() => handleDropdownItemClick(item)}
                style={{
                  cursor: "pointer",
                  marginTop: "0px",
                  marginBottom: "0px",
                  padding: "6px",
                }}>
                <div className="text-[12px] md:text-[26px]">
                  <b>{name}</b>
                </div>
                {rest.length > 0 && (
                  <div
                  className="text-[10px] md:text-[18px]"
                  style={{  color: "#555" }}>
                    {rest.join(",").substring(1)}
                  </div>
                )}
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              borderTop: "2px solid transparent",
              padding: "4px",
            }}>
            <Image
            className="w-[74px] h-[24px] md:w-[150px] md:h-[50px]"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
              alt="Powered by Google"
              width={74}
              height={24}
            />
            <a
            className="text-[12px] md:text-[26px] ml-1"
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#333", textDecoration: "underline" }}>
              Powered by Google
            </a>
          </div>
        </div>
      )}
     
     {showManualInput && (
  <div>
    <div className="mt-[8px] md:mt-[20px]">
      <input
        type="text"
        placeholder="Business Address"
        value={manualInputValue}
        onChange={handleManualInputChange}
        onKeyDown={handleKeyDown}
        className="w-[289px] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg 
                   md:w-[594px] md:h-[68px] md:text-[26px] md:py-0 md:rounded-2xl lg:text-[30px]"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Suite/Unit/Building (optional)"
        value={suite}
        onChange={handleSuiteChange}
        className="w-[289px] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg 
                   md:w-[594px] md:h-[68px] md:text-[26px] md:py-0 md:rounded-2xl lg:text-[30px]"
      />
    </div>
    <div className="w-[289px] md:w-[594px] flex justify-between">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={handleCityChange}
        className="w-[47%] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg 
                   md:w-[49%] md:h-[68px] md:text-[26px] md:py-0 md:rounded-2xl lg:text-[30px]"
      />
      <input
        type="text"
        placeholder="State/Province"
        value={selectedState}
        onChange={handleStateChange}
        className="w-[47%] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg 
                   md:w-[49%] md:h-[68px] md:text-[26px] md:py-0 md:rounded-2xl lg:text-[30px]"
      />
    </div>
    <div className="w-[289px] md:w-[594px] flex justify-between">
      <input
        type="text"
        placeholder="ZIP/Postal Code"
        value={zip}
        onChange={handleZipChange}
        className="w-[47%] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg 
                   md:w-[49%] md:h-[68px] md:text-[26px] md:py-0 md:rounded-2xl lg:text-[30px]"
      />
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-[47%] bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg 
                   md:w-[49%] md:h-[68px] md:text-[26px] md:py-0 md:rounded-2xl lg:text-[30px]"
      >
        <option value="United States">United States</option>
        <option value="Afghanistan">Afghanistan</option>
        {/* Other options */}
      </select>
    </div>
  </div>
)}


      <button
        className="text-[16px] md:text-[36px] font-bold text-white py-[10px]  mt-[17px]  w-[221px] md:w-[580px] md:mt-40  md:py-4 text-center bg-palatinatePurple rounded-2xl md:rounded-[30px]"
        onClick={handleContinueClick}
        style={{ cursor: "pointer" }}>
        Continue
      </button>
    </div>
  );
}
