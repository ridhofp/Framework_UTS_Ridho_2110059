import React, { Component } from "react";
import "./about.css";
import engineer from '../assets/engineer.png';

export class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="about" id="about">
          <div className="img-about">
            <img
              src={engineer}
              alt="bread-about"
            />
          </div>
          <section className="about-us">
            <h1>Tentang <br/> VPS (virtual Private Server)</h1>
            <p>
            VPS adalah server virtual yang berfungsi untuk menyimpan data dan file pada website. Biasanya VPS digunakan pada website yang membutuhkan sumber daya besar.
             Karena penggunanya tidak perlu berbagi sumber daya dengan website lain seperti halnya pada shared hosting.
              <br></br>
              <br></br>
              VPS / Cloud Server seperti komputer yang diletakkan di datacenter sehingga memiliki beberapa kelebihan dibandingkan anda meletakkan komputer / server di rumah, 
              seperti tidak adanya biaya online/internet 24 jam dan tidak ada biaya listrik yang membengkak karena menyalakan server selama 24 jam nonstop.
              <br></br>
              <br></br>
             fungsi
             <br></br>
             <br></br>-Hosting beberapa website <br></br>
                      -Penyimpanan file hosting<br></br>
                      -Menampung trafik super tinggi<br></br>
                      -Memberikan layanan berbasis cloud untuk customer<br></br>
                      -Server percobaan<br></br>
                      -Sebagai game server<br></br>
                      -Sebagai vpn<br></br>
                      -Remote desktop<br></br>
                      -Private backup<br></br>
                      -Mengetes aplikasi baru<br></br>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
