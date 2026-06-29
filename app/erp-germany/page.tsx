import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-germany"].title,
  description: pages["erp-germany"].description,
};

export default function ErpGermanyPage() {
  return <ServicePage pageKey="erp-germany" />;
}
