import React from "react";

import { ComplexNavbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import EditorDashboard from "./components/EditorDashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workspaces from "./components/Workspaces";
import WorkspaceDetails from "./components/WorkspaceDetails";
import WorkspaceVideoEdit from "./components/WorkspaceVideoEdit";
import YoutuberReview from "./components/YoutuberReview";

function App() {
  const [open, setOpen] = React.useState(0);

  return (
    <main className="flex p-2 ">
      <section className="h-screen hidden  lg:inline-flex lg:basis-1/5 ">
        <section className="fixed ">
          <nav className="bg-white rounded-md w-[19vw] h-screen">
            <Sidebar />
          </nav>
        </section>
      </section>
      <section className="bg-white h-screen lg:ml-2 lg:basis-4/5 inline-flex w-full">
        <section className="flex h-[8vh] fixed z-50 items-center ">
          <ComplexNavbar />
        </section>
        <section className="text-white mt-[12vh]  w-full ">
          <section className=" w-full  ">
            <BrowserRouter>
              <Routes>
                <Route path="/editor/dashboard" element={<EditorDashboard />} />
                <Route path="/editor/workspaces" element={<Workspaces />} />
                <Route
                  path="/editor/workspaces/details"
                  element={<WorkspaceDetails />}
                />
                <Route
                  path="/editor/workspaces/VideoEdit"
                  element={<WorkspaceVideoEdit />}
                />
                <Route
                  path="/youtuber/workspaces/VideoReview"
                  element={<YoutuberReview />}
                />
                {/*<Route path="/editor/inbox" element={<IntegrationCard />} />*/}
              </Routes>
            </BrowserRouter>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
