// import { useEffect } from "react"

// const experiences = {
//     role: "CTO",
//     company: "Umbrella Corp",
//     startDate: "1700-06-16",
//     endDate: null,
//     description: "TOP secret",
//     area: "Berlin",
// }

// export default function postExperiences() {
//     // async function dadadada(id){
//     //     const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`
//     //     try {
//     //       const res = await fetch(urlToFetch, {
//     //         method: "POST",
//     //         headers: {
//     //           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
//     //           'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(experiences)
//     //       })
//     //       if (res.ok) {
//     //         console.log(res);
//     //         let profile = await res.json()
//     //         console.log("testProfilo", profile)
//     //       } else {
//     //       }
//     //     } catch (error) {
//     //       alert(error)

//     //     }
//     // }
//     // dadadada(`63fc6fa3f193e60013807f59`)

//     const experiences2 = {
//             name: "ManoloZ",
//             surname: "Vallerga",
//             email: "antoniovallerga85@gmail.com",
//             bio: "Laureato in Biotecnologie Medico Farmaceutiche nel 2013. Più di 10 anni di esperienza di lavoro a contatto con il pubblico.Appassionato di tecnologia, storia, scienza.",
//             title: "Fullstack Developer",
//             area: "Genova",
//     }
//     // async function ipipipip(id, expid){

//     //     const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/`
//     //     try {
//     //       const res = await fetch(urlToFetch, {
//     //         method: "PUT",
//     //         headers: {
//     //           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
//     //           'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(experiences2)
//     //       })
//     //       if (res.ok) {
//     //         console.log(res);
//     //         let profile = await res.json()
//     //         console.log("testPUT", profile)
//     //       } else {
//     //       }
//     //     } catch (error) {
//     //       alert(error)

//     //     }
//     //  }
// }
// ipipipip()
import { useEffect, useState } from "react"; //ChangeEvent e FormEvent sono i tipi degli eventi onChange e onSubmit
import { Card, Col, Row } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
// export default function Component() {
//   const [fd, setFd] = useState(new FormData()) //FormData e' una classe usata per raccogliere dati non stringa dai form
//   //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
//   const handleSubmit = async (ev) => {
//       ev.preventDefault()
//       let res = await fetch(
//         // https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences/:expId/picture
//           "https://striveschool-api.herokuapp.com/api/experience/63fc6fa3f193e60013807f59/picture/",
//           {
//               //qui l'id andra' sostituito con un id DINAMICO!!!!!
//               method: "POST",
//               body: fd, //non serve JSON.stringify
//               headers: {
//                   //NON serve ContentType :)
//                   Authorization:
//                   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
//                 },
//             }
//             )
//         }
//         const handleFile = (ev) => {
//         setFd((prev) => {
//         console.log(ev.target.files[0]);
//         //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
//         prev.delete("profile") //ricordatevi di svuotare il FormData prima :)
//         prev.append("profile", ev.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
//         console.log(prev);
//       return prev
//     })
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFile} accept=".jpg" />
//         <button>SEND</button>
//       </form>
//     </>
//   )
// }
// export default function Experiencesessese() {
//   const [fd, setFd] = useState(new FormData()) //FormData e' una classe usata per raccogliere dati non stringa dai form
//   //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
//   const handleSubmit = async (ev) => {
//       ev.preventDefault()
//       let res = await fetch(

//           "https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/experiences/640086ed035832001350bcaf/picture",
//           {
//               //qui l'id andra' sostituito con un id DINAMICO!!!!!
//               method: "POST",
//               body: fd, //non serve JSON.stringify
//               headers: {
//                   //NON serve ContentType :)
//                   Authorization:
//                   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
//                 },
//             }
//             )
//         }
//         const handleFile = (ev) => {
//         setFd((prev) => {
//         console.log(ev.target.files[0]);
//         //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
//         prev.delete("experience") //ricordatevi di svuotare il FormData prima :)
//         prev.append("experience", ev.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
//         console.log(prev);
//       return prev
//     })
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFile} accept=".jpg" />
//         <button>SEND</button>
//       </form>
//     </>
//   )
// }
export default function POSPOSPSOPSOSOSP() {
  // const [fd, setFd] = useState(new FormData()) //FormData e' una classe usata per raccogliere dati non stringa dai form
  // //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  // const handleSubmit = async (ev) => {
  //   ev.preventDefault()
  //   let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/63fc6fa3f193e60013807f59/picture", {
  //     //qui l'id andra' sostituito con un id DINAMICO!!!!!
  //     method: "POST",
  //     body: fd, //non serve JSON.stringify
  //     headers: {
  //       //NON serve ContentType :)
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
  //     },
  //   })
  // }
  // const handleFile = (ev) => {
  //   setFd((prev) => {
  //     console.log(ev.target.files[0])
  //     //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
  //     prev.delete("profile") //ricordatevi di svuotare il FormData prima :)
  //     prev.append("profile", ev.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
  //     console.log(prev)
  //     return prev
  //   })
  // }
  //    return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <input type="file" onChange={handleFile} accept=".jpg" />
  //       <button>SEND</button>
  //     </form>
  //   </>
  // )

  const example = {
    comment: "test comment",
    rate: "3",
    elementId: "6405c9f102cacd00132f1a2e",
  };
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDg1NGEyNDc4ZDAwMTNhMDU4MmEiLCJpYXQiOjE2NzgwOTk1MzQsImV4cCI6MTY3OTMwOTEzNH0.yG08E3EemsiX1fgEV3PiV_BsChfcBV-6oQD5oZsl80o",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(example),
        }
      );
      if (response.ok) {
        console.log("testComment", response);
      }
    } catch (error) {
      alert("testComment", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
}

export function JobPage() {
  return (
    <Row>
      <Col xs={12} md={8}>
        <Col xs={12} md={1}>
          <Card>
            <Card.Body>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">My jobs</span>
              </Card.Text>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">Job alerts</span>
              </Card.Text>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">Demonstrate skills</span>
              </Card.Text>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">Interview prep</span>
              </Card.Text>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">Resume builder</span>
              </Card.Text>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">Job seeker guidance</span>
              </Card.Text>
              <Card.Text>
                <BsFillBookmarkFill />
                <span className="proGreyDark ms-2">Application setting</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={1}>
          <div style={{ background: "red", height: "100vh" }}></div>
        </Col>
      </Col>
      <Col xs={12} md={3}>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
