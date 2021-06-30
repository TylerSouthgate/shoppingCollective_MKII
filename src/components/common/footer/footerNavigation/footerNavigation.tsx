import * as React from 'react';

import { FooterNavigationItem } from './footerNavigationItem';
import masterStyle from '../../../routeScss/index.scss'
import style from './footerNavigation.scss';

type ITypes = {
  navigationList: Array<any>
}

export const FooterNavigation = ({navigationList}: ITypes) => {
  return(
    <ul>
      {Object.keys(navigationList).map((key: any)=>{
        if(navigationList[key]['type']=='PRIMARY'){
          return(
            <li key={'priNav'+key} className={masterStyle.clrfix}>
              <FooterNavigationItem 
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