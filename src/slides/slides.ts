import { AboutMe } from "./IntroAndOutro/AboutMe";
import { FirstPage } from "./IntroAndOutro/FirstPage";
import { FoldingPaper } from "./PaperAirplane/FoldingPaper";
import { Introduction } from "./IntroAndOutro/Introduction";
import { PaperPlaneGuide } from "./PaperAirplane/PaperPlaneGuide";
import { RenderPaper } from "./PaperAirplane/RenderPaper";

export const slides: Record<number, React.FC> = {
  0: FirstPage,
  1: AboutMe,
  2: Introduction,
  3: PaperPlaneGuide,
  4: FoldingPaper,
  5: RenderPaper,
};
