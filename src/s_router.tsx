import { FileRoutes, Routes, Route } from "solid-start";

import MainView from "~/routes/index";
import HomeView from "./sections/main/home";
import BrowseView from "./sections/main/browse";
import SubmissionsView from "./sections/main/submissions";
import CollectionsView from "./sections/main/collections";

import UserView from "./routes/user";
import UserPosts from "./routes/user/posts";
import UserContent from "./routes/user/content";
import UserCollections from "./routes/user/collections";
import UserCommissions from "./routes/user/commissions";

function SpacesRouter() {
  return (
    <Routes>
      <Route path="/" component={MainView}>
        <Route path="/home" component={HomeView} />
        <Route path="/browse" component={BrowseView} />
        <Route path="/submissions" component={SubmissionsView} />
        <Route path="/collections" component={CollectionsView} />
        <Route path="/:user" component={UserView}>
          <Route path="/" component={UserPosts} />
          <Route path="/content" component={UserContent} />
          <Route path="/collections" component={UserCollections} />
          <Route path="/commissions" component={UserCommissions} />
        </Route>
      </Route>
      <FileRoutes />
    </Routes>
  );
}

export default SpacesRouter;
