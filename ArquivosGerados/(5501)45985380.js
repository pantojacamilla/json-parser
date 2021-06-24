    import _ from 'lodash';&#xD;&#xA;    import React, { Component } from 'react';&#xD;&#xA;    import ReactDOM from 'react-dom';&#xD;&#xA;    export default class Dribbble extends React.Component {&#xD;&#xA;      constructor(props) {&#xD;&#xA;        super(props);    &#xD;&#xA;       &#xD;&#xA;        this.state = { &#xD;&#xA;          work: [],  &#xD;&#xA;          hover: false      &#xD;&#xA;        }; &#xD;&#xA;        &#xD;&#xA;        this.handleMouseEnter = this.handleMouseEnter.bind(this);&#xD;&#xA;        this.handleMouseLeave = this.handleMouseLeave.bind(this);&#xD;&#xA;        &#xD;&#xA;      }  &#xD;&#xA;      handleMouseEnter(){&#xD;&#xA;        this.setState({ hover: true })&#xD;&#xA;      }&#xD;&#xA;      handleMouseLeave(){&#xD;&#xA;        this.setState({ hover: false })&#xD;&#xA;      }&#xD;&#xA;      componentDidMount() {&#xD;&#xA;        this.ShotList();&#xD;&#xA;      }&#xD;&#xA;      ShotList() {&#xD;&#xA;        return $.getJSON('https://api.dribbble.com/v1/shots?per_page=3&access_token=41ff524ebca5e8d0bf5d6f9f2c611c1b0d224a1975ce37579326872c1e7900b4&callback=?')&#xD;&#xA;          .then((resp) => {&#xD;&#xA;            this.setState({ work: resp.data.reverse() });&#xD;&#xA;          });&#xD;&#xA;      } &#xD;&#xA;      render() {  &#xD;&#xA;        &#xD;&#xA;        const works = this.state.work.map((val, i) => {    &#xD;&#xA;         &#xD;&#xA;         return <li key={i} className="box"          &#xD;&#xA;              onMouseEnter={this.handleMouseEnter}&#xD;&#xA;              onMouseLeave={this.handleMouseLeave}        &#xD;&#xA;              >    &#xD;&#xA;              {!this.state.hover ?     &#xD;&#xA;                <div>&#xD;&#xA;                  <img className="cover" src={val.images.normal} />&#xD;&#xA;                  <div className="bar">&#xD;&#xA;                    <h2>{val.title}</h2>&#xD;&#xA;                    <span>{val.views_count}</span>&#xD;&#xA;                    <i className="fa fa-eye fa-2x" aria-hidden="true"></i>&#xD;&#xA;                  </div>&#xD;&#xA;                </div> &#xD;&#xA;              : null} &#xD;&#xA;              {this.state.hover ?&#xD;&#xA;                <div>&#xD;&#xA;                  <h3>{val.user.name}</h3>&#xD;&#xA;                  <img className="avatar img-circle" src={val.user.avatar_url}/>&#xD;&#xA;                  <p>{val.description}</p>              &#xD;&#xA;                </div>&#xD;&#xA;               :&#xD;&#xA;               null&#xD;&#xA;              }           &#xD;&#xA;            </li>  &#xD;&#xA;        });    &#xD;&#xA;        return <ul>{works}</ul>&#xD;&#xA;      }&#xD;&#xA;    }