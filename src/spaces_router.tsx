import { FileRoutes, Routes, Route } from "solid-start";

import Main from "~/routes/index";
import HomeView from "./sections/home";
import BrowseView from "./sections/browse";
import SubmissionsView from "./sections/submissions";
import CollectionsView from "./sections/collections";

import UserView from "./routes/user";
import UserPosts from "./routes/user/posts";
import UserContent from "./routes/user/content";
import UserCollections from "./routes/user/collections";
import UserCommissions from "./routes/user/commissions";

function SpacesRouter() {
  return (
    <Routes>
      <Route path="/" component={Main}>
        <Route path="/home" component={HomeView} />
        <Route path="/browse" component={BrowseView} />
        <Route path="/submissions" component={SubmissionsView} />
        <Route path="/collections" component={CollectionsView} />
      </Route>
      <Route path="/:user" component={UserView}>
        <Route path="/" component={UserPosts} />
        <Route path="/content" component={UserContent} />
        <Route path="/collections" component={UserCollections} />
        <Route path="/commissions" component={UserCommissions} />
      </Route>
      <FileRoutes />
    </Routes>
  );
}

export default SpacesRouter;
