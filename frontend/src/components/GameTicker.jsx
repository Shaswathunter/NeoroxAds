const games = [
  "🎮 GTA V",
  "🔥 Black Myth Wukong",
  "⚔️ Elden Ring",
  "🚗 Forza Horizon 5",
  "🕷️ Spider-Man Remastered",
  "💀 Resident Evil 4",
  "🏹 Ghost of Tsushima",
  "🚀 Cyberpunk 2077",
  "🎯 Valorant",
  "💣 Call of Duty",
  "🌍 Red Dead Redemption 2",
];

export default function GameTicker() {
  const allGames = [...games, ...games];

  return (
    <div className="overflow-hidden border-b border-line bg-panel py-2">
      <div className="ticker-track">
        {allGames.map((game, index) => (
          <span
            key={index}
            className="mx-8 whitespace-nowrap text-sm font-medium text-neonblue"
          >
            {game}
          </span>
        ))}
      </div>
    </div>
  );
}