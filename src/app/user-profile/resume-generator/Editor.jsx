import React, { useEffect, useState } from "react";
import InputControl from "./InputControl";
import styles from "./Editor.module.css";

const Editor = (props) => {
  const sections = props.sections;
  const information = props.information;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. Chat app"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        value={values.overview}
        placeholder="Enter basic overview of project"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          value={values.link}
          placeholder="Enter deployed link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter github link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. B-tech"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        value={values.college}
        placeholder="Enter name of your college/school"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter your title eg. Frontend developer"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          value={values.linkedin}
          placeholder="Enter your linkedin profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter your github profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          value={values.email}
          placeholder="Enter your email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Enter phone"
          value={values.phone}
          placeholder="Enter your phone number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  // ... Other state variables

  const skillsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>Enter your skills</label>

        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>Enter other details</label>
        <InputControl
          placeholder="Other Details"
          value={values.other || ""}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, other: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.skills:
        return skillsBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.skills: {
        const tempPoints = values.points;
        props.setInformation((prev) => ({
          ...prev,
          [sections.skills]: {
            ...prev[sections.skills],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.other: {
        const tempOther = values.other;
        props.setInformation((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            other: tempOther,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
    });
  }, [activeSectionKey]);

  return (
    <div className="flex-col gap-8 shadow-lg shadow-black rounded-md p-5 pt-5 h-[fit-content] mx-auto bg-[#393E46] ">
      <div className="flex gap-2.5 overflow-x-auto mx-auto ">
        {Object.keys(sections)?.map((key) => (
          <div
            className={`p-2 border-b-2 border-slate-600 font-medium text-base whitespace-nowrap cursor-pointer ${
              activeSectionKey === key
                ? "text-[#F96D00] border-b-[#F96D00]"
                : "text-white"
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div>
        <div className="p-10 flex-col gap-5 pt-0 ">
          <InputControl
            label="Title"
            placeholder="Enter section title"
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />

          <div className="flex flex-wrap items-center gap-20">
            {activeInformation?.details
              ? activeInformation?.details?.map((item, index) => (
                  <div
                    className={`${styles.chip} ${
                      activeDetailIndex === index ? styles.active : ""
                    }`}
                    key={item.title + index}
                    onClick={() => setActiveDetailIndex(index)}
                  >
                    <p>
                      {sections[activeSectionKey]} {index + 1}
                    </p>
                    <X
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDeleteDetail(index);
                      }}
                    />
                  </div>
                ))
              : ""}
            {activeInformation?.details &&
            activeInformation?.details?.length > 0 ? (
              <div className={styles.new} onClick={handleAddNew}>
                +New
              </div>
            ) : (
              ""
            )}
          </div>
          {generateBody()}
          <button
            className=" transform active:translate-y-2 px-3 py-1 mt-6 rounded-lg bg-[#393E46] text-white outline-none font-medium text-base items-center cursor-pointer transition duration-200 hover:bg-[#F96D00]"
            onClick={handleSubmission}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
