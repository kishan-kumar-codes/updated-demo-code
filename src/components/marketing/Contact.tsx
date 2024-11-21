import React from 'react';
import ContactCard from './ContactCard';
import { MarkingFBIcon, MarkingIGIcon, RecentGoogleIcon, RecentRevIcon } from '@/icons/marketing/icons';
import { CallSvg, MessageSvg } from '@/svgs/marketing/svgs';

const NewContactSubStyle: React.CSSProperties = {
    color: '#6D6D6D',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
};

/**
 * Interface for defining the properties of a marketing contact.
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
 * Array of marketing contacts used in the Contact component.
 * 
 * @constant MarkatingContact
 * @type {MarkatingContactProps[]}
 */
const MarkatingContact: MarkatingContactProps[] = [
    {
        id: 1,
        name: "Name Surname",
        logoImg: <MarkingFBIcon />,
        callImg: <CallSvg />,
        textImg: <MessageSvg />,
        btnTitle: "Task",
    },
    {
        id: 2,
        name: "Name Surname",
        logoImg: <RecentRevIcon />,
        callImg: <CallSvg />,
        textImg: <MessageSvg />,
        btnTitle: "Task",
    },
    {
        id: 3,
        name: "Name Surname",
        logoImg: <MarkingIGIcon />,
        callImg: <CallSvg />,
        textImg: <MessageSvg />,
        btnTitle: "Task",
    },
    {
        id: 4,
        name: "Name Surname",
        logoImg: <RecentGoogleIcon />,
        callImg: <CallSvg />,
        textImg: <MessageSvg />,
        btnTitle: "Task",
    },
    {
        id: 5,
        name: "Name Surname",
        logoImg: <MarkingFBIcon />,
        callImg: <CallSvg />,
        textImg: <MessageSvg />,
        btnTitle: "Task",
    },
];

/**
 * Contact component
 * 
 * A component that displays a list of new contacts. Each contact is rendered using the ContactCard component.
 * 
 * @returns {JSX.Element} The rendered Contact component.
 */
const Contact = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="[font-family:'Glacial_Indifference-Bold',Helvetica] sm:text-[34px] text-[17px]" style={NewContactSubStyle}>New Contacts</h4>
            {
                MarkatingContact.map((item) => (
                    <ContactCard key={item.id} {...item} />
                ))
            }
        </div>
    );
}

export default Contact;
