


export { };

// Extending the Window interface
declare global {
  interface Window {
    renderReviewWidget: (elementId: string, config: WidgetConfig) => void;
    Commerce?: any;
  }
}

interface Window {
  Commerce?: any;
}

import NextAuth from "next-auth";




// In your types or directly in the file
declare module "next-auth" {
  interface Session {
    user?: {
      id: string; // Add this line for user id
      name?: string | null;
      email?: string | null;
      image?: string | null;
      accessToken?: string;
    };
    provider: string | null;
  }
}

export interface WidgetConfig {
  widgetId: string;
  title?: string;
  color?: string;
  backgroundColor?: string;
  showRatings?: boolean;
  displayMode?: string;
  showAvatar?: boolean;
  customizeBackground?: any
}

