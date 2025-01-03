import InboxEmail from "@/components/mails/inboxEmail";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
export default function AllContacts() {
  return (
    <div>
      <div className="hidden lg:flex">
        <CitationNavbar isHeaderVisible={false} heading="Inbox" />
      </div>
      <InboxEmail />
    </div>
  );
}
