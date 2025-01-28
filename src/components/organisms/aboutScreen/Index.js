import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Description,
  FeatureItem,
  FeatureList,
  Header,
  HeaderContainer,
  SectionContainer,
  SectionTitle,
} from "./Styles";

const AboutScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <Header>About EmotiCare</Header>
        </HeaderContainer>

        <Description>
          EmotiCare is a mobile application designed to provide users with
          companionship and support through an AI chatbot. Whether you are
          experiencing worries, mental health challenges, or simply need someone
          to talk to, EmotiCare offers a comforting platform to find peace of
          mind.
        </Description>

        <SectionContainer>
          <SectionTitle>Key Features</SectionTitle>

          <FeatureList>
            <FeatureItem>
              • Communicate with an AI chatbot to share your thoughts and
              concerns.
            </FeatureItem>
            <FeatureItem>
              • Access emergency contact details for crisis and disorder
              helplines.
            </FeatureItem>
            <FeatureItem>
              • Play various mini-games to ease your mind and relax.
            </FeatureItem>
            <FeatureItem>
              • Enjoy a user-friendly, convenient, and simple interface.
            </FeatureItem>
          </FeatureList>

        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Our Mission</SectionTitle>
          <Description>
            The mission of EmotiCare is to make mental health support accessible
            and engaging. We believe in leveraging technology to create a safe
            space for everyone to share their thoughts, find support, and take a
            step towards emotional well-being.
          </Description>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Why EmotiCare?</SectionTitle>
          <Description>
            Life can be overwhelming, and sometimes we all need a little extra
            support. EmotiCare is here to be your companion, offering a blend of
            technology and empathy to help you navigate challenging times. With
            our AI chatbot and engaging activities, we aim to bring moments of
            peace and joy to your life.
          </Description>
        </SectionContainer>
        
      </ScrollView>
    </Container>
  );
};

export default AboutScreen;
