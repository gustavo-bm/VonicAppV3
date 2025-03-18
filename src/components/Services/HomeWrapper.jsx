import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "../../pages/Home";

const HomeWrapper = () => {
  const { section } = useParams(); // Captura a seção da URL

  useEffect(() => {
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [section]);

  return <Home />;
};

export default HomeWrapper;
