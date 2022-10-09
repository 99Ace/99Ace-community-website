import communityImg from '../images/community.jpg';
import { useState, useEffect } from 'react';
import { Link, useFetcher } from "react-router-dom";

export default function Landing() {

  // Set data to be null
  const [members, setMembers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // const [errors, setErrors]
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/members")
        .then(res => {
          // 2. See there is a key call "ok" and it shows true when data is loaded
          console.log(res);
          if (!res.ok){
            // if the res.ok is false then we throw an error
            // modify the api path to a wrong path to see this happen
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then( data => {
          console.log(data)
          setMembers(data);
          setIsPending(false);
        })
        .catch(err=>{
          // 1. Close the terminal for json-server and check this out
          console.log(err.message);
        })
    }, 1000)

  }, [])
  return <>
    {/* Main intro */}
    <main className='container-fluid'>
      <div className="row">

        <div className="col-12 col-md-6">
          <img src={communityImg} className="img-fluid" alt="Community Members images" />
        </div>

        <div className="col-12 col-md-6 p-2 p-md-5">
          <h1 className="mt-3">TGC COMMUNITY WEBSITE</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui maxime dolor cum ratione asperiores fugiat consequuntur iusto illo aut ea. Natus quasi error facere rerum temporibus illum distinctio? Doloremque, voluptatibus.</p>
          <button className='btn btn-sm btn-outline-success' >Join us</button>
        </div>
      </div>

    </main>

    {/* Community member profile */}
    <section className="container mt-5">
      <h2>FIND OUR MEMBERS HERE</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendus alias, quas laudantium sunt fugit explicabo dolor debitis voluptates accusamus neque distinctio illo delectus quo! Sit voluptatibus nobis mollitia quidem.</p>
      <div className="row">
        <div className="col-12">
          <div className="face-card bg-setting bg-img-male"></div>
          <h6 className="m-0">Jerry</h6>
          <small className="text-muted">President</small><br />
          <button className="btn btn-sm btn-success py-0">profile</button>
        </div>
        <div className="col">
          <div className="face-card bg-setting bg-img-male"></div>
          <h6 className="m-0">Keith</h6>
          <small className="text-muted">Member</small><br />
          <button className="btn btn-sm btn-success py-0">profile</button>
        </div>
        <div className="col">
          <div className="face-card bg-setting bg-img-female"></div>
          <h6 className="m-0">Illy</h6>
          <small className="text-muted">Member</small><br />
          <button className="btn btn-sm btn-success py-0">profile</button>
        </div>
        <div className="col">
          <div className="face-card bg-setting bg-img-male"></div>
          <h6 className="m-0">Arif</h6>
          <small className="text-muted">Member</small><br />
          <button className="btn btn-sm btn-success py-0">profile</button>
        </div>
      </div>
    </section>

    {/* Member Listing  */}
    <section className='container mt-5'>
      <h3>MEMBERS LIST</h3>
      <p>Check out our members orem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit excepturi reprehenderit ipsa nostrum quas adipisci tempore quod maiores inventore corrupti itaque, amet impedit magni assumenda dolores voluptas quaerat harum non.</p>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
        {isPending && <div className='col-12'><em>Loading our members</em></div>}
        {members && members.map(member => {
          return (
            <div className="col" key={member.id}>
              <div className="face-card bg-setting bg-img-male"></div>
              <h6 className="m-0">{member.name}</h6>
              <small className="text-muted">{member.position}</small><br />
              <Link to={"/profile/" + member.id} className="btn btn-sm btn-success py-0" >view</Link>
            </div>
          )
        })
        }
      </div>
    </section>
  </>
}