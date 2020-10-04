import React from "react";

const SectionAdd = props => {
  if (props.sectionAddShow) {
    return (
      <section className="section row">
        <div class="box">
          <h3>content box 5</h3>
        </div>

        <div class="box">
          <h3>content box 6</h3>
        </div>

        <div class="box">
          <h3>content box 7</h3>
        </div>

        <div class="box">
          <h3>content box 8</h3>
        </div>
      </section>
    );
  }
  return null;
};

export default SectionAdd;
