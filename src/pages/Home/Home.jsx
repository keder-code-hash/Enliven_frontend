import React from "react";
import "./home.css";
import elogo from "../../assets/images/logo/enliven.gif";
import homeImg from "../../assets/images/Online_test_rmbg.gif";
import midImg from "../../assets/images/exam.png";
import searchImg from "../../assets/images/search.png";
import findImg from "../../assets/images/find_.png";
import find2Img from "../../assets/images/finding.png";
import jobImg from "../../assets/images/find_new_job.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container2">
          <div className="left-col">
            <div className="image">
              <img src={elogo} alt="company logo" />
            </div>
            <div className="text-content">
              <p>Tired of checking answer sheets manually?</p>
              <p>
                Go effortless with <span className="name">enliven</span>
              </p>
            </div>
            <div className="btn-light-border">
              <Link to="/" className="btn-text">
                Get Started
              </Link>
            </div>
          </div>
          <div className="right-col">
            <img alt="Interview Candidate" src={homeImg} />
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container2">
          <div className="col-left">
            <img src={midImg} alt="Exam" />
          </div>
          <div className="col-right">
            <h1>What Do we Do</h1>
            <p>
              <span>
                Enliven is a <strong>Smart Assessment System</strong>, capable
                of automatically <strong> assesssing Multiple Choice</strong>{" "}
                and{" "}
                <strong>
                  <span>Short Answer</span>
                </strong>{" "}
                type questions. Enliven brings a new era of online examinations
                by
              </span>
              <br />
              <span>
                providing a scope of versatile questions and
                <strong> cutting off</strong> the
              </span>
              <br />
              <span>
                tedious <strong>workload</strong> from the assessor.
              </span>
            </p>
            <div className="btn-solid-border">
              <Link to="/" className="btn-solid">
                Give it a try
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="bee-page-container">
                 
        <div className="bee-row bee-row-2">
          <div className="bee-row-content">
            <div className="bee-col bee-col-1 bee-col-w12">
              <div className="bee-block bee-block-1 bee-divider">
                <div className="spacer" style={{ height: "10px" }}></div>
              </div>
              <div className="bee-block bee-block-2 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "150%",
                    fontSize: "12px",
                    color: "#34495e",
                    fontFamily: "inherit",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "21px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "28px", lineHeight: "42px" }}>
                      Enliven is a <strong>Smart Assessment System</strong>,
                      capable of automatically{" "}
                      <strong> assesssing Multiple Choice</strong> and{" "}
                      <strong>
                        <span style={{ fontSize: "30px", lineHeight: "45px" }}>
                          Short Answer
                        </span>
                      </strong>{" "}
                      type questions. Enliven brings a new era of online
                      examinations by
                    </span>
                    <br />
                    <span style={{ fontSize: "28px", lineHeight: "42px" }}>
                      providing a scope of versatile questions and
                      <strong> cutting off</strong> the
                    </span>
                    <br />
                    <span style={{ fontSize: "28px", lineHeight: "42px" }}>
                      tedious <strong>workload</strong> from the assessor.
                    </span>
                  </p>
                </div>
              </div>
              <div className="bee-block bee-block-3 bee-divider">
                <div className="spacer" style={{ height: "20px" }}></div>
              </div>
              <div className="bee-block bee-block-4 bee-image">
                <img
                  alt="Guys Shaking Hand"
                  className="bee-center bee-fixedwidth bee-fullwidthOnMobile"
                  src={midImg}
                  style={{ maxWidth: "720px" }}
                />
              </div>
              <div className="bee-block bee-block-5 bee-divider">
                <div className="spacer" style={{ height: "45px" }}></div>
              </div>
              <div className="bee-block bee-block-6 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "150%",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    color: "#34495e",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "28px", lineHeight: "42px" }}>
                      <strong>
                        <strong>Together we can</strong> build a better world !
                      </strong>
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "24px", lineHeight: "36px" }}>
                      Our first and foremost priority is the betterment of
                      learners.
                    </span>
                  </p>
                  <p style={{ lineHeight: "18px" }}>
                    <span
                      style={{ fontSize: "24px", lineHeight: "36px" }}
                    ></span>
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        backgroundColor: "transparent",
                        lineHeight: "36px",
                      }}
                    >
                      We assure an intriguing experience for learners,
                    </span>
                  </p>
                  <p style={{ lineHeight: "18px" }}>
                    <span
                      style={{ fontSize: "24px", lineHeight: "36px" }}
                    ></span>
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      lineHeight: "36px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        backgroundColor: "transparent",
                        lineHeight: "36px",
                      }}
                    >
                      as well as a hassle-free experience for the assessors.
                    </span>
                  </p>
                </div>
              </div>
              <div className="bee-block bee-block-7 bee-divider">
                <div className="spacer" style={{ height: "0px" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bee-row bee-row-3">
          <div className="container bee-row-content">
            <div className="bee-col bee-col-1 bee-col-w6">
              <div className="bee-block bee-block-1 bee-image">
                <img
                  alt="Guy Searching"
                  className="bee-center bee-fixedwidth bee-fullwidthOnMobile"
                  src={searchImg}
                  style={{ maxWidth: "676px" }}
                />
              </div>
            </div>
            <div className="bee-col bee-col-2 bee-col-w6">
              <div className="bee-block bee-block-1 bee-divider bee-mobile_hide">
                <div className="spacer" style={{ height: "30px" }}></div>
              </div>
              <div className="bee-block bee-block-2 bee-divider bee-mobile_hide">
                <div className="spacer" style={{ height: "30px" }}></div>
              </div>
              <div className="bee-block bee-block-3 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "200%",
                    fontSize: "12px",
                    color: "#34495e",
                    fontFamily: "inherit",
                  }}
                >
                  <p style={{ fontSize: "14px", lineHeight: "28px" }}>
                    <span style={{ fontSize: "30px", lineHeight: "60px" }}>
                      <strong>
                        <span style={{ lineHeight: "24px" }}>
                          Supports Computerized Adaptive Testing (CAT)
                        </span>
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
              <div className="bee-block bee-block-4 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    fontSize: "12px",
                    lineHeight: "200%",
                    fontFamily: "inherit",
                    color: "#555555",
                  }}
                >
                  <p style={{ lineHeight: "24px" }}>
                    <span style={{ fontSize: "20px", lineHeight: "40px" }}>
                      In Adaptive tests, the{" "}
                      <strong>test's difficulty adapts</strong> to the
                      performance of the candidate, getting{" "}
                      <strong>harder</strong> or
                      <strong> easier </strong>following a
                      <strong> correct </strong>
                      or
                      <strong> incorrect </strong>
                      answer respectively.
                    </span>
                  </p>
                  <p style={{ lineHeight: "24px" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        backgroundColor: "transparent",
                        lineHeight: "40px",
                      }}
                    >
                      The questions faced by the learner are dependent upon the
                      <strong>
                        {" "}
                        correctness of their responses to the most recent
                        questions.
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bee-row bee-row-4">
          <div className="container bee-row-content">
            <div className="bee-col bee-col-1 bee-col-w6">
              <div className="bee-block bee-block-1 bee-divider bee-mobile_hide">
                <div className="spacer" style={{ height: "30px" }}></div>
              </div>
              <div className="bee-block bee-block-2 bee-divider bee-mobile_hide">
                <div className="spacer" style={{ height: "30px" }}></div>
              </div>
              <div className="bee-block bee-block-3 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "200%",
                    fontSize: "12px",
                    color: "#34495e",
                    fontFamily: "inherit",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "28px",
                      textAlign: "left",
                    }}
                  >
                    <strong>
                      <span style={{ fontSize: "30px", lineHeight: "60px" }}>
                        AI based Scoring Mechanism
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="bee-block bee-block-4 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "200%",
                    fontSize: "12px",
                    color: "#555555",
                    fontFamily: "inherit",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "28px",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "40px" }}>
                      Enliven is capable of
                      <strong> automatic evaluation </strong>
                      of students based on Short Answer type Questions along
                      with Multiple choice questions. For Short Answer Type
                      Questions, an
                      <strong> AI based model </strong>
                      calculates the score
                      <strong> based on a standard answer </strong>
                      provided by the assessor while keeping the
                      <strong> flexibility of manual assessment</strong>. This
                      <strong> reduces the workload of an assessor </strong>
                      to a great extent.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bee-col bee-col-2 bee-col-w6">
              <div className="bee-block bee-block-1 bee-image">
                <img
                  alt="Guy Working"
                  className="bee-center bee-fullwidthOnMobile bee-fixedwidth"
                  src={findImg}
                  style={{ maxWidth: "676px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bee-row bee-row-5">
          <div className="container bee-row-content">
            <div className="bee-col bee-col-1 bee-col-w6">
              <div className="bee-block bee-block-1 bee-image">
                <img
                  alt="Two people working together"
                  className="bee-center bee-fixedwidth bee-fullwidthOnMobile"
                  src={find2Img}
                  style={{ maxWidth: "676px" }}
                />
              </div>
            </div>
            <div className="bee-col bee-col-2 bee-col-w6">
              <div className="bee-block bee-block-1 bee-divider bee-mobile_hide">
                <div className="spacer" style={{ height: "30px" }}></div>
              </div>
              <div className="bee-block bee-block-2 bee-divider bee-mobile_hide">
                <div className="spacer" style={{ height: "30px" }}></div>
              </div>
              <div className="bee-block bee-block-3 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "200%",
                    fontSize: "12px",
                    color: "#34495e",
                    fontFamily: "inherit",
                  }}
                >
                  <p style={{ fontSize: "14px", lineHeight: "28px" }}>
                    <span style={{ fontSize: "30px", lineHeight: "60px" }}>
                      <strong>
                        <span style={{ lineHeight: "24px" }}>
                          AI based Protored Assessment
                        </span>
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
              <div className="bee-block bee-block-4 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "200%",
                    fontSize: "12px",
                    color: "#555555",
                    fontFamily: "inherit",
                  }}
                >
                  <p style={{ fontSize: "14px", lineHeight: "28px" }}>
                    <span style={{ fontSize: "20px", lineHeight: "40px" }}>
                      A constant monitoring system prevents malpractice and
                      ensures a healthy environment for assessment. An AI based
                      model constantly monitors learner's presence and checks
                      their face against a default face.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bee-row bee-row-6">
          <div className="bee-row-content">
            <div className="bee-col bee-col-1 bee-col-w12">
              <div className="bee-block bee-block-7 bee-divider">
                <div className="spacer" style={{ height: "25px" }}></div>
              </div>
              <div className="bee-block bee-block-8 bee-divider">
                <div className="spacer" style={{ height: "0px" }}></div>
              </div>
              <div className="bee-block bee-block-9 bee-text">
                <div
                  className="bee-text-content"
                  style={{
                    lineHeight: "150%",
                    fontSize: "12px",
                    color: "#34495e",
                    fontFamily: "inherit",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "21px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "30px", lineHeight: "45px" }}>
                      <strong>
                        <span style={{ lineHeight: "18px" }}>
                          Get a personalized Demo
                        </span>
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
              <div className="bee-block bee-block-12 bee-image">
                <img
                  alt="Guy working"
                  className="bee-center bee-fixedwidth bee-fullwidthOnMobile"
                  src={jobImg}
                  style={{ maxWidth: "720px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bee-row bee-row-7">
          <div className="bee-row-content">
            <div className="bee-col bee-col-1 bee-col-w12">
              <div className="bee-block bee-block-1 bee-divider">
                <div className="spacer" style={{ height: "35px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
