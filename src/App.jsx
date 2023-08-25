import React from "react";

import { ComplexNavbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import IntegrationCard from "./components/IntegrationCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workspaces from "./components/Workspaces";
import WorkspaceDetails from "./components/WorkspaceDetails";
import WorkspaceVideoEdit from "./components/WorkspaceVideoEdit";
import YoutuberReview from "./components/YoutuberReview";

function App() {
  const [open, setOpen] = React.useState(0);

  return (
    <main className="flex p-2 ">
      {/* <section className="fixed  hidden lg:inline-flex">
        
      </section>
      <section className="flex flex-col items-center w-full lg:ml-[20vw]">
        <ComplexNavbar />

        <section className="grid grid-cols-1 lg:grid-cols-2 mt-20 items-center ">
          <IntegrationCard />
          <IntegrationCard />
          <IntegrationCard />
          <IntegrationCard />
        </section>
      </section> */}
      <section className="h-screen hidden  lg:inline-flex lg:basis-1/5 ">
        <section className="fixed ">
          <nav className="bg-white shadow-xl rounded-md w-[19vw] h-screen">
            <Sidebar />
          </nav>
        </section>
      </section>
      <section className="bg-white h-screen lg:ml-2 lg:basis-4/5 inline-flex w-full">
        <section className="flex h-[8vh] fixed z-50 bg-white shadow-xl rounded-md mx-auto lg:w-[75vw] w-full  top-2 text-white font-bold">
          Navbar
        </section>
        <section className="text-white mt-[12vh]  w-full ">
          <section className=" w-full  ">
            <BrowserRouter>
              <Routes>
                <Route path="/editor/dashboard" element={<IntegrationCard />} />
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
                <Route path="/editor/inbox" element={<IntegrationCard />} />
              </Routes>
            </BrowserRouter>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
