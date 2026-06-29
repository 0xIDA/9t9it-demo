import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["cyber-security"].title,
  description: pages["cyber-security"].description,
};

export default function CyberSecurityPage() {
  return <ServicePage pageKey="cyber-security" />;
}
