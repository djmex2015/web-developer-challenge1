import React from "react";

import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useData } from "../../contexts/DataProvider";
import "./Feed.css";

export interface IFeed {
  id: number;
  image: string;
  message: string;
  author: string;
}

export function Feed({
  id = 0,
  message = "default value",
  image = "",
  author = "",
}: IFeed) {
  const { data, updateData, forceUpdate } = useData();

  const handleDeleteFeed = (event: any) => {
    //TODO: Aqui deveria invokar o API request para deletar o 'feed'
    const dataRes = data.filter(
      (res: any) =>
        res.id !== Number.parseInt(event.currentTarget.getAttribute("id"))
    );
    updateData(dataRes);
    forceUpdate();
  };

  return (
    <React.Fragment>
      <div className="Feed">
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            style={{
              paddingRight: 0,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              id={id !== 0 ? id.toString() : ""}
              aria-label="delete"
              size="medium"
              style={{ color: "red" }}
              onClick={handleDeleteFeed}
            >
              <HighlightOffRoundedIcon fontSize="inherit" />
            </IconButton>
          </Grid>

          <Grid item xs={3} style={{ paddingTop: 30 }}>
            <div className="avatar">
              <Button
                component="label"
                variant="contained"
                style={{ backgroundImage: image }}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              >
                <img
                  key={Math.random()}
                  src={image}
                  alt="Imagen"
                  width="20"
                  height="20"
                  style={{ width: 100, height: 100, borderRadius: 100 }}
                />
              </Button>
            </div>
          </Grid>
          <Grid item xs={9} style={{ paddingTop: 30 }} className="text">
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#9f9f9f" }}
              >
                {message}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9} sx={{ color: "#9f9f9f" }} className="enviado">
            Enviado por
            <div className="author">{author}</div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
