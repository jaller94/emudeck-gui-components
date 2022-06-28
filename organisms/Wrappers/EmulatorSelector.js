import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "context/globalContext";

import Footer from "components/organisms/Footer/Footer.js";
import Header from "components/organisms/Header/Header.js";
import Aside from "components/organisms/Aside/Aside.js";
import Main from "components/organisms/Main/Main.js";
import Card from "components/molecules/Card/Card.js";

import imgra from "assets/emulators/ra.png";
import imgdolphin from "assets/emulators/dolphin.png";
import imgppsspp from "assets/emulators/ppsspp.png";
import imgduckstation from "assets/emulators/duckstation.png";
import imgcitra from "assets/emulators/citra.png";
import imgpcsx2 from "assets/emulators/pcsx2.png";
import imgrpcs3 from "assets/emulators/rpcs3.png";
import imgyuzu from "assets/emulators/yuzu.png";
import imgcemu from "assets/emulators/cemu.png";

const images = {
  ra: { imgra },
  dolphin: { imgdolphin },
  ppsspp: { imgppsspp },
  duckstation: { imgduckstation },
  citra: { imgcitra },
  pcsx2: { imgpcsx2 },
  rpcs3: { imgrpcs3 },
  yuzu: { imgyuzu },
  cemu: { imgcemu },
};

const DeviceSelector = ({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device, installEmus } = state;
  const installEmusArray = Object.values(installEmus);
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Emulators for" bold={`${device}`} />
          <Main>
            <p className="lead">
              These are the recommended emulators for your system. But you can
              chose to not install all of them.
            </p>

            <div class="cards cards--mini">
              {installEmusArray.map((item, i) => {
                const img = images[item.id][`img${item.id}`];
                return (
                  <Card
                    css={item.status == true && "is-selected"}
                    key={item.id}
                    onClick={() => onClick(item.id)}
                  >
                    <img src={img} alt="RetroArch" />
                    <span class="h6">{item.name}</span>
                  </Card>
                );
              })}
            </div>
          </Main>
          <Footer
            next="ra-bezels"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default DeviceSelector;