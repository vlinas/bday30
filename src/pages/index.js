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
    <SEO title="Su Gimtadieniu!" />
    <div className="top">
      <div className="content box">
        {/* <img src="https://media.giphy.com/media/VEc4fcyBWDbNQ1K1xu/source.gif"/> */}
    <h1>Kviečiu tave į gimtadienį!</h1>
    <p>Labas, jei matai šitą žinutę, tai žinok, kad kviečiu tave į savo 30-tą gimtadienį.</p>
    <p>Priza</p>
    <p>Planas</p>
    <h5>Linas</h5>
<hr/>
<h3>Dalyvio anketa:</h3>
    <form name='kontaktu-forma' className="kontaktu-forma" action='/cool' data-netlify='true' data-netlify-honeypot='bot-field' method='post' autoComplete="on">
              <div className="form-group">
                <label className="label">Vardas <span>*</span></label>
                <div className="control">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="kontaktu-forma" />
                  <input className="form-control" name="name" type="text" placeholder="" required></input>
                </div>
              </div>

              <button className='btn btn-primary' id='form-submit-btn' type='submit'>Dalyvausiu!</button>
            </form>

    </div>
    </div>
  </Layout>
)

export default IndexPage
