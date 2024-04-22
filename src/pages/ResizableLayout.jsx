import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ResizableComponent from "../components/ResizableComponent";

const ResizableLayout = () => {
  const [cols, setCols] = useState(3);
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const getLayouts = () => {
    return {
      lg: [
        { i: "1", x: 0, y: 0, w: 1, h: 2 },
        { i: "2", x: 1, y: 0, w: 1, h: 2 },
        { i: "3", x: 2, y: 1, w: 1, h: 2 },
      ],
      md: [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 1, y: 0, w: 1, h: 1 },
        { i: "3", x: 0, y: 2, w: 1, h: 1 },
      ],
      sm: [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 2, y: 0, w: 1, h: 1 },
        { i: "3", x: 0, y: 1, w: 1, h: 1 },
      ],
      xs: [
        { i: "1", x: 0, y: 0, w: 2, h: 1 },
        { i: "2", x: 0, y: 1, w: 2, h: 1 },
        { i: "3", x: 0, y: 2, w: 2, h: 1 },
      ],
    };
  };

  const [layouts, setLayouts] = useState(getLayouts());

  const onResize = (layout, newItem) => {
    if (newItem.i === "1" && newItem.w === 2) {
      layout[0] = { ...layout[0], w: 2 };
      layout[1] = { ...layout[1], x: 2 };
      layout[2] = { ...layout[2], x: 0, y: 1 };
    } else if (newItem.i == 2 && newItem.w === 2) {
      layout[2] = { ...layout[2], x: 0, y: 1 };
    }
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      isResizable={true}
      resizeHandles={["se", "ne", "sw", "nw", "e", "w", "n", "s"]}
      breakpoints={{ lg: 800, md: 699, sm: 450, xs: 400, xxs: 0 }}
      cols={{ lg: cols, md: 2, sm: 2, xs: 2, xxs: 2 }}
      onResize={onResize}
    >
      <div key="1" background={"white"}>
        <ResizableComponent
          image={
            "https://images.unsplash.com/photo-1713403955914-b938e1bd1b2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D"
          }
        />
      </div>
      <div key="2" background={"white"}>
        <ResizableComponent
          image={
            "https://images.unsplash.com/photo-1713296416993-c5a9d0d391eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      <div key="3" background={"white"}>
        <ResizableComponent
          image={
            "https://plus.unsplash.com/premium_photo-1712226611084-4983941cbbf0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </ResponsiveGridLayout>
  );
};

export default ResizableLayout;
