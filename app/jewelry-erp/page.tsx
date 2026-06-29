import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["jewelry-erp"].title,
  description: pages["jewelry-erp"].description,
};

export default function JewelryErpPage() {
  return <ServicePage pageKey="jewelry-erp" />;
}
