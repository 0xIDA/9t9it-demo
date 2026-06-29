import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["property-rental-erp"].title,
  description: pages["property-rental-erp"].description,
};

export default function PropertyRentalErpPage() {
  return <ServicePage pageKey="property-rental-erp" />;
}
