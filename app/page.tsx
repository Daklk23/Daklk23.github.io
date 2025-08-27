import PlayerCount from '../components/player-count';
import DiscordWidget from '../components/discord-widget';

export default function Home() {
  return (
    <section className="p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Vantage Roleplay — Tvoj grad, tvoja priča.
        </h1>
        <p>
          Zajednica fokusirana na kvalitetan RP, poštenu ekonomiju i nezaboravne priče.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://discord.gg/placeholder"
            className="px-4 py-2 bg-lime-500 text-black rounded"
          >
            Pridruži se Discordu
          </a>
          <a href="/kako-poceti" className="px-4 py-2 border rounded">
            Kako početi
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
        <PlayerCount />
        <DiscordWidget />
      </div>
    </section>
  );
}
