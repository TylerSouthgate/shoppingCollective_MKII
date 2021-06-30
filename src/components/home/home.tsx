import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'
import { updateCurrency } from '../redux/actions/dDataActions'
import { IAppState } from '../redux/reducers/initialState'
import masterStyle from '../routeScss/index.scss'
import { AiFillExperiment, AiOutlineDeploymentUnit, AiOutlineAlert } from "react-icons/ai";
import style from './home.scss'


interface IProps{
  auth: IAppState;
  dispatch: Dispatch<IAppState>;
}
interface IStates{
  localStyle: any
}

class HomePage extends React.Component<IProps,IStates>{
  constructor(props:IProps){
    super(props);
    this.state = {
      localStyle: {'backgroundPositionY': 0}
    } 
  }
  componentDidMount = () => {
    addEventListener('scroll', this.bgScroll)
  }
  updateCurrency = (inValue: string) => {
    this.props.dispatch(updateCurrency(inValue));
  }
  bgScroll = () => {
    let sTop: number = window.scrollY;
    this.setState({localStyle: {'backgroundPositionY': -sTop*0.5+'px'}})
  }
  render = () => { 
    return(
      <section className={style.home}>
        <div className={style.leader} style={this.state.localStyle}>
          <div className={style.homepagePage}>
            <h1 className={style.headerTitle}>welcome to<br /><span>shopping<br />collective</span></h1>
          </div>
        </div>
        <div className={style.homepagePage}>
          <div className={style.homeTriPanel}>
            <div>
              <AiFillExperiment />
              <p>Nullam ornare elit venenatis gravida rutrum. Vivamus eu metus fringilla, dignissim mauris quis, consequat urna.</p>
            </div>
            <div>
              <AiOutlineDeploymentUnit />
              <p>Proin varius turpis tincidunt felis elementum aliquet. Vivamus eu metus fringilla, dignissim mauris quis, consequat urna. Etiam ut sollicitudin nisi. </p>
            </div>
            <div>
              <AiOutlineAlert />
              <p>Proin varius turpis tincidunt felis elementum aliquet. Nullam ornare elit venenatis gravida rutrum. </p>
            </div>
          </div>
          <div className={style.singlePanel}>
            <h3>Duis mollis augue in aliquam dignissim!</h3>
            <p>Nullam scelerisque, enim eu pulvinar dapibus, neque erat lacinia leo, vitae facilisis risus felis vitae sem. Curabitur vitae tortor efficitur, vestibulum justo a, fermentum ipsum.</p>
          </div>
        </div>
      </section>
    )
  }
}
function mapStateToProps(state:IAppState) {
  return { auth : state }
}
export default withRouter(connect(mapStateToProps)(HomePage) as any);

