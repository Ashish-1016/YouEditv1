import React from "react";
import WorkspacesCard from "./WorkspaceCard";

function Workspaces() {
  return (
    <section className="grid w-ful lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <WorkspacesCard />
      <WorkspacesCard />
      <WorkspacesCard />
    </section>
  );
}

export default Workspaces;
