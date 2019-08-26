import React from 'react';
import './SectionPerformance.scss';

import '../../node_modules/aos/dist/aos.css';

import Odometer from 'react-odometerjs';
import AOS from 'aos';

class SectionPerformance extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      throughput: 100,
      cost: '0.004',
    };
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }

  componentDidMount() {
    this.timer = setTimeout((data) => this.setState({throughput: 350}), 50);
    // this.timer = setTimeout(data => this.setState({ cost: 0.123 }), 1000);
  }

  render() {
    return (
      <div>
        <section className="section section-throughput is-large has-text-black has-background-grey">
          <div className="container">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5  has-text-centered"
              >
                <h1>Remarkable Throughput</h1>
                <Odometer value={this.state.throughput} format="(,ddd)" />
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column column-explain is-5 is-centered has-text-left"
              >
                <p>
                  Loopring 3.0 can settle up to 350 trades per second while
                  guarantees the same level of security as the underlying
                  Ethereum blockchain. This is powered by a zkRollup feature
                  called <b>On-Chain Data Availability</b>, or <b>OCDA</b>. If
                  OCDA is disabled, Loopring provides consortium-level security,
                  and its throughput will be much higher, as shown in the
                  following table.
                </p>
              </div>
            </div>
            <div className="columns is-centered is-multiline">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th className="first"></th>
                      <th>Throughput with OCDA On</th>
                      <th>Throughput with OCDA Off</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="first">Currently</td>
                      <td>
                        <span className="highlighted">350</span>
                      </td>
                      <td>
                        <span className="highlighted">6,900</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="first">Post-Istanbul Fork</td>
                      <td>
                        <span className="highlighted">1,400</span>
                      </td>
                      <td>
                        <span className="highlighted">10,500</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-cost is-large has-text-white has-background-black">
          <div className="container">
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column is-5  has-text-centered"
              >
                <h1>Affordable Settlement Cost</h1>
                <Odometer
                  theme="white"
                  format="(,ddd).ddd"
                  value={this.state.cost}
                />
              </div>
            </div>
            <div className="columns is-centered">
              <div
                data-aos="fade-up"
                className="column column-explain is-5 is-centered has-text-left"
              >
                <p>
                  Loopring 3.0 can settle up to 350 trades per second while
                  guarantees the same level of security as the underlying
                  Ethereum blockchain. This is powered by a zkRollup feature
                  called <b>On-Chain Data Availability</b>, or <b>OCDA</b>. If
                  OCDA is disabled, Loopring provides consortium-level security,
                  and its throughput will be much higher, as shown in the
                  following table.
                </p>
              </div>
            </div>
            <div className="columns is-centered is-multiline">
              <div
                data-aos="fade-up"
                className="column is-5 is-centered has-text-centered"
              >
                <table className="table has-text-white">
                  <thead>
                    <tr>
                      <th className="first"></th>
                      <th>Cost/trade with OCDA On</th>
                      <th>Cost/trade with OCDA Off</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="first">Currently</td>
                      <td>
                        <span className="">$0.12</span>
                      </td>
                      <td>
                        <span className="">6,900</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="first">Post-Istanbul Fork</td>
                      <td>
                        <span className="">1,400</span>
                      </td>
                      <td>
                        <span className="">10,500</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionPerformance;
