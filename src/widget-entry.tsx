"use client"; // Ensure this is client-side

import { createRoot } from 'react-dom/client';
import WidgetWithProvider from '@/components/Widget';

 type WidgetConfig = {
    widgetId: string;
    title?: string;
    color?: string;
    backgroundColor?: string;
    showRatings?: boolean;
    displayMode?: string;
    showAvatar?: boolean;
  }

const renderWidget = (elementId: string, config: WidgetConfig) => {
    if (typeof window === 'undefined') {
        console.error("renderWidget can only run on the client.");
        return;
    }

    const element = document.getElementById(elementId);

    if (element) {
        // Check if a root already exists to avoid duplicate renders
        if (!element.dataset.widgetInitialized) {
            const root = createRoot(element); // Create a root for the specified element
            root.render(<WidgetWithProvider config={config} />);
            element.dataset.widgetInitialized = "true"; // Mark as initialized
        } else {
            console.warn(`Widget with ID '${elementId}' is already rendered.`);
        }
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
};

// Expose the render function globally (only on the client)
if (typeof window !== 'undefined') {
    (window as any).renderReviewWidget = renderWidget;
}