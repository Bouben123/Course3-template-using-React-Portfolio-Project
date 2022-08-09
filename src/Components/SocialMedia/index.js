import React, { Component }  from 'react';
import { Icon, Par, Social, SocialMediaSection, Span, SpanInfo } from './style.js';
import axios from 'axios';

class SocialMedia extends Component {
    state = {
      social : []
    }
    componentDidMount () {
        axios.get('js/data.json')
        .then( res =>
          { this.setState({social : res.data.social})
        })
    }

   render(){
    const {social} = this.state;
    const socialList = social.map((socialItem)=> {
      return(
        <Social item={socialItem.id} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <Par>
              <Span>{socialItem.title}</Span>
              <SpanInfo>{socialItem.body}</SpanInfo>
          </Par>
        </Social>
      )

    })
    return (
      <SocialMediaSection>
            {socialList}
      </SocialMediaSection>
  
    )
   }
}

export default SocialMedia;