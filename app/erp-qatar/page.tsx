import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-qatar"].title,
  description: pages["erp-qatar"].description,
};

export default function ErpQatarPage() {
  return <ServicePage pageKey="erp-qatar" />;
}
