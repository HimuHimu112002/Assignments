import React from "react";
import {
  GridCallbackProps,
  GridContainer,
  BlockWrapper
} from "@tackboon/react-grid-rearrange";


const getColor = (i) => {
  const colors = [
    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)"
  ];

  return colors[i % 4];
};


const DragDrop = () => {
    const [toggleDrag, setToggleDrag] = React.useState(true);
  const [items, setItems] = React.useState(
    "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
      .split(",")
      .map((item) => ({
        id: item,
        value: item
      }))
  );

  const bgColors = items.map((_, i) => getColor(i));
  const callback = ({
    isDragging,
    order,
    lastMovingIndex,
    isClick
  }, GridCallbackProps) => {
    if (isClick && !isDragging) {
      console.log("clicked item " + lastMovingIndex);
    }

    if (lastMovingIndex !== -1 && !isDragging && !isClick) {
      const newOrder = order.map((o) => items[o]);
      console.log(newOrder);
    }
  };

  const handleAddItem = React.useCallback(() => {
    setItems((prev) => [
      ...prev,
      {
        id: `${prev.length}`,
        value: `${prev.length}`
      }
    ]);
  }, []);
  return (
   <>
    <div className="App">
      <button className="toggle" onClick={() => setToggleDrag((prev) => !prev)}>
        togggle drag
      </button>
      <button className="add" onClick={handleAddItem}>
        add item
      </button>
      <p>drag status: {toggleDrag.toString()}</p>

      <div className="wrapper">
        <GridContainer
          totalItem={items.length}
          itemHeight={100}
          itemWidth={100}
          colGap={10}
          rowGap={20}
          cb={callback}
          disableDrag={!toggleDrag}
          disableInitialAnimation={true}
        >
          {(styles) =>
            styles.map((style, i) => {
              return (
                <BlockWrapper index={i} animationStyle={style} key={i}>
                  <div
                    style={{
                      background: bgColors[i],
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {items[i].value}
                  </div>
                </BlockWrapper>
              );
            })
          }
        </GridContainer>
      </div>
    </div>
   </>
  )
}

export default DragDrop