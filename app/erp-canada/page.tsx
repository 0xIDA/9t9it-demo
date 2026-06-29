import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-canada"].title,
  description: pages["erp-canada"].description,
};

export default function ErpCanadaPage() {
  return <ServicePage pageKey="erp-canada" />;
}
