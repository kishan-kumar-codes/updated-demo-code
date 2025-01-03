import EmailView from "@/components/mails";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

export default function AllContacts() {
  return (
    <div>
      <div className="hidden lg:flex">
        <CitationNavbar isHeaderVisible={false} heading="Inbox" />
      </div>
      <EmailView />
    </div>
  );
}
