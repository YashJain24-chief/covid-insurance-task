import React from "react";
import TopPlans from "./TopPlans";
import topPlansData from "../../data/TopPlansData";

export default function TopPlansEnclosed() {
  const topPlansDataComponents = topPlansData.map((element) => (
    <div className="top-plans-card" key={element.id}>
      <TopPlans {...element} />
    </div>
  ));

  return <>{topPlansDataComponents}</>;
}
