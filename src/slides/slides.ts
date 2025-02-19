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
import { CreateAGameClass } from "./BuildAGame/CreateAGameClass";
import { Minesweeper } from "./Games/Minesweeper";
import { AdventureMan } from "./Games/AdventureMan";
import { WhereToBegin } from "./BuildAGame/WhereToBegin";
import { CreateAPlayer } from "./BuildAGame/CreateAPlayer";
import { AddPlayerToGame } from "./BuildAGame/AddPlayerToGame";
import { UserInput } from "./BuildAGame/UserInput";
import { AddUserInputToGame } from "./BuildAGame/AddUserInputToGame";
import { Physics } from "./BuildAGame/Physics";
import { AddPhysicsToGame } from "./BuildAGame/AddPhysicsToGame";
import { Platforms } from "./BuildAGame/Platforms";
import { AddPlatformsToGame } from "./BuildAGame/AddPlatformsToGame";
import { AddCollisionDetectionToGame } from "./BuildAGame/AddCollisionDetectionToGame";

const slideArray = [
  FirstPage,
  AboutMe,
  Introduction,
  PaperPlaneGuide,
  FoldingPaper,
  RenderPaper,
  MakeThingsMove,
  DottedLine,
  FoldPaper,
  FlappyBirdClone,
  Minesweeper,
  AdventureMan,
  WhereToBegin,
  CreateAGameClass,
  CreateAPlayer,
  AddPlayerToGame,
  UserInput,
  AddUserInputToGame,
  Physics,
  AddPhysicsToGame,
  Platforms,
  AddPlatformsToGame,
  AddCollisionDetectionToGame
]

const slides: Record<number, React.FC> = {};
slideArray.forEach((slide, index) => {
  slides[index] = slide;
});

export { slides };
