import { Suspense, lazy } from "react";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const Scene         = lazy(() => import("./three/Scene"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer onLenisReady={() => {}}>
          <Suspense>
            <Scene />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
