import React from 'react';
import Header from './Header.jsx';

import './CvApp.less';

var CvApp = React.createClass({
   
    render: function() {
        return (
            <div className="cv-app">
                
                <div className="wrapper">
                    <Header />
                    

                    <div className="education">
                        <div className="education__line">
                        </div>
                        <div className="education__info education__info--academy">
                            Odessa National
                            <br/> 
                            Academy of Communication<br/> named after O.S.Popov
                            <br/> 
                            [2003 - 2010]
                        </div>
                        <div className="education__info education__info--fac">
                            Communications Engineer<br/>
                            7.092401<br/>
                             Telecommunication Systems<br/>Department
                        </div>
                        <div className="education__info education__info--spec">
                            Information Security<br/> Specialization
                        </div>
                    </div>

                    <div className="info-experience">
                        <div className="info info--big">
                            <h2 className="title">Experience</h2>
                            <p className="info__work">
                                Front-end developer
                                <span className="small">
                                    [ 2016 - present ]
                                    <br/>Яндекс</span>
                            </p>
                            <p className="info__work">
                                Front-end developer
                                <span className="small">
                                    [ 2016 ]
                                    <br/>Clickky Family</span>
                            </p>
                            <p className="info__work">
                                Front-end developer
                                <span className="small">
                                    [ 2013 - 2016 ]
                                    <br/>Heartbeat.ua</span>
                            </p>
                        </div>
                        <div className="info info--big">
                            <h2 className="title">Personal Info</h2>
                            <p className="info__personal">
                                <span className="info__key">Birthday</span> : <span className="info__value">03 Mar 1986</span>
                            </p>
                            <p className="info__personal">
                                <span className="info__key">Phone</span>    : <span className="info__value">+38 063 023 11 70</span>
                            </p>
                            <p className="info__personal">
                                <span className="info__key">E-mail</span>   : <span className="info__value">klimenko.dmitro@gmail.com</span>
                            </p>
                            <p className="info__personal">
                                <span className="info__key">Address</span>   : <span className="info__value">Odessa, Lesi Ukrainki str
                                54, apart. 50</span>
                            </p>
                            <p className="info__personal">
                                <span className="info__key">Skype</span>    : <span className="info__value">el_alfo_dimael</span>
                            </p>
                        </div>
                    </div>

                    <div className="prof-skills">
                        <div className="info info--small">
                            <h2 className="title">Professional Skills</h2>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">HTML</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">CSS</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">JavaScript</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">jQuery</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Node.js</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Photoshop</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Sketch</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="info info--small">
                            <h2 className="title">Additional Skills</h2>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">LESS/SASS</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active "></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Haml</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Git</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Gulp.js</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">BEM</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">XSLT</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Bootstrap</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                        </div>

                        <div className="info info--small">
                            <h2 className="title">Personal Skills</h2>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Educability</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Teamwork</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Pixel Perfect</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Pernicious habits</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            
                            <h2 className="title">OS</h2>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">Windows</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                            <div className="prof-skills__group">
                                <span className="prof-skills__name">MacOS</span>
                                <ul className="prof-skills__rate">
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp prof-skills__exp--active"></li>
                                    <li className="prof-skills__exp"></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>

                    <div className="hobbies">
                        <h2 className="title">Passion & Hobbies </h2>
                        <ul className="hobbies__list">
                            <li className="hobbies__item">Self<br/>cultivation</li>
                            <li className="hobbies__item">Fitness</li>
                            <li className="hobbies__item">Reading</li>
                            <li className="hobbies__item">Guitar</li>
                            <li className="hobbies__item">Bike</li>
                            <li className="hobbies__item">Web<br/>development</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
});

export default CvApp;
