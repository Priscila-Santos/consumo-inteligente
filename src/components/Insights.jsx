export default function Insights({
  insights,
}) {
  return (
    <div>
      <h2>Insights Inteligentes</h2>

      {insights.map((insight, index) => (
        <div
          key={index}
          className={`insight ${insight.type}`}
        >
          <p>{insight.message}</p>
        </div>
      ))}
    </div>
  );
}