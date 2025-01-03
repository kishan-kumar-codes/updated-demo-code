import GlobalChatsView from "@/components/globalChat";
import MessageView from "@/components/globalChat/messageView";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

export default function GlobalChat() {
  return (
    <div className="w-full">
      {/* <CitationNavbar isHeaderVisible={false} heading="Inbox" /> */}
      <MessageView />
    </div>
  );
}
