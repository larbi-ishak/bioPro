import { useRouter } from "next/router";
import { useEffect } from "react";

const Not_found = () => {
  const router = useRouter();
  useEffect(() => {
    // redirecting user to homepage
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);

  return (
    <div>
      Ooops, 404 page Not_found
      <p>Soon, you will get redirected to the home page</p>
    </div>
  );
};

export default Not_found;
