import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["siem-xdr"].title,
  description: pages["siem-xdr"].description,
};

export default function SiemXdrPage() {
  return <ServicePage pageKey="siem-xdr" />;
}
