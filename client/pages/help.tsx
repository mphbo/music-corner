import { Box } from "grommet";
import { Login } from "grommet-icons";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Help.module.scss";

const Help: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Help</title>
        <meta name="description" content="Created by Logan Thomas" />
        <link rel="icon" href="/shwackCloudIcon.png" />
      </Head>

      <main className={styles.main}>
        <Box className={styles.innerMain}>
          <Box className={styles.section}>
            <h1>Mission:</h1>
            <p>
              The purpose behind ShwackCloud is to implement the SoundCloud API
              and widget in a progressive web application, built for mobile and
              the browser. Bringing our closest friends together in an intimate
              gathering of favourite music.
            </p>
            <p>
              Pick your favourite playlist and put it in one place with everyone
              elses. While all functionality exists in SoundCloud already, the
              difference is, these playlists won&apos;t be drowned out in all
              the noise. Enjoy!
            </p>
          </Box>
          <Box className={styles.section}>
            <h1>Creating account:</h1>
            <p>
              Click
              <Login className={styles.login} size="medium" />
              login button at the top of this page or on the home page.
            </p>
            <p>
              Then click the link at the bottom of the form that says
              &quot;Don&apos;t have an account? Register&quot;.
            </p>
            <p>
              Fill in all fields. Pay special attention to the SoundCloudURL. To
              get the proper URL follow these simple steps:
            </p>
            <ol>
              <li>
                Go to your created playlist on SoundCloud with the mobile
                browser (Chrome, Safari, etc), or with your PC/Mac&apos;s
                browser.
              </li>
              <li>
                Copy the URL/Website exactly as shown at the top of the browser
                (do not click &quot;Share&quot; and use that URL).
              </li>
              <li>
                Paste this URL into the appropriate field during registration.
                If you got this URL from the mobile browser on your phone or
                tablet, please remove the &apos;m&apos;. For example:
                <p>
                  https://m.soundcloud.com/logan-norman-thomas/sets/electroswinging
                </p>
                would become
                <p>
                  https://soundcloud.com/logan-norman-thomas/sets/electroswinging
                </p>
              </li>
            </ol>
            <p>
              After getting the SoundCloud URL press Submit. If any of the text
              fields turn red, fix the errors and press submit again. After a
              successful register/login, you will be taken to the playlist page,
              where your new or existing playlist as well as all others will be
              there.
            </p>
            <p>
              You can then click play on any users playlist and listen away.
              Since the SoundCloud API is being used you can leave the app, lock
              your phone and the music will continue to play. If you switch
              pages in the browser or press pause then the music will stop.
            </p>
            <p>
              If for some reason your playlist says the URL is incorrect, please
              follow the instructions below to edit your profile and input the
              correct URL following the instructions above.
            </p>
          </Box>
          <Box>
            <h1>Logging in:</h1>
            <p>
              Click
              <Login className={styles.login} size="medium" />
              login button at the top of this page or on the home page.
            </p>
            <p>
              Then click the link at the bottom of the form that says
              &quot;Don&apos;t have an account? Register&quot;.
            </p>
            <p>
              Fill in your correct email and password, if both are correct you
              will be taken to the playlist page.
            </p>
          </Box>
          <Box>
            <h1>Editing your profile:</h1>
            <p>
              Editing your profile is very similar to creating your account.
            </p>
            <p>Log into your account if you haven&apos;t already.</p>
            <p>
              Each of the fields in the form will be prepopulated with your
              current information (aside from password, changing password
              functionality is under construction). Change them however you wish
              (paying special attention to the SoundCloud URL as mentioned in
              &quot;Create account&quot; above).
            </p>
            <p>
              Press submit, if the changes are successful you will be taken to
              the playlist page.
            </p>
          </Box>
        </Box>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Help;
