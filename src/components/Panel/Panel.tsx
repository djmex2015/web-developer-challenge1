import { Box, Grid } from "@mui/material";
import { FeedList } from "../FeedList";
import { Form } from "../Form";
import "./Panel.css";
import { useData } from "../../contexts/DataProvider";
import { feeds } from "./../../data";
import { useEffect } from "react";

export function Panel() {
  const { data, updateData } = useData();

  useEffect(() => {
    updateData(data.length === 0 ? feeds : data);
  }, [data, updateData]);

  return (
    <Grid container className="panel">
      <Form></Form>
      <FeedList feeds={data}></FeedList>
    </Grid>
  );
}
