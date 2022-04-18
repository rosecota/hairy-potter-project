let count = 1; 

export const makePottery = (potteryShape, potterWeight, potteryHeight) => {
  let potteryObject = {
    shape: potteryShape,
    weight: potterWeight,
    height: potteryHeight,
    id: count++
  }

  return potteryObject;
}