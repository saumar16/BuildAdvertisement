import React, { createRef, useRef, useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./Form/FormikControl";
import Banner from "./Banner";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import "../styles/advertisementForm.css";

// Images
import food1 from "../assets/banners/Food 1.jpg";
import food2 from "../assets/banners/Food 2.jpg";
import gadget1 from "../assets/banners/Gadget 1.jpg";
import gadget2 from "../assets/banners/Gadget 2.jpg";
import photos1 from "../assets/banners/Photos 1.jpg";
import photos2 from "../assets/banners/Photos 2.jpg";
import travel1 from "../assets/banners/Travel 1.jpg";
import travel2 from "../assets/banners/Travel 2.jpg";
import Share from "./Share";

const bannerOptions = [
  { key: "Choose banner", value: "" },
  { key: "Dinner Party", value: food1 },
  { key: "Ice Cream", value: food2 },
  { key: "Laptop", value: gadget1 },
  { key: "Camera", value: gadget2 },
  { key: "Axe in Grass", value: photos1 },
  { key: "Girl in forest", value: photos2 },
  { key: "Map", value: travel1 },
  { key: "Market", value: travel2 },
];

let initialValues = {
  saleType: "",
  banner: "",
  tagline: "",
  message: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.saleType) errors.saleType = "Sale type is mandatory";
  if (!values.banner) errors.banner = "Please choose a banner";
  if (!values.message) errors.message = "Message is mandatory";

  return errors;
};

function AdvertisementForm() {
  // const [shareVisible, setShareVisible] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={() => {
        domtoimage
          .toBlob(document.getElementsByClassName("banner-container")[0])
          .then((blob) => saveAs(blob, "untitled.png"));
        // setShareVisible(true);
      }}
      enableReinitialize={true}
    >
      {({ values }) => {
        return (
          <div className="advertisement-container">
            <div className="left">
              <Form className="form-container">
                <div className="form-group">
                  <FormikControl
                    control="select"
                    className="select"
                    name="banner"
                    options={bannerOptions}
                  />
                  <FormikControl
                    control="input"
                    className="group-inp"
                    type="text"
                    name="saleType"
                    placeholder="Sale Type"
                  />
                </div>
                <FormikControl
                  control="input"
                  className="input"
                  type="text"
                  name="tagline"
                  placeholder="Tagline (Optional)"
                />
                <FormikControl
                  control="input"
                  className="input"
                  type="text"
                  name="message"
                  placeholder="Message"
                />
                <button type="submit" className="btn">
                  Finalize
                </button>
              </Form>
            </div>
            <div className="right">
              <Banner
                sale={values.saleType}
                banner={values.banner}
                tagline={values.tagline}
                message={values.message}
              />
              {values.banner && <Share />}
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default AdvertisementForm;
