import React from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

const Project = () => (
  <InView>
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
        {console.log(inView)}
      </div>
    )}
  </InView>
);

export default Project;
