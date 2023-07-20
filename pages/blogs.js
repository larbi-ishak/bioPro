import { ArticlesCardsGrid } from "@/src/components/blogComp";
import { useRouter } from "next/router";

const Events = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <ArticlesCardsGrid mockdata={data}/>
    </div>
  );
};

export default Events;

export async function getServerSideProps() {
  const { data } = await import("../data/data.json");

  return {
    props: {
 data
    },
  };
}
