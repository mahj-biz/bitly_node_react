import React,{ useEffect, useState }  from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";
import { useNavigate,useParams } from "react-router-dom";
import { editLinks,getLinks } from "../utils/api/link";

const EditLink = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    let { id } = useParams();

    const handleBackButton = () =>{
        navigate("/admin");
    };

    const getLinkData = async () => {
      try {
        const response = await getLinks(id);
        setData(response.data.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
    useEffect(() => {
      getLinkData();
    }, []);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
          const response = await editLinks(data);
          alert(response.data.message);
          navigate("/admin");
        } catch (error) {
          console.log(error);
          alert(error.response.data.message);
        }
    }

    return (
        <Page>
          <Header />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h5>Clonely Dashboard </h5>
              <button onClick={() => handleBackButton()}>Back</button>
            </div>
            <div style={divContainer} >
                <form style={formContainer} onSubmit={handleSubmit}>
                    <h5>Edit Link</h5>
                    {/* need edit bind data */}
                    <div style={inputContainer}>
                        <label htmlFor="original_link">Original Link</label>
                        <input type="text" name="original_link" id="original_link" />
                    </div>                 
                    <button type="submit">Submit</button>
                </form>
            </div>
          </Container>
        </Page>
      );
    
};


const formContainer = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    gap: "1rem",
  };
  
  const inputContainer = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    gap: "0.5rem",
  };

  const divContainer ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }


export default EditLink;
