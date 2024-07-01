import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TaskBoard from "./components/Task/TaskBoard/TaskBoard";

const App = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <Hero></Hero>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
