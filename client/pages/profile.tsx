import { Box, Button, Form, FormField, Notification, TextInput } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Registration.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { IErrors, IFormData } from "../types/profile";
import {
  errorsInitialState,
  formDataInitialState,
  formFields,
} from "../constants/profile";
import { useSession } from "next-auth/client";

const Profile: NextPage = () => {
  const [errors, setErrors] = useState<IErrors>(errorsInitialState);
  const [serverError, setServerError] = useState("");
  const [session, loading] = useSession();
  const [user, setUser] = useState({
    email: "",
    username: "",
    url: "",
  });
  const [formData, setFormData] = useState<IFormData>(user);
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) router.push("/login");
  }, [session, loading]);

  useEffect(() => {
    if (session) {
      axios.get(`/api/users/${session?.email}`).then((result) => {
        console.log("resultFromGetUser:", result);
        console.log("email:", session?.email);
        setUser(result.data);
      });
    }
  }, [session]);

  console.log("session:", session);

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
      .put(`/api/users/${session?.email}`, formData)
      .then(({ data: { result } }) => {
        setUser(result);
        router.push("/play");
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => setServerError(message)
      );
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
          <TextInput placeholder={placeholder} name={name} />
        </FormField>
      );
    }
  );

  const disabled =
    user?.username === formData?.username &&
    user?.email === formData?.email &&
    user?.url === formData?.url;

  return (
    <div>
      <Head>
        <title>Profile</title>
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
            <Button disabled={disabled} type="submit" primary label="Submit" />
            <Button
              type="reset"
              secondary
              label="Reset"
              className={styles.button}
            />
          </Box>
        </Form>
      </main>
    </div>
  );
};

export default Profile;
