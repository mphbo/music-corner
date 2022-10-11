import axios from "axios";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  errorsInitialState,
  formDataInitialState,
  formFields,
} from "../constants/registration";
import { useAuthContext } from "../context/auth";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";
import styles from "../styles/Registration.module.scss";
import { IErrors, IFormData } from "../types/registration";

const Registration: NextPage = () => {
  const [formData, setFormData] = useState<IFormData>(formDataInitialState);
  const [errors, setErrors] = useState<IErrors>(errorsInitialState);
  const [serverError, setServerError] = useState("");

  const { user, setUser } = useAuthContext();
  const router = useRouter();

  const handleSubmit = (formData: IFormData) => {
    const { password, passwordConfirm } = formData;
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

    if (password !== passwordConfirm) {
      setErrors((prev: IErrors) => ({
        ...prev,
        passwordConfirm: { ...prev.passwordConfirm, isError: true },
      }));
      return;
    }

    axios
      .post("/api/auth/register", formData)
      .then(({ data }) => {
        setUser(data);
        router.push("/play");
      })
      .catch(({ response: { data } }) => setServerError(data));
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
        <title>Sign-up</title>
        <meta name="description" content="Created by Logan Thomas" />
        <link rel="icon" href="/shwackCloudIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.register}>Register</h1>
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
            <Button type="reset" secondary label="Reset" />
          </Box>
        </Form>
        <Link href="/login">
          <p className={styles.account}>Already have an account? Login</p>
        </Link>
      </main>
    </div>
  );
};

export default Registration;
