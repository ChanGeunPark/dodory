import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import useUser from "@libs/client/useUser";

export default function Layout({ children }) {
  const { user } = useUser();
  return (
    <>
      <Navbar user={user} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
