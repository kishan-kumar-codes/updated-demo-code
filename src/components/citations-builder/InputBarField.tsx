import React from "react";
import { ChangeEvent } from "react";

interface InputBarFieldProps {
  label?: string;
  placeHolder?: string;
  textField?: boolean;
  files?: boolean;
  filesLabel?: string;
  gap?: number;
  fontFamily?: string;
  filesHelperText?: string;
  direction?: string;
  width?: number;
  specialChar?: string;
  LabelFontSize?: string;
  isMobile?: boolean;
  textCenter?: string;
  infoComponent?: React.ReactNode;
  value?: string;
  rows?: number;
  readonly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const labelStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  lineHeight: "normal",
};

const descriptionStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  // fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  paddingLeft: "6px",
  lineHeight: "normal",
};

/**
 * InputBarField component
 *
 * This component renders an input field with various options for customization, including
 * file upload fields, text fields, and text areas. It supports different styles and layouts
 * based on the provided props.
 *
 * @param {InputBarFieldProps} props - The properties for the InputBarField component.
 * @param {string} [props.label] - Optional label for the input field.
 * @param {string} [props.placeHolder] - Optional placeholder text for the input field.
 * @param {boolean} [props.textField=false] - If true, renders a textarea instead of a text input.
 * @param {boolean} [props.files=false] - If true, renders file upload inputs and labels.
 * @param {string} [props.filesLabel] - Label text for file inputs.
 * @param {number} [props.gap=1] - Gap between elements in the layout.
 * @param {string} [props.fontFamily="italic"] - Font family for the input field.
 * @param {string} [props.filesHelperText] - Helper text for file inputs.
 * @param {string} [props.direction="flex-col"] - Layout direction for the container.
 * @param {number} [props.width=350] - Width of the input field.
 * @param {string} [props.specialChar] - Special character to display alongside the input field.
 * @param {string} [props.LabelFontSize="12px"] - Font size for the label.
 * @param {boolean} [props.isMobile=false] - If true, applies mobile-specific styles.
 * @param {string} [props.textCenter="text-center"] - Text alignment class for the input field.
 * @param {React.ReactNode} [props.infoComponent] - Optional component for additional information.
 *
 * @returns {JSX.Element} The rendered InputBarField component.
 */
const InputBarField = ({
  label,
  placeHolder,
  gap = 1,
  LabelFontSize = "12px",
  textField,
  specialChar,
  textCenter = "text-center",
  isMobile = false,
  fontFamily = "italic",
  files,
  filesLabel,
  direction = "flex-col",
  filesHelperText,
  infoComponent,
  value,
  rows,
  readonly,
  onChange,
}: InputBarFieldProps): JSX.Element => {
  return (
    <div
      className={`flex w-full ${direction} flex-shrink justify-between gap-${gap}  relative`}>
      <label
        className="text-[10px]  min-w-[30%] md:text-base lg:text-[22px] gap-2 justify-start text-[#6D6D6D] font-semibold my-1 ml-2 flex"
        htmlFor="citations"
        style={{ ...labelStyle }}>
        {label}
        <div className="flex z-50 -mt-1">{infoComponent && infoComponent}</div>
      </label>

      {files && (
        <>
          <label
            style={{ ...labelStyle }}
            className="text-xs md:text-base lg:text-[26px] font-semibold justify-start my-1 ml-2 flex">
            {filesLabel}
          </label>
          <div
            className={`flex justify-center items-center rounded-2xl h-32 bg-[#FFFFFF] w full px-2 w-full
            } `}>
            <input
              type="file"
              id="files"
              name="files"
              className={`py-2 w-full text-center px-5 italic hidden text-[#6D6D6D] rounded-3xl focus:outline-none `}
            />
            <div className="flex justify-center absolute bottom-4 right-3 lg:bottom-6 :right-5 md:right-10">
              <label
                id="files"
                htmlFor="files"
                className="text-[6px] lg:text-[16px]  cursor-pointer min-w-[40px] font-bold   text-center items-center justify-center my-1 ml-2 p-1 md:p-2.5 rounded-2xl bg-[#40F440] flex">
                Add Files
              </label>
            </div>
          </div>

          <div className="flex text-[10px] lg:text-[16px]">
            <span style={descriptionStyle}>{filesHelperText}</span>
          </div>
        </>
      )}
      {!textField && !files && (
        <div className="relative min-w-[70%] w-full">
          <input
            type="text"
            id="citations"
            value={value}
            placeholder={placeHolder}
            readOnly={readonly as any}
            onChange={onChange}
            className={` text-[12px] pl-3 min-h-[25px] md:py-3  md:px-3 px-1 w-full  ${fontFamily} rounded-2xl focus:outline-none lg:text-[20px]`}
          />
          {specialChar && (
            <span className="absolute bottom-0 bg-[#631363] text-white  rounded-full px-4 text-md font-serif  p-2 left-0">
              {specialChar}
            </span>
          )}
        </div>
      )}
      {textField && (
        <textarea
          className={`py-2 font-normal text-[12px] lg:text-[24px] w-full pl-2  px-3 h-[111px]  italic rounded-xl focus:outline-none lg:w-full lg:h-[310px]`}
          placeholder={placeHolder}
          rows={rows}
          cols={30}
        />
      )}
    </div>
  );
};

export default InputBarField;
