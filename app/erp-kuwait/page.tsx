import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["erp-kuwait"].title,
  description: pages["erp-kuwait"].description,
};

export default function ErpKuwaitPage() {
  return <ServicePage pageKey="erp-kuwait" />;
}
