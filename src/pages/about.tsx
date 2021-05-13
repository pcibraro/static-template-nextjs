import { GetStaticProps } from "next";
import { collectedNotes } from "collected-notes";
import { AboutProps } from "types";
import { AboutLayout } from "layouts/about";

const cn = collectedNotes(process.env.CN_EMAIL, process.env.CN_TOKEN);

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const { site } = await cn.site(process.env.CN_SITE_PATH, 1, "public_site");
  return { props: { site } };
};

export default AboutLayout;
