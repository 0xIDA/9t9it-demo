import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-saudi-arabia"].title,
  description: pages["erp-saudi-arabia"].description,
};

export default function ErpSaudiArabiaPage() {
  return <ServicePage pageKey="erp-saudi-arabia" />;
}
