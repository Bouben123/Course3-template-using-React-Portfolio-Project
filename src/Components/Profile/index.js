import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Bar, Parent, ParentSpan, Perc, ProfileItem, ProfileList, ProfileSection, ProfileSkills, ProfileTitle, Skills, SkillsDesc, SkillsTitle, SkillsTitleSpan, Span, SpanWeb, Title, TitleSpan } from './style.js';

const Profile = () => {

  
  const [skils , setSkills] = useState([])
  useEffect (() => {
      axios.get('js/data.json').then( res => { setSkills(res.data.skills)})
  }, [])

  const SkillsData = skils.map( (skillsItem) => {
      return (
        <Bar  key={skillsItem.id}>
          <Title> {skillsItem.title} </Title> 
          <Perc> {skillsItem.perc} </Perc>
          <Parent>
              <ParentSpan nameSpan={skillsItem.id} />
          </Parent> 
        </Bar>
      )
  })

    return (
      <ProfileSkills>
      <div class="container">
          <ProfileSection>
              <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <Span>Name</Span>
                      Hamza Nabil
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Birthday</Span>
                      21/1/1996
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Address</Span>
                      Ain shams
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Phone</Span>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Email</Span>
                      hamza@hamza.com
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Website</Span>
                      <SpanWeb>www.google.com</SpanWeb>
                  </ProfileItem>
              </ProfileList>
          </ProfileSection>
          
          <Skills>
              <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
              <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>
              {SkillsData}
          </Skills>
          
      </div>
      </ProfileSkills>
  
    )
}

export default Profile;