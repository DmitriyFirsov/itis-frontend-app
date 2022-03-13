import React, { useCallback, useEffect, useState } from "react";

import OneFormLayout from "../../components/Layouts/OneFormLayout";
import Button from "../../components/inputs/Button";
import PasswordField from "../../components/formFields/PasswordField";
import TextField from "../../components/formFields/TextField";

export default function Index () {
  const [formState, setFormState] = useState({ login: "", password: "" });
  const [eyeState, setEyeState] = useState(true);

  const onAyeClick = useCallback(() => {
    setEyeState((state) => !state);
  }, []);

  const handleEvents = useCallback((event) => {
    const { value, id } = event.target;
    const { type } = event;

    setFormState(
      (currentState) => (
        {
          ...currentState,
          [id]: type === "blur" ? value.trim() : value,
        }
      ),
    );
  }, []);

  return (
    <OneFormLayout>
      <TextField
            id="login"
            label="login"
            value={formState.login}
            onChange={handleEvents}
            onBlur={handleEvents}
          />
          <PasswordField
            id="password"
            label="password"
            value={formState.password}
            onChange={handleEvents}
            onBlur={handleEvents}
            onEyeClick={onAyeClick}
            isHidden={eyeState}
          />
          <Button type="submit">Log in</Button>
    </OneFormLayout>
  );
}
