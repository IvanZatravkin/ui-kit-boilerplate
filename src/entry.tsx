import React from "react";
import { Link } from "./components/elements/link/v1";
import { T } from "./components/elements/text/v1";
import { Box } from "./components/layout/box/v1";
import { Grid } from "./components/layout/grid/v1";
import { Provider } from "./provider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Grid p={1} m="auto" width={1200} maxWidth="100%" bg="main">
          <Grid.Row bg="success">
            <Grid.Col border={1} alignItems="center" p={2} minDisplayWidth={600}>
              <T>Author</T>
            </Grid.Col>
            <Grid.Col border={1} alignItems="center" p={2} minDisplayWidth={600}>
              <T>Number of posts</T>
            </Grid.Col>
            <Grid.Col border={1} borderRight={0} alignItems="center" p={2}>
              <T fontSize={200} fontWeight={900} opacity={0.3}>
                <T>Lastreply</T>
              </T>
            </Grid.Col>
          </Grid.Row>
          {new Array(4).fill(undefined).map((_, idx) => (
            <Link key={idx} to={"" + idx}>
              {(onClick) => (
                <Grid.Row interactive cursor="pointer" onClick={onClick} bg={(idx & 1) == 0 ? "dark" : "main"}>
                  <Grid.Col interactive border={1} borderLeft={0} span={4} p={2}>
                    <Box mT={1}>
                      <T>Topic {idx}</T>
                    </Box>
                  </Grid.Col>
                  <Grid.Col border={1} alignItems="center" p={2} minDisplayWidth={600}>
                    <T>username {idx}</T>
                  </Grid.Col>
                  <Grid.Col border={1} alignItems="center" p={2} minDisplayWidth={600}>
                    <T>{idx}</T>
                  </Grid.Col>
                  <Grid.Col span={4} border={1} borderRight={0} alignItems="center" p={2}>
                    <T>
                      {new Date().toLocaleDateString()}&nbsp;
                      {new Date().toLocaleTimeString()}
                    </T>
                  </Grid.Col>
                </Grid.Row>
              )}
            </Link>
          ))}
        </Grid>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
