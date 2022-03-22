/* 
 * Code Outline:
 *
 *
  */

function etchASketch(){

  const menu = document.querySelector("#menu");
  const canvas = document.querySelector("#canvas");
  const canvasSize = canvas.clientWidth;

  console.log(canvasSize);

  const units = 16;

  for(let i=0; i < units; ++i){
    for(let j=0; j < units; ++j){
      const pixel = document.createElement("div");
      pixel.classList.add("canvas-pixel");
      pixel.setAttribute("id", `pixel-r${i+1}-c${j+1}`);
      pixel.style.width = `${canvasSize.x}px`;
      pixel.style.height = `${canvasSize.y}px`;

      canvas.appendChild(pixel);
    }
  }

  function setCanvasDimensions(){
    let unitSize = canvasSize / units;
    canvas.style.gridTemplateRows = `repeat(${units}, ${unitSize}px)`;
    canvas.style.gridTemplateColumns = `repeat(${units}, ${unitSize}px)`;
  }

  setCanvasDimensions();

}
etchASketch();
