import React from "react";

function New() {
  const styles = {
    container: {
      textAlign: 'center',
      backgroundColor: "lightGray",
      backgroundPosition: 'center',
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
      fontSize: '1.5em',
      color: 'red', 
    },
  };
  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.h1}>Create A New Fruit</h1>
      <form action="/fruits" method="POST"><br/>
        Name: <input style={{margin:"1em", borderRadius: "20px" , boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.3)"}} type="text" name="name" /><br/>
        Color: <input  style={{margin:"1em",borderRadius: "20px" , boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.3)"}}type="text" name="color" /><br/>
        Ready2Eat: <input  style={{margin:"1em",borderRadius: "20px" , boxShadow:" 5px 5px 10px rgba(0, 0, 0, 0.3)"}}type="checkbox" name="readyToEat" /><br/>
        <input style={{margin:"1em", border: "1px solid red",}} type="submit" value="Create Fruit" />
      </form>
      </div>
    </>
  );
}

export default New;