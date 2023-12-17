import axios from "axios";
import { useEffect, useState } from "react";
export default function Update() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailer, setemailer] = useState("");

  const id = window.location.pathname.split("/").slice(-1);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, );
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
    <div className="register">
      <form onSubmit={submit}>
        <label htmlFor="name"> Name: </label>
        <input
          id="name"
          type="text"
          placeholder=" Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {name === "" && accept && <p className="error">name is required</p>}
        <label htmlFor="email"> email: </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        {emailer === 422 && accept && (
          <p className="error">the email is already token</p>
        )}
        <label htmlFor="pass"> Password: </label>
        <input
          id="pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {password.length < 8 && accept && (
          <p className="error">pass must be more than 8 char</p>
        )}
        <label htmlFor="repass"> Repeat Password: </label>
        <input
          id="repass"
          type="password"
          placeholder="Repeat Password"
          value={repassword}
          onChange={(e) => setrepassword(e.target.value)}
        />
        {repassword !== password && accept && (
          <p className="error">dosen't match</p>
        )}
        <div className="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
