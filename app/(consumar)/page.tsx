import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = auth();
  if (!(await user).userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
