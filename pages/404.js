import { NotFoundImage } from "@/src/components/notFound";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Not_found = () => {
  const router = useRouter();
  useEffect(() => {
    // redirecting user to homepage
    setTimeout(() => {
      router.push("/");
    }, 2500);
  }, []);

  return (
    <>
    <NotFoundImage />
    </>
  );
};

export default Not_found;
