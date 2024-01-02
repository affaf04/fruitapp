import React from "react";
function Index(props) {
  const styles = {
    container: {
      textAlign: 'center',
      backgroundImage: "url('https://thumbs.dreamstime.com/b/summer-theme-background-fruit-citrus-flowers-pink-backdrop-summertime-146861711.jpg')",
      backgroundSize: 'cover',
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
  };  return (
    <>
    <div style={styles.container}>
     <nav>
        <a href="/fruits/new"><h1 style={{
                  borderRadius: "22px",
                  margin: "1em",
                  border: " solid grey",
                  textAlign: "center",
                  backgroundColor: "white",
                  width: "200px",
                }}>Create a New Fruit</h1></a>
      </nav>
      <ul>
        <h1 style={styles.h1}>
          {" "}
          {props.fruits.map((fruit, i) => {
            return (
              <li
                style={{
                  borderRadius: "22px",
                  margin: "1em",
                  border: " solid grey",
                  textAlign: "center",
                  backgroundColor: "white",
                  width: "200px",
                }}
              >
                {" "}
                <a href={`/fruits/${i}`}>{fruit.name} </a>{" "}
              </li>
            );
          })}
        </h1>
      </ul>
     </div>
    </>
  );
}
export default Index;