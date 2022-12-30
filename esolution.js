function apartmentHunting(blocks, reqs) {
  let blockNumber = 0
  let maxReqsMatchCount = 0
  for (let i = 0; i < blocks.length; i++){
      let requirmentMatchCount = 0
      for(let j = 0; j < reqs.length; j++){
          if(blocks[i][reqs[j]]){
              requirmentMatchCount++;
          }
      }
      if(requirmentMatchCount == reqs.length){
          blockNumber = i;
          break;
      }else{
          if(requirmentMatchCount > maxReqsMatchCount){
              maxReqsMatchCount = requirmentMatchCount;
              blockNumber = i;
          }
      }
  }
  return blockNumber + 1;
  
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;

