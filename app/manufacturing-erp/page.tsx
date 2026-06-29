import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["manufacturing-erp"].title,
  description: pages["manufacturing-erp"].description,
};

export default function ManufacturingErpPage() {
  return <ServicePage pageKey="manufacturing-erp" />;
}
