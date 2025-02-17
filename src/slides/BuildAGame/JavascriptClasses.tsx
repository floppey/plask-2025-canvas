import { Code } from "../../components/Code";

export const JavascriptClasses: React.FC = () => {
  return (
    <>
      <h1>class</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  async update() {
    /** 
     * Update game state here
     */ 
    setTimeout(() => this.update(), 1000 / 120);
  }

  async draw() {
    /** 
     * Draw game state here
     */ 
    requestAnimationFrame(() => this.draw());
  }
}
`}
          />
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};
