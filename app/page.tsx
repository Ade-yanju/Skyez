"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";

/* ================= BRAND ================= */
const RED = "#E10600";
const WHITE = "#FFFFFF";
const STREAM_LINK = "https://open.spotify.com/artist/4wKiGWWj01fmanRRxbe1xy";

/* ================= SOCIAL LINKS ================= */
const SOCIALS = {
  instagram: "https://instagram.com/skyez",
  twitter: "https://twitter.com/skyez",
  youtube: "https://youtube.com/@skyez",
  spotify: STREAM_LINK,
  apple: "https://music.apple.com",
  audiomack: "https://audiomack.com",
};

/* ================= DISCOGRAPHY ================= */
const DISCOGRAPHY = [
  {
    title: "Ayo",
    type: "EP",
    year: "2025",
    cover: "/covers/ayo.png",
    link: "https://open.spotify.com/album/1MtbFvLRGQPbi4Er0aCE8U",
  },
  {
    title: "Arizona",
    type: "Single",
    year: "2023",
    cover: "/covers/arizona.png",
    link: "https://open.spotify.com/album/3WvqF5bnBrleJKXctUqFfV",
  },
  {
    title: "Emotions + Command",
    type: "Single",
    year: "2024",
    cover: "/covers/emotions+command.png",
    link: "https://open.spotify.com/album/6H3r4wYiSSuhh7RpdGw4Bg",
  },
];

/* ================= DESIGN SYSTEM ================= */
const styles = {
  section: {
    minHeight: "100vh",
    padding: "clamp(5rem, 10vw, 9rem) 1.5rem",
    textAlign: "center" as const,
  },

  eyebrow: {
    color: RED,
    letterSpacing: "0.35em",
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    marginBottom: "1.2rem",
  },

  headingXL: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(3rem, 14vw, 9rem)",
    letterSpacing: "0.18em",
    lineHeight: 0.9,
    color: WHITE,
    textTransform: "uppercase" as const,
  },

  heading: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    letterSpacing: "0.12em",
    color: RED,
  },

  paragraph: {
    color: WHITE,
    fontSize: "1.05rem",
    lineHeight: 1.9,
    maxWidth: 620,
    margin: "0 auto",
  },

  primaryCTA: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.8rem",
    padding: "1.1rem 3rem",
    background: RED,
    color: WHITE,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    borderRadius: "2px",
  },

  iconLink: {
    color: WHITE,
    fontSize: "1.6rem",
    transition: "transform 0.3s ease, color 0.3s ease",
  },
};

/* ================= MOTION ================= */
const pulse = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ background: "#000", color: WHITE }}>
      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.96)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{
                position: "relative",
                border: `2px solid ${RED}`,
                padding: "3rem",
                maxWidth: 420,
                textAlign: "center",
              }}
            >
              <FaTimes
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  right: "1.2rem",
                  cursor: "pointer",
                }}
              />

              <div style={styles.eyebrow}>New Release</div>
              <h3 style={styles.heading}>Ayo</h3>

              <a href={STREAM_LINK} target="_blank" style={styles.primaryCTA}>
                <FaSpotify /> Stream
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          background: RED,
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND TYPO */}
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{
            position: "absolute",
            top: "45%",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
            fontSize: "18vw",
            opacity: 0.06,
            color: WHITE,
            pointerEvents: "none",
          }}
        >
          SKYEZ SKYEZ SKYEZ SKYEZ
        </motion.div>

        {/* IMAGE COLLAGE */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* LEFT */}
          <motion.img
            src="/hero/artist.png"
            initial={{ x: -200, opacity: 0, rotate: -10 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            style={{
              position: "absolute",
              left: "6%",
              width: "clamp(180px, 22vw, 260px)",
              transform: "translateY(50px)",
            }}
          />

          {/* CENTER WRAPPER (IMAGE + TEXT) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6 }}
            style={{
              position: "relative",
              width: "clamp(260px, 42vw, 460px)",
              transform: "translateY(70px)",
              zIndex: 2,
            }}
          >
            {/* CENTER IMAGE */}
            <img
              src="/hero/skyez.png"
              alt="Skyez"
              style={{
                width: "100%",
                display: "block",
              }}
            />

            {/* TEXT ON IMAGE */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  letterSpacing: "0.25em",
                  color: WHITE,
                  textShadow: "0 10px 40px rgba(0,0,0,0.6)",
                  transform: "translateX(0.12em)", // optical centering for letter-spacing
                }}
              >
                SKYEZ
              </h1>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.img
            src="/hero/right.png"
            initial={{ x: 200, opacity: 0, rotate: 10 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            style={{
              position: "absolute",
              right: "6%",
              width: "clamp(180px, 22vw, 260px)",
              transform: "translateY(50px)",
            }}
          />
        </div>

        {/* GRAIN */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/hero/grain.png)",
            backgroundSize: "cover",
            opacity: 0.35,
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ================= DISCOGRAPHY ================= */}
      <section style={styles.section}>
        <div style={styles.eyebrow}>Releases</div>
        <h2 style={styles.heading}>Discography</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            maxWidth: 1100,
            margin: "5rem auto 0",
          }}
        >
          {DISCOGRAPHY.map((r, i) => (
            <motion.a
              key={i}
              href={r.link}
              target="_blank"
              whileHover={{ y: -8 }}
              style={{ textDecoration: "none", color: WHITE }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.2 }}
                style={{
                  aspectRatio: "1 / 1",
                  backgroundImage: `url(${r.cover})`,
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  border: `3px solid ${RED}`,
                  marginBottom: "1.2rem",
                }}
              />
              <strong>{r.title}</strong>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= BOOKINGS ================= */}
      <section style={styles.section}>
        <div style={styles.eyebrow}>Business</div>
        <h2 style={styles.heading}>Bookings</h2>

        <p style={{ ...styles.paragraph, margin: "3rem auto" }}>
          Shows · Festivals · Brand Collaborations
        </p>

        <motion.a
          href="mailto:booking@skyez.com"
          {...pulse}
          style={styles.primaryCTA}
        >
          <FaEnvelope /> Book Skyez
        </motion.a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderTop: `1px solid ${RED}`,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}
        >
          <a href={SOCIALS.instagram} style={styles.iconLink}>
            <FaInstagram />
          </a>
          <a href={SOCIALS.twitter} style={styles.iconLink}>
            <FaTwitter />
          </a>
          <a href={SOCIALS.youtube} style={styles.iconLink}>
            <FaYoutube />
          </a>
          <a href={SOCIALS.spotify} style={styles.iconLink}>
            <FaSpotify />
          </a>
          <a href={SOCIALS.apple} style={styles.iconLink}>
            <FaApple />
          </a>
          <a href={SOCIALS.audiomack} style={styles.iconLink}>
            <SiAudiomack />
          </a>
        </div>

        <p style={{ marginTop: "1.5rem" }}>© 2025 SKYEZ</p>
      </footer>
    </main>
  );
}
