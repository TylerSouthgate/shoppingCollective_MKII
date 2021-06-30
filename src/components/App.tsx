import * as React from "react";
import MainRoutes from './routes';
import PageHeader from './common/header/header';
import PageFooter from './common/footer/footer';
import { BrowserRouter } from "react-router-dom";
import style from './routeScss/index.scss';

export default class App extends React.Component{
  render = () => {
    return(
      <div className={style.page}>
        <BrowserRouter>
          <header>
            <PageHeader />
          </header>
          <MainRoutes />
          <footer>
            <PageFooter />
          </footer>
        </BrowserRouter>
      </div>
    )
  }
};
