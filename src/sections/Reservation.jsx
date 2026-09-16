import { useState } from "react";
import { motion } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
};

const initialErrors = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "",
};

function Reservation() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    }

    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }

    if (formData.date && formData.date < today) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    const guestCount = Number(formData.guests);

    if (!formData.guests) {
      newErrors.guests = "Please select the number of guests.";
    } else if (guestCount < 1 || guestCount > 12) {
      newErrors.guests = "Please select between 1 and 12 guests.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors({
        ...initialErrors,
        ...validationErrors,
      });
      setIsSubmitted(false);
      return;
    }

    setErrors(initialErrors);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors(initialErrors);
    setIsSubmitted(false);
  };

  const formattedDate = formData.date
    ? new Date(`${formData.date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <section
      id="reservation"
      className="border-t border-elan-border bg-elan-secondary"
      aria-labelledby="reservation-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-medium tracking-[0.28em] text-elan-gold"
            >
              RESERVATIONS
            </motion.p>

            <motion.h2
              id="reservation-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="mt-5 max-w-xl font-display text-4xl leading-tight tracking-[-0.02em] text-elan-cream sm:text-5xl lg:text-6xl"
            >
              Your table is waiting.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: "easeOut",
              }}
              className="mt-5 max-w-md text-base leading-7 text-elan-muted sm:text-lg sm:leading-8"
            >
              Join us for an evening of thoughtful food, warm hospitality and
              memorable moments.
            </motion.p>

            <div className="mt-10 hidden border-t border-elan-border pt-5 lg:block">
              <p className="text-[10px] tracking-[0.2em] text-elan-muted uppercase">
                ÉLAN
              </p>

              <p className="mt-2 font-display text-lg text-elan-cream">
                New Delhi
              </p>
            </div>
          </div>

          {/* Reservation Form / Success State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="border border-elan-border bg-elan-background p-6 sm:p-8 lg:p-10"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="reservation-name"
                      className="mb-2 block text-xs font-medium tracking-[0.12em] text-elan-cream"
                    >
                      Name
                    </label>

                    <input
                      id="reservation-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "reservation-name-error" : undefined
                      }
                      className={`w-full border bg-transparent px-4 py-3.5 text-sm text-elan-cream outline-none transition-colors placeholder:text-elan-muted/60 ${
                        errors.name
                          ? "border-red-400"
                          : "border-elan-border focus:border-elan-gold"
                      }`}
                      placeholder="Your full name"
                    />

                    {errors.name && (
                      <p
                        id="reservation-name-error"
                        className="mt-2 text-xs text-red-300"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="reservation-email"
                      className="mb-2 block text-xs font-medium tracking-[0.12em] text-elan-cream"
                    >
                      Email
                    </label>

                    <input
                      id="reservation-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "reservation-email-error" : undefined
                      }
                      className={`w-full border bg-transparent px-4 py-3.5 text-sm text-elan-cream outline-none transition-colors placeholder:text-elan-muted/60 ${
                        errors.email
                          ? "border-red-400"
                          : "border-elan-border focus:border-elan-gold"
                      }`}
                      placeholder="you@example.com"
                    />

                    {errors.email && (
                      <p
                        id="reservation-email-error"
                        className="mt-2 text-xs text-red-300"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="reservation-date"
                      className="mb-2 block text-xs font-medium tracking-[0.12em] text-elan-cream"
                    >
                      Date
                    </label>

                    <input
                      id="reservation-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      min={today}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={
                        errors.date ? "reservation-date-error" : undefined
                      }
                      className={`w-full border bg-transparent px-4 py-3.5 text-sm text-elan-cream outline-none transition-colors ${
                        errors.date
                          ? "border-red-400"
                          : "border-elan-border focus:border-elan-gold"
                      }`}
                    />

                    {errors.date && (
                      <p
                        id="reservation-date-error"
                        className="mt-2 text-xs text-red-300"
                      >
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="reservation-time"
                      className="mb-2 block text-xs font-medium tracking-[0.12em] text-elan-cream"
                    >
                      Time
                    </label>

                    <input
                      id="reservation-time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.time)}
                      aria-describedby={
                        errors.time ? "reservation-time-error" : undefined
                      }
                      className={`w-full border bg-transparent px-4 py-3.5 text-sm text-elan-cream outline-none transition-colors ${
                        errors.time
                          ? "border-red-400"
                          : "border-elan-border focus:border-elan-gold"
                      }`}
                    />

                    {errors.time && (
                      <p
                        id="reservation-time-error"
                        className="mt-2 text-xs text-red-300"
                      >
                        {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Guests */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="reservation-guests"
                      className="mb-2 block text-xs font-medium tracking-[0.12em] text-elan-cream"
                    >
                      Number of Guests
                    </label>

                    <select
                      id="reservation-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.guests)}
                      aria-describedby={
                        errors.guests ? "reservation-guests-error" : undefined
                      }
                      className={`w-full border bg-elan-background px-4 py-3.5 text-sm text-elan-cream outline-none transition-colors ${
                        errors.guests
                          ? "border-red-400"
                          : "border-elan-border focus:border-elan-gold"
                      }`}
                    >
                      {Array.from({ length: 12 }, (_, index) => index + 1).map(
                        (guestCount) => (
                          <option
                            key={guestCount}
                            value={guestCount}
                            className="bg-elan-background text-elan-cream"
                          >
                            {guestCount}{" "}
                            {guestCount === 1 ? "Guest" : "Guests"}
                          </option>
                        )
                      )}
                    </select>

                    {errors.guests && (
                      <p
                        id="reservation-guests-error"
                        className="mt-2 text-xs text-red-300"
                      >
                        {errors.guests}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center border border-elan-gold bg-elan-gold px-7 text-sm font-medium tracking-wide text-elan-background transition-colors duration-200 hover:bg-transparent hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold focus-visible:ring-offset-2 focus-visible:ring-offset-elan-background sm:w-auto"
                  >
                    Reserve Your Table
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex min-h-[430px] flex-col justify-center"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-elan-gold text-elan-gold">
                  <Check size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>

                <p className="mt-8 text-xs font-medium tracking-[0.25em] text-elan-gold">
                  RESERVATION REQUEST
                </p>

                <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight text-elan-cream sm:text-4xl">
                  Thank you, {formData.name.trim()}. Your reservation request
                  has been received.
                </h3>

                <div className="mt-8 border-t border-elan-border pt-6">
                  <p className="text-xs tracking-[0.16em] text-elan-muted uppercase">
                    Your selected time
                  </p>

                  <p className="mt-2 text-base text-elan-cream">
                    {formattedDate} <span className="mx-2 text-elan-border">•</span>{" "}
                    {formData.time}
                  </p>

                  <p className="mt-2 text-sm text-elan-muted">
                    {formData.guests}{" "}
                    {Number(formData.guests) === 1 ? "guest" : "guests"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 border border-elan-border px-5 text-sm text-elan-muted transition-colors duration-200 hover:border-elan-gold hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold"
                >
                  <RotateCcw size={15} strokeWidth={1.5} aria-hidden="true" />
                  Make Another Reservation
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;