import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["gps-tracking"].title,
  description: pages["gps-tracking"].description,
};

export default function GpsTrackingPage() {
  return <ServicePage pageKey="gps-tracking" />;
}
