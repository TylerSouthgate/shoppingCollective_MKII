import * as React from 'react'
import { MastHead } from '../common/mastHead/mastHead'
import masterStyle from '../routeScss/index.scss'

export default class AboutPage extends React.Component{
  render = () => { 
    return(
      <section className={masterStyle.pageTemplate}>
        <MastHead title={'What about the shopping collective?'} hookLine={'Etiam in turpis sagittis, rutrum nisi eu, volutpat odio. Aliquam et tincidunt sem. Nunc eu augue mauris. Ut et vulputate turpis, a aliquet nibh. Maecenas dolor nunc, consectetur ac quam at, placerat rhoncus elit. Sed nec velit odio.'} />
      </section>
    )
  }
}