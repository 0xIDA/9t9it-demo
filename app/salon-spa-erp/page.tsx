import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["salon-spa-erp"].title,
  description: pages["salon-spa-erp"].description,
};

export default function SalonSpaErpPage() {
  return <ServicePage pageKey="salon-spa-erp" />;
}
