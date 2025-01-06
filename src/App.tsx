import "./App.css";
import Background from "./layouts/Background";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="relative flex   w-full  ">
        <Background />
        <main className="z-10 w-full h-full">
          <Header />
          <div className="relative flex flex-row gap-2  justify-center items-stretch w-full py-5">
            <Sidebar />
            <Dashboard />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
