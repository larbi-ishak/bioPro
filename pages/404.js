import { NotFoundImage } from "@/src/components/notFound";
import { useRouter } from "next/router";

const Not_found = () => {
  const router = useRouter();
    setTimeout(() => {
      router.push("/");
    }, 2500);
  return (
    <>
    <NotFoundImage />
    </>
  );
};

export default Not_found;
