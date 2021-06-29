import * as React from 'react';
import { PrimaryNavigationItem } from './primaryNavigationItem';
import masterStyle from '../../../routeScss/index.scss'
import style from './navigation.scss';

type ITypes = {
  navigationList: Array<any>
}

export const PrimaryNavigation = ({navigationList}: ITypes) => {
  return(
    <ul id={style.primaryNav} className={masterStyle.clrfix}>
      {Object.keys(navigationList).map((key: any)=>{
        if(navigationList[key]['type']=='PRIMARY'){
          return(
            <li key={'priNav'+key}>
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


