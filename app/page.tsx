import { PageShell } from "@/components/PageShell";
import { HomeContent } from "./HomeContent";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["/"].title,
  description: pages["/"].description,
};

export default function HomePage() {
  return (
    <PageShell>
      <HomeContent />
    </PageShell>
  );
}
