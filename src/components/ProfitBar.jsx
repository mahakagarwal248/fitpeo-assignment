import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLayoutEffect, useState } from "react";

function ProfitBar(props) {
  const [width, setWidth] = useState("");
  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    getWidth();
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size={width > 860 || width < 650 ? 100 : 80}
        thickness={width > 860 || width < 650 ? 5 : 3}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          fontWeight="bold"
          fontSize={16}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
        <Typography variant="caption" component="div" fontWeight="bold">
          {Math.round(props.value) > 50 && (
            <p
              style={{
                wordSpacing: "9999px",
                lineHeight: "12px",
                fontSize: "10px",
              }}
            >
              Goal Completed
            </p>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

ProfitBar.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default ProfitBar;
