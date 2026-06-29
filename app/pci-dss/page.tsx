import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["pci-dss"].title,
  description: pages["pci-dss"].description,
};

export default function PciDssPage() {
  return <ServicePage pageKey="pci-dss" />;
}
