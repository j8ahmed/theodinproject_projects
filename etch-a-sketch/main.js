/* 
 * Code Outline:
 *
 *
  */

function etchASketch(){

  const menu = document.querySelector("#menu");
  const canvas = document.querySelector("#canvas");
  const canvasSize = canvas.clientWidth;
  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", clearCanvas);
  const units = 16;
  const gapWidth = 1;

  function constructCanvas(){
    for(let i=0; i < units; ++i){
      for(let j=0; j < units; ++j){
	const pixel = document.createElement("div");
	pixel.classList.add("canvas-pixel");
	pixel.setAttribute("id", `pixel-r${i+1}-c${j+1}`);
	pixel.addEventListener("mouseover", fillUnit);
	pixel.style.width = `${canvasSize.x}px`;
	pixel.style.height = `${canvasSize.y}px`;

	canvas.appendChild(pixel);
      }
    }
  }

  function setCanvasDimensions(){
    let numGridLines = gapWidth * (units - 1);
    let unitSize = (canvasSize - numGridLines) / units;
    canvas.style.gap = `${gapWidth}px`;
    canvas.style.gridTemplateRows = `repeat(${units}, minmax(${unitSize}px, 1fr))`;
    canvas.style.gridTemplateColumns = `repeat(${units}, minmax(${unitSize}px, 1fr))`;
  }

  function fillUnit(e){
    let unit = e.currentTarget;
    unit.style.background = "black";
  }

  function clearCanvas(){
    // Clear all pixel units in the Canvas 
    // Set background to white or none
    for(const pixel of canvas.children){
      pixel.style.background = "";
    }
  }


  constructCanvas();
  setCanvasDimensions();
}

etchASketch();
