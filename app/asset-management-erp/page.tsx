import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["asset-management-erp"].title,
  description: pages["asset-management-erp"].description,
};

export default function AssetManagementErpPage() {
  return <ServicePage pageKey="asset-management-erp" />;
}
