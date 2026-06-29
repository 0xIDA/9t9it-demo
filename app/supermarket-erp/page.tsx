import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["supermarket-erp"].title,
  description: pages["supermarket-erp"].description,
};

export default function SupermarketErpPage() {
  return <ServicePage pageKey="supermarket-erp" />;
}
