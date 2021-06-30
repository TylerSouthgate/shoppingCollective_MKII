import * as React from 'react';
import { PrimaryNavigationItem } from './primaryNavigationItem';
import masterStyle from '../../../routeScss/index.scss'
import style from './navigation.scss';

type ITypes = {
  navigationList: Array<any>
}

export const PrimaryNavigation = ({navigationList}: ITypes) => {
  return(
    <ul className={style.primaryNav}>
      {Object.keys(navigationList).map((key: any)=>{
        if(navigationList[key]['type']=='PRIMARY'){
          return(
            <li key={'priNav'+key} className={masterStyle.clrfix}>
              <PrimaryNavigationItem 
                label={navigationList[key]['label']}
                link={navigationList[key]['link']}
              />
            </li>
          )
        }
      })}
    </ul>
  )
}


