import React from 'react';
import InfoArea from 'components/common-components/InfoArea';

const ContentSection = () =><React.Fragment>
  <InfoArea
    icon="now-ui-icons media-1_button-pause"
    iconColor="primary"
    title="Assesment"
    titleColor="info"
    description="Prepare Anywhere, Test yourself Here."
  />
  <InfoArea
    icon="now-ui-icons users_single-02"
    iconColor="primary"
    title="Adaptive Learning"
    titleColor="info"
    description="Personal SkillOptima's Intelligent Personal Tutor"
  />
  <InfoArea
    icon="now-ui-icons media-2_sound-wave"
    iconColor="info"
    title="Data Analytics"
    titleColor="info"
    description="Complete Analytics For Your Tests"
  />
</React.Fragment>;

export default ContentSection;