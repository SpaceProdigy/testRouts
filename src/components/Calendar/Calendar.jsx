import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DayCalendarSkeleton } from "@mui/x-date-pickers";
import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";
import "dayjs/locale/uk";
import { ukUA, enUS } from "@mui/x-date-pickers/locales";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalCalendar } from "./ModalCallendar/ModalCallendar";
import { DayItem } from "./DayItem/DayItem";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  selectLessonsJillArr,
  selectLessonsLoading,
} from "../../redux/englishLessonsSlice";
import dayjs from "dayjs";

export default function Calendar({
  handleAddALesson,
  setIsDay,
  isEdit,
  setIsEdit,
  open,
  setIsChooseALesson,
  isChooseALesson,
  isDay,
  setValueSelect,
  permissions,
  isDeleteModal,
  setIsDeleteModal,
  pathNavigate,
  setSelectMonthCalendar,
  selectMonthCalendar,
}) {
  const [isModal, setIsModal] = useState(false);
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectLessonsLoading);
  const LessonsJillArr = useSelector(selectLessonsJillArr);

  const handleClose = () => {
    setIsDay(null);
    setIsModal(false);
  };

  const shouldDisplayBadge = ({ day }) => {
    const dayOfMonth = dayjs(day.$d).format("YYYY-MM-DD");
    return LessonsJillArr?.filter(({ date }) => dayOfMonth === date);
  };

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          position: "relative",
          boxShadow: "0px 0px 4px -2px rgba(0,0,0,0.52)",
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={
            language === "ua"
              ? ukUA.components.MuiLocalizationProvider.defaultProps.localeText
              : enUS.components.MuiLocalizationProvider.defaultProps.localeText
          }
          adapterLocale={language === "ua" ? "uk" : "en"}
        >
          <DateCalendar
            value={selectMonthCalendar}
            onMonthChange={(e) => setSelectMonthCalendar(e)}
            onChange={(e) => setIsDay(e)}
            key={language}
            sx={{
              width: "100%",
              maxWidth: 320,
            }}
            loading={isLoading}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: (props) => {
                const shouldDisplay = shouldDisplayBadge(props);
                // console.log(props);
                // console.log(shouldDisplay);
                return (
                  <DayItem
                    permissions={permissions}
                    isEdit={isEdit}
                    setIsModal={setIsModal}
                    setIsEdit={setIsEdit}
                    shouldDisplay={shouldDisplay}
                    props={props}
                  />
                );
              },
            }}
          />
        </LocalizationProvider>
        <AnimatePresence>
          {isModal && (
            <ModalCalendar
              pathNavigate={pathNavigate}
              open={open}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              handleClose={handleClose}
              language={language}
              handleAddALesson={handleAddALesson}
              setIsChooseALesson={setIsChooseALesson}
              isChooseALesson={isChooseALesson}
              isDay={isDay}
              setValueSelect={setValueSelect}
              permissions={permissions}
              isDeleteModal={isDeleteModal}
              setIsDeleteModal={setIsDeleteModal}
            />
          )}
        </AnimatePresence>
      </Paper>
    </Box>
  );
}

Calendar.propTypes = {
  today: PropTypes.bool,
  handleAddALesson: PropTypes.func,
  setIsDay: PropTypes.func,
  isDay: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  isEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setIsEdit: PropTypes.func,
  open: PropTypes.bool,
  setIsChooseALesson: PropTypes.func,
  isChooseALesson: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  setValueSelect: PropTypes.func,
  permissions: PropTypes.bool,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  pathNavigate: PropTypes.string.isRequired,
  selectMonthCalendar: PropTypes.object,
  setSelectMonthCalendar: PropTypes.func.isRequired,
};
