import * as React from 'react';

export function getAllImages(data: string){
  let imageStrList: any = data.split(',');
  return(
    imageStrList
  )
}