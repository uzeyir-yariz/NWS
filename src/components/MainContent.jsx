import About from "./About";
import LanguageSect from "./LanguageSect";
import ListHomeCard from "./ListHomeCard";
import ListProjectCard from "./ListProjectCard";

function MainContent() {
  return (
    <main className="main-content">
      <ListHomeCard />
      <About/>
      <LanguageSect/>
      <ListProjectCard />
    </main>
  );
}

export default MainContent;
