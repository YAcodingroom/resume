import PortfolioItem from "./PortfolioItem";
import { useFetchData } from "../hooks/useFetchData";

const PORTFOLIO_URL = "./jsons/portfolios.json";

function Portfolios() {
  const cards = useFetchData(PORTFOLIO_URL, "portfolios");

  return (
    <main className="mx-10 my-8 space-y-6">
      <h1 className="text-center text-2xl font-medium uppercase tracking-widest md:text-3xl">
        Web develop portfolio
      </h1>

      <div className="grid gap-6 md:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
        {cards.map((item) => (
          <PortfolioItem key={item.title} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Portfolios;
