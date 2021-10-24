import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useRouteMatch , useParams } from "react-router";

export default function Topics(){
let match = useRouteMatch();
//console.log('Inside Topics');
return (
  <div>
    <h2>Topics--Hi</h2>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    {/* The Topics page has its own <Switch> with more routes
        that build on the /topics URL path. You can think of the
        2nd <Route> here as an "index" page for all topics, or
        the page that is shown when no topic is selected */}
    <Switch>
      <Route path={`${match.path}/:topicId`}>
        <Topic />
      </Route>
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  </div>
);
}  

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}