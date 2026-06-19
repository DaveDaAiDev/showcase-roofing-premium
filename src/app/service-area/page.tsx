import { ServiceArea } from "@/components/sections/ServiceArea";
import { siteContent } from "@/content/site";

export default function ServiceAreaPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto mb-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-stone-50 sm:text-4xl">Service area</h1>
        <p className="mt-2 text-stone-400">{siteContent.demoNote}</p>
      </div>
      <ServiceArea />
    </div>
  );
}
