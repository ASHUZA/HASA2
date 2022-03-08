import { Icon } from "@iconify/react";
import twitterBird from "@iconify/icons-brandico/twitter-bird";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import twitterSquare from "@iconify/icons-jam/twitter-square";
import instagramIcon from "@iconify/icons-bi/instagram";
import whatsappIcon from "@iconify/icons-fa-brands/whatsapp";

import rdc_carte from "./../pages/images/rdc-carte.png";
import dame1 from "./../pages/images/dame2.png";
import dame3 from "./../pages/images/dame33.png";

import logo3 from "./../pages/images/logo3.png";
import logo1 from "./../pages/images/logo2.png";
import hero4 from "./../pages/images/hero4.jpg";
// import home2 from "./../pages/images/home2.jpg";

import React from "react";
// import Slider from "./components/Slider";
import personnel from "./../pages/images/personnel.jpg";
import Image from "next/image";
// import Images from "./images";

import styles from "../styles/Home.module.css";

import Head from "next/head";
import Layout from "../component/layout";

export default function Home() {
  return (
    <>
      <Layout />

      <div className={styles.sliders}>
        <div className={styles.sliders__content}>
          <div className={styles.sliders__feature}>
            <h1 className={styles.feature__title}>
              Partenaire de terrain au niveau local pour la mise en œuvre de la
              couverture sanitaire universelle en RDC
            </h1>

            <div className={styles.slider_logo}>
              <Image src={logo3} alt="" />
            </div>
          </div>

          <div className={styles.slider_image_main}>
            <div
              className={styles.slider_image}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image src={dame3} alt="" />
            </div>

            <div
              className={styles.slider_image2}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image className={styles.slider_image_cont} src={dame1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section
          className={styles.about}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className={styles.domaine_title}>Qui sommes-nous ?</div>
          <div className={styles.about_main}>
            <div className={styles.about_img}>
              <Image src={hero4} alt="" />
            </div>
            <div className={styles.about_text}>
              <p data-aos="fade-up" data-aos-delay="600">
                Initié comme projet depuis 2006, fonctionnant comme un centre
                hospitalier et maternité à don bosco ( banlieue de kinshasa)
                dans l&#39; optique d&#39; offrir les soins de santé à la communauté
                devourvue d&#39; un établissement sanitaire, Healtharound/ santé
                autour devient officiellement en 2021 une association médicale,
                humanitaire, nationale à but non lucratif (asbl-ONGD).
              </p>
            </div>
          </div>
        </section>

        <section className={styles.place}>
          <div className={styles.place_texte}>
            <div className={styles.place_title}> Ou travaillons-nous ?</div>
            <p>
              Notre rayon d’activité c’est toute l’étendue de la République
              Démocratique du Congo ( RDC), notamment les zones rurales et
              Urbano-rurales.
            </p>
            <p data-aos="fade-up" data-aos-delay="800">
              Nous organisons des projets spécifiques adaptés à chaque situation
              en appliquant des mécanismes innovants dans le but d’obtenir des
              solutions pérennes
            </p>
          </div>
          <div
            className={styles.place_carte}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Image src={rdc_carte} alt="" />
          </div>
        </section>

        <section
          className={styles.domaine}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <container>
            <div className={styles.domaine_title}>Nos domaines d’activités</div>

            <div className={styles.domaine_box}>
              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p> Santé maternelle et Planning familiale </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>

              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p> VIH/SIDA </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>
              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p> Nutrition </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>

              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p>WASH (eau, assainissement et hygiène) </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>

              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p>
                  Santé infantile/ Protection et Développement du Jeune Enfant
                </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>

              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p>Pathologies Médico-chirurgicales invalidantes </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>
              <di
                className={styles.domaine_item_main}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p> Urgences Sanitaires (Epidémies et Catastrophes) </p>
                <svg
                  width="49"
                  height="39"
                  viewBox="0 0 49 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2063 24.5405C25.3473 21.6091 20.3872 16.7092 18.2512 11.7754C17.9294 11.0323 17.7686 10.6607 18.7806 7.19609C19.1276 6.00827 21.0405 3.09562 21.9927 2.30528C24.77 0 26.4512 0 29.8137 0H36.0621C38.7933 0 40.1589 0 41.287 0.265031C44.982 1.13307 47.867 4.01808 48.735 7.713C49 8.84114 49 10.2067 49 12.9379C49 15.3862 49 16.6104 48.6292 17.9339C47.5502 21.7846 42.8404 25.2978 38.8419 25.2346C37.4676 25.2128 36.7138 24.9887 35.2063 24.5405Z"
                    fill="#326E92"
                  />
                  <path
                    d="M30.4081 28.603C12.3097 25.6433 4.41088 19.4795 1.73443 13.5282C1.62031 13.2745 1.9056 13.9088 2.89354 10.4083C3.20033 9.32131 5.22749 6.18693 6.09305 5.46128C8.88035 3.12451 10.0901 3.12451 12.5097 3.12451H31.129C33.9918 3.12451 35.4233 3.12451 36.603 3.41552C40.2106 4.30538 43.0273 7.12209 43.9171 10.7296C44.2081 11.9094 44.2081 13.3408 44.2081 16.2037C44.2081 19.0235 44.2081 20.4335 43.8544 21.7279C42.8362 25.4533 39.0941 28.6332 35.2532 29.0368C33.9186 29.177 32.7485 28.9857 30.4081 28.603Z"
                    fill="#4C7CF7"
                    // fill-opacity="0.38"
                  />
                  <path
                    d="M32.9122 34.5702C23.8715 30.7875 19.5201 24.8963 17.8106 19.1374C17.2394 17.2132 16.9538 16.2511 18.1493 13.0962C18.6045 11.8947 20.4202 9.46186 21.4424 8.6835C24.1266 6.63965 26.2256 6.63965 30.4237 6.63965H33.9212C38.6546 6.63965 41.0214 6.63965 42.884 7.42472C45.2884 8.43816 47.2015 10.3513 48.215 12.7557C49 14.6183 49 16.985 49 21.7185C49 26.4583 49 28.8283 47.7782 31.0674C46.4519 33.4979 42.7846 35.9388 40.0306 36.2241C37.4934 36.487 35.9663 35.8481 32.9122 34.5702Z"
                    fill="#E5E5E5"
                    // fill-opacity="0.63"
                  />
                </svg>
              </di>
            </div>
          </container>
        </section>

        <section
          className={styles.about2}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div
            className={styles.about_img}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Image src={logo1} alt="" />
          </div>
          <div className={styles.about_text}>
            <div className={styles.about_text_title}> Ce que nous faisons </div>
            <div
              className={styles.about_text_main}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p>
                Nous apportons de l’aide sanitaire et humanitaire aux couches de
                la population congolaise vulnérables et démunies entre autres la
                femme et l’enfant se trouvant dans des milieux reculés,
                extrêmes, défavorisés.
              </p>
            </div>
          </div>

          <div className={styles.about_linear}></div>
        </section>

        <section className={styles.personnel}>
          <div className={styles.personnel_text}>
            <p className={styles.personnel_title}>Nos personnels</p>

            <p
              className={styles.text_main}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Health around dispose d’un effectif dont 80% de membres actifs
              sont médecins cliniciens et médecins experts en santé publique
              (formés aussi en management de soins de santé primaire,
              épidémiologie de terrain, santé communautaire, santé
              environnementale et nutrition) En plus, ce personnel est doté
              d’une grande expérience de terrain requise
            </p>
          </div>

          <div
            className={styles.personnel_img}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Image src={personnel} alt="" />
          </div>
        </section>

        <section
          className={styles.footer}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className={styles.footer_main}>
            <div
              className={styles.item_logo}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className={styles.footer_logo}>
                <Image src={logo3} alt="" />
              </div>
              <div className={styles.footer_text}>
                Health around-Hasa, Partenaire de terrain au niveau local pour
                les soins de santé équitables pour tous
              </div>
            </div>
            <div
              className={styles.footer_link}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <p className={styles.footer_link_title}> HEALTH AROUND</p>
              <ul>
                <li>
                  <a href="">Accueil </a>
                </li>
                <li>
                  <a href="">A propos de nous </a>
                </li>
                <li>
                  <a href="">actualités</a>
                </li>
                <li>
                  <a href="">domaines d’activité </a>
                </li>
                <li>
                  <a href="">nos partenaires </a>
                </li>
                <li>
                  <a href="">faire un don </a>
                </li>
                <li>
                  <a href="">nous contacter </a>
                </li>
              </ul>
            </div>
            <div
              className={styles.footer_item}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <p className={styles.footer_contact_title}> CONTACT</p>

              <p className={styles.footer_phone}> Tél : +243 992 82 25 31</p>
              <p className={styles.footer_mail}>
                Mail: healtharound21@gmail.com
              </p>
              <div className={styles.footer_icon}>
                <div className={styles.footer_icon_item}>
                  <a href="">
                    <Icon icon={twitterBird} />
                  </a>
                </div>
                <div className={styles.footer_icon_item}>
                  <a href="https://www.instagram.com/p/CZOaMzPN6rz/?utm_medium=copy_link">
                    <Icon icon={instagramIcon} />
                  </a>
                </div>
                <div className={styles.footer_icon_item}>
                  <a href="https://www.facebook.com/109239224984053/posts/115989427642366/">
                    <Icon icon={facebookFill} />
                  </a>
                </div>
                <div className={styles.footer_icon_item}>
                  <a href="https://api.whatsapp.com/send?phone=243810706219">
                    <Icon icon={whatsappIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.footer_item_adress}>
              <p
                className={styles.footer_adress_title}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                ADRESSE
              </p>
              <p className={styles.adress_text}>
                Kinshasa : siège technique : avenue MOBUTU N°157, Q. Don Bosco,
                C. Mont Ngafula
              </p>

              <div className={styles.adress_news}>
                <input
                  className={styles.adress_input}
                  placeholder="Votre adress mail"
                />
                <button className={styles.adress_btn}>S’INSCRIRE</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
