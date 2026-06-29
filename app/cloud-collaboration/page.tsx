import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["cloud-collaboration"].title,
  description: pages["cloud-collaboration"].description,
};

export default function CloudCollaborationPage() {
  return <ServicePage pageKey="cloud-collaboration" />;
}
