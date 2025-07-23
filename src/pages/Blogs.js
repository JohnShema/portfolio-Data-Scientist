// Blogs.js (renamed to Contact.js recommended for clarity)
import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with actual email logic
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="p" gutterBottom>
        I WOULD LOVE TO HEAR FROM YOU
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          name="name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{
            mb: 3,
            textarea: { color: "#fff" },
            label: { color: "#8b949e" },
            fieldset: { borderColor: "#30363d" },
          }}
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{
            mb: 3,
            textarea: { color: "#fff" },
            label: { color: "#8b949e" },
            fieldset: { borderColor: "#30363d" },
          }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
          required
          sx={{
            mb: 3,
            textarea: { color: "#fff" },
            label: { color: "#8b949e" },
            fieldset: { borderColor: "#30363d" },
          }}
        />
        <Button
          variant="contained"
          color="#0e0b25"
          type="submit"
          Width="50%"
          sx={{
            "&:hover": {
              bgcolor: "#30363d",
              transition: "transform 0.3s, box-shadow 0.3s",
              transform: "translateY(-5px)",
            },
          }}
        >
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
