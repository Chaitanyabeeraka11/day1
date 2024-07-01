import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

function Counter() {
  const [count, setCount] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
    setCount(count + (subscribed ? -1 : 1));
  };

  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 300,
          height: 200,
          p: 3,
          backgroundColor: "#606c38",
          color: "#01b4e4",
          borderRadius: 14,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "times-new-roman",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Subscribers
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playwrite MX", Arial, sans-serif',
            fontWeight: 700,
            color: "#90cea1",
            textAlign: "center",
          }}
        >
          {count}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleSubscribe}
            sx={{
              backgroundColor: "#90cea1",
              color: "#0d253f",
              "&:hover": {
                backgroundColor: "#01b4e4",
                color: "#ffffff",
                boxShadow:
                  "rgba(204, 213, 174, 0.25) 0px 54px 55px, rgba(204, 213, 174, 0.12) 0px -12px 30px, rgba(204, 213, 174, 0.12) 0px 4px 6px, rgba(204, 213, 174, 0.17) 0px 12px 13px, rgba(204, 213, 174, 0.09) 0px -3px 5px",
              },
            }}
          >
            {subscribed ? "Unsubscribe" : "Subscribe"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Counter;
