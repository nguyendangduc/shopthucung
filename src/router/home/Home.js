import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './SideBar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataHome:[],
      sidebar: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const {sibar, home} = nextProps.datas;
    this.setState({
      dataHome:  home,
      sidebar: sibar
    })
  }

  render() {
    return (
      <section className="main-content920">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div id="main">
                <section id="content1">
                  { this.state.dataHome.length > 0 &&
                    this.state.dataHome.map( (item, id) => {
                      return <div key={id} className="question-type2033">
                        <div className="row">
                          <div className="col-md-1">
                            <div className="left-user12923 left-user12923-repeat">
                              <a href="#"><img src="image/images.png" alt="image" /> </a> <a href="#"><i className="fa fa-check" aria-hidden="true" /></a> </div>
                          </div>
                          <div className="col-md-9">
                            <div className="right-description893">
                              <div id="que-hedder2983">
                              <h3><a href="post-deatils.html" target="_blank">{item.title}</a></h3> </div>
                              <div className="ques-details10018">
                                <p>{item.desc}</p>
                              </div>
                              <hr />
                              <div className="ques-icon-info3293">
                                <a href="#"><i className="fa fa-star">{item.bot.star}</i> </a>
                                <a href="#"><i className="fa fa-folder">{item.bot.cate}</i></a>
                                <a href="#"><i className="fa fa-clock-o">{item.bot.time}</i></a>
                                <a href="#"><i className="fa fa-question-circle-o"> Question</i></a>
                                <a href="#"><i className="fa fa-bug"> Report</i></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="ques-type302">
                              <a href="#">
                                <button type="button" className="q-type238"><i className="fa fa-comment" aria-hidden="true">  333335 answer</i></button>
                              </a>
                              <a href="#">
                                <button type="button" className="q-type23 button-ques2973"> <i className="fa fa-user-circle-o" aria-hidden="true"> 70 view</i> </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </section>
              </div>
            </div>
            {/*end of col-md-9 */}
            { this.state.sidebar && <SideBar sidebar={this.state.sidebar} />}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({configs}) {
  return {
    datas: configs.dataForHome
  }
}

export default connect(mapStateToProps)(Home);
