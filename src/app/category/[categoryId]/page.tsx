import ItemGrid from "@/components/ItemGrid";
import service from "@/lib/service";
import { appLogo, appName, siteAddress } from "@/utils/config";
import { Category } from "@prisma/client";
import { Divider, Typography } from "antd";
import { Metadata } from "next";

type Props = {
  params: { categoryId: Category };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.categoryId.replaceAll("_", " ");

  return {
    title: `${appName} | ${category}`,
    description:
      "Welcome to our comprehensive online exam platform! Our user-friendly system simplifies exam creation for educators and seamless assessment-taking for students under their tutor's guidance. Our platform empowers educators to craft exams effortlessly, while students find ease in taking assessments provided by their tutors. Join us to experience a streamlined process that enhances the learning and assessment journey for both educators and students!",
    openGraph: {
      type: "website",
      title: `${appName} | ${category}`,
      description: "",
      url: `${siteAddress}/category/${params.categoryId}`,
      images: appLogo,
    },
  };
}

export default async function CategoryItems({ params }: Props) {
  const items = await service.getItemsByCategory(params.categoryId);

  return (
    <main>
      <Divider orientation="left" style={{ marginTop: 0 }}>
        {params.categoryId.replaceAll("_", " ")}
      </Divider>
      <ItemGrid data={items} />
    </main>
  );
}
