/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Icon } from "@iconify/react";
import { useEffect, useState, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import { useForm, ValidationError } from "@formspree/react";

// Contact form field component to reduce repetition
const FormField = ({ id, name, type = "text", label, rows, errors }) => (
  <div className="relative z-0">
    {type === "textarea" ? (
      <textarea
        required
        id={id}
        name={name}
        rows={rows || "2"}
        aria-label={label}
        className="peer block w-full resize-none appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
        placeholder=" "
      />
    ) : (
      <input
        required
        type={type}
        id={id}
        name={name}
        aria-label={label}
        className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 pt-5 focus:outline-none focus:ring-0"
        placeholder=" "
      />
    )}
    <ValidationError prefix={label} field={name} errors={errors} />
    <label
      htmlFor={id}
      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
    >
      {label}
    </label>
  </div>
);

// Contact link component to reduce repetition
const ContactLink = ({ href, icon, text, external = false }) => (
  <a
    href={href}
    className={`group relative w-fit cursor-pointer ${icon ? "flex items-center space-x-2" : ""}`}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    download={!external && !href.startsWith("mailto:") ? true : undefined}
  >
    {icon && <Icon icon={icon} color="#666" />}
    <div className="relative">
      <span>{text}</span>
      <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
    </div>
  </a>
);

export default function Contact({ hashRef }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [state, handleSubmit] = useForm("mqkrybzv");
  const [formError, setFormError] = useState(null);

  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);

  // Setup GSAP animations
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),
      toggleActions: "play none none none",
    });
    
    // Clean up properly
    return () => {
      trigger.kill();
    };
  }, [contactSection]);

  // Handle time updates with proper cleanup
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    
    const timeInterval = setInterval(updateTime, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(timeInterval);
  }, []);

  // Form submission handler with error catching
  const onSubmit = useCallback(async (e) => {
    try {
      setFormError(null);
      await handleSubmit(e);
    } catch (error) {
      setFormError("There was a problem submitting the form. Please try again.");
      console.error("Form submission error:", error);
    }
  }, [handleSubmit]);

  return (
    <section
      ref={hashRef}
      id="contact"
      className="h-fit min-h-screen overflow-hidden py-24"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:max-w-3xl 2xl:text-5xl"
          >
            Got a vision? Together, we'll make it shine in the digital world.
          </h3>
          <p
            ref={body}
            className="mt-4 max-w-md translate-y-10 text-body-2 text-accent-100 opacity-0 2xl:max-w-2xl 2xl:text-3xl"
          >
            If you're looking to turn that 'aha!' moment into an 'oh wow!'
            reality, I'm your huckleberry. Currently accepting sidekicks for
            web-venture quests, starting now!
          </p>
          
          {/* Form status messages */}
          {state.succeeded ? (
            <div className="mt-10 rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-grotesk text-body-1 font-semibold text-green-800">
                    Thanks for reaching out! You should receive a response soon.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              aria-label="Contact form"
              autoComplete="off"
              className="mt-10 font-grotesk"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Display general form errors */}
              {(formError || state.errors) && (
                <div className="mb-6 rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">
                        {formError || "Please correct the errors below."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
                <FormField 
                  id="name" 
                  name="name" 
                  label="Your name" 
                  errors={state.errors}
                />
                
                <FormField 
                  id="email" 
                  name="email" 
                  type="email" 
                  label="Your email" 
                  errors={state.errors}
                />
                
                <FormField 
                  id="message" 
                  name="message" 
                  type="textarea" 
                  label="Your message"
                  rows="2" 
                  errors={state.errors}
                />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Send message"
              >
                <span className="relative inline-flex items-center">
                  <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                  <span className="group-hover:text-accent-400">
                    {state.submitting ? "Sending..." : "Send message"}
                  </span>
                  {state.submitting && (
                    <svg className="ml-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                </span>
              </button>
            </form>
          )}
        </div>
        
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <ContactLink 
                href="mailto:sheddagame@gmail.com" 
                text="sheddagame@gmail.com" 
                external={true}
              />
              <ContactLink 
                href="/Resume.pdf" 
                text="Resume" 
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <ContactLink 
                href="https://github.com/Kayeddy" 
                icon="mdi:github" 
                text="Github" 
                external={true}
              />
              <ContactLink 
                href="https://www.linkedin.com/in/edushed/" 
                icon="mdi:linkedin" 
                text="LinkedIn" 
                external={true}
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Medellín, Colombia <br />
                <time dateTime={new Date().toISOString()}>{time}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
