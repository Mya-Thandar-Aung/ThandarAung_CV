
import Image from "next/image"
export default function Home() {
  return (
    <>
      <div classNameName="container-fluid">
        <div className="row">
          <div className="col-md-4 contact">
            <div className="text-center">
              <Image
                      src="/Picture2.jpg"
                      alt="pp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '200px', height: '200px', borderRadius: '50%'}}
                      className="img-fluid pt-3"
              />
            </div>
            <h4 className="ps-5">Contact</h4>
            <hr className="ms-5"/>
            <div className="info ps-5">
              <h5>PHONE</h5>
              <p>+959781708012</p>
              <h5>EMAIL</h5>
              <p>tda30479@gmail.com</p>
              <h5>ADDRESS</h5>
              <p>Kamaryut Station, Baho Road, Yangon</p>
              <h5>GITHUB</h5>
              <a>https://github.com/Mya-Thandar-Aung</a>
              <br/>
              <br/>
            </div>
            <h4 className="ps-5">LANGUAGE</h4>
            <hr className="ms-5"/>
            <div className="info ps-5">
              <p>English</p>
              <p>Myanmar</p>
            </div>
          </div>
          <div className="col-md-8 name pt-4">
            <div className="text-center">
              <h4>Thandar Aung</h4>
              <h6>React Developer</h6>
            </div>
            <br></br>
            <div className="background">
              <h6 className="ps-5">BACKGROUND KNOWLEDGE SKILLS</h6>
              <hr className="ms-5"/>
              <p className="ps-5"> HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT JS, NODEJS, DATABASE ( Mysql and MongoDB) </p>
              <br></br>
              <h6 className="ps-5">EDUCATION</h6>
              <hr className="ms-5"/>
              <h6 className="ps-5 bold"> Computer University, Pyay 2012 - 2017</h6>
              <p className="ps-5"> Bachelor of Computer Science (B.C.Sc)</p>
              <br></br>
              <h6 className="ps-5">EXPERIENCES</h6>
              <hr className="ms-5"/>
              <h6 className="ps-5 bold">Beauty Salon Website</h6>
              <p className="ps-5">https://vercel.com/multi-salon/beautysalon-frontend</p>
              <p className="ps-5">https://vercel.com/multi-salon/beautysalon-api</p>
              <p className="ps-5">https://vercel.com/multi-salon/beautysalon-backend</p>
              <h6 className="ps-5 bold">Creating npm packages (de-currency-format)</h6>
              <p className="ps-5">https://github.com/Mya-Thandar-Aung/de-currency-format</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
