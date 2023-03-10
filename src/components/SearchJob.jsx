import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FiBookmark } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addPrefeJobs } from "../redux/actions";
import ModaleJobs from "./ModaleJobs";
import SingleJob from "./SingleJob";

function SearchJob() {
  const [jobs, setJobs] = useState("developer");
  const [jobsFetch, setJobFetch] = useState([]);
  const [titlePage, setTitlePage] = useState("Developer");

  const dispatch = useDispatch();

  function capitalizeFirstLetter(string) {
    setTitlePage(string.charAt(0).toUpperCase() + string.slice(1));
  }

  async function getJobs(query) {
    const urlToFetch = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`;
    try {
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let { data } = await res.json();
        setJobFetch(data);
        console.log("testJOB", data);
      } else {
      }
    } catch (error) {
      alert(error);
    }
  }
  const handleChange = (e) => {
    setJobs(e.target.value);
  };

  useEffect(() => {
    getJobs("developer");
  }, []);

  return (
    <>
      <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
        />
        <Button
          variant="primary"
          className="proOpenTo"
          onClick={() => {
            getJobs(jobs);
            capitalizeFirstLetter(jobs);
          }}
        >
          Search
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-between bg-light rounded-3 position-relative proCard my-4">
        <div className="my-4 mx-4">
          <h2 className="mb-3">{titlePage}</h2>
          {jobsFetch.slice(0, 5).map((job) => {
            return (
              <div key={job._id}>
                <div className="d-flex justify-content-between align-items-center m-0 p-0">
                  <ModaleJobs title={job.title} company={job.company_name} />
                  <SingleJob job={job} />
                </div>
                <div className="proBlack proSmall proLight mb-2 proGrey proGreyHBlue">
                  {job.category}
                </div>
                <div className="proBlack proSmall proLight mb-2 proGrey proGreyHBlue">
                  {job.company_name}
                </div>
                <div className="proBlack proSmall proLight mb-2 proGrey proGreyHBlue">
                  {job.publication_date.slice(0, 10)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchJob;
