import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "./MainPage.module.css";
import LogoGesicht1 from "../../Assats/Images/LogoGesicht1.png";
import LogoGesicht2 from "../../Assats/Images/LogoGesicht2.png";
import LogoGesicht3 from "../../Assats/Images/LogoGesicht3.png";
import Typography from "@mui/material/Typography";
import { useVacationMessage, useMainPageImages } from "../../Helper/service.ts";
import { Helmet } from "react-helmet";

// Import IconButton, Arrow Icons, and MobileStepper
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MainPage = ({ isVisible, blur }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const vacationMessage = useVacationMessage();
  const { ImageUrls } = useMainPageImages();
  const maxSteps = ImageUrls.length;

  // Define handleNext and handleBack functions
  const handleNext = React.useCallback(() => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  }, [maxSteps]);

  const handleBack = React.useCallback(() => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  }, [maxSteps]);

  // Handle keyboard arrow keys
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleBack();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleBack, handleNext]);

  return (
    <Box className={styles.slideshowContainer}>
      <Helmet>
        <title>Haar Zwei Ooh! - Ihr Friseur in Stuttgart Ost</title>
        <meta
          name="description"
          content="Haar Zwei Ooh!, Ihr Friseur in Stuttgart Ost. Erleben Sie individuelle Beratung, professionelle Haarschnitte und Styling."
        />
        <meta
          name="keywords"
          content="Friseur, Stuttgart Ost, Haarschnitt, Styling, Haarpflege"
        />
      </Helmet>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
      >
        {ImageUrls.map((imageUrl, index) => (
          <div key={index}>
            <Box
              component="img"
              className={`${styles.imageBox}`}
              src={imageUrl.url}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <div>
        <Box className={styles.stepperBox}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ backgroundColor: "transparent", width: "auto" }}
          />
        </Box>

        {/* Add Arrow Buttons */}
        <IconButton
          onClick={handleBack}
          sx={{
            zIndex: 20,
            position: "absolute",
            top: "50%",
            left: 16,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
            fontSize: "2rem",
          }}
        >
          <KeyboardArrowLeft fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            zIndex: 20,
            position: "absolute",
            top: "50%",
            right: 16,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
            fontSize: "2rem",
          }}
        >
          <KeyboardArrowRight fontSize="inherit" />
        </IconButton>
      </div>

      {ImageUrls[activeStep]?.showText && (
        <div className={styles.textContent}>
          <Box
            component="img"
            className={`${styles.icons} ${
              isVisible
                ? styles.animateonvisibleuperTitle
                : styles.animateOutUperTitle
            }`}
            src={LogoGesicht1}
            alt={`test`}
          />

          <div
            className={`${styles.uperTitle} ${
              isVisible
                ? styles.animateonvisibleuperTitle
                : styles.animateOutUperTitle
            }`}
          >
            {"Ihr Friseur in Stuttgart Ost"}
          </div>
          <div
            className={`${styles.centeredText} ${
              isVisible
                ? styles.animateonvisiblecenteredText
                : styles.animateOutCenteredText
            }`}
          >
            {"Haar Zwei Ooh!"}
          </div>
          <div
            className={`${styles.subTitle} ${
              isVisible
                ? styles.animateonvisiblesubTitle
                : styles.animateOutSubTitle
            }`}
          >
            {"... für den eigenen Kopf"}
          </div>

          <div>
            <Box
              component="img"
              className={`${styles.icons} ${
                isVisible
                  ? styles.animateonvisiblesubTitle
                  : styles.animateOutSubTitle
              }`}
              src={LogoGesicht2}
              alt={`test`}
              style={{ marginRight: "5%" }}
            />

            <Box
              component="img"
              className={`${styles.icons} ${
                isVisible
                  ? styles.animateonvisiblesubTitle
                  : styles.animateOutSubTitle
              }`}
              src={LogoGesicht3}
              alt={`test`}
            />
          </div>
        </div>
      )}

      {vacationMessage.showMessage && (
        <Box className={styles.vacationBox}>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {vacationMessage.message}
          </Typography>
        </Box>
      )}
      <div className={styles.PhotoBy}>{ImageUrls[activeStep]?.text}</div>
    </Box>
  );
};

export default MainPage;
