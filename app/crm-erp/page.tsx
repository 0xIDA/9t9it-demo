import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["crm-erp"].title,
  description: pages["crm-erp"].description,
};

export default function CrmErpPage() {
  return <ServicePage pageKey="crm-erp" />;
}
