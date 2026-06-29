import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["data-insights"].title,
  description: pages["data-insights"].description,
};

export default function DataInsightsPage() {
  return <ServicePage pageKey="data-insights" />;
}
