import React from "react";
import styled from "styled-components";
import SectionTemplate from "templates/SectionTemplate";
import Form from "components/Form/Form";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 120px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

function ProjectPage({ x, y }) {
  return (
    <SectionTemplate x={x} y={y} title="Contact">
      <Wrapper>
        <Form />
        <Contact />
        <Footer />
      </Wrapper>
    </SectionTemplate>
  );
}

export default ProjectPage;
