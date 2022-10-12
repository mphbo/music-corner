import { Box, Button, Form, FormField, TextInput } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Registration.module.scss";
import axios from "axios";
import { useAuthContext } from "../context/auth";
import { useRouter } from "next/router";
import { IErrors, IFormData } from "../types/profile";
import {
  errorsInitialState,
  formDataInitialState,
  formFields,
} from "../constants/profile";

const Profile: NextPage = () => {
  const [errors, setErrors] = useState<IErrors>(errorsInitialState);
  const [serverError, setServerError] = useState("");
  const { user, setUser } = useAuthContext();
  const [formData, setFormData] = useState<IFormData>(user);
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

    axios
      .put(`/api/users/${user.email}`, formData)
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
    ({ name, label, help, placeholder }, index) => {
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
          <TextInput placeholder={placeholder} name={name} />
        </FormField>
      );
    }
  );

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Created by Logan Thomas" />
        <link rel="icon" href="/shwackCloudIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.register}>Update profile</h1>
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
              type="reset"
              secondary
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

export default Profile;
