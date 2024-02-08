import { Button } from "@mui/base/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataProvider";
import { Avatar } from "../Avatar";
import { IFeed } from "../Feed";
import { feeds } from "./../../data";
import "./Form.css";

export function Form() {
  const [dataImage, setDataImage] = useState<any>(null);
  const [enable, setEnable] = useState<boolean>(false);
  const [removeImage, setRemoveImage] = useState<boolean>(false);
  const { data, updateData, forceUpdate } = useData();

  const [feed, setFeed] = useState<IFeed>({
    id: 0,
    image: "",
    message: "",
    author: "",
  });

  useEffect(() => {
    updateData(data.length === 0 ? feeds : data);
  });

  useEffect(() => {
    if (feed.author !== "" && feed.message !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [feed]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFeed({
      ...feed,
      [name]: value,
    });
  };

  const handleChildDataChange = (data: string) => {
    setDataImage(data);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const { id, message, author } = event.target;
    addFeed({
      id: Math.floor(Math.random() * 200000), //id
      image: dataImage,
      message: message.value,
      author: author.value,
    });
  };

  const addFeed = (
    feed: IFeed = {
      id: 0,
      image: "",
      message: "",
      author: "",
    }
  ) => {
    //TODO: Aqui deveria invokar o API request para inserir o 'feed'
    data.push(feed);
    forceUpdate();
    resetForm(null);
  };

  const handleDeleteImage = (event: any) => {
    feed.image = "";
    setFeed({ ...feed, image: "" });
    setRemoveImage(true);
  };

  const resetForm = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    setFeed({
      id: 0,
      image: "",
      message: "",
      author: "",
    });
  };

  return (
    <React.Fragment>
      <form className="Form" onSubmit={submitHandler}>
        <Grid container spacing={1}>
          <Grid
            container
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Avatar
                onDataChange={handleChildDataChange}
                removeImage={removeImage}
              ></Avatar>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                size="medium"
                style={{ color: "red" }}
                onClick={handleDeleteImage}
              >
                <DeleteOutlineIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="author"
              value={feed.author}
              label="Digite seu nome"
              fullWidth
              className="text-field"
              onChange={handleInputChange}
              InputProps={{
                className: "primary",
              }}
              InputLabelProps={{
                className: "label-text-color",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              value={feed.message}
              label="Mensagem"
              multiline
              fullWidth
              rows={3}
              variant="outlined"
              className="text-field"
              onChange={handleInputChange}
              InputProps={{
                className: "primary",
              }}
              InputLabelProps={{
                className: "label-text-color",
              }}
            />
          </Grid>
          <Grid
            container
            className="group-buttons"
            sx={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <Link
                onClick={(event) => resetForm(event)}
                href="#"
                underline="always"
                sx={{
                  color: "#5f5f5f",
                  display: "flex",
                  fontSize: 14,
                }}
              >
                {"Descartar"}
              </Link>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                className="button"
                disabled={!enable}
                style={{
                  color: enable ? "#e8f5e9" : "#313131",
                  backgroundColor: enable ? "#008000" : "#5f5f5f",
                }}
              >
                Publicar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
