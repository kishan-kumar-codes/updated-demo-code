import { FC, useState } from "react";
import { TagsInput } from "react-tag-input-component";

interface propsInterface {
  hideDialog: () => void;
}

const NewFilter: FC<propsInterface> = ({ hideDialog }) => {
  const [selected, setSelected] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <div className="z-[222222]  flex justify-center items-center overflow-y-auto   fixed left-0 top-0  h-screen w-screen transparentBg  ">
      <div className="w-full h-full transparentBg absolute z-10 " />
      <div className="w-[670px] h-full max-h-[900px] overflow-y-auto  rounded-3xl bg-cultured px-[36px] z-20 py-[20px] ">
        <div>
          <h5 className="text-[20px] 2xl:text-[30xp] font-bold text-darkSilverColor">
            Save Filter
          </h5>
          <p className="text-[19px] 2xl:text-[24px] text-darkSilverColor mt-[15px]">
            Start by giving it a name and choose who can view it.
          </p>
        </div>
        <div className="mt-[30px]">
          <label
            className="text-[20px] 2xl:text-[26px] font-bold text-darkSilverColor"
            htmlFor=""
          >
            Name Your Filter *
          </label>
          <input
            className="w-full h-[48px] 2xl:h-[65px] bg-white outline-none rounded-lg"
            type="text"
          />
        </div>
        <div>
          <h5 className="text-[20px] 2xl:text-[26px] mt-[23px] font-bold text-darkSilverColor">
            Visible to
          </h5>

          <span className="ml-[33px] flex mt-[20px]">
            <input
              className="h-[20x] 2xl:h-[27px] w-[20px] 2xl:w-[27px]"
              type="radio"
              name="visibility"
              value="visibleTo"
              onChange={() => setSelectedOption("visibleTo")}
            />
            <h5 className="text-[20px] 2xl:text-[26px] font-bold text-darkSilverColor ml-[13px]">
              Visible to
            </h5>
          </span>

          <span className="ml-[33px] flex mt-[17px] ">
            <input
              className="h-[20x] 2xl:h-[27px] w-[20px] 2xl:w-[27px]"
              type="radio"
              name="visibility"
              value="specificUsers"
              onChange={() => setSelectedOption("specificUsers")}
            />
            <h5 className="text-[20px] 2xl:text-[26px] font-bold text-darkSilverColor ml-[13px]">
              Specific Users
            </h5>
          </span>

          {selectedOption === "specificUsers" && (
            <div className="my-3">
                <TagsInput
              classNames={{
                tag: "palatinatePurpleImportant text-white",
                input:
                  "w-full h-[45px] 2xl:h-[45px] bg-white outline-none rounded-lg",
                tagInputField:
                  "w-full h-[65px] bg-white outline-none rounded-lg mt-[12px]",
                tagInput:
                  "w-full h-[52px] 2xl:h-[65px] bg-white outline-none rounded-lg mt-[12px]",
              }}
              value={selectedUsers}
              onChange={setSelectedUsers}
              name="Users"
              placeHolder="Enter Users"
            />
            </div>
          )}

          <span className="mt-[25px] flex ml-[33px]">
            <input
              className="h-[20x] 2xl:h-[27px] w-[20px] 2xl:w-[27px]"
              type="radio"
              name="visibility"
              value="specificTeams"
              onChange={() => setSelectedOption("specificTeams")}
            />
            <h5 className="text-[20px] 2xl:text-[26px] flex font-bold text-darkSilverColor ml-[13px]">
              Specific Teams
            </h5>
          </span>

          <span className="mt-[21px] flex ml-[30px]">
            <input
              className="h-[20px] 2xl:h-[27px] w-[27px]"
              type="radio"
              name="visibility"
              value="usersAcrossLocations"
              onChange={() => setSelectedOption("usersAcrossLocations")}
            />
            <h5 className="text-[20px] 2xl:text-[26px] font-bold text-darkSilverColor ml-[13px]">
              Users Across Locations
            </h5>
          </span>
        </div>
        {selectedOption === "specificUsers" && (
        <div className="h-[88px] 2xl:h-[107px] mt-[26px] flex justify-center items-center rounded-lg px-[15px] w-full bg-chinesWhite">
          <span>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4009 32.7998C7.60088 32.7998 0.300781 25.4997 0.300781 16.6997C0.300781 7.89971 7.60088 0.600098 16.4009 0.600098C25.2009 0.600098 32.501 7.89971 32.501 16.6997C32.301 25.7997 25.2009 32.7998 16.4009 32.7998ZM16.4009 3.69971C9.10088 3.69971 3.20117 9.6999 3.20117 16.8999C3.20117 24.1999 9.20088 30.1001 16.4009 30.1001C23.6009 30.1001 29.6011 24.0999 29.6011 16.8999C29.6011 9.6999 23.4009 3.69971 16.4009 3.69971Z"
                fill="#631363"
              />
              <path
                d="M16.4004 12.5C15.5004 12.5 14.9004 11.8 14.9004 11C14.9004 10.2 15.6004 9.5 16.4004 9.5C17.3004 9.5 17.9004 10.2 17.9004 11C17.9004 11.8 17.0004 12.5 16.4004 12.5Z"
                fill="#631363"
              />
              <path
                d="M16.4004 27.1001C15.5004 27.1001 14.9004 26.4001 14.9004 25.6001V16.2998C14.9004 15.3998 15.6004 14.7998 16.4004 14.7998C17.3004 14.7998 17.9004 15.4998 17.9004 16.2998V25.6001C17.7004 26.4001 17.0004 27.1001 16.4004 27.1001Z"
                fill="#631363"
              />
            </svg>
          </span>
          <p className="ml-2">
            Users will see conversations only from locations they have access
            to.
          </p>
        </div>
        )}
        <div className="flex justify-end mt-[37px] ">
          <button
            onClick={() => hideDialog()}
            className="w-[200px] h-[52px] 2xl:h-[73px] rounded-lg border border-palatinatePurple text-[26px] 2xl:text-[36px] text-palatinatePurple font-bold flex justify-center items-center"
          >
            Cancel
          </button>
          <button className="w-[200px] ml-[27px] h-[52px] 2xl:h-[73px] rounded-lg bg-palatinatePurple text-white text-[26px] 2xl:text-[36px]  font-bold flex justify-center items-center">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFilter;
