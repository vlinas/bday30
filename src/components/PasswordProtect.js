import React, { useState } from "react";
import { setSessionPassword } from "@mkitio/gatsby-theme-password-protect/src/utils/utils";

const styles = {
  wrapper: {
    height: "100vh",
    background: "#1a202c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    padding: "0 15px",
    textAlign: "center",
  },
  wrapperInner: {
    width: "300px",
  },
  input: {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    height: "48px",
    background: "#9f7aea",
    color: "#fff",
    border: "1px solid #9f7aea",
    borderRadius: "4px",
    marginTop: "16px",
    fontWeight: "bold",
    fontFamily: '"IBM Plex Sans"',
  },
  buttonHover: {
    background: "#fff",
    color: "#000000",
  },
};

const PasswordProtect = () => {
  const [password, setPassword] = useState("");
  const [isButtonHovered, buttonHover] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
      <form onSubmit={onSubmit}>
        <div style={styles.wrapper}>
          <div style={styles.wrapperInner}>
            <h1 style={{ color: "#cbd5e0", marginTop: 0 }}>Latte and Front</h1>
            <h4 style={{ color: "#cbd5e0" }}>
              Para acceder al material, introduce la contraseña que te hemos
              facilitado en el canal de Telegram
            </h4>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={styles.input}
            />

            <button
              type="submit"
              style={{
                ...styles.button,
                ...(isButtonHovered ? styles.buttonHover : null),
              }}
              onMouseEnter={() => buttonHover(true)}
              onMouseLeave={() => buttonHover(false)}
            >
              ¡Entrar!
            </button>
          </div>
        </div>
      </form>
  );
};

export default PasswordProtect;
