import TeamsCard from "@/components/TeamsCard/TeamsCard";
import LinkButton from "@/components/LinkButton/LinkButton";
async function getTeams() {
  let response = await fetch("https://randomuser.me/api/?results=6");
  let data = await response.json();
  return data.results;
}

async function Teams() {
  let ourTeams = await getTeams();
  return (
    <section id="team" className="team">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-center">Our Teams</h2>
        <p className="text-center">
          Always works together with enthusiasm and high dedication to ensure
          maximum customer satisfaction.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {ourTeams.map((team, index) => {
            return <TeamsCard key={index} item={team} itemIndex={index} />;
          })}
        </div>
        <div className="text-center mt-3 mb-5">
          <LinkButton href={`/about`}>
            <span>About Page</span>
            <i className="bi bi-arrow-left"></i>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default Teams;
