import React from "react";
import Filter from "../filter/Filter";
import Grid from "../grid/Grid";

export default function Main() {
  return (
    <div className="flex flex-row-reverse container mx-auto">
      <Grid />
      <Filter view="md" />
    </div>
  );
}
