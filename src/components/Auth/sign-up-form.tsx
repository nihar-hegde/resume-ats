import React from "react";
import { AuthCardWrapper } from "../shared/auth-card-wrapper";

export const SignUpForm = () => {
  return (
    <div>
      <AuthCardWrapper
        headerLabel={"Sign Up"}
        backButtonLabel={"Back"}
        backButtonHref={"/"}
      >
        <h1>Hello World</h1>
      </AuthCardWrapper>
    </div>
  );
};
