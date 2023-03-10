import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle, editHoverStyle, flex } from "../styles/globalStyle";
import useStockCalls from "../hooks/useStockCalls";
import { Box, CardHeader } from "@mui/material";

export default function FirmCard({ firm, setOpen, setInfo }) {
  const { deleteFirm } = useStockCalls();
  return (
    <Card
      elevation={10}
      sx={{
        p: 1,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardHeader
        sx={{ width: "100%" }}
        title={firm?.name}
        subheader={firm?.address}
      />

      <Box sx={{ width: "250px", height: "150px" }}>
        <CardMedia
          image={firm?.image}
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          component="img"
          alt="firm-img"
        />
      </Box>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {firm?.phone}
        </Typography>
      </CardContent>
      <CardActions sx={flex}>
        <EditIcon
          sx={editHoverStyle}
          onClick={() => {
            setOpen(true);
            setInfo(firm);
          }}
        />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteFirm(firm?.id)}
        />
      </CardActions>
    </Card>
  );
}
