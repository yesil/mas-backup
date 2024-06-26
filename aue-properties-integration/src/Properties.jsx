import React, { useCallback, useEffect, useState } from "react";
import { formatNewCFStructureToOld } from "./utils.js";
import { createRoot } from "react-dom/client";

import {
  importer,
  exporter,
} from "@aem-sites/headless-canvas-adapters/content-fragment/adapter";
import {
  Canvas,
  Conditions,
  Data,
  Debug,
  Persist,
  Provide,
  Render,
} from "@aem-sites/headless-canvas";
import { Provider as ProviderV3, lightTheme } from "@adobe/react-spectrum";
import { ShellProvider } from "@aem-sites/commons-shell";
import "@aem-sites/headless-canvas/dist/index.css";

const shellConfig = {
  basePath: "/",
  imsOrg: "testorg",
  imsToken: "testtoken",
  environment: "qa",
  locale: "en-US",
  imsOrgName: "my test org",
  imsProfile: {
    company: "acme baits",
    userId: "1234@adobe.org",
  },
};

const Properties = ({ content, model, debug = false }) => {
  const patchContent = useCallback((content) => {
    console.log("Content updated:", content);
  });
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, []);
  return (
    <ProviderV3 theme={lightTheme} colorScheme="light">
      <ShellProvider config={shellConfig} localeData={{}}>
        <Canvas id="mas">
          <Data
            adapter={importer}
            rawContent={content}
            rawModel={model}
            isReady={isReady}
          />
          <Render />
          {debug && <Debug />}
          <Persist adapter={exporter} handler={patchContent} />
          <Conditions />
        </Canvas>
      </ShellProvider>
    </ProviderV3>
  );
};

const renderProperties = (el, content, model) => {
  const oldCF = formatNewCFStructureToOld(content);
  const root = createRoot(el);
  root.render(<Properties content={oldCF} model={model} />);
};

export { Properties, renderProperties };
