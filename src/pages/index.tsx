import { GetStaticProps } from "next";
import { collectedNotes } from "collected-notes";
import { HomePageProps } from "types";
import { HomeLayout } from "layouts/home";

const cn = collectedNotes(process.env.CN_EMAIL, process.env.CN_TOKEN);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  
  const {site, notes} = (await (await fetch("https://collectednotes.com/" + process.env.CN_SITE_PATH, 
  {
     headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })).json());

  // fetch all pages
  if (notes.length < site.total_notes) {
    for await (let page of Array.from(
      { length: Math.ceil(site.total_notes / 40) },
      (_, index) => index + 1
    )) {
      if (page === 1) continue;
      
      const res = (await (await fetch("https://collectednotes.com/" + process.env.CN_SITE_PATH, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })).json());

      notes.push(...res.notes);
    }
  }

  return { props: { site, notes }, revalidate: 1 };
};

export default HomeLayout;
