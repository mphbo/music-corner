import { Box, Button, Form, FormField, Notification, TextInput } from "grommet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Registration.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { IErrors, IFormData } from "../../types/profile";
import {
  errorsInitialState,
  formDataInitialState,
  formFields,
} from "../../constants/profile";
import { useSession } from "next-auth/react";
import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget";
import ImageUpload from "./components/CustomCloudinaryUploadWidget/components/ImageUpload";

const Profile: NextPage = () => {
  const [errors, setErrors] = useState<IErrors>(errorsInitialState);
  const [serverError, setServerError] = useState("");
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [user, setUser] = useState({
    email: "",
    username: "",
    url: "",
    id: 0,
  });
  const [formData, setFormData] = useState<IFormData>(user);
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) router.push("/login");
  }, [session, loading]);

  useEffect(() => {
    console.log("session from profile:", session);
    if (session) {
      axios.get(`/api/users/${session?.id}`).then(({ data: { result } }) => {
        console.log(result);
        setFormData(result);
        if (result) {
          setUser(result);
        }
      });
    }
  }, [session]);

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
      .put(`/api/users/${session?.user?.email}`, formData)
      .then(({ data: { result } }) => {
        setUser(result);
        setFormData(result);
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
        <ImageUpload id={user.id} />
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
