import { FileRoutes, Routes, Route } from "solid-start";

import MainView from "~/sections/main";
import HomeView from "./sections/main/home";
import BrowseView from "./sections/main/browse";
import SubmissionsView from "./sections/main/submissions";
import CollectionsView from "./sections/main/collections";

import UserView from "./sections/user";
import UserPosts from "./sections/user/posts";
import UserContent from "./sections/user/content";
import UserCollections from "./sections/user/collections";
import UserCommissions from "./sections/user/commissions";
import Landing from "./sections/landing";

function SpacesRouter() {
  return (
    <Routes>
      <Route path="/" component={MainView}>
        <Route path="/" component={MainView} />
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
      <Route path="/landing" component={Landing} />
      <FileRoutes />
    </Routes>
  );
}

export default SpacesRouter;
