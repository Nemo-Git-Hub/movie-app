import Footer from "../Footer";
import Header from "../Header";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <div className="px-4">{children}</div>
      <Footer />
    </>
  );
}
