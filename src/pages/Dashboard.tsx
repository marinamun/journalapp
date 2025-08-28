import { useState } from "react";
import AddEntryModal from "../components/AddEntryModal";

const Dashboard = () => {
  const [isEntryModalEpanded, setIsEntryModalExpanded] =
    useState<boolean>(false);
  return (
    <>
      <h1>Dashboard</h1>

      <button onClick={() => setIsEntryModalExpanded(true)}>New entry</button>

      {isEntryModalEpanded && <AddEntryModal onCloseModal={setIsEntryModalExpanded} />}
    </>
  );
};
export default Dashboard;
