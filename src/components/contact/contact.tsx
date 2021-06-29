import * as React from 'react'
import masterStyle from '../routeScss/index.scss'
import { MastHead } from '../common/mastHead/mastHead'

export default class ContactPage extends React.Component{
  render = () => { 
    return(
      <section className={masterStyle.pageTemplate}>
          <MastHead title={'It\'s good to talk?'} hookLine={'Fusce rhoncus finibus tellus. Integer blandit eu eros et rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nunc lacus, placerat vel suscipit vel, sagittis at tortor. In id dolor sed tellus maximus consequat vel ut lorem. Duis et nisl justo. Ut sit amet urna orci. Praesent id dapibus lectus.'} />
      </section>
    )
  }
}