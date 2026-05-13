import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/dossier/CaseStudyLayout";
import { getWorkItem, workItems } from "@/content/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} | Aaryan Srivastava`,
    description: item.oneLine,
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();
  return <CaseStudyLayout item={item} />;
}
