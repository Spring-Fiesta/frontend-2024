import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const CustomModal = ({ open, handleClose, title, time, link, readmore, children }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box sx={styles.modalBox}>
        {/* Header */}
        <Typography id="modal-title" variant="h5" sx={styles.modalHeader}>
          {title} {time && <span>- {time}</span>}
        </Typography>



        {/* Body */}
        <Typography variant="body1" sx={styles.modalBody}>
          {children}
        </Typography>

        {/* Footer Buttons */}
        <Box sx={styles.modalFooter}>
          <Button onClick={handleClose} sx={styles.closeButton}>
            Close
          </Button>
          {readmore && (
            <Button
              href={readmore}
              target="_blank"
              rel="noreferrer"
              sx={styles.confirmButton}
            >
              Read More
            </Button>
          )}
          {link && (
            <Button
              href={link}
              target="_blank"
              rel="noreferrer"
              sx={styles.confirmButton}
            >
              Join
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

// Custom Styles using MUI sx prop
const styles = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#2D2B50", // Dark Theme Background
    color: "white",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
  },
  modalHeader: {
    borderBottom: "1px solid #3B375C",
    paddingBottom: "10px",
    textAlign: "left",
  },
  modalBody: {
    padding: "15px 0",
    textAlign: "left",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "10px",
  },
  closeButton: {
    backgroundColor: "#3B375C",
    color: "white",
    "&:hover": { backgroundColor: "#4A4373" },
  },
  confirmButton: {
    backgroundColor: "#6A5ACD", 
    color: "white",
    "&:hover": { backgroundColor: "#B39DDB" }, 
  } 

};

export default CustomModal;
