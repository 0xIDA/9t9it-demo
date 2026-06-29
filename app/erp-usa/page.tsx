import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-usa"].title,
  description: pages["erp-usa"].description,
};

export default function ErpUsaPage() {
  return <ServicePage pageKey="erp-usa" />;
}
