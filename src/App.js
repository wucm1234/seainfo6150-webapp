import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let responseJson;
      // put data fetching code here!
      const response = await fetch("http://demo1390455.mockable.io/articles");
      responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug);
            return <DynamicArticle article={fetchedData[match.params.slug]} />;
          }}
        />

        <Route exact path={`/articlelist`}>
          <ArticleList articles={Object.values(fetchedData)} />
        </Route>

        <Route>
          <Link to="/articlelist">Go to article list</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
