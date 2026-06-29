import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-uk"].title,
  description: pages["erp-uk"].description,
};

export default function ErpUkPage() {
  return <ServicePage pageKey="erp-uk" />;
}
