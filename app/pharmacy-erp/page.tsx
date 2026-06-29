import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["pharmacy-erp"].title,
  description: pages["pharmacy-erp"].description,
};

export default function PharmacyErpPage() {
  return <ServicePage pageKey="pharmacy-erp" />;
}
