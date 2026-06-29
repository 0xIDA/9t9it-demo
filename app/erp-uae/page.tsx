import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-uae"].title,
  description: pages["erp-uae"].description,
};

export default function ErpUaePage() {
  return <ServicePage pageKey="erp-uae" />;
}
