import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["offline-pos"].title,
  description: pages["offline-pos"].description,
};

export default function OfflinePosPage() {
  return <ServicePage pageKey="offline-pos" />;
}
