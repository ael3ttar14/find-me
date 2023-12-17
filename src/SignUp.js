import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import img from "./img/1.jpg";

export default function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailer, setemailer] = useState("");

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setaccept(true);

    if (name === " " || password.length < 8 || repassword !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: repassword,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/home";
        }
      }
    } catch (err) {
      setemailer(err.response.status);
    }
  }

  return (
    <div className="parent">
      <>
        <Header />
      </>
      <div className="register">
        <img
          src={img}
          alt=""
          style={{
            width: "70%",
            marginRight: "15px",
            borderRadius:"10px" ,
  
          }}
        />
        <form onSubmit={submit}>
          <div style={{ fontSize: "40px", marginBottom: "20px" }}>Sign up</div>
          <div style={{ fontSize: "18px" }}>
            If you already have an account register you can :-
          </div>
          <Link
            to="/login"
            style={{ color: "#C10C99", fontSize: "18px", marginBottom: "20px" }}
          >
            login here !
          </Link>
          <label htmlFor="name"> Name : </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name "
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          {name === "" && accept && <p className="error">name is required</p>}
          <label htmlFor="email"> Email :</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {emailer === 422 && accept && (
            <p className="error">the email is already token</p>
          )}
          <label htmlFor="pass"> Password : </label>
          <input
            id="pass"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">pass must be more than 8 char</p>
          )}
          <label htmlFor="repass"> Confrim your Password : </label>
          <input
            id="repass"
            type="password"
            placeholder="Confrim your Password"
            value={repassword}
            onChange={(e) => setrepassword(e.target.value)}
          />
          {repassword !== password && accept && (
            <p className="error">dosen't match</p>
            
          )}
          <div className="btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
