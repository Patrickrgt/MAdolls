// lib/ga/index.js
import { Analytics, getAnalytics, logEvent } from '@google-analytics/ga4';

let analytics;

export const initGA = () => {
  if (typeof window !== "undefined") {
    analytics = getAnalytics();
  }
}

export const trackPageView = (url) => {
  if (typeof window !== "undefined") {
    logEvent(analytics, 'page_view', {
      page_location: url
    });
  }
}
