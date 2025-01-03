import InboxView from "@/components/inbox";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

export default function AllContacts() {
  return (
    <div className="lg:max-h-screen">
      <div className="hidden lg:flex">
        <CitationNavbar isHeaderVisible={false} heading="Inbox" />
      </div>
      <InboxView />
    </div>
  );
}
