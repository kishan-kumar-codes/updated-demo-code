import React from "react";

/**
 * Interface for defining the properties of a marketing contact card.
 * 
 * @interface MarkatingContactProps
 * @property {number} id - Unique identifier for the contact.
 * @property {string} name - Name of the contact person.
 * @property {React.ReactElement} logoImg - Logo image for the contact.
 * @property {React.ReactElement} callImg - Icon for making a call.
 * @property {React.ReactElement} textImg - Icon for sending a text message.
 * @property {string} btnTitle - Title of the button associated with the contact.
 */
interface MarkatingContactProps {
    id: number;
    name: string;
    logoImg: React.ReactElement;
    callImg: React.ReactElement;
    textImg: React.ReactElement;
    btnTitle: string;
}

/**
 * Typography style for contact card text.
 * 
 * @constant Typography
 * @type {React.CSSProperties}
 */
const Typography: React.CSSProperties = {
    color: "#6D6D6D",
    fontSize: "36.559px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
};

/**
 * Style for the new contact card title.
 * 
 * @constant NewContactStyle
 * @type {React.CSSProperties}
 */
const NewContactStyle: React.CSSProperties = {
    ...Typography,
    color: '#6D6D6D',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
};

/**
 * ContactCard component
 * 
 * A component that displays a contact card with a logo, name, and action buttons (call and text). 
 * Includes a button with a title to perform a task.
 * 
 * @param {MarkatingContactProps} props - The properties passed to the component.
 * @param {number} props.id - Unique identifier for the contact.
 * @param {string} props.name - Name of the contact person.
 * @param {React.ReactElement} props.logoImg - Logo image for the contact.
 * @param {React.ReactElement} props.callImg - Icon for making a call.
 * @param {React.ReactElement} props.textImg - Icon for sending a text message.
 * @param {string} props.btnTitle - Title of the button associated with the contact.
 * 
 * @returns {JSX.Element} The rendered ContactCard component.
 */
const ContactCard = ({ id, name, logoImg, callImg, textImg, btnTitle }: MarkatingContactProps): JSX.Element => {
    return (
        <div className="sm:min-w-[430.99px] w-full h-full p-2 bg-[#E0E0E0] sm:h-[154px] rounded-3xl flex flex-col justify-start">
            <div className="flex gap-3 items-start justify-start">
                <span>
                    {logoImg}
                </span>
                <span
                    className="font-family-Glacial_Indifference-Bold"
                    style={NewContactStyle}
                >
                    {name}
                </span>
            </div>
            <div className="flex mx-10 py-5 sm:py-10 items-center justify-between">
                <div className="flex cursor-pointer gap-4">
                    {callImg}
                    {textImg}
                </div>
                <div>
                    <button className="bg-[#631363] font-bold text-white p-2 rounded-2xl px-4">
                        + {btnTitle}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
