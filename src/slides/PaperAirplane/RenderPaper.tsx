import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

export const RenderPaper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        // Draw a4 paper
        const canvasAspectRatio = canvas.width / canvas.height;
        const a4AspectRatio = 297 / 210; // A4 paper aspect ratio

        let paperWidth, paperHeight;

        if (canvasAspectRatio > a4AspectRatio) {
          // Canvas is wider than A4 paper
          paperHeight = canvas.height * 0.875;
          paperWidth = paperHeight * a4AspectRatio;
        } else {
          // Canvas is taller than A4 paper
          paperWidth = canvas.width * 0.875;
          paperHeight = paperWidth / a4AspectRatio;
        }

        const x = (canvas.width - paperWidth) / 2;
        const y = (canvas.height - paperHeight) / 2;

        ctx.fillRect(x, y, paperWidth, paperHeight);
      }
    }
  }, [canvasRef]);

  return (
    <>
      <h1>Steg 1: Tegne et A4-ark</h1>
      <div className="side-by-side">
        <canvas ref={canvasRef} width="400" height="400"></canvas>
        <div className="column">
          <Code
            code={`
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const a4Width = 297;
const a4Height = 210;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, a4Width, a4Height);
                    `}
          />
        </div>
      </div>
    </>
  );
};
