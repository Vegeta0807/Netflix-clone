import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input type="password" placeholder="Password" name="password" />
            ) : (
              <input type="email" placeholder="Email Address" name="email" />
            )}
            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      color: white;
      font-size: 1.5rem;
    }
    h1 {
      padding: 0 25rem;
    }
    h4 {
      margin-top: -1rem;
    }
    h6 {
      margin-top: -1rem;
    }
    .form {
      display: grid;
      width: 60%;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
      input {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 1.5rem;
        font-size: 1.25rem;
        width: 45rem;
        height: 1rem;
        border-style: double;
        border-width: thin;
        &:focus {
          outline: none;
        }
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.05rem;
      width: 10rem;
    }
  }
`;
export default SignUpPage;
