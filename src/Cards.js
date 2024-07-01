import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import IMAGES from "./images/imagesFun.js";
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
function Cards() {
  return (
    <Main open={open} sx={{ backgroundColor: "white" }}>
      <Toolbar />

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 6,
          fontWeight: "bold",
          backgroundColor: "#ccd5ae",
          borderRadius: 10,
          color: "#",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

          marginTop: 0,
        }}
      >
        Videos
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 10,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              },
            }}
          >
            <CardActionArea href="https://youtu.be/RT5fgigTKSM" target="_blank">
              <CardMedia component="img" image={IMAGES.img2} alt="Item 1" />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 16, textAlign: "center" }}
                >
                  Oneplus Nord CE 4 is here - A New Competitor ! and A mid-range
                  flagship? oneplus nord ce 4 | oneplus nord ce 4 review.This
                  video is all about the oneplus nord CE 4 mobile review.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 10,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              },
            }}
          >
            <CardActionArea href="https://youtu.be/qVG-y2V8zaM" target="_blank">
              <CardMedia component="img" image={IMAGES.img1} alt="Item 2" />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 16, textAlign: "center" }}
                >
                  In this video im gonna show you some Top 5 lastest and must
                  try features in Android14 Android 15 developer preview.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              },
              borderRadius: 10,
            }}
          >
            <CardActionArea href="https://youtu.be/JOy6NDPIGb0" target="_blank">
              <CardMedia component="img" image={IMAGES.img3} alt="Item 3" />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 16, textAlign: "center" }}
                >
                  Today we are reviewing the all new OPPO Find X7 Ultra. OPPO
                  Find X7 Ultra packs Quad 50MP camera setup with world's first
                  dual periscope cameras, 120Hz Curved AMOLED Screen, Snapdragon
                  8 Gen 3 & More
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 10,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              },
            }}
          >
            <CardMedia component="img" image={IMAGES.img4} alt="Item 1" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 10,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              },
            }}
          >
            <CardMedia component="img" image={IMAGES.img5} alt="Item 1" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 10,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              },
            }}
          >
            <CardMedia component="img" image={IMAGES.img6} alt="Item 1" />
          </Card>
        </Grid>
      </Grid>
    </Main>
  );
}
export default Cards;
