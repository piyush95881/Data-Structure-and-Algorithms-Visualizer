import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Sorting from "./components/sorting/Sorting";
import Graph from "./components/graph/Graph";
import Tree from "./components/Tree/Tree";
import EquationSolve from "./components/EquationSolve/EquationSolve";
import NQueen from "./components/N-Queens-Problem/NQueens";
import Minesweeper from "./components/Minesweeper/Minesweeper";
import Game2048 from "./components/Game2048/Game2048";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

const routes = [
  { path: "/", Component: Home },
  { path: "/sorting/:page", Component: Sorting },
  { path: "/graph/:page", Component: Graph },
  { path: "/tree/:page", Component: Tree },
  { path: "/equationsolve", Component: EquationSolve },
  { path: "/nqueen", Component: NQueen },
  { path: "/minesweeper", Component: Minesweeper },
  { path: "/game2048", Component: Game2048 },
  { path: "/contact", Component: Contact },
  { path: "/resume", Component: Resume },
];

export const AllRoutes = () => (
    <>

      <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={<route.Component />}
            />
        ))}
      </Routes>
    </>
);
