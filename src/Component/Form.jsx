"use client";

import React, { useEffect, useRef, useState } from "react";
import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/build/css/intlTelInput.min.css";
import ImageUploading from "react-images-uploading";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function Form() {
  const myRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [treatments, setTreatments] = useState("Sapphire Hair Transplant");
  const [userNumber, setUserNumber] = useState("");
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  const [numberErrorCode, setNumberErrorCode] = useState(null);
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const geoIpLookup = () => {
    fetch("https://api.country.is")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setCountryCode(data.country.toLowerCase());
      })
      .catch(function (e) {
        console.log(e);
        setCountryCode("us");
      });
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const submitForm = (step) => {
    setError("");
    const numberErrorMap = [
      "Invalid number",
      "Invalid country code",
      "Too short",
      "Too long",
      "Invalid number",
    ];
    if (step != 4) {
      if (step == 1 && userName == "") {
        setError("Name is required");
        return;
      }
      if (step == 2 && numberErrorCode != null) {
        setError(numberErrorMap[numberErrorCode] || numberErrorMap[0]);
        return;
      }
      setActiveStep(step + 1);
    } else {
      setLoading(true);
      console.log({ userName, userNumber, treatments, images });
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("userNumber", userNumber);
      images.map((image, key) => formData.append("file-" + key, image.file));
      formData.append("treatments", treatments);
      formData.append("gclid", searchParams.get('gclid'));
      fetch("https://hooks.zapier.com/hooks/catch/3318106/24aukwb/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
          router.push('/thank-you');
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          alert("Something want wrong try again!")
        });
    }
  };

  useEffect(() => geoIpLookup(), []);

  return (
    <>
      <form action="#" ref={myRef}>
        {/* step 1 */}
        <div className={`form-step ${activeStep == 1 ? "active" : ""}`}>
          <div className="input">
            <p>Full Name *</p>
            <input
              type="text"
              placeholder="Full Name"
              onBlur={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="button" onClick={() => submitForm(1)}>
            Next
          </div>
        </div>
        {/* step 1 end */}
        {/* step 2 */}
        <div className={`form-step ${activeStep == 2 ? "active" : ""}`}>
          <div className="input">
            <p>Phone Number *</p>
            {/* <input type="text" placeholder="Full Name" /> */}
            {countryCode && (
              <IntlTelInput
                // containerClassName="intl-tel-input"
                // inputClassName="form-control"
                // defaultCountry={countryCode}

                initOptions={{
                  initialCountry: countryCode,
                  utilsScript: "/numberUtils.js?1723068208252",
                }}
                onChangeNumber={(number) => setUserNumber(number)}
                onChangeErrorCode={(code) => setNumberErrorCode(code)}
                usePreciseValidation={true}
              />
            )}
          </div>
          <div className="button" onClick={() => submitForm(2)}>
            Next
          </div>
        </div>
        {/* step 2 end */}
        {/* step 3 */}
        <div className={`form-step ${activeStep == 3 ? "active" : ""}`}>
          <div className="input">
            <p>Treatments</p>
            <select
              name=""
              id=""
              onChange={(e) => setTreatments(e.target.value)}
            >
              <option value="Sapphire Hair Transplant">
                Sapphire Hair Transplant
              </option>
              <option value="DHI Hair Transplant">DHI Hair Transplant</option>
              <option value="FUE Hair Transplant">FUE Hair Transplant</option>
              <option value="Hair Transplant + Dental">
                Hair Transplant + Dental
              </option>
            </select>
          </div>
          <div
            className="button"
            onClick={() => {
              submitForm(3);
              setTimeout(() => {
                myRef.current.scrollIntoView();
              }, 100);
            }}
          >
            Next
          </div>
        </div>
        {/* step 3 end */}
        {/* step 4 */}
        <div className={`form-step ${activeStep == 4 ? "active" : ""}`}>
          <div className="input" ref={myRef}>
            <p>Upload Your Hair Photos</p>

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={5}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div class="upload-container">
                  <div
                    class="upload-area"
                    id="uploadArea"
                    style={isDragging ? { background: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <svg
                      style={{ fill: "rgba(2, 153, 237, 1)", opacity: "1" }}
                      viewBox="0 0 1024 1024"
                      focusable="false"
                      data-icon="inbox"
                      width="50px"
                      height="50px"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"></path>
                    </svg>
                    <p class="modern-title">
                      Click or drag files to this area to upload.
                    </p>
                    <p class="modern-hint">You can upload up to 5 files.</p>
                    {/* <input type="file" id="fileInput" multiple /> */}
                  </div>
                  <div
                    class="file-list"
                    id="fileList"
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      background: "#f0f0f0",
                    }}
                  >
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="image-item"
                        style={{ position: "relative" }}
                      >
                        <img src={image["data_url"]} alt="" width="100" />
                        <p
                          style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                          }}
                          onClick={() => onImageRemove(index)}
                        >
                          X
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
            <p>
              <strong>*You can send the photos also by WhatsApp*</strong>
              <br />
              Please upload clear, well-lit photos of your head from three
              angles: front, top, and back. These photos help our experts assess
              your hair condition and provide personalized recommendations.
              <br />
              <br />
              <strong>Guidelines:</strong>
              <br />
              Front view: Face the camera directly, showing your hairline and
              facial features.
              <br />
              Top view: Tilt your head forward slightly to capture the crown
              area.
              <br />
              Back view: Show the back of your head, focusing on the donor area.
              <br />
              <br />
              <strong>Ensure each photo is:</strong>
              <br />
              Taken in good lighting
              <br />
              In focus and not blurry
              <br />
              Showing your natural hair without styling products
              <br />
              Recent (taken within the last month)
            </p>
          </div>
          <div
            className="button"
            onClick={!loading ? () => submitForm(4) : () => {}}
            style={{ fontSize: "2rem" }}
            
          >
            {loading ? "Loading..." : "Get Free Consultation"}
          </div>
        </div>
        {/* step 4 end */}
        {error && <p style={{ margin: "10px 0", color: "red" }}>{error}</p>}
      </form>
      <div className="progress">
        <div className="flow" style={{ width: `${activeStep * 25}%` }} />
      </div>
    </>
  );
}

export default Form;
