import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ButtonComp from '../components/button'
import Button3 from '../components/button3'
import Button4 from '../components/button4'
import content from '../components/boxContent'

const IndexPage = () => (
  <Layout>
    <SEO title="Linui 30!" />
    <div className="top">
      <div className="content box">
        <img src="https://media.giphy.com/media/KzDqC8LvVC4lshCcGK/giphy.gif"/>
    <h1>Kviečiu tave į gimtadienį!</h1>
    <p>Labas, jei matai šitą žinutę, tai žinok, kad kviečiu tave į savo 30-tą gimtadienį.</p>
    <p>Gimtadienio metu bus galima laimėti vieną iš trijų taurių: "Greičiausias", "Taikliausias" ir "Protingiausias". Ypatingas prizas atiteks žmogui laimėjusiam dvi taures, todėl stengtis bus verta!</p>
    <p></p>
    <p>Veikla bus aktyvi, todėl reikėtų pasiimti patogius drabužius, rankšluostį+maudymkes kubilui ir 2 EUR pošalmiui kartingams. <u>Puoštis nebūtina</u>, bet pagal norą.</p>
    <p>Silpnesniais gėrimais bus pasirūpinta, bet dalyvių prašau pasirūpinti stipresniais gėrimais sau ir savo draugui.</p>
    <p>
      <b>Data:</b> 2021-05-15 Šeštadienis<br/>
      <b>Vieta:</b> Sodyba Kačerginėje (netoli piliakalnio) <br/>
      <b>Pradžia:</b> 14:00 (kartingai <a href="https://www.google.com/maps/place/Gokart+track+%E2%80%9CKartlandas+Kaunas%E2%80%9D+Raudondvario+pl.+164A/@54.9143807,23.8424221,15z/data=!4m2!3m1!1s0x0:0x7e68bab9aa515d2c?sa=X&ved=2ahUKEwj8-q7U37DwAhWHmxQKHY1ACYEQ_BIwFXoECEoQBQ">Kartlande</a>) <br/>
    </p>
    <p>Žemiau įvesk savo vardą jei dalyvausi!</p>
    <p>- Linas</p>

    <form name='kontaktu-forma' className="kontaktu-forma" action='/cool' data-netlify='true' data-netlify-honeypot='bot-field' method='post' autoComplete="on">
    <h3>Dalyvio anketa:</h3>
              <div className="form-group">
                {/* <label className="label">Vardas <span>*</span></label> */}
                <div className="control">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="kontaktu-forma" />
                  <input className="form-control" name="name" type="text" placeholder="Vardas" required></input>
                </div>
              </div>

              <button className='btn btn-primary' id='form-submit-btn' type='submit'>Dalyvausiu!</button>
            </form>

    </div>
    </div>
  </Layout>
)

export default IndexPage
