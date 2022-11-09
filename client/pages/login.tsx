import { Box, Button, Form, FormField, Notification, TextInput } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Registration.module.scss";
import { IErrors, IFormData } from "../types/login";
import {
  errorsInitialState,
  formDataInitialState,
  formFields,
} from "../constants/login";

import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [formData, setFormData] = useState<IFormData>(formDataInitialState);
  const [errors, setErrors] = useState<IErrors>(errorsInitialState);
  const [serverError, setServerError] = useState("");

  const router = useRouter();

  const handleSubmit = (formData: IFormData) => {
    setErrors(errorsInitialState);

    const currentErrors = (
      Object.keys(formData) as (keyof typeof formData)[]
    ).filter((field) => {
      if (!formData[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: { ...prev[field], isError: true },
        }));
        return true;
      }
      return false;
    });

    if (currentErrors.length > 0) {
      return;
    }

    signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    }).then((result) => {
      if (result?.error) {
        setServerError(result.error);
      } else {
        router.push("/play");
      }
    });
  };

  const handleResetFormData = () => {
    setFormData(formDataInitialState);
  };

  const formFieldElements = formFields.map(
    ({ name, label, help, placeholder, type }, index) => {
      return (
        <FormField
          key={index}
          className={styles.formField}
          name={name}
          label={label}
          help={help}
          type={type}
          error={
            errors[name as keyof typeof errors].isError &&
            errors[name as keyof typeof errors].description
          }
        >
          <TextInput placeholder={placeholder} name={name} type={type} />
        </FormField>
      );
    }
  );

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main}>
        {serverError && (
          <Notification
            toast
            title="Error"
            message={serverError}
            onClose={() => {
              setServerError("");
            }}
          />
        )}
        <h1 className={styles.register}>Login</h1>
        <Form
          className={styles.form}
          value={formData}
          onChange={(value) => setFormData(value)}
          onReset={handleResetFormData}
          onSubmit={({ value }) => handleSubmit(value)}
        >
          {formFieldElements}
          <Box className={styles.buttonGroup} direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button
              color="#228BE6"
              type="reset"
              label="Reset"
              className={styles.button}
            />
          </Box>
        </Form>
        <Link href="/registration">
          <p className={styles.account}>Don&apos;t have an account? Register</p>
        </Link>
      </main>
    </div>
  );
};

export default Login;
