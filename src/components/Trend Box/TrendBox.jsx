import "./trendBox.css";

function TrendBox({ trends, suggestions }) {
  return (
    <>
      <div className="modal">
        <div className="trends">
          <h2>Latest Trends</h2>

          <div className="trendProducts">
            {trends.map((item) => {
              return (
                <div key={item.id} className="imageDetails">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="suggestions">
          <h2>Popular Suggestions</h2>

          {suggestions.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TrendBox;
