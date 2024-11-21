const contacts = [
  {
    name: "Jane Doe",
    phone: "+12345678912",
    email: "janedoe@gmail.com",
    initials: "JD",
  },
  {
    name: "Eugene Holloway",
    phone: "+12345678912",
    email: "eugene@gmail.com",
    initials: "EH",
  },
  {
    name: "Natalie Reed",
    phone: "+12345678912",
    email: "nataliereed@gmail.com",
    initials: "NR",
  },
  {
    name: "Lee Stark",
    phone: "+12345678912",
    email: "leestark@gmail.com",
    initials: "LS",
  },
  {
    name: "Alice Chaney",
    phone: "+12345678912",
    email: "alicechaney@gmail.com",
    initials: "AC",
  },
];

export default function ContactsList() {
  return (
    <div className="w-full bg-chinesWhite rounded-xl shadow-lg">
      <div className="py-[10px] pl-[16px] bg-palatinatePurple text-white rounded-xl">
        <h2 className="text-lg font-bold">Contacts</h2>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Type a name, phone number, or email"
          className="w-full p-2 bg-[#f4f4f4] border placeholder:text-xs rounded-xl outline-none"
        />
      </div>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.email}
            className="flex items-center p-4 border-t border-cultured">
            <div className="flex-shrink-0 w-10 h-10 bg-palatinatePurple text-white rounded-full flex items-center justify-center font-bold">
              {contact.initials}
            </div>
            <div className="ml-4">
              <p className="font-bold text-darkSilverColor">{contact.name}</p>
              <p className="text-darkSilverColor">{contact.phone}</p>
              <p className="text-darkSilverColor">{contact.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
