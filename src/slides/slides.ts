import { AboutMe } from "./IntroAndOutro/AboutMe";
import { FirstPage } from "./IntroAndOutro/FirstPage";
import { FoldingPaper } from "./PaperAirplane/FoldingPaper";
import { Introduction } from "./IntroAndOutro/Introduction";
import { PaperPlaneGuide } from "./PaperAirplane/PaperPlaneGuide";
import { RenderPaper } from "./PaperAirplane/RenderPaper";
import { MakeThingsMove } from "./PaperAirplane/MakeThingsMove";
import { DottedLine } from "./PaperAirplane/DottedLine";
import { FoldPaper } from "./PaperAirplane/FoldPaper";
import { FlappyBirdClone } from "./Games/FlappyBirdClone";
import { JavascriptClasses } from "./BuildAGame/JavascriptClasses";
import { Minesweeper } from "./Games/Minesweeper";
import { AdventureMan } from "./Games/AdventureMan";
import { WhereToBegin } from "./BuildAGame/WhereToBegin";

export const slides: Record<number, React.FC> = {
  0: FirstPage,
  1: AboutMe,
  2: Introduction,
  3: PaperPlaneGuide,
  4: FoldingPaper,
  5: RenderPaper,
  6: MakeThingsMove,
  7: DottedLine,
  8: FoldPaper,
  9: FlappyBirdClone,
  10: Minesweeper,
  11: AdventureMan,
  12: WhereToBegin,
  13: JavascriptClasses,
};
