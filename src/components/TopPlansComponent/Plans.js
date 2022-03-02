import React from "react";
import TopPlansEnclosed from "./TopPlansEnclosed";
import Coverage from "../Coverage";
import Tables from "../Tables";
import Heading from "../Heading";

export default function Plans() {
  return (
    <section className="top-plans">
      <Heading heading="Top Plans" />
      {/* <!-- top-plans cards --> */}
      <TopPlansEnclosed />

      <Heading heading="Coverage Plans" secondClass="covergae-plan-margin" />
      <div className="covergae-plans-div">
        <Coverage val1={1} val2={2} val3={3} colorIndex={1} />
        <Coverage val1={5} val2={10} val3={20} colorIndex={3} />
        <Coverage val1={15} val2={25} val3={35} colorIndex={2} />
        <Coverage val1={30} val2={50} val3={80} colorIndex={1} />
      </div>

      <Heading heading="Insurance Plans" secondClass="covergae-plan-margin" />
      <Tables />
    </section>
  );
}
