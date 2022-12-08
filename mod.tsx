import React from "react";
import { ImageResponse } from "og";
import { serve } from "server";

serve((req) => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 128,
        }}
      >
        Hello!
      </div>
    )
  );
});
