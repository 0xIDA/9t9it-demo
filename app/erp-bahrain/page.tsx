import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-bahrain"].title,
  description: pages["erp-bahrain"].description,
};

export default function ErpBahrainPage() {
  return <ServicePage pageKey="erp-bahrain" />;
}
