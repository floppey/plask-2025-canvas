import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

class Player {
  game: Game;
  x: number;
  y: number;
  height: number = 64;
  width: number = 64;
  velocityY: number = 0;
  sprite: HTMLImageElement;

  constructor(game: Game, x: number, y: number) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "/sprite.png";
  }

  async update() {
    if (this.game.input.pressedKeys["A"]) {
      this.x -= 5;
    }
    if (this.game.input.pressedKeys["D"]) {
      this.x += 5;
    }

    this.velocityY = Math.min(this.velocityY + 0.5, 10);
    this.y += this.velocityY;

    // Only check for collision if player is falling
    if (this.velocityY > 0) {
      const platform = this.game.platforms.find((platform) =>
        this.isOnPlatform(platform)
      );
      if (platform) {
        this.y = platform.y;
        this.velocityY = 0;
      }
    }

    this.y = Math.min(this.y, this.game.canvas.height);
    this.y = Math.max(this.y, this.height);
    this.x = Math.min(this.x, this.game.canvas.width - this.width);
    this.x = Math.max(this.x, 0);
  }

  async draw() {
    const spriteSize = 64;
    let row = 0;
    let col = 0;
    let numberOfFrames: number;

    if (this.game.input.pressedKeys["A"] && !this.game.input.pressedKeys["D"]) {
      row = 9;
      numberOfFrames = 9;
    } else if (
      this.game.input.pressedKeys["D"] &&
      !this.game.input.pressedKeys["A"]
    ) {
      row = 11;
      numberOfFrames = 9;
    } else {
      row = 14;
      numberOfFrames = 1;
    }

    col = Math.floor((Date.now() / 100) % numberOfFrames);

    this.game.ctx.drawImage(
      this.sprite,
      col * spriteSize,
      row * spriteSize,
      spriteSize,
      spriteSize,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
  }

  jump() {
    this.velocityY = -10;
  }

  // PS! player.y is the bottom of the player while platform.y is the top of the platform
  isOnPlatform(platform: Platform) {
    // Snap to platform if player partly inside platform
    const tolerance = 10;
    return (
      this.x + this.width > platform.x &&
      this.x < platform.x + platform.width &&
      this.y >= platform.y &&
      this.y <= platform.y + tolerance
    );
  }
}

class InputHandler {
  game: Game;
  pressedKeys: Record<string, boolean> = {};
  eventListeners: Record<string, (event: Event) => void> = {};

  constructor(game: Game) {
    this.game = game;

    this.eventListeners["keydown"] = (e) => {
      const event = e as KeyboardEvent;
      this.pressedKeys[event.key.toUpperCase()] = true;
      if (event.key === " ") {
        this.game.player.jump();
      }
    };

    this.eventListeners["keyup"] = (e) => {
      const event = e as KeyboardEvent;
      this.pressedKeys[event.key.toUpperCase()] = false;
    };

    Object.entries(this.eventListeners).forEach(([event, listener]) => {
      document.addEventListener(event, listener);
    });
  }

  destroy() {
    Object.entries(this.eventListeners).forEach(([event, listener]) => {
      document.removeEventListener(event, listener);
    });
  }
}

class Platform {
  game: Game;
  x: number;
  y: number;
  height: number;
  width: number;

  constructor(game: Game, x: number, y: number, height: number, width: number) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  async draw() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player: Player;
  platforms: Platform[] = [];
  input: InputHandler;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.player = new Player(this, canvas.width / 2, canvas.height / 2);
    this.input = new InputHandler(this);
    this.platforms.push(
      new Platform(
        this,
        canvas.width / 4,
        canvas.height / 2,
        20,
        canvas.width / 4
      )
    );
    this.platforms.push(
      new Platform(
        this,
        canvas.width / 1.5,
        canvas.height / 1.25,
        20,
        canvas.width / 4
      )
    );
  }

  async update() {
    await this.player.update();
  }

  async draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    await this.player.draw();
    await this.platforms.forEach((platform) => platform.draw());
  }

  destroy() {
    this.input.destroy();
  }
}

export const AddSpriteToGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let id = -1;
    let game: Game | null = null;
    if (canvasRef.current) {
      game = new Game(canvasRef.current);

      const loop = async () => {
        await game?.update();
        game?.draw();
        id = requestAnimationFrame(loop);
      };

      loop();
    }

    return () => {
      cancelAnimationFrame(id);
      game?.destroy();
    };
  }, [canvasRef]);

  return (
    <>
      <h1>Animer spilleren</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="600" height="400"></canvas>
        </div>
        <div className="column">
          <Code
            fontSize="small"
            code={`
class Player {
  ...
  sprite: HTMLImageElement;  

  constructor(game: Game, x: number, y: number) {
    ...
    this.sprite = new Image();
    this.sprite.src = "/sprite.png";
  }

  async draw() {
    const spriteSize = 64;
    let row = 0;
    let col = 0;
    let numberOfFrames: number;

    if (this.game.input.pressedKeys["A"] && !this.game.input.pressedKeys["D"]) {
      row = 9;
      numberOfFrames = 9;
    } else if (this.game.input.pressedKeys["D"] && !this.game.input.pressedKeys["A"]) {
      row = 11;
      numberOfFrames = 9;
    } else {
      row = 14;
      numberOfFrames = 1;
    }

    col = Math.floor((Date.now() / 100) % numberOfFrames);

    this.game.ctx.drawImage(
      this.sprite,
      col * spriteSize,
      row * spriteSize,
      spriteSize,
      spriteSize,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
