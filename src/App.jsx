import Router from "./Routes/Router.jsx";
import DashboardNavbar from "./Sharedcomponent/DashboardNavbar.jsx";

function App() {
  return (
    <>
      {/* <Header />

<main>
<h1>Welcome to User Management System</h1>
</main>
<Footer /> */}
      <Router />
      <DashboardNavbar />
    </>
  );
}

export default App;
