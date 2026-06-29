import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["terms"].title,
  description: pages["terms"].description,
};

export default function TermsPage() {
  return <ServicePage pageKey="terms" />;
}
