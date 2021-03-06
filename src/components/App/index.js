import React, { useState, useEffect } from "react";

import "./index.scss";

import ContentPanel from "../ContentPanel";
import LeftPanel from "../LeftPanel";

import { Route, useHistory } from "react-router-dom";
import WaterButton from "../WaterButton";
import CSSGrid from "../CSSGrid";
import RadioButton from "../RadioButton";
import FotoMountain from "../FotoMountain";
import SearchButton from "../SearchButton";
import AnimationButton from "../AnimationButton";
import RotateCard from "../RotateCard";
import NeonButton from "../NeonButton";
import SocialButtons from "../SocialButtons";
const base = [
  {
    id: 0,
    title: "Water button",
  },
  {
    id: 1,
    title: "CSS Grid",
  },
  {
    id: 2,
    title: "Radio button",
  },
  {
    id: 3,
    title: "Foto mountain",
  },
  {
    id: 4,
    title: "Search button",
  },
  {
    id: 5,
    title: "Animation button",
  },
  {
    id: 6,
    title: "Rotate card",
  },
  {
    id: 7,
    title: "Neon button",
  },
  {
    id: 8,
    title: "Social buttons",
  },
];

const App = () => {
  const [activTab, setactivTab] = useState(0);
  let history = useHistory();

  useEffect(() => {
    const id = history.location.pathname.split("list/")[1];
    if (id) {
      let elem = base.find((item) => item.id === Number(id));
      if (!elem) {
        history.push("/");
        setactivTab(0);
      } else {
        setactivTab(elem.id);
      }
    }
  }, [history.location.pathname]);

  return (
    <div className="App">
      <Route exact path="/">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<WaterButton />} />
        </div>
      </Route>

      <Route path="/list/0">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<WaterButton />} />
        </div>
      </Route>

      <Route path="/list/1">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<CSSGrid />} />
        </div>
      </Route>

      <Route path="/list/2">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<RadioButton />} />
        </div>
      </Route>
      <Route path="/list/3">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<FotoMountain />} />
        </div>
      </Route>
      <Route path="/list/4">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<SearchButton />} />
        </div>
      </Route>
      <Route path="/list/5">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<AnimationButton />} />
        </div>
      </Route>
      <Route path="/list/6">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<RotateCard />} />
        </div>
      </Route>
      <Route path="/list/7">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<NeonButton />} />
        </div>
      </Route>
      <Route path="/list/8">
        <div className="App__left-panel">
          <LeftPanel list={base} />
        </div>
        <div className="App__content-panel">
          <ContentPanel list={base[activTab]} component={<SocialButtons />} />
        </div>
      </Route>
    </div>
  );
};
export default App;
